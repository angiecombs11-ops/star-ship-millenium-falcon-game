const crew = [
  { id: "nova", name: "Nova", boost: "Letter Scout", face: "👧🏽", color: "#ff9e80", suit: "#7048a8" },
  { id: "chewbacca", name: "Chewbacca", boost: "Number Navigator", image: "assets/chewbacca.jpg", cropScale: 2.15, cropY: "27%", color: "#6f4b35", suit: "#3b271d" },
  { id: "mandalorian", name: "The Mandalorian", boost: "Word Builder", image: "assets/mandalorian.jpg", cropScale: 3.25, cropY: "24%", color: "#78838e", suit: "#252b31" },
  { id: "grogu", name: "Grogu", boost: "Pattern Pilot", image: "assets/grogu.jpg", cropScale: 1.7, cropY: "29%", color: "#9bb88c", suit: "#786b5d" },
];

const questions = {
  K: [
    { subject: "Reading", prompt: "Which word begins with B?", hint: "Listen for the /b/ sound.", answers: ["ball", "sun", "map", "cat"], correct: 0 },
    { subject: "Math", prompt: "How many stars?", hint: "★ ★ ★", answers: ["2", "3", "4", "5"], correct: 1 },
    { subject: "Reading", prompt: "Which letter makes the /m/ sound?", hint: "Like the first sound in moon.", answers: ["S", "T", "M", "B"], correct: 2 },
    { subject: "Math", prompt: "What comes next?", hint: "1, 2, 3, __", answers: ["5", "2", "4", "6"], correct: 2 },
    { subject: "Reading", prompt: "Which two words rhyme?", hint: "Rhyming words have the same ending sound.", answers: ["cat / hat", "sun / map", "dog / bed", "fish / cup"], correct: 0 },
    { subject: "Math", prompt: "Which group has more?", hint: "Compare the two groups.", answers: ["★★ and ★★★★", "★ and ★", "★★★ and ★★", "★★ and ★★"], correct: 0 },
    { subject: "Reading", prompt: "Which word begins with S?", hint: "Listen for the /s/ sound.", answers: ["moon", "sun", "cat", "fish"], correct: 1 },
    { subject: "Math", prompt: "How many moons?", hint: "● ● ● ● ●", answers: ["3", "4", "5", "6"], correct: 2 },
    { subject: "Reading", prompt: "Which word ends with T?", hint: "Listen to the last sound.", answers: ["dog", "map", "sun", "cat"], correct: 3 },
    { subject: "Math", prompt: "What is 2 and 1 more?", hint: "Start at 2 and count one more.", answers: ["1", "2", "3", "4"], correct: 2 },
    { subject: "Reading", prompt: "Which is the letter A?", hint: "Find uppercase A.", answers: ["M", "A", "R", "S"], correct: 1 },
    { subject: "Math", prompt: "Which number is smaller?", hint: "Smaller means less.", answers: ["8", "6", "3", "9"], correct: 2 },
    { subject: "Reading", prompt: "Which picture word starts like moon?", hint: "Moon begins with /m/.", answers: ["map", "sun", "ball", "fish"], correct: 0 },
    { subject: "Math", prompt: "What shape is round?", hint: "It has no corners.", answers: ["square", "triangle", "circle", "rectangle"], correct: 2 },
    { subject: "Reading", prompt: "Which word rhymes with log?", hint: "Listen for the -og ending.", answers: ["dog", "sun", "map", "bed"], correct: 0 },
    { subject: "Math", prompt: "What comes before 6?", hint: "Count backward one.", answers: ["4", "5", "7", "8"], correct: 1 },
  ],
  1: [
    { subject: "Reading", prompt: "Complete the word: sh_p", hint: "A vehicle that flies in space.", answers: ["a", "i", "o", "u"], correct: 1 },
    { subject: "Math", prompt: "7 + 2 = ?", hint: "Count forward two from 7.", answers: ["8", "9", "10", "6"], correct: 1 },
    { subject: "Reading", prompt: "Which is a complete sentence?", hint: "A sentence tells a whole idea.", answers: ["The blue", "Runs very", "The ship flies.", "Fast and"], correct: 2 },
    { subject: "Math", prompt: "10 - 4 = ?", hint: "Count back four from 10.", answers: ["5", "6", "7", "4"], correct: 1 },
    { subject: "Reading", prompt: "What is the opposite of big?", hint: "Think about size.", answers: ["fast", "small", "round", "loud"], correct: 1 },
    { subject: "Math", prompt: "Which number is greatest?", hint: "Greatest means the most.", answers: ["12", "9", "16", "14"], correct: 2 },
    { subject: "Reading", prompt: "Which word has the long A sound?", hint: "Long A says its name.", answers: ["map", "cake", "cat", "bag"], correct: 1 },
    { subject: "Math", prompt: "6 + 5 = ?", hint: "Make 10, then add one.", answers: ["10", "11", "12", "9"], correct: 1 },
    { subject: "Reading", prompt: "Choose the best ending: The dog can __.", hint: "Pick an action a dog can do.", answers: ["blue", "run", "soft", "three"], correct: 1 },
    { subject: "Math", prompt: "15 - 7 = ?", hint: "Count back seven.", answers: ["6", "7", "8", "9"], correct: 2 },
    { subject: "Reading", prompt: "Which word has two syllables?", hint: "Clap the word parts.", answers: ["star", "rocket", "ship", "moon"], correct: 1 },
    { subject: "Math", prompt: "What number is 1 ten and 8 ones?", hint: "Put the ten and ones together.", answers: ["81", "18", "11", "8"], correct: 1 },
    { subject: "Reading", prompt: "Which word is spelled correctly?", hint: "Look carefully at every letter.", answers: ["frend", "friend", "freind", "fren"], correct: 1 },
    { subject: "Math", prompt: "Which is an even number?", hint: "An even number can be split into pairs.", answers: ["7", "11", "14", "19"], correct: 2 },
    { subject: "Reading", prompt: "What does tiny mean?", hint: "Choose a word with a similar meaning.", answers: ["very small", "very loud", "very fast", "very tall"], correct: 0 },
    { subject: "Math", prompt: "9 + 9 = ?", hint: "Think of a doubles fact.", answers: ["16", "17", "18", "19"], correct: 2 },
  ],
  2: [
    { subject: "Reading", prompt: "Which word means almost the same as quick?", hint: "Look for a synonym.", answers: ["slow", "fast", "quiet", "late"], correct: 1 },
    { subject: "Math", prompt: "24 + 13 = ?", hint: "Add ones, then add tens.", answers: ["37", "36", "47", "27"], correct: 0 },
    { subject: "Reading", prompt: "Why did Mia wear a coat?", hint: "It was snowing outside.", answers: ["She was tired.", "She was cold.", "She was hungry.", "She was late."], correct: 1 },
    { subject: "Math", prompt: "42 - 18 = ?", hint: "Regroup one ten if you need to.", answers: ["34", "26", "24", "30"], correct: 2 },
    { subject: "Reading", prompt: "Which word is a noun?", hint: "A noun names a person, place, animal, or thing.", answers: ["jump", "bright", "planet", "quickly"], correct: 2 },
    { subject: "Math", prompt: "What is 3 groups of 4?", hint: "4 + 4 + 4", answers: ["7", "10", "12", "14"], correct: 2 },
    { subject: "Reading", prompt: "Which word is an adjective?", hint: "An adjective describes a noun.", answers: ["sparkly", "jump", "slowly", "ship"], correct: 0 },
    { subject: "Math", prompt: "56 + 27 = ?", hint: "Add ones, regroup, then add tens.", answers: ["73", "83", "93", "79"], correct: 1 },
    { subject: "Reading", prompt: "What is the main idea?", hint: "Leo plants seeds, waters them, and watches flowers grow.", answers: ["Leo grows flowers.", "Leo buys a ship.", "Leo feeds a cat.", "Leo reads at night."], correct: 0 },
    { subject: "Math", prompt: "90 - 36 = ?", hint: "Regroup one ten.", answers: ["44", "54", "56", "64"], correct: 1 },
    { subject: "Reading", prompt: "Which sentence uses a comma correctly?", hint: "Use commas between items in a list.", answers: ["We packed books snacks and maps.", "We packed, books snacks and maps.", "We packed books, snacks, and maps.", "We, packed books snacks and maps."], correct: 2 },
    { subject: "Math", prompt: "Which number has 7 tens and 3 ones?", hint: "Think about place value.", answers: ["37", "70", "73", "703"], correct: 2 },
    { subject: "Reading", prompt: "What does enormous mean?", hint: "Use the sentence: The enormous planet filled the window.", answers: ["very small", "very large", "very quiet", "very far"], correct: 1 },
    { subject: "Math", prompt: "Ava has 18 stars and earns 7 more. How many?", hint: "Add 18 and 7.", answers: ["23", "24", "25", "26"], correct: 2 },
    { subject: "Reading", prompt: "Which word is a verb?", hint: "A verb shows action.", answers: ["pilot", "silver", "explore", "careful"], correct: 2 },
    { subject: "Math", prompt: "Which equation equals 20?", hint: "Check each sum.", answers: ["9 + 9", "12 + 8", "14 + 5", "11 + 7"], correct: 1 },
  ],
};

