// --- JavaScript for Strong Password Generator ---

// This object holds the character sets used for password generation.
const CONSTANTS = {
  UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  LOWER: 'abcdefghijklmnopqrstuvwxyz',
  NUM: '0123456789',
  SYM: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// This object centralizes access to all necessary DOM elements.
const el = {
  slider: document.getElementById('password-length'),
  lengthVal: document.getElementById('length-value'),
  output: document.getElementById('password-output'),
  copyMsg: document.getElementById('copy-message'),
  icon: document.getElementById('generate-icon'),
  bar: document.getElementById('strength-bar'),
  text: document.getElementById('strength-text'),
  btn: document.getElementById('generate-btn'),
  copyBtn: document.getElementById('copy-btn'),
  checks: {
    up: document.getElementById('include-uppercase'),
    low: document.getElementById('include-lowercase'),
    num: document.getElementById('include-numbers'),
    sym: document.getElementById('include-symbols')
  },
  bg: document.querySelector('.animated-background')
};

/**
 * Gets a cryptographically secure random character from a given character set.
 * @param {string} set The string of characters to choose from.
 * @returns {string} A single random character from the set.
 */
function randChar(set) {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr); // Uses the browser's secure random number generator.
  return set[arr[0] % set.length];
}

/**
 * Updates the password strength meter based on length and character set diversity.
 * @param {number} len The length of the password.
 * @param {number} sets The number of character sets used (e.g., uppercase, numbers).
 */
function updateStrength(len, sets) {
  // A simple scoring algorithm.
  const score = len * 4 + sets * 10;
  let txt = 'Very Weak', w = 0, c = 'bg-red-500';

  if (score >= 60) {
    txt = 'Very Strong'; w = 100; c = 'bg-green-500';
  } else if (score >= 45) {
    txt = 'Strong'; w = 75; c = 'bg-lime-400';
  } else if (score >= 25) {
    txt = 'Medium'; w = 50; c = 'bg-yellow-400';
  } else if (score > 0) {
    txt = 'Weak'; w = 25; c = 'bg-orange-500';
  }
  
  // Update the UI elements for the strength bar.
  el.bar.className = `rounded-full ${c}`;
  el.bar.style.width = w + '%';
  el.text.textContent = txt;
  el.bar.classList.toggle('pulse', w === 100); // Add a pulse effect for very strong passwords.
}

/**
 * Generates the password based on user-selected options.
 */
function genPwd() {
  const len = +el.slider.value;
  let set = '', must = [], sets = 0;

  // Build the character set and ensure at least one character from each selected type is included.
  if (el.checks.up.checked) { set += CONSTANTS.UPPER; must.push(randChar(CONSTANTS.UPPER)); sets++; }
  if (el.checks.low.checked) { set += CONSTANTS.LOWER; must.push(randChar(CONSTANTS.LOWER)); sets++; }
  if (el.checks.num.checked) { set += CONSTANTS.NUM; must.push(randChar(CONSTANTS.NUM)); sets++; }
  if (el.checks.sym.checked) { set += CONSTANTS.SYM; must.push(randChar(CONSTANTS.SYM)); sets++; }

  // Handle case where no options are selected.
  if (!set) {
    el.output.value = 'Select at least one option!';
    updateStrength(0, 0);
    return;
  }

  let pwd = [...must];
  
  // Fill the rest of the password with random characters from the combined set.
  for (let i = pwd.length; i < len; i++) {
    pwd.push(randChar(set));
  }

  // Shuffle the password array using the Fisher-Yates algorithm for true randomness.
  for (let i = pwd.length - 1; i > 0; i--) {
    let r = new Uint32Array(1);
    crypto.getRandomValues(r);
    let j = r[0] % (i + 1);
    [pwd[i], pwd[j]] = [pwd[j], pwd[i]]; // ES6 array destructuring for a clean swap.
  }

  el.output.value = pwd.join('');
  updateStrength(len, sets);
}

/**
 * Triggers animations and calls the password generation function.
 */
function animateGen() {
  // Re-trigger the spin animation on the refresh icon.
  el.icon.classList.remove('spin-once');
  void el.icon.offsetWidth; // This is a trick to force a DOM reflow.
  el.icon.classList.add('spin-once');
  
  el.output.classList.remove('reveal');
  el.output.classList.add('opacity-50');
  
  // Generate the password after a short delay to allow animations to start.
  setTimeout(() => {
    genPwd();
    el.output.classList.remove('opacity-50');
    el.output.classList.add('reveal');
  }, 100);
}

/**
 * Copies the generated password to the clipboard and shows a confirmation message.
 */
function copyPwd() {
  const pwd = el.output.value;
  // Don't copy if the output contains an error or initial message.
  if (!pwd || pwd === 'Select at least one option!' || pwd === 'Click Generate') return;

  navigator.clipboard.writeText(pwd).then(() => {
    // Show the "Copied!" message.
    el.copyMsg.classList.replace('opacity-0', 'opacity-100');
    // Hide it after 1.5 seconds.
    setTimeout(() => el.copyMsg.classList.replace('opacity-100', 'opacity-0'), 1500);
  });
}

/**
 * Initializes the animated background with floating bubbles of various sizes and speeds.
 */
function initBg() {
  // [size, delay, duration, left-position]
  const styles = [[80,0,25,25],[20,2,12,10],[20,4,18,70],[60,0,10,40],[20,3,20,65],[110,7,15,75],[150,10,30,35],[25,5,16,50]];
  styles.forEach(([s, d, t, l]) => {
    const it = document.createElement('div');
    it.className = 'item default-item';
    Object.assign(it.style, {
      width: s + 'px',
      height: s + 'px',
      left: l + '%',
      animationDelay: d + 's',
      animationDuration: t + 's',
      '--duration': t + 's' // Custom property used in CSS.
    });
    el.bg.appendChild(it);
  });
}

/**
 * Main function to initialize the page and set up event listeners.
 */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons(); // Initialize Lucide icons.
  initBg(); // Start the background animation.
  animateGen(); // Generate a password on page load.

  // Update length display on slider input.
  el.slider.oninput = () => el.lengthVal.textContent = el.slider.value;
  
  // Re-generate password when slider or checkboxes change.
  el.slider.onchange = animateGen;
  Object.values(el.checks).forEach(c => c.onchange = animateGen);

  // Set up click listeners for the buttons.
  el.btn.onclick = animateGen;
  el.copyBtn.onclick = copyPwd;
});
