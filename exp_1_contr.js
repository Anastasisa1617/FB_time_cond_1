/******************** 
 * Exp_1_Contr *
 ********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'exp_1_contr';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
    'gender': ["male", "female"],
    'age': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const test_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_loopLoopBegin(test_loopLoopScheduler));
flowScheduler.add(test_loopLoopScheduler);
flowScheduler.add(test_loopLoopEnd);


flowScheduler.add(train_instrRoutineBegin());
flowScheduler.add(train_instrRoutineEachFrame());
flowScheduler.add(train_instrRoutineEnd());
const train_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(train_loopLoopBegin(train_loopLoopScheduler));
flowScheduler.add(train_loopLoopScheduler);
flowScheduler.add(train_loopLoopEnd);






flowScheduler.add(exp_instrRoutineBegin());
flowScheduler.add(exp_instrRoutineEachFrame());
flowScheduler.add(exp_instrRoutineEnd());
const contr_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(contr_loopLoopBegin(contr_loopLoopScheduler));
flowScheduler.add(contr_loopLoopScheduler);
flowScheduler.add(contr_loopLoopEnd);






flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(onlineRoutineBegin());
flowScheduler.add(onlineRoutineEachFrame());
flowScheduler.add(onlineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'train_time_stim.xlsx', 'path': 'train_time_stim.xlsx'},
    {'name': 'time_stim.xlsx', 'path': 'time_stim.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var instr_stop_key;
var testClock;
var questions;
var queue;
var passed;
var current_q_index;
var current_q;
var test_text;
var test_key_resp;
var train_instrClock;
var train_instr_text;
var train_instr_stop;
var maskClock;
var mask_polygon;
var refClock;
var ref_polygon;
var time_startClock;
var start_reprod_key;
var time_ansClock;
var reprod_polygon;
var stop_reprod_key;
var SOJClock;
var SOJ_text;
var SOJ_key;
var exp_instrClock;
var exp_instr_text;
var exp_instr_stop;
var byeClock;
var bye_text;
var onlineClock;
var online_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'В предложенном эксперименте вам нужно будет воспроизводить временные интервалы \n\nВесь эксперимент займет до 20 минут. Сядьте в тихую комнату, где вас не будут отвлекать. Поставьте, пожалуйста, телефон в беззвучный режим и уберите все часы из поля видимости. \n\nОдна экспериментальная проба выглядит так: \n1. На экране появится белый квадрат на некоторый промежуток времени. \n2. После того, как он пропадет, вам нужно нажать ПРОБЕЛ, чтобы повторить длительность. \n3. На экране появится черный квадрат. Вам нужно снова нажать ПРОБЕЛ, когда посчитаете, что прошло ровно столько же времени, сколько на экране был белый квадрат.   \n4. Вам нужно дать оценку собственной точности с помощью пяти клавиш. Нажмите: \n\n1 – если думаете, что точно недооценили временной интервал. Например, белый квадрат был на экране 1 минуту, а черный квадрат вы оставили только на 45 секунд.\n2 – если думаете, что скорее недооценили временной интервал. Например, вы старались воспроизвести как можно точнее, но подозреваете, что нажали на пробел второй раз слишком рано. \n3 – если думаете, что повторили интервал достаточно точно. Речь не идет о воспроизведении с точностью до миллисекунд. \n4 – если думаете, что скорее переоценили временной интервал. Например, вы старались повторить интервал как можно точнее, но вам кажется, что вы нажали на пробел второй раз слишком поздно. \n5 – если думаете, что точно переоценили временной интервал. Например, белый квадрат был на экране 1 секунду, а черный квадрат на 3 секунды. \n\nНЕ используйте внутренний счет или ритмичные звуки для измерения времени, опирайтесь на собственные ощущения и старайтесь повторять интервалы как можно точнее. Над оценкой собственной точности не раздумывайте слишком долго, в основе ответа должны лежать ваши чувства. \n\nСейчас будет несколько вопросов на понимание инструкции. Для продолжения нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_stop_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  // Список вопросов
  questions = [
      {text: "Какую клавишу нажимать, когда увидите квадрат?\n\n1 - Пробел\n2 - Enter\n3 - Любую\n4 - Ничего не нажимать", correct: 4},
      {text: "Что нужно воспроизводить после исчезновения квадрата?\n\n1 - Цвет квадрата\n2 - Длительность показа квадрата\n3 - Размер квадрата\n4 - Количество квадратов", correct: 2},
      {text: "Квадрат появляется на ... ?\n\n1 - Разное время\n2 - Одно и то же время\n3 - 1 секунду\n4 - 4 или 8 секунд", correct: 1},
      {text: "Что нужно нажать при оценке своего ответа, если уверены, что прождали слишком много?\n\n1 - Клавишу 1\n2 - Пробел\n3 - Клавишу 4\n4 - Клавишу 5", correct: 4},
      {text: "Что нужно нажать при оценке своего ответа, если подозреваете, что выждали слишком мало?\n\n1 - Клавишу 1\n2 - Клавишу 2\n3 - Клавишу Enter\n4 - Клавишу 3", correct: 2}
  ];
  
  queue = Array.from({length: questions.length}, (_, i) => i);
  passed = new Array(questions.length).fill(false);
  current_q_index = 0;
  current_q = queue[current_q_index];
  test_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'test_text',
    text: 'Any text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  test_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "train_instr"
  train_instrClock = new util.Clock();
  train_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'train_instr_text',
    text: 'Отлично! \nСейчас будет несколько тренировочных проб\nДля продолжения нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  train_instr_stop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "mask"
  maskClock = new util.Clock();
  mask_polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'mask_polygon', 
    vertices: 'cross', size:[0.3, 0.3],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "ref"
  refClock = new util.Clock();
  ref_polygon = new visual.Rect ({
    win: psychoJS.window, name: 'ref_polygon', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "time_start"
  time_startClock = new util.Clock();
  start_reprod_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "time_ans"
  time_ansClock = new util.Clock();
  reprod_polygon = new visual.Rect ({
    win: psychoJS.window, name: 'reprod_polygon', 
    width: [0.3, 0.3][0], height: [0.3, 0.3][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  stop_reprod_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "SOJ"
  SOJClock = new util.Clock();
  SOJ_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'SOJ_text',
    text: 'Насколько точно вы воспроизвели интервал? \n\n1 – точно недооценил\n2 – скорее недооценил\n3 – точно оценил\n4 – скорее переоценил\n5 – точно переоценил',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SOJ_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_instr"
  exp_instrClock = new util.Clock();
  exp_instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'exp_instr_text',
    text: 'Супер! \nСейчас начнется эксперимент \nДля продолжения нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  exp_instr_stop = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  bye_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'bye_text',
    text: 'Спасибо за прохождение эксперимента! \nНе закрывайте эксперимент до завершения сохранения данных\nНе забудьте написать в личные сообщения @shiny_shianni для получения мема\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "online"
  onlineClock = new util.Clock();
  online_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'online_text',
    text: 'Эксперимент сохраняется…',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _instr_stop_key_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    instr_stop_key.keys = undefined;
    instr_stop_key.rt = undefined;
    _instr_stop_key_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(instr_stop_key);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_stop_key* updates
    if (t >= 0.0 && instr_stop_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_stop_key.tStart = t;  // (not accounting for frame time here)
      instr_stop_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_stop_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_stop_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_stop_key.clearEvents(); });
    }
    
    // if instr_stop_key is active this frame...
    if (instr_stop_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_stop_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instr_stop_key_allKeys = _instr_stop_key_allKeys.concat(theseKeys);
      if (_instr_stop_key_allKeys.length > 0) {
        instr_stop_key.keys = _instr_stop_key_allKeys[_instr_stop_key_allKeys.length - 1].name;  // just the last key pressed
        instr_stop_key.rt = _instr_stop_key_allKeys[_instr_stop_key_allKeys.length - 1].rt;
        instr_stop_key.duration = _instr_stop_key_allKeys[_instr_stop_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    instr_stop_key.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_loop;
function test_loopLoopBegin(test_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'test_loop'
    });
    psychoJS.experiment.addLoop(test_loop); // add the loop to the experiment
    currentLoop = test_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_loop of test_loop) {
      snapshot = test_loop.getSnapshot();
      test_loopLoopScheduler.add(importConditions(snapshot));
      test_loopLoopScheduler.add(testRoutineBegin(snapshot));
      test_loopLoopScheduler.add(testRoutineEachFrame());
      test_loopLoopScheduler.add(testRoutineEnd(snapshot));
      test_loopLoopScheduler.add(test_loopLoopEndIteration(test_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var train_loop;
function train_loopLoopBegin(train_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    train_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'train_time_stim.xlsx',
      seed: undefined, name: 'train_loop'
    });
    psychoJS.experiment.addLoop(train_loop); // add the loop to the experiment
    currentLoop = train_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrain_loop of train_loop) {
      snapshot = train_loop.getSnapshot();
      train_loopLoopScheduler.add(importConditions(snapshot));
      train_loopLoopScheduler.add(maskRoutineBegin(snapshot));
      train_loopLoopScheduler.add(maskRoutineEachFrame());
      train_loopLoopScheduler.add(maskRoutineEnd(snapshot));
      train_loopLoopScheduler.add(refRoutineBegin(snapshot));
      train_loopLoopScheduler.add(refRoutineEachFrame());
      train_loopLoopScheduler.add(refRoutineEnd(snapshot));
      train_loopLoopScheduler.add(time_startRoutineBegin(snapshot));
      train_loopLoopScheduler.add(time_startRoutineEachFrame());
      train_loopLoopScheduler.add(time_startRoutineEnd(snapshot));
      train_loopLoopScheduler.add(time_ansRoutineBegin(snapshot));
      train_loopLoopScheduler.add(time_ansRoutineEachFrame());
      train_loopLoopScheduler.add(time_ansRoutineEnd(snapshot));
      train_loopLoopScheduler.add(SOJRoutineBegin(snapshot));
      train_loopLoopScheduler.add(SOJRoutineEachFrame());
      train_loopLoopScheduler.add(SOJRoutineEnd(snapshot));
      train_loopLoopScheduler.add(train_loopLoopEndIteration(train_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function train_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(train_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function train_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var contr_loop;
function contr_loopLoopBegin(contr_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    contr_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'time_stim.xlsx',
      seed: undefined, name: 'contr_loop'
    });
    psychoJS.experiment.addLoop(contr_loop); // add the loop to the experiment
    currentLoop = contr_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisContr_loop of contr_loop) {
      snapshot = contr_loop.getSnapshot();
      contr_loopLoopScheduler.add(importConditions(snapshot));
      contr_loopLoopScheduler.add(maskRoutineBegin(snapshot));
      contr_loopLoopScheduler.add(maskRoutineEachFrame());
      contr_loopLoopScheduler.add(maskRoutineEnd(snapshot));
      contr_loopLoopScheduler.add(refRoutineBegin(snapshot));
      contr_loopLoopScheduler.add(refRoutineEachFrame());
      contr_loopLoopScheduler.add(refRoutineEnd(snapshot));
      contr_loopLoopScheduler.add(time_startRoutineBegin(snapshot));
      contr_loopLoopScheduler.add(time_startRoutineEachFrame());
      contr_loopLoopScheduler.add(time_startRoutineEnd(snapshot));
      contr_loopLoopScheduler.add(time_ansRoutineBegin(snapshot));
      contr_loopLoopScheduler.add(time_ansRoutineEachFrame());
      contr_loopLoopScheduler.add(time_ansRoutineEnd(snapshot));
      contr_loopLoopScheduler.add(SOJRoutineBegin(snapshot));
      contr_loopLoopScheduler.add(SOJRoutineEachFrame());
      contr_loopLoopScheduler.add(SOJRoutineEnd(snapshot));
      contr_loopLoopScheduler.add(contr_loopLoopEndIteration(contr_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function contr_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(contr_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function contr_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testMaxDurationReached;
var _test_key_resp_allKeys;
var testMaxDuration;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testClock.reset();
    routineTimer.reset();
    testMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if (passed.every(v => v === true)) {
        test_loop.finished = true;
        continueRoutine = false;
    } else {
        current_q = queue[current_q_index];
        test_text.setText(questions[current_q].text);
    }
    test_key_resp.keys = undefined;
    test_key_resp.rt = undefined;
    _test_key_resp_allKeys = [];
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    testMaxDuration = null
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(test_text);
    testComponents.push(test_key_resp);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *test_text* updates
    if (t >= 0.0 && test_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_text.tStart = t;  // (not accounting for frame time here)
      test_text.frameNStart = frameN;  // exact frame index
      
      test_text.setAutoDraw(true);
    }
    
    
    // if test_text is active this frame...
    if (test_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *test_key_resp* updates
    if (t >= 0.0 && test_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      test_key_resp.tStart = t;  // (not accounting for frame time here)
      test_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { test_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { test_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { test_key_resp.clearEvents(); });
    }
    
    // if test_key_resp is active this frame...
    if (test_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = test_key_resp.getKeys({
        keyList: typeof ['1','2','3','4'] === 'string' ? [['1','2','3','4']] : ['1','2','3','4'], 
        waitRelease: false
      });
      _test_key_resp_allKeys = _test_key_resp_allKeys.concat(theseKeys);
      if (_test_key_resp_allKeys.length > 0) {
        test_key_resp.keys = _test_key_resp_allKeys[_test_key_resp_allKeys.length - 1].name;  // just the last key pressed
        test_key_resp.rt = _test_key_resp_allKeys[_test_key_resp_allKeys.length - 1].rt;
        test_key_resp.duration = _test_key_resp_allKeys[_test_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var response;
function testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test' ---
    for (const thisComponent of testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    if (test_key_resp.keys) {
        let response = test_key_resp.keys;
        if (Array.isArray(response)) response = response[0];
        let user_answer = parseInt(response);
        if (user_answer === questions[current_q].correct) {
            passed[current_q] = true;
            current_q_index++;
        } else {
            queue.push(queue.splice(current_q_index, 1)[0]);
        }
        if (current_q_index >= queue.length) {
            current_q_index = 0;
        }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(test_key_resp.corr, level);
    }
    psychoJS.experiment.addData('test_key_resp.keys', test_key_resp.keys);
    if (typeof test_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('test_key_resp.rt', test_key_resp.rt);
        psychoJS.experiment.addData('test_key_resp.duration', test_key_resp.duration);
        routineTimer.reset();
        }
    
    test_key_resp.stop();
    // the Routine "test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var train_instrMaxDurationReached;
var _train_instr_stop_allKeys;
var train_instrMaxDuration;
var train_instrComponents;
function train_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'train_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    train_instrClock.reset();
    routineTimer.reset();
    train_instrMaxDurationReached = false;
    // update component parameters for each repeat
    train_instr_stop.keys = undefined;
    train_instr_stop.rt = undefined;
    _train_instr_stop_allKeys = [];
    psychoJS.experiment.addData('train_instr.started', globalClock.getTime());
    train_instrMaxDuration = null
    // keep track of which components have finished
    train_instrComponents = [];
    train_instrComponents.push(train_instr_text);
    train_instrComponents.push(train_instr_stop);
    
    for (const thisComponent of train_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function train_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'train_instr' ---
    // get current time
    t = train_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *train_instr_text* updates
    if (t >= 0.0 && train_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_instr_text.tStart = t;  // (not accounting for frame time here)
      train_instr_text.frameNStart = frameN;  // exact frame index
      
      train_instr_text.setAutoDraw(true);
    }
    
    
    // if train_instr_text is active this frame...
    if (train_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *train_instr_stop* updates
    if (t >= 0.0 && train_instr_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_instr_stop.tStart = t;  // (not accounting for frame time here)
      train_instr_stop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { train_instr_stop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { train_instr_stop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { train_instr_stop.clearEvents(); });
    }
    
    // if train_instr_stop is active this frame...
    if (train_instr_stop.status === PsychoJS.Status.STARTED) {
      let theseKeys = train_instr_stop.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _train_instr_stop_allKeys = _train_instr_stop_allKeys.concat(theseKeys);
      if (_train_instr_stop_allKeys.length > 0) {
        train_instr_stop.keys = _train_instr_stop_allKeys[_train_instr_stop_allKeys.length - 1].name;  // just the last key pressed
        train_instr_stop.rt = _train_instr_stop_allKeys[_train_instr_stop_allKeys.length - 1].rt;
        train_instr_stop.duration = _train_instr_stop_allKeys[_train_instr_stop_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of train_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function train_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'train_instr' ---
    for (const thisComponent of train_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('train_instr.stopped', globalClock.getTime());
    train_instr_stop.stop();
    // the Routine "train_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var maskMaxDurationReached;
var maskMaxDuration;
var maskComponents;
function maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'mask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    maskClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    maskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('mask.started', globalClock.getTime());
    maskMaxDuration = null
    // keep track of which components have finished
    maskComponents = [];
    maskComponents.push(mask_polygon);
    
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'mask' ---
    // get current time
    t = maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mask_polygon* updates
    if (t >= 0.0 && mask_polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mask_polygon.tStart = t;  // (not accounting for frame time here)
      mask_polygon.frameNStart = frameN;  // exact frame index
      
      mask_polygon.setAutoDraw(true);
    }
    
    
    // if mask_polygon is active this frame...
    if (mask_polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (mask_polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      mask_polygon.tStop = t;  // not accounting for scr refresh
      mask_polygon.frameNStop = frameN;  // exact frame index
      // update status
      mask_polygon.status = PsychoJS.Status.FINISHED;
      mask_polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of maskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'mask' ---
    for (const thisComponent of maskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('mask.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (maskMaxDurationReached) {
        maskClock.add(maskMaxDuration);
    } else {
        maskClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var refMaxDurationReached;
var refMaxDuration;
var refComponents;
function refRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ref' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    refClock.reset();
    routineTimer.reset();
    refMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('ref.started', globalClock.getTime());
    refMaxDuration = null
    // keep track of which components have finished
    refComponents = [];
    refComponents.push(ref_polygon);
    
    for (const thisComponent of refComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function refRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ref' ---
    // get current time
    t = refClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ref_polygon* updates
    if (t >= 0.0 && ref_polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ref_polygon.tStart = t;  // (not accounting for frame time here)
      ref_polygon.frameNStart = frameN;  // exact frame index
      
      ref_polygon.setAutoDraw(true);
    }
    
    
    // if ref_polygon is active this frame...
    if (ref_polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + int - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ref_polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      ref_polygon.tStop = t;  // not accounting for scr refresh
      ref_polygon.frameNStop = frameN;  // exact frame index
      // update status
      ref_polygon.status = PsychoJS.Status.FINISHED;
      ref_polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of refComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function refRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ref' ---
    for (const thisComponent of refComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ref.stopped', globalClock.getTime());
    // the Routine "ref" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var time_startMaxDurationReached;
var _start_reprod_key_allKeys;
var time_startMaxDuration;
var time_startComponents;
function time_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'time_start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    time_startClock.reset();
    routineTimer.reset();
    time_startMaxDurationReached = false;
    // update component parameters for each repeat
    start_reprod_key.keys = undefined;
    start_reprod_key.rt = undefined;
    _start_reprod_key_allKeys = [];
    psychoJS.experiment.addData('time_start.started', globalClock.getTime());
    time_startMaxDuration = null
    // keep track of which components have finished
    time_startComponents = [];
    time_startComponents.push(start_reprod_key);
    
    for (const thisComponent of time_startComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function time_startRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'time_start' ---
    // get current time
    t = time_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *start_reprod_key* updates
    if (t >= 0.0 && start_reprod_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_reprod_key.tStart = t;  // (not accounting for frame time here)
      start_reprod_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { start_reprod_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { start_reprod_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { start_reprod_key.clearEvents(); });
    }
    
    // if start_reprod_key is active this frame...
    if (start_reprod_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = start_reprod_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _start_reprod_key_allKeys = _start_reprod_key_allKeys.concat(theseKeys);
      if (_start_reprod_key_allKeys.length > 0) {
        start_reprod_key.keys = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].name;  // just the last key pressed
        start_reprod_key.rt = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].rt;
        start_reprod_key.duration = _start_reprod_key_allKeys[_start_reprod_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of time_startComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_startRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'time_start' ---
    for (const thisComponent of time_startComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('time_start.stopped', globalClock.getTime());
    start_reprod_key.stop();
    // the Routine "time_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var time_ansMaxDurationReached;
var _stop_reprod_key_allKeys;
var time_ansMaxDuration;
var time_ansComponents;
function time_ansRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'time_ans' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    time_ansClock.reset();
    routineTimer.reset();
    time_ansMaxDurationReached = false;
    // update component parameters for each repeat
    stop_reprod_key.keys = undefined;
    stop_reprod_key.rt = undefined;
    _stop_reprod_key_allKeys = [];
    psychoJS.experiment.addData('time_ans.started', globalClock.getTime());
    time_ansMaxDuration = null
    // keep track of which components have finished
    time_ansComponents = [];
    time_ansComponents.push(reprod_polygon);
    time_ansComponents.push(stop_reprod_key);
    
    for (const thisComponent of time_ansComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function time_ansRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'time_ans' ---
    // get current time
    t = time_ansClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reprod_polygon* updates
    if (t >= 0.0 && reprod_polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reprod_polygon.tStart = t;  // (not accounting for frame time here)
      reprod_polygon.frameNStart = frameN;  // exact frame index
      
      reprod_polygon.setAutoDraw(true);
    }
    
    
    // if reprod_polygon is active this frame...
    if (reprod_polygon.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *stop_reprod_key* updates
    if (t >= 0.0 && stop_reprod_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stop_reprod_key.tStart = t;  // (not accounting for frame time here)
      stop_reprod_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { stop_reprod_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { stop_reprod_key.clearEvents(); });
    }
    
    // if stop_reprod_key is active this frame...
    if (stop_reprod_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = stop_reprod_key.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _stop_reprod_key_allKeys = _stop_reprod_key_allKeys.concat(theseKeys);
      if (_stop_reprod_key_allKeys.length > 0) {
        stop_reprod_key.keys = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].name;  // just the last key pressed
        stop_reprod_key.rt = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].rt;
        stop_reprod_key.duration = _stop_reprod_key_allKeys[_stop_reprod_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of time_ansComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function time_ansRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'time_ans' ---
    for (const thisComponent of time_ansComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('time_ans.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(stop_reprod_key.corr, level);
    }
    psychoJS.experiment.addData('stop_reprod_key.keys', stop_reprod_key.keys);
    if (typeof stop_reprod_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('stop_reprod_key.rt', stop_reprod_key.rt);
        psychoJS.experiment.addData('stop_reprod_key.duration', stop_reprod_key.duration);
        routineTimer.reset();
        }
    
    stop_reprod_key.stop();
    // the Routine "time_ans" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SOJMaxDurationReached;
var _SOJ_key_allKeys;
var SOJMaxDuration;
var SOJComponents;
function SOJRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SOJ' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    SOJClock.reset();
    routineTimer.reset();
    SOJMaxDurationReached = false;
    // update component parameters for each repeat
    SOJ_key.keys = undefined;
    SOJ_key.rt = undefined;
    _SOJ_key_allKeys = [];
    psychoJS.experiment.addData('SOJ.started', globalClock.getTime());
    SOJMaxDuration = null
    // keep track of which components have finished
    SOJComponents = [];
    SOJComponents.push(SOJ_text);
    SOJComponents.push(SOJ_key);
    
    for (const thisComponent of SOJComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SOJRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SOJ' ---
    // get current time
    t = SOJClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SOJ_text* updates
    if (t >= 0.0 && SOJ_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOJ_text.tStart = t;  // (not accounting for frame time here)
      SOJ_text.frameNStart = frameN;  // exact frame index
      
      SOJ_text.setAutoDraw(true);
    }
    
    
    // if SOJ_text is active this frame...
    if (SOJ_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *SOJ_key* updates
    if (t >= 0.0 && SOJ_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SOJ_key.tStart = t;  // (not accounting for frame time here)
      SOJ_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SOJ_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SOJ_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SOJ_key.clearEvents(); });
    }
    
    // if SOJ_key is active this frame...
    if (SOJ_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = SOJ_key.getKeys({
        keyList: typeof ['1','2','3','4','5'] === 'string' ? [['1','2','3','4','5']] : ['1','2','3','4','5'], 
        waitRelease: false
      });
      _SOJ_key_allKeys = _SOJ_key_allKeys.concat(theseKeys);
      if (_SOJ_key_allKeys.length > 0) {
        SOJ_key.keys = _SOJ_key_allKeys[_SOJ_key_allKeys.length - 1].name;  // just the last key pressed
        SOJ_key.rt = _SOJ_key_allKeys[_SOJ_key_allKeys.length - 1].rt;
        SOJ_key.duration = _SOJ_key_allKeys[_SOJ_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SOJComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SOJRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SOJ' ---
    for (const thisComponent of SOJComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SOJ.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SOJ_key.corr, level);
    }
    psychoJS.experiment.addData('SOJ_key.keys', SOJ_key.keys);
    if (typeof SOJ_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SOJ_key.rt', SOJ_key.rt);
        psychoJS.experiment.addData('SOJ_key.duration', SOJ_key.duration);
        routineTimer.reset();
        }
    
    SOJ_key.stop();
    // the Routine "SOJ" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_instrMaxDurationReached;
var _exp_instr_stop_allKeys;
var exp_instrMaxDuration;
var exp_instrComponents;
function exp_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    exp_instrClock.reset();
    routineTimer.reset();
    exp_instrMaxDurationReached = false;
    // update component parameters for each repeat
    exp_instr_stop.keys = undefined;
    exp_instr_stop.rt = undefined;
    _exp_instr_stop_allKeys = [];
    psychoJS.experiment.addData('exp_instr.started', globalClock.getTime());
    exp_instrMaxDuration = null
    // keep track of which components have finished
    exp_instrComponents = [];
    exp_instrComponents.push(exp_instr_text);
    exp_instrComponents.push(exp_instr_stop);
    
    for (const thisComponent of exp_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_instr' ---
    // get current time
    t = exp_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *exp_instr_text* updates
    if (t >= 0.0 && exp_instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_instr_text.tStart = t;  // (not accounting for frame time here)
      exp_instr_text.frameNStart = frameN;  // exact frame index
      
      exp_instr_text.setAutoDraw(true);
    }
    
    
    // if exp_instr_text is active this frame...
    if (exp_instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *exp_instr_stop* updates
    if (t >= 0.0 && exp_instr_stop.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_instr_stop.tStart = t;  // (not accounting for frame time here)
      exp_instr_stop.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_instr_stop.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_instr_stop.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_instr_stop.clearEvents(); });
    }
    
    // if exp_instr_stop is active this frame...
    if (exp_instr_stop.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_instr_stop.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _exp_instr_stop_allKeys = _exp_instr_stop_allKeys.concat(theseKeys);
      if (_exp_instr_stop_allKeys.length > 0) {
        exp_instr_stop.keys = _exp_instr_stop_allKeys[_exp_instr_stop_allKeys.length - 1].name;  // just the last key pressed
        exp_instr_stop.rt = _exp_instr_stop_allKeys[_exp_instr_stop_allKeys.length - 1].rt;
        exp_instr_stop.duration = _exp_instr_stop_allKeys[_exp_instr_stop_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_instr' ---
    for (const thisComponent of exp_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_instr.stopped', globalClock.getTime());
    exp_instr_stop.stop();
    // the Routine "exp_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    byeComponents.push(bye_text);
    
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *bye_text* updates
    if (t >= 0.0 && bye_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bye_text.tStart = t;  // (not accounting for frame time here)
      bye_text.frameNStart = frameN;  // exact frame index
      
      bye_text.setAutoDraw(true);
    }
    
    
    // if bye_text is active this frame...
    if (bye_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (bye_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      bye_text.tStop = t;  // not accounting for scr refresh
      bye_text.frameNStop = frameN;  // exact frame index
      // update status
      bye_text.status = PsychoJS.Status.FINISHED;
      bye_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of byeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    for (const thisComponent of byeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (byeMaxDurationReached) {
        byeClock.add(byeMaxDuration);
    } else {
        byeClock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var onlineMaxDurationReached;
var onlineMaxDuration;
var onlineComponents;
function onlineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'online' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    onlineClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    onlineMaxDurationReached = false;
    // update component parameters for each repeat
    // Отключаем стандартное сохранение
    psychoJS._saveResults = 0;
    
    // Формируем имя файла
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Получаем все данные 
    let dataObj = psychoJS._experiment._trialsData;
    
    // Составляем полный список компонентов
    let allKeys = [];
    dataObj.forEach(trial => {
        Object.keys(trial).forEach(key => {
            if (!allKeys.includes(key)) {
                allKeys.push(key);
            }
        });
    });
    
    // Формируем CSV с заголовками
    let csv = allKeys.join(',') + '\n';
    
    dataObj.forEach(trial => {
        let row = allKeys.map(key => {
            let val = trial[key];
            // если значение undefined, ставим пустую строку
            return val !== undefined ? val : '';
        }).join(',');
        csv += row + '\n';
    });
    
    // Отправляем на OSF через DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: '0ML6HZGpnYSi', // меняем на свой ID
            filename: filename,
            data: csv,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data saved:', data);
        quitPsychoJS();
    })
    .catch(err => {
        console.error('Error saving data:', err);
        quitPsychoJS();
    });
    psychoJS.experiment.addData('online.started', globalClock.getTime());
    onlineMaxDuration = null
    // keep track of which components have finished
    onlineComponents = [];
    onlineComponents.push(online_text);
    
    for (const thisComponent of onlineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function onlineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'online' ---
    // get current time
    t = onlineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *online_text* updates
    if (t >= 0.0 && online_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      online_text.tStart = t;  // (not accounting for frame time here)
      online_text.frameNStart = frameN;  // exact frame index
      
      online_text.setAutoDraw(true);
    }
    
    
    // if online_text is active this frame...
    if (online_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (online_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      online_text.tStop = t;  // not accounting for scr refresh
      online_text.frameNStop = frameN;  // exact frame index
      // update status
      online_text.status = PsychoJS.Status.FINISHED;
      online_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of onlineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function onlineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'online' ---
    for (const thisComponent of onlineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('online.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (onlineMaxDurationReached) {
        onlineClock.add(onlineMaxDuration);
    } else {
        onlineClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