const state = {
  grade: "K",
  aboard: [],
  mission: [],
  index: 0,
  score: 0,
  stars: Number(localStorage.getItem("starling-stars") || 0),
  sound: true,
  locked: false,
  drag: null,
  suppressClickUntil: 0,
  gamepadActive: false,
  gamepadHeld: {},
  previousMissions: JSON.parse(localStorage.getItem("starling-previous-missions") || "{}"),
};

const screens = {
  setup: document.querySelector("#setup-screen"),
  mission: document.querySelector("#mission-screen"),
  complete: document.querySelector("#complete-screen"),
};

const els = {
  crewList: document.querySelector("#crew-list"),
  crewDock: document.querySelector(".crew-dock"),
  shipWrap: document.querySelector(".ship-wrap"),
  crewSlots: [...document.querySelectorAll(".crew-slot")],
  crewMessage: document.querySelector("#crew-message"),
  launch: document.querySelector("#launch-button"),
  starCount: document.querySelector("#star-count"),
  sound: document.querySelector("#sound-button"),
  hangar: document.querySelector("#hangar-button"),
  routeDots: document.querySelector("#route-dots"),
  missionShip: document.querySelector("#mission-ship"),
  flightPath: document.querySelector("#flight-path"),
  crewMini: document.querySelector("#crew-mini"),
  subject: document.querySelector("#subject-badge"),
  number: document.querySelector("#question-number"),
  title: document.querySelector("#mission-title"),
  hint: document.querySelector("#question-hint"),
  answers: document.querySelector("#answer-grid"),
  feedback: document.querySelector("#feedback"),
  read: document.querySelector("#read-button"),
  score: document.querySelector("#score-value"),
  completeMessage: document.querySelector("#complete-message"),
  again: document.querySelector("#again-button"),
  newCrew: document.querySelector("#new-crew-button"),
};

function avatarMarkup(member) {
  const portrait = member.image
    ? `<img src="${member.image}" alt="" />`
    : `<span aria-hidden="true">${member.face}</span>`;
  const cropStyle = member.image
    ? `--crop-scale:${member.cropScale || 2.15};--crop-y:${member.cropY || "27%"};`
    : "";

  return `
    <span class="avatar ${member.image ? "avatar-photo" : ""}" style="--avatar-bg:${member.color};--suit:${member.suit};${cropStyle}">
      ${portrait}
    </span>`;
}

function renderCrew() {
  els.crewList.innerHTML = crew.map((member) => `
    <button
      class="crew-card ${state.aboard.includes(member.id) ? "aboard" : ""}"
      data-crew="${member.id}"
      type="button"
      aria-label="Move ${member.name} aboard"
    >
      ${avatarMarkup(member)}
      <span class="crew-info">
        <strong>${member.name}</strong>
        <small>${member.boost}</small>
      </span>
    </button>
  `).join("");

  els.crewSlots.forEach((slot, index) => {
    const id = state.aboard[index];
    const member = crew.find((item) => item.id === id);
    slot.classList.toggle("filled", Boolean(member));
    slot.innerHTML = member ? avatarMarkup(member) : "<span>+</span>";
    slot.dataset.crew = id || "";
    if (member) {
      slot.removeAttribute("disabled");
    } else {
      slot.setAttribute("disabled", "");
    }
    slot.setAttribute(
      "aria-label",
      member ? `Move ${member.name} out of the ship` : "Empty crew seat"
    );
  });

  const count = state.aboard.length;
  els.launch.disabled = count < 2;
  els.crewMessage.textContent =
    count < 2
      ? `Choose ${2 - count} more cadet${count === 1 ? "" : "s"}.`
      : `${count} cadets ready for launch!`;
}

function addCrew(id) {
  if (state.aboard.length >= 3 || state.aboard.includes(id)) return;
  state.aboard.push(id);
  renderCrew();
  tone(440 + state.aboard.length * 80, 0.08);
  focusForGamepad(".crew-card:not(.aboard), #launch-button");
}

function removeCrew(id) {
  state.aboard = state.aboard.filter((crewId) => crewId !== id);
  renderCrew();
  tone(330, 0.07);
  focusForGamepad(`[data-crew="${id}"]`);
}

function switchScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => {
    screen.classList.toggle("active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  focusForGamepad();
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function selectMission(grade) {
  const previousPrompts = new Set(state.previousMissions[grade] || []);
  const freshQuestions = questions[grade].filter(
    (question) => !previousPrompts.has(question.prompt)
  );
  const pool = freshQuestions.length >= 5 ? freshQuestions : questions[grade];
  const mission = shuffled(pool).slice(0, 5);
  state.previousMissions[grade] = mission.map((question) => question.prompt);
  localStorage.setItem(
    "starling-previous-missions",
    JSON.stringify(state.previousMissions)
  );
  return mission;
}

function startMission() {
  if (state.aboard.length < 2) return;
  state.mission = selectMission(state.grade);
  state.index = 0;
  state.score = 0;
  state.locked = false;
  renderMissionCrew();
  renderRoute();
  updateShipProgress(0, true);
  renderQuestion();
  switchScreen("mission");
  tone(520, 0.12);
  setTimeout(() => tone(720, 0.15), 130);
}

function renderMissionCrew() {
  els.crewMini.innerHTML = state.aboard
    .map((id) => avatarMarkup(crew.find((member) => member.id === id)))
    .join("");
}

function renderRoute() {
  els.routeDots.innerHTML = Array.from({ length: 5 }, (_, index) => `
    <span class="route-dot ${index < state.index ? "done" : ""}"></span>
  `).join("");
}

function updateShipProgress(completed, instant = false) {
  const progress = Math.min(completed / 5, 1);
  els.flightPath.style.setProperty("--flight-progress", progress);
  els.missionShip.classList.toggle("arrived", progress === 1);

  if (instant) {
    els.missionShip.classList.add("no-transition");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => els.missionShip.classList.remove("no-transition"));
    });
    return;
  }

  els.missionShip.classList.remove("traveling");
  void els.missionShip.offsetWidth;
  els.missionShip.classList.add("traveling");
  setTimeout(() => els.missionShip.classList.remove("traveling"), 900);
}

function renderQuestion() {
  state.locked = false;
  const question = state.mission[state.index];
  els.subject.textContent = question.subject.toUpperCase();
  els.subject.classList.toggle("math", question.subject === "Math");
  els.number.textContent = `Challenge ${state.index + 1} of 5`;
  els.title.textContent = question.prompt;
  els.hint.textContent = question.hint;
  els.feedback.textContent = "";
  els.answers.innerHTML = question.answers.map((answer, index) => `
    <button class="answer-button" type="button" data-answer="${index}">
      ${answer}
    </button>
  `).join("");
  focusForGamepad(".answer-button");
}

function answerQuestion(choice) {
  if (state.locked) return;
  state.locked = true;
  const question = state.mission[state.index];
  const buttons = [...els.answers.querySelectorAll(".answer-button")];
  const correct = choice === question.correct;

  buttons[question.correct].classList.add("correct");
  if (!correct) buttons[choice].classList.add("wrong");

  if (correct) {
    state.score += 1;
    els.feedback.textContent = `${crewCheer()} Great navigating!`;
    tone(640, 0.09);
    setTimeout(() => tone(820, 0.14), 100);
  } else {
    els.feedback.textContent = `Good try! The answer is ${question.answers[question.correct]}.`;
    tone(240, 0.14);
  }

  setTimeout(() => {
    state.index += 1;
    renderRoute();
    updateShipProgress(state.index);
    if (state.index >= state.mission.length) {
      setTimeout(completeMission, 850);
    } else {
      setTimeout(renderQuestion, 650);
    }
  }, 1600);
}

function crewCheer() {
  const member = crew.find((item) => item.id === state.aboard[state.index % state.aboard.length]);
  return `${member.name} says:`;
}

function completeMission() {
  const earned = Math.max(1, state.score);
  state.stars += earned;
  localStorage.setItem("starling-stars", String(state.stars));
  updateStars();
  els.score.textContent = `${state.score} / 5`;
  els.completeMessage.textContent =
    state.score === 5
      ? "Perfect flight! Your reading and math power restored every garden light."
      : `You restored ${state.score} garden lights and earned ${earned} navigation stars.`;
  switchScreen("complete");
  [523, 659, 784].forEach((frequency, index) => {
    setTimeout(() => tone(frequency, 0.2), index * 150);
  });
}

function readCurrentQuestion() {
  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "Read-aloud is not available in this browser.";
    return;
  }
  const question = state.mission[state.index];
  const speech = new SpeechSynthesisUtterance(
    `${question.prompt}. ${question.hint}. Choices are: ${question.answers.join(", ")}`
  );
  speech.rate = 0.82;
  speech.pitch = 1.08;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
}

function tone(frequency, duration) {
  if (!state.sound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gain.gain.setValueAtTime(0.08, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration);
    oscillator.addEventListener("ended", () => context.close());
  } catch {
    state.sound = false;
    updateSoundButton();
  }
}

function updateStars() {
  els.starCount.textContent = `${state.stars} ★`;
}

function updateSoundButton() {
  els.sound.textContent = `Sound: ${state.sound ? "On" : "Off"}`;
  els.sound.setAttribute("aria-label", `Turn sound ${state.sound ? "off" : "on"}`);
}

function startCrewDrag(event, source, id, origin) {
  if (event.button !== undefined && event.button !== 0) return;
  state.drag = {
    id,
    origin,
    source,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
    ghost: null,
  };
  window.addEventListener("pointermove", moveCrewDrag, { passive: false });
  window.addEventListener("pointerup", endCrewDrag);
  window.addEventListener("pointercancel", cancelCrewDrag);
}

function moveCrewDrag(event) {
  const drag = state.drag;
  if (!drag || drag.pointerId !== event.pointerId) return;
  const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);

  if (!drag.active && distance > 8) {
    drag.active = true;
    drag.source.classList.add("drag-source");
    drag.ghost = makeDragGhost(drag.id);
    document.body.appendChild(drag.ghost);
  }

  if (!drag.active) return;
  event.preventDefault();
  drag.ghost.style.left = `${event.clientX}px`;
  drag.ghost.style.top = `${event.clientY}px`;
  updateDropHighlight(event.clientX, event.clientY, drag.origin);
}

function endCrewDrag(event) {
  const drag = state.drag;
  if (!drag || drag.pointerId !== event.pointerId) return;

  if (drag.active) {
    const target = document.elementFromPoint(event.clientX, event.clientY);
    if (drag.origin === "dock" && target?.closest(".ship-wrap")) {
      addCrew(drag.id);
    } else if (drag.origin === "ship" && target?.closest(".crew-dock")) {
      removeCrew(drag.id);
    }
    state.suppressClickUntil = Date.now() + 350;
  }

  cleanUpDrag();
}

function cancelCrewDrag() {
  cleanUpDrag();
}

function makeDragGhost(id) {
  const member = crew.find((item) => item.id === id);
  const ghost = document.createElement("div");
  ghost.className = "crew-card drag-ghost";
  ghost.setAttribute("aria-hidden", "true");
  ghost.innerHTML = `
    ${avatarMarkup(member)}
    <span class="crew-info">
      <strong>${member.name}</strong>
      <small>${member.boost}</small>
    </span>
  `;
  return ghost;
}

function updateDropHighlight(x, y, origin) {
  const target = document.elementFromPoint(x, y);
  els.shipWrap.classList.toggle(
    "drop-ready",
    origin === "dock" && Boolean(target?.closest(".ship-wrap"))
  );
  els.crewDock.classList.toggle(
    "drop-ready",
    origin === "ship" && Boolean(target?.closest(".crew-dock"))
  );
}

function cleanUpDrag() {
  const drag = state.drag;
  if (!drag) return;
  drag.source.classList.remove("drag-source");
  window.removeEventListener("pointermove", moveCrewDrag);
  window.removeEventListener("pointerup", endCrewDrag);
  window.removeEventListener("pointercancel", cancelCrewDrag);
  drag.ghost?.remove();
  els.shipWrap.classList.remove("drop-ready");
  els.crewDock.classList.remove("drop-ready");
  state.drag = null;
}

function getGamepadTargets() {
  const activeScreen = document.querySelector(".screen.active");
  if (!activeScreen) return [];
  return [...activeScreen.querySelectorAll('button:not(:disabled), input[type="radio"]')]
    .filter((element) => {
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    });
}

function focusForGamepad(selector) {
  if (!state.gamepadActive) return;
  requestAnimationFrame(() => {
    const target = selector
      ? document.querySelector(`.screen.active ${selector}`)
      : getGamepadTargets()[0];
    target?.focus({ preventScroll: true });
  });
}

function moveGamepadFocus(direction) {
  const targets = getGamepadTargets();
  if (!targets.length) return;
  const current = targets.indexOf(document.activeElement);
  const next = current < 0
    ? 0
    : (current + direction + targets.length) % targets.length;
  targets[next].focus({ preventScroll: false });
}

function activateGamepadTarget() {
  const targets = getGamepadTargets();
  const target = targets.includes(document.activeElement)
    ? document.activeElement
    : targets[0];
  target?.click();
}

function gamepadBack() {
  if (screens.mission.classList.contains("active")) {
    switchScreen("setup");
  } else if (screens.complete.classList.contains("active")) {
    switchScreen("setup");
  }
}

function gamepadStart() {
  if (screens.setup.classList.contains("active") && !els.launch.disabled) {
    startMission();
  } else if (screens.complete.classList.contains("active")) {
    startMission();
  }
}

function gamepadPressed(key, pressed, action) {
  if (pressed && !state.gamepadHeld[key]) action();
  state.gamepadHeld[key] = pressed;
}

function pollGamepads() {
  const gamepad = [...(navigator.getGamepads?.() || [])].find(Boolean);
  if (gamepad) {
    if (!state.gamepadActive) {
      state.gamepadActive = true;
      document.body.classList.add("gamepad-active");
      focusForGamepad();
    }

    const left = gamepad.buttons[14]?.pressed || gamepad.axes[0] < -0.55;
    const right = gamepad.buttons[15]?.pressed || gamepad.axes[0] > 0.55;
    const up = gamepad.buttons[12]?.pressed || gamepad.axes[1] < -0.55;
    const down = gamepad.buttons[13]?.pressed || gamepad.axes[1] > 0.55;
    gamepadPressed("previous", left || up, () => moveGamepadFocus(-1));
    gamepadPressed("next", right || down, () => moveGamepadFocus(1));
    gamepadPressed("activate", Boolean(gamepad.buttons[0]?.pressed), activateGamepadTarget);
    gamepadPressed("back", Boolean(gamepad.buttons[1]?.pressed), gamepadBack);
    gamepadPressed("start", Boolean(gamepad.buttons[9]?.pressed), gamepadStart);
  } else if (state.gamepadActive) {
    state.gamepadActive = false;
    state.gamepadHeld = {};
    document.body.classList.remove("gamepad-active");
  }
  requestAnimationFrame(pollGamepads);
}

els.crewList.addEventListener("pointerdown", (event) => {
  const card = event.target.closest("[data-crew]");
  if (card && !card.classList.contains("aboard")) {
    startCrewDrag(event, card, card.dataset.crew, "dock");
  }
});

els.crewSlots.forEach((slot) => {
  slot.addEventListener("pointerdown", (event) => {
    if (slot.dataset.crew) {
      startCrewDrag(event, slot, slot.dataset.crew, "ship");
    }
  });
});

els.crewList.addEventListener("click", (event) => {
  if (Date.now() < state.suppressClickUntil) return;
  const card = event.target.closest("[data-crew]");
  if (card) addCrew(card.dataset.crew);
});

els.crewSlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    if (Date.now() < state.suppressClickUntil) return;
    if (slot.dataset.crew) removeCrew(slot.dataset.crew);
  });
});

document.querySelectorAll('input[name="grade"]').forEach((input) => {
  input.addEventListener("change", () => {
    state.grade = input.value;
  });
});

els.launch.addEventListener("click", startMission);
els.answers.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");
  if (button) answerQuestion(Number(button.dataset.answer));
});
els.read.addEventListener("click", readCurrentQuestion);
els.hangar.addEventListener("click", () => switchScreen("setup"));
els.again.addEventListener("click", startMission);
els.newCrew.addEventListener("click", () => switchScreen("setup"));
els.sound.addEventListener("click", () => {
  state.sound = !state.sound;
  updateSoundButton();
  tone(560, 0.08);
});

renderCrew();
updateStars();
updateSoundButton();
requestAnimationFrame(pollGamepads);
