const TAG_COLORS = {
  "DROP SET":"#ff00ff","DROP SET · ↓":"#ff00ff","MAIN COMPOUND":"#ff2741",
  "ANCHOR":"#00f3ff","OPENER":"#ccff00","PUMP":"#ff5fa8","BURNOUT":"#ff9900",
  "FINISHER":"#a78bff","SUPERSET":"#ff7a3d","PYRAMID × 2":"#f2c200",
  "BACK WIDTH":"#2de8c4","TRI OPENER":"#00f3ff","BI OPENER":"#ccff00",
  "PRE-EXHAUST":"#a78bff","TIMED":"#38e0ff"
};
const DAY_COLORS = ["#ff2741","#00b8c4","#1fcf8c","#5e6470","#ff9900","#a259ff","#0090e0","#5e6470"];

const SPLITS = {
  "Bro Split":{
    days:[
      {name:"Chest",rest:false,color:DAY_COLORS[0],exs:[
        {name:"Flat Barbell Bench Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight all working sets. Double progression.",tempo:"3s down, slight pause at chest, drive up",rest:"2–3 min",notes:"Primary chest builder. Keep shoulder blades pinned back throughout."},
        {name:"Incline Dumbbell Press",tag:"",sets:"3",reps:"8–12",weightMethod:"Same weight all sets",tempo:"Controlled descent, full stretch at bottom",rest:"90 sec",notes:"Upper chest focus. Don't let elbows flare past 75°."},
        {name:"Cable Fly",tag:"PUMP",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Squeeze 1s at peak contraction",rest:"60 sec",notes:"Finish the session — pure isolation, chase the pump."},
        {name:"Dips",tag:"FINISHER",sets:"2",reps:"To failure",weightMethod:"Bodyweight, add weight if easy",tempo:"Full range, controlled",rest:"60 sec",notes:"Lean forward slightly to bias chest over triceps."}
      ]},
      {name:"Back",rest:false,color:DAY_COLORS[1],exs:[
        {name:"Deadlift",tag:"MAIN COMPOUND",sets:"3 working",reps:"5–8",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"Controlled pull, reset each rep",rest:"2–3 min",notes:"Heaviest lift of the week. Brace hard, neutral spine."},
        {name:"Lat Pulldown",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Pull to upper chest, slow return",rest:"90 sec",notes:"Lead with elbows, not hands."},
        {name:"Barbell Row",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Pull to lower chest, 2s squeeze",rest:"90 sec",notes:"Keep torso angle fixed — no jerking the weight up."},
        {name:"Face Pull",tag:"FINISHER",sets:"3",reps:"15–20",weightMethod:"Same weight all sets",tempo:"Pull to face, external rotation at end",rest:"60 sec",notes:"Closes the session — rear delts and upper back health."}
      ]},
      {name:"Legs",rest:false,color:DAY_COLORS[2],exs:[
        {name:"Back Squat",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"3–4s down, drive up",rest:"2–3 min",notes:"Primary leg builder. Hit depth every rep."},
        {name:"Romanian Deadlift",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Push hips back, feel hamstring stretch",rest:"90 sec",notes:"Slight knee bend only — this is a hip hinge."},
        {name:"Leg Press",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full range, no lockout",rest:"90 sec",notes:"Feet shoulder width for balanced quad/glute work."},
        {name:"Standing Calf Raise",tag:"FINISHER",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Full stretch, full contraction, pause both",rest:"60 sec",notes:"Don't bounce — the pauses are what make this work."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[3],exs:[]},
      {name:"Shoulders",rest:false,color:DAY_COLORS[4],exs:[
        {name:"Seated Barbell Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent, no bounce off shoulders",rest:"2 min",notes:"Heaviest pressing movement of the day."},
        {name:"Lateral Raise",tag:"",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Lead with elbows, pause at top",rest:"60 sec",notes:"Strict form — light weight, no swinging."},
        {name:"Rear Delt Fly",tag:"",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Squeeze shoulder blades together",rest:"60 sec",notes:"Bent over or machine, either works."},
        {name:"Shrugs",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Pause 1s at top",rest:"60 sec",notes:"Straight up and down — don't roll the shoulders."}
      ]},
      {name:"Arms",rest:false,color:DAY_COLORS[5],exs:[
        {name:"Barbell Curl",tag:"BI OPENER",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"No swinging, full stretch at bottom",rest:"90 sec",notes:"Elbows pinned to sides throughout."},
        {name:"Close Grip Bench Press",tag:"TRI OPENER",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Elbows tucked, controlled descent",rest:"90 sec",notes:"Hands just inside shoulder width."},
        {name:"Hammer Curl",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Neutral grip, controlled",rest:"60 sec",notes:"Targets brachialis for arm thickness."},
        {name:"Tricep Pushdown",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Lock out each rep, slow return",rest:"60 sec",notes:"Keep elbows fixed at your sides."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[6],exs:[]}
    ]
  },
  "Push Pull Legs":{
    days:[
      {name:"Push",rest:false,color:DAY_COLORS[0],exs:[
        {name:"Flat Barbell Bench Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent, drive up",rest:"2–3 min",notes:"Primary chest and pressing strength movement."},
        {name:"Seated Dumbbell Shoulder Press",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Don't lock out, keep delt under tension",rest:"90 sec",notes:"Secondary pressing movement for shoulder development."},
        {name:"Incline Dumbbell Press",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full stretch at bottom",rest:"90 sec",notes:"Upper chest emphasis."},
        {name:"Lateral Raise",tag:"",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Lead with elbows",rest:"60 sec",notes:"Strict form, light weight."},
        {name:"Tricep Pushdown",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Lock out each rep",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Pull",rest:false,color:DAY_COLORS[1],exs:[
        {name:"Deadlift",tag:"MAIN COMPOUND",sets:"3 working",reps:"5–8",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"Controlled, reset each rep",rest:"2–3 min",notes:"Primary pulling strength movement."},
        {name:"Pull-Up",tag:"",sets:"3",reps:"6–10",weightMethod:"Bodyweight or assisted, add weight if easy",tempo:"Full hang to chin over bar",rest:"90 sec",notes:"Lean back slightly, drive elbows down."},
        {name:"Barbell Row",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Pull to lower chest",rest:"90 sec",notes:"Fixed torso angle, no momentum."},
        {name:"Face Pull",tag:"",sets:"3",reps:"15–20",weightMethod:"Same weight all sets",tempo:"External rotation at end",rest:"60 sec",notes:"Rear delts and upper back health."},
        {name:"Barbell Curl",tag:"FINISHER",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"No swinging",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Legs",rest:false,color:DAY_COLORS[2],exs:[
        {name:"Back Squat",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"3–4s down, drive up",rest:"2–3 min",notes:"Primary leg strength movement."},
        {name:"Romanian Deadlift",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Hip hinge, feel the stretch",rest:"90 sec",notes:"Hamstring and glute focus."},
        {name:"Leg Press",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full range, no lockout",rest:"90 sec",notes:"Quad volume work."},
        {name:"Leg Curl",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Slow eccentric",rest:"60 sec",notes:"Hamstring isolation."},
        {name:"Standing Calf Raise",tag:"FINISHER",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Pause at top and bottom",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[3],exs:[]},
      {name:"Push",rest:false,color:DAY_COLORS[4],exs:[
        {name:"Incline Barbell Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent",rest:"2–3 min",notes:"Round 2 of push — upper chest emphasis this time."},
        {name:"Machine Shoulder Press",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Controlled, full range",rest:"90 sec",notes:"Machine keeps constant tension on the delts."},
        {name:"Cable Fly",tag:"",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Squeeze at peak",rest:"60 sec",notes:"Chest isolation and pump work."},
        {name:"Lateral Raise",tag:"",sets:"3",reps:"15–20",weightMethod:"Same weight all sets",tempo:"Strict, no swinging",rest:"60 sec",notes:"Higher rep range this session."},
        {name:"Overhead Tricep Extension",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Deep stretch behind head",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Pull",rest:false,color:DAY_COLORS[5],exs:[
        {name:"Chest-Supported Row",tag:"MAIN COMPOUND",sets:"3 working",reps:"8–10",weightMethod:"Same weight all working sets.",tempo:"Full hang, row to hip",rest:"2 min",notes:"Round 2 of pull — eliminates all momentum."},
        {name:"Lat Pulldown",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Pull to upper chest",rest:"90 sec",notes:"Width focus this session."},
        {name:"Seated Cable Row",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Squeeze scapula at peak",rest:"90 sec",notes:"Mid-back thickness."},
        {name:"Incline Dumbbell Curl",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full stretch at bottom",rest:"60 sec",notes:"Long head bicep emphasis."},
        {name:"Hammer Curl",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Neutral grip",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Legs",rest:false,color:DAY_COLORS[6],exs:[
        {name:"Front Squat",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Upright torso, controlled descent",rest:"2–3 min",notes:"Round 2 of legs — more quad-dominant variation."},
        {name:"Walking Lunge",tag:"",sets:"3",reps:"12/leg",weightMethod:"Same weight all sets",tempo:"Long stride, controlled",rest:"90 sec",notes:"Unilateral work to address imbalances."},
        {name:"Leg Extension",tag:"",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Squeeze at top",rest:"60 sec",notes:"Quad isolation."},
        {name:"Seated Leg Curl",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full stretch, hard squeeze",rest:"60 sec",notes:"Hamstring isolation, different angle."},
        {name:"Seated Calf Raise",tag:"FINISHER",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Pause at full stretch and contraction",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[7],exs:[]}
    ]
  },
  "Full Body":{
    days:[
      {name:"Full Body A",rest:false,color:DAY_COLORS[0],exs:[
        {name:"Back Squat",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–8",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent, drive up",rest:"2–3 min",notes:"Anchor lift of the session — go heavy."},
        {name:"Flat Barbell Bench Press",tag:"",sets:"3",reps:"6–8",weightMethod:"Same weight all sets",tempo:"Controlled descent",rest:"2 min",notes:"Primary upper body push."},
        {name:"Barbell Row",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Pull to lower chest",rest:"90 sec",notes:"Primary upper body pull."},
        {name:"Plank",tag:"FINISHER",sets:"3",reps:"30–45s",weightMethod:"Bodyweight",tempo:"Hold, brace core hard",rest:"45 sec",notes:"Core finisher to close the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[1],exs:[]},
      {name:"Full Body B",rest:false,color:DAY_COLORS[2],exs:[
        {name:"Deadlift",tag:"MAIN COMPOUND",sets:"3 working",reps:"5–6",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"Controlled, reset each rep",rest:"2–3 min",notes:"Anchor lift of the session."},
        {name:"Seated Dumbbell Shoulder Press",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Controlled descent",rest:"90 sec",notes:"Upper body push variation."},
        {name:"Lat Pulldown",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Pull to upper chest",rest:"90 sec",notes:"Upper body pull variation."},
        {name:"Hanging Knee Raise",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Bodyweight",tempo:"Controlled, no swinging",rest:"45 sec",notes:"Core finisher to close the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[3],exs:[]},
      {name:"Full Body C",rest:false,color:DAY_COLORS[4],exs:[
        {name:"Leg Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"10–12",weightMethod:"Same weight all working sets.",tempo:"Full range, no lockout",rest:"2 min",notes:"Quad-focused leg work for this session."},
        {name:"Incline Dumbbell Press",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Full stretch at bottom",rest:"90 sec",notes:"Upper chest push variation."},
        {name:"Chest-Supported Row",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full hang, row to hip",rest:"90 sec",notes:"Eliminates momentum, pure back work."},
        {name:"Side Plank",tag:"FINISHER",sets:"2",reps:"30s/side",weightMethod:"Bodyweight",tempo:"Hold, brace hard",rest:"45 sec",notes:"Closes the session — obliques and core stability."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[5],exs:[]},
      {name:"Rest",rest:true,color:DAY_COLORS[6],exs:[]}
    ]
  },
  "Upper Lower":{
    days:[
      {name:"Upper A",rest:false,color:DAY_COLORS[0],exs:[
        {name:"Flat Barbell Bench Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–8",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent, drive up",rest:"2–3 min",notes:"Primary push movement of the session."},
        {name:"Barbell Row",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Pull to lower chest",rest:"90 sec",notes:"Primary pull movement of the session."},
        {name:"Seated Dumbbell Shoulder Press",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Controlled, no lockout",rest:"90 sec",notes:"Secondary shoulder press."},
        {name:"Lat Pulldown",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Pull to upper chest",rest:"90 sec",notes:"Secondary pull movement."},
        {name:"Tricep Pushdown",tag:"FINISHER",sets:"3",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Lock out each rep",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Lower A",rest:false,color:DAY_COLORS[1],exs:[
        {name:"Back Squat",tag:"MAIN COMPOUND",sets:"3 working",reps:"6–8",weightMethod:"2 warm-up sets first. Same weight all working sets.",tempo:"Controlled descent, drive up",rest:"2–3 min",notes:"Primary leg movement of the session."},
        {name:"Romanian Deadlift",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Hip hinge, feel the stretch",rest:"90 sec",notes:"Hamstring and glute focus."},
        {name:"Leg Press",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full range, no lockout",rest:"90 sec",notes:"Quad volume work."},
        {name:"Standing Calf Raise",tag:"FINISHER",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Pause at top and bottom",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[2],exs:[]},
      {name:"Upper B",rest:false,color:DAY_COLORS[3],exs:[
        {name:"Incline Dumbbell Press",tag:"MAIN COMPOUND",sets:"3 working",reps:"8–10",weightMethod:"Same weight all working sets.",tempo:"Full stretch at bottom",rest:"2 min",notes:"Upper chest emphasis this session."},
        {name:"Pull-Up",tag:"",sets:"3",reps:"6–10",weightMethod:"Bodyweight or assisted, add weight if easy",tempo:"Full hang to chin over bar",rest:"90 sec",notes:"Vertical pull variation."},
        {name:"Machine Shoulder Press",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Controlled, full range",rest:"90 sec",notes:"Secondary shoulder press."},
        {name:"Seated Cable Row",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Squeeze scapula at peak",rest:"90 sec",notes:"Secondary pull movement."},
        {name:"Barbell Curl",tag:"FINISHER",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"No swinging",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Lower B",rest:false,color:DAY_COLORS[4],exs:[
        {name:"Deadlift",tag:"MAIN COMPOUND",sets:"3 working",reps:"5–6",weightMethod:"2–3 warm-up sets first. Same weight all working sets.",tempo:"Controlled, reset each rep",rest:"2–3 min",notes:"Primary posterior chain movement this session."},
        {name:"Front Squat",tag:"",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Upright torso, controlled descent",rest:"2 min",notes:"More quad-dominant variation."},
        {name:"Leg Curl",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Slow eccentric",rest:"60 sec",notes:"Hamstring isolation."},
        {name:"Seated Calf Raise",tag:"FINISHER",sets:"4",reps:"12–15",weightMethod:"Same weight all sets",tempo:"Pause at full stretch and contraction",rest:"60 sec",notes:"Closes the session."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[5],exs:[]},
      {name:"Rest",rest:true,color:DAY_COLORS[6],exs:[]}
    ]
  },
  "CBum 8-day":{
    days:[
      {name:"Quads & Calves",rest:false,color:DAY_COLORS[0],exs:[
        {name:"Leg Extensions",tag:"DROP SET",sets:"2",reps:"20",weightMethod:"Same weight both sets",tempo:"3s eccentric, squeeze at top",rest:"60–90 sec",notes:"Pre-exhaust before squats. Last set: drop weight 30% → rep to failure immediately with no rest."},
        {name:"Smith Machine Squats",tag:"MAIN COMPOUND",sets:"2 working",reps:"6–10",weightMethod:"2 warm-up sets first (50%×15, 70%×10). Same weight both working sets. Double progression.",tempo:"3–4s down, 1s pause at bottom, explode up",rest:"2–3 min",notes:"Primary quad compound. Go heavy. No bouncing out of the hole."},
        {name:"Unilateral Leg Press",tag:"",sets:"3",reps:"8–10/leg",weightMethod:"Same weight all 3 sets",tempo:"3s eccentric, full extension (no lockout)",rest:"90 sec",notes:"One leg at a time. Mid-platform foot position. Drive through heel. Eliminates dominant side compensation."},
        {name:"Sissy Squats",tag:"",sets:"3",reps:"12–15",weightMethod:"Bodyweight or lightly loaded. Same difficulty all sets.",tempo:"Slow and controlled throughout",rest:"60 sec",notes:"Lean back as far as possible. Deep stretch at bottom. Squeeze quad hard at top."},
        {name:"Seated Calf Raises",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Full stretch (hold 1–2s), full contraction (hold 1–2s)",rest:"60 sec",notes:"Do not bounce. The pause at stretch and contraction is what makes this effective."}
      ]},
      {name:"Chest & Triceps",rest:false,color:DAY_COLORS[1],exs:[
        {name:"Incline Dumbbell Press",tag:"ANCHOR",sets:"2 working",reps:"8–10",weightMethod:"3 warm-up sets: 50%×15 → 70%×10 → 85%×6. Same DB weight both working sets. Double progression.",tempo:"3–4s down, 1s pause at chest, explode up",rest:"2–3 min",notes:"CBum's most important chest movement. Full stretch at bottom. Hard squeeze at top."},
        {name:"Incline Dumbbell Flyes",tag:"",sets:"2",reps:"8–10",weightMethod:"Same weight both sets",tempo:"Wide arc, 3s eccentric, deep stretch at bottom",rest:"90 sec",notes:"Do not clank dumbbells at top — squeeze the pec through full contraction before returning."},
        {name:"Hammer Strength Incline Press",tag:"DROP SET · ↓",sets:"2",reps:"6–10",weightMethod:"DESCENDING: Set 1 = heaviest (6–8 reps). Set 2 = drop 15–20% (8–10 reps). Final: drop another 25% → failure.",tempo:"3–4s eccentric, pause at stretch, explode up",rest:"2 min",notes:"Only descending pyramid in the split. Start as heavy as possible for clean reps."},
        {name:"Pec Deck Flyes",tag:"PUMP",sets:"3",reps:"15",weightMethod:"Same weight all sets — pump and detail, not strength",tempo:"Pause 1s at full stretch, 1s at peak contraction",rest:"60 sec",notes:"Slow and controlled. Feel the chest, not the shoulders."},
        {name:"EZ Bar Skull Crushers",tag:"",sets:"2",reps:"8–10",weightMethod:"Same weight both sets",tempo:"Lower bar 3–4s to forehead, pause, press back",rest:"90 sec",notes:"Keep elbows fixed — do not flare. Only forearm moves."},
        {name:"Push-Ups",tag:"BURNOUT",sets:"2",reps:"To failure",weightMethod:"Bodyweight only",tempo:"Full range: chest to floor, full lockout at top",rest:"60 sec",notes:"Closes the session. Go until you physically cannot complete another rep."}
      ]},
      {name:"Back & Biceps",rest:false,color:DAY_COLORS[2],exs:[
        {name:"Close Grip Underhand Lat Pulldown",tag:"OPENER",sets:"3 working",reps:"10–12",weightMethod:"2 warm-up sets first. Same weight all 3 working sets.",tempo:"Pull to upper chest, pause & squeeze. 3s return to full extension.",rest:"90 sec",notes:"Drive elbows to hips — not hands to chest. Lean back slightly. Get the full lat stretch at the top."},
        {name:"Chest-Supported Dumbbell Row",tag:"",sets:"2",reps:"8–10",weightMethod:"Same weight both sets",tempo:"Full hang at bottom (stretch lat), row to hip, 3s eccentric",rest:"2 min",notes:"Lie chest on incline bench — eliminates ALL momentum. Pure lat and mid-back work."},
        {name:"Chest-Supported T-Bar Row",tag:"DROP SET",sets:"2",reps:"8–10",weightMethod:"1 warm-up set. Set 1 heavy. Set 2: same weight → drop 25–30% → rep to failure.",tempo:"Pull to lower chest, retract scapula hard at top",rest:"2 min",notes:"Chest support eliminates cheating. Squeeze hard at peak contraction before slowly lowering."},
        {name:"Machine Chest-Supported Row",tag:"",sets:"2",reps:"10–12",weightMethod:"Same weight both sets",tempo:"1s pause at peak. Slow full return to stretch.",rest:"90 sec",notes:"Pull with elbows, not hands. Drive elbows behind your body."},
        {name:"Cable Lat Extensions (V-bar, arms straight)",tag:"",sets:"2",reps:"10–12",weightMethod:"Same weight both sets",tempo:"Hold contraction 1–2s. Full stretch overhead on return.",rest:"60 sec",notes:"Arms completely straight throughout — isolates lat without any bicep involvement."},
        {name:"Machine Preacher Curls",tag:"FINISHER",sets:"2",reps:"10–12",weightMethod:"Same weight both sets",tempo:"Full stretch at bottom always. Squeeze at top, 3–4s eccentric.",rest:"60 sec",notes:"Never cut the range of motion. The stretch at the bottom is the most important part."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[3],exs:[]},
      {name:"Shoulders & Chest",rest:false,color:DAY_COLORS[4],exs:[
        {name:"Seated Dumbbell Shoulder Press",tag:"OPENER",sets:"2 working",reps:"6–10",weightMethod:"2 warm-up sets first. Same weight both working sets. Double progression.",tempo:"Lower to ear level 3–4s, 1s pause, press. Do NOT lock out — keep delt under tension.",rest:"2–3 min",notes:"Heaviest pressing movement of the day. Establish a solid base with warm-ups."},
        {name:"Machine Shoulder Press",tag:"DROP SET",sets:"3",reps:"6–10",weightMethod:"Same weight sets 1 & 2. Set 3: near failure → drop 25–30% → grind immediately.",tempo:"3s eccentric, pause at stretch at bottom",rest:"2 min",notes:"Machine keeps constant tension. Drop immediately after hitting near failure."},
        {name:"DB Lateral Raises — Ascending Pyramid",tag:"PYRAMID × 2",sets:"8 total",reps:"20 / 15 / 10 / fail",weightMethod:"20lbs×20 → 30lbs×15 → 35lbs×10 → 40lbs×failure. 30 SEC rest only. Run TWICE (8 total sets).",tempo:"Raise to shoulder, lead with elbow. Pause at top. Slow lower.",rest:"30 sec within pyramid. 2 min between rounds.",notes:"ONLY ascending pyramid in the split. Short rest is intentional. This is the medial delt volume block."},
        {name:"Machine Lateral Raises",tag:"",sets:"2",reps:"10–12",weightMethod:"Same weight both sets",tempo:"Pause at top — squeeze medial delt. 3s eccentric.",rest:"60 sec",notes:"Strict form only. Delt is already fatigued from the pyramid — use this to refine the contraction."},
        {name:"Superset: Reverse Pec Deck + Machine Chest Flyes",tag:"SUPERSET",sets:"2 rounds",reps:"10–12 each",weightMethod:"Same weights each round. ZERO rest between exercises.",tempo:"Rev Pec Deck: pause at peak rear delt contraction. Chest Flyes: squeeze at peak.",rest:"90 sec between rounds",notes:"Move immediately from Reverse Pec Deck to Chest Flyes. No rest. Closes the session with a pump."}
      ]},
      {name:"Hamstrings & Back",rest:false,color:DAY_COLORS[5],exs:[
        {name:"Lying Leg Curl",tag:"PRE-EXHAUST",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Curl up explosively, squeeze at top, 3–4s eccentric. Full stretch at bottom.",rest:"90 sec",notes:"Comes FIRST — pre-fatigues hamstrings before deadlifts to maximise hamstring recruitment during the lift."},
        {name:"Romanian / Stiff-Leg Deadlift",tag:"MAIN COMPOUND",sets:"3 working",reps:"4–8",weightMethod:"2–3 ascending warm-up sets (do not skip — hams are pre-fatigued). Same weight all working sets. Double progression.",tempo:"Hinge at hip, 3–4s descent feeling hamstring stretch. Drive hips forward, squeeze glutes at top.",rest:"2–3 min",notes:"Heaviest movement of the day. Keep the hinge pattern — do not squat it. Maximum hamstring stretch at the bottom."},
        {name:"Seated Leg Curl",tag:"",sets:"2",reps:"8–10",weightMethod:"Same weight both sets",tempo:"Full stretch at top, curl down, 3s eccentric. Hard squeeze at peak.",rest:"90 sec",notes:"Different angle to lying curl — hits hamstring in shortened position vs. lying curl's lengthened position."},
        {name:"Standing Leg Curl (unilateral)",tag:"",sets:"2",reps:"10–12/leg",weightMethod:"Same weight both sets",tempo:"Slow and controlled. Full range — stretch at bottom, squeeze at top.",rest:"60 sec",notes:"No swinging. One leg at a time. Closes out hamstring volume for the day."},
        {name:"Wide Grip Lat Pulldown",tag:"BACK WIDTH",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Pull to upper chest, lead with elbows. 3s return to full extension.",rest:"90 sec",notes:"WIDTH focus (Day 3 was thickness). Wide grip hits outer lats for the V-taper."},
        {name:"Cable Lat Extension — V-bar",tag:"FINISHER",sets:"2",reps:"12–15",weightMethod:"Same weight both sets",tempo:"Arms straight, push hands to hips. Hold 1–2s at contraction. Full stretch on return.",rest:"60 sec",notes:"Arms stay completely straight — isolates lat with no bicep involvement."}
      ]},
      {name:"Arms",rest:false,color:DAY_COLORS[6],exs:[
        {name:"Rope Overhead Cable Extension",tag:"TRI OPENER",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"3s eccentric — deep stretch behind head. Squeeze hard at full extension.",rest:"90 sec",notes:"Face away from cable. Elbows high & fixed. Overhead position hits the long head of tricep."},
        {name:"Cable Pressdowns",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Elbows pinned to sides. Hold squeeze at full extension. Slow return.",rest:"90 sec",notes:"Only forearm moves. Hold the squeeze at the bottom — that's what makes this effective."},
        {name:"EZ Bar Preacher Curls",tag:"BI OPENER",sets:"3",reps:"8–10",weightMethod:"Same weight all sets",tempo:"Full stretch at bottom always. Squeeze at top. 3–4s eccentric.",rest:"90 sec",notes:"Elbows stay on pad throughout. Never cut the range of motion. Bottom stretch is the most important part."},
        {name:"Incline Dumbbell Curls",tag:"",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Arms hang fully at bottom. Curl with supination twist. Squeeze at top. 3s eccentric.",rest:"90 sec",notes:"Incline bench gives a deep stretch to the long head — cannot be replicated standing."},
        {name:"Standing Hammer Curls",tag:"FINISHER",sets:"3",reps:"10–12",weightMethod:"Same weight all sets",tempo:"Neutral grip (palms facing each other). 3s eccentric. No swinging.",rest:"60 sec",notes:"Targets brachialis — adds thickness between the bicep and tricep peaks. Strict form, no momentum."}
      ]},
      {name:"Rest",rest:true,color:DAY_COLORS[7],exs:[]}
    ]
  }
};

const DEFAULT_SPLITS_SNAPSHOT = JSON.parse(JSON.stringify(SPLITS));

function resetSplitsToDefault(){
  for(let k in SPLITS) delete SPLITS[k];
  let fresh = JSON.parse(JSON.stringify(DEFAULT_SPLITS_SNAPSHOT));
  for(let k in fresh) SPLITS[k] = fresh[k];
}

const RULES = [
  { rule: "Same weight across sets?", method: "YES — Hold same weight on ALL working sets until you hit the top of the rep range on every set with perfect form." },
  { rule: "When to increase weight?", method: "Only when you complete the top rep of the range on ALL sets with perfect form — not before." },
  { rule: "How much to increase?", method: "5–15 lbs per jump. Small consistent jumps beat big jumps with sloppy form." },
  { rule: "Eccentric tempo", method: "3–4 seconds down on EVERY exercise. Controlled the whole way." },
  { rule: "Pause at stretch", method: "1-second dead stop at the bottom on all pressing movements. No bouncing." },
  { rule: "Concentric (pressing up)", method: "Explosive and fast — press/pull with intent." },
  { rule: "Drop sets", method: "Leg Extension, Hammer Strength Press, Machine Shoulder Press. Immediate drop (zero rest), grind to failure." },
  { rule: "Lateral raises", method: "Ascending pyramid ONLY: 20lbs×20 → 30lbs×15 → 35lbs×10 → 40lbs×failure. 30 sec rest. Run TWICE." },
  { rule: "How close to failure?", method: "1–2 reps in reserve most sets. Last set of exercise — push closer. Drop sets — true failure." },
  { rule: "Rest — heavy compounds", method: "2–3 minutes (Squats, Deadlifts, Rows, Pressing)" },
  { rule: "Rest — isolation machines", method: "60–90 seconds" },
  { rule: "Rest — within superset/tri-set", method: "Zero rest between exercises. Move immediately. 90s–2 min between full rounds." },
];

const CBUM_DEFAULT_USERS = ["nandhu", "dev", "test"];

// Normalize exercise names so "Leg Extensions", "Leg extension", and "leg extensions" are treated as the same
function normalizeExName(name) {
  if (!name) return "";
  let n = name.toLowerCase().trim();
  if (n.endsWith('ies')) return n.slice(0, -3) + 'y';
  if (n.endsWith('es') && !n.endsWith('press') && !n.endsWith('raises') && !n.endsWith('iceps')) return n.slice(0, -1);
  if (n.endsWith('s') && !n.endsWith('press') && !n.endsWith('ss') && !n.endsWith('raises') && !n.endsWith('iceps')) return n.slice(0, -1);
  return n;
}

function isSameEx(name1, name2) {
  return normalizeExName(name1) === normalizeExName(name2);
}

const EXERCISE_LIBRARY = [
  "Barbell Bench Press","Incline Barbell Bench Press","Decline Barbell Bench Press","Close Grip Bench Press",
  "Dumbbell Bench Press","Incline Dumbbell Press","Decline Dumbbell Press","Dumbbell Fly","Incline Dumbbell Fly",
  "Cable Fly","Low Cable Fly","High Cable Fly","Pec Deck Machine","Chest Press Machine","Push-Up","Incline Push-Up",
  "Decline Push-Up","Weighted Dips","Landmine Press","Svend Press",
  "Deadlift","Romanian Deadlift","Stiff-Leg Deadlift","Sumo Deadlift","Rack Pull","Good Morning",
  "Barbell Row","Pendlay Row","T-Bar Row","Seated Cable Row","Single-Arm Dumbbell Row","Chest-Supported Row",
  "Lat Pulldown","Wide Grip Lat Pulldown","Close Grip Lat Pulldown","Cable Lat Extension","Straight Arm Pulldown",
  "Pull-Up","Chin-Up","Assisted Pull-Up","Inverted Row","Face Pull","Hyperextension","Back Extension",
  "Overhead Press","Seated Dumbbell Shoulder Press","Standing Dumbbell Shoulder Press","Arnold Press","Military Press",
  "Machine Shoulder Press","Lateral Raise","Cable Lateral Raise","Leaning Lateral Raise","Front Raise","Rear Delt Fly",
  "Reverse Pec Deck","Upright Row","Cuban Press","Shrugs","Landmine Lateral Raise",
  "Barbell Curl","EZ Bar Curl","Dumbbell Curl","Incline Dumbbell Curl","Hammer Curl","Cable Curl","Preacher Curl",
  "EZ Bar Preacher Curl","Concentration Curl","Spider Curl","Reverse Curl","21s Bicep Curl",
  "Triceps Pushdown","Cable Pressdown","Rope Overhead Cable Extension","Skull Crusher","Lying Triceps Extension",
  "Overhead Triceps Extension","Diamond Push-Up","Triceps Dips","Triceps Kickback","JM Press",
  "Barbell Back Squat","Front Squat","Goblet Squat","Hack Squat","Smith Machine Squat","Belt Squat",
  "Leg Press","Leg Extension","Leg Curl","Lying Leg Curl","Seated Leg Curl","Standing Leg Curl",
  "Bulgarian Split Squat","Lunges","Walking Lunges","Reverse Lunge","Lateral Lunge","Step-Up",
  "Hip Thrust","Glute Bridge","Cable Kickback","Calf Raise","Standing Calf Raise","Seated Calf Raise",
  "Leg Press Calf Raise","Adductor Machine","Abductor Machine",
  "Plank","Hanging Leg Raise","Lying Leg Raise","Cable Crunch","Crunch","Sit-Up","Russian Twist",
  "Ab Wheel Rollout","Side Plank","Mountain Climbers","Wood Chopper","V-Up",
  "Treadmill Run","Rowing Machine","Stationary Bike","Stair Climber","Battle Ropes","Kettlebell Swing",
  "Box Jump","Burpees","Farmer's Carry","Sled Push","Sled Pull","Power Clean","Clean and Jerk","Snatch"
];

function getAllKnownExerciseNames(){
  let pool = new Map();
  EXERCISE_LIBRARY.forEach(n=>{ if(!pool.has(n.toLowerCase())) pool.set(n.toLowerCase(), n); });
  for(let s in SPLITS){
    (SPLITS[s].days||[]).forEach(d=>(d.exs||[]).forEach(e=>{
      if(e.name && !pool.has(e.name.toLowerCase())) pool.set(e.name.toLowerCase(), e.name);
    }));
  }
  (state.knownExerciseNames||[]).forEach(n=>{ if(n && !pool.has(n.toLowerCase())) pool.set(n.toLowerCase(), n); });
  return Array.from(pool.values());
}

function getAllKnownWorkoutNames(){
  let pool = new Map();
  for(let s in SPLITS){
    pool.set(s.toLowerCase(), s);
    (SPLITS[s].days||[]).forEach(d=>{ if(d.name && !pool.has(d.name.toLowerCase())) pool.set(d.name.toLowerCase(), d.name); });
  }
  (state.knownWorkoutNames||[]).forEach(n=>{ if(n && !pool.has(n.toLowerCase())) pool.set(n.toLowerCase(), n); });
  return Array.from(pool.values());
}

function filterSuggestions(pool, query){
  query=(query||'').trim().toLowerCase();
  if(!query) return [];
  let starts=[], contains=[];
  pool.forEach(n=>{
    let ln=n.toLowerCase();
    if(ln.startsWith(query)) starts.push(n);
    else if(ln.includes(query)) contains.push(n);
  });
  starts.sort((a,b)=>a.localeCompare(b));
  contains.sort((a,b)=>a.localeCompare(b));
  return starts.concat(contains).slice(0,8);
}

function getExerciseSuggestions(query){ return filterSuggestions(getAllKnownExerciseNames(), query); }
function getWorkoutNameSuggestions(query){ return filterSuggestions(getAllKnownWorkoutNames(), query); }

function recordExerciseName(name){
  if(!name) return;
  name=name.trim();
  if(!name) return;
  if(!state.knownExerciseNames) state.knownExerciseNames=[];
  let lower=name.toLowerCase();
  let alreadyKnown = EXERCISE_LIBRARY.some(n=>n.toLowerCase()===lower) || state.knownExerciseNames.some(n=>n.toLowerCase()===lower);
  if(!alreadyKnown) state.knownExerciseNames.push(name);
}

function recordWorkoutName(name){
  if(!name) return;
  name=name.trim();
  if(!name) return;
  if(!state.knownWorkoutNames) state.knownWorkoutNames=[];
  let lower=name.toLowerCase();
  if(!state.knownWorkoutNames.some(n=>n.toLowerCase()===lower)) state.knownWorkoutNames.push(name);
}

function attachAutocomplete(inputId, listId, suggestFn){
  let input=document.getElementById(inputId);
  let list=document.getElementById(listId);
  if(!input || !list) return;
  function render(){
    let sugg=suggestFn(input.value);
    if(!sugg.length){ list.style.display='none'; list.innerHTML=''; return; }
    list.innerHTML=sugg.map(s=>`<div class="ac-item" data-val="${s.replace(/"/g,'&quot;')}">${s}</div>`).join('');
    list.style.display='block';
  }
  input.oninput=render;
  input.onfocus=render;
  input.onblur=()=>{ setTimeout(()=>{ list.style.display='none'; }, 150); };
  list.onmousedown=(e)=>{
    let item=e.target.closest('.ac-item');
    if(!item) return;
    e.preventDefault();
    input.value=item.getAttribute('data-val');
    list.style.display='none';
    list.innerHTML='';
  };
}

let state = {
  profile: 1,
  date: new Date(),
  sw: {1:{running:false,start:0,elapsed:0,interval:null}},
  activeSplit: "Bro Split",
  activeDayIdx: 0,
  splitDayView: 0,
  bw: {1:{}},
  userMetrics: {1:{height:'',age:''}},
  workouts: {},
  prData: {},
  cardioLog: {},
  knownExerciseNames: [],
  knownWorkoutNames: [],
  settings: {
    useRestTimer: true,
    timerMerged: false,
    barbellWeight: 20,
    plates: [25, 20, 15, 10, 5, 2.5, 1.25],
    simpleMode: true,
    showPlateMath: true,
    showWarmupGen: true,
    showNotes: true,
    showPRCalc: true,
    compactButtons: false
  },
  page: "workout"
};

let restTimers = {
  1: { running: false, end: 0, interval: null, lastDuration: 90 }
};

function resetAppState(){
  // Stop any running timers/intervals left over from the previous session
  if (state.sw && state.sw[1] && state.sw[1].interval) clearInterval(state.sw[1].interval);
  if (restTimers && restTimers[1] && restTimers[1].interval) clearInterval(restTimers[1].interval);

  resetSplitsToDefault();

  state = {
    profile: 1,
    date: new Date(),
    sw: {1:{running:false,start:0,elapsed:0,interval:null}},
    activeSplit: "Bro Split",
    activeDayIdx: 0,
    splitDayView: 0,
    bw: {1:{}},
    userMetrics: {1:{height:'',age:''}},
    workouts: {},
    prData: {},
    cardioLog: {},
    knownWorkoutNames: [],
    settings: {
      useRestTimer: true,
      timerMerged: false,
      barbellWeight: 20,
      plates: [25, 20, 15, 10, 5, 2.5, 1.25],
      simpleMode: true,
      showPlateMath: true,
      showWarmupGen: true,
      showNotes: true,
      showPRCalc: true,
      compactButtons: false
    },
    page: "workout"
  };

  restTimers = {
    1: { running: false, end: 0, interval: null, lastDuration: 90 }
  };

  // Reset the stopwatch/rest-timer UI immediately so no stale display lingers
  let swTimeEl = document.getElementById('sw1-time');
  if (swTimeEl) swTimeEl.innerHTML = '00:00<span class="sw-ms">.00</span>';
  let sw1El = document.getElementById('sw1');
  if (sw1El) sw1El.classList.remove('running');
  let stopwatchUi = document.getElementById('sw1-stopwatch-ui');
  if (stopwatchUi) stopwatchUi.style.display = 'flex';
  let restUi = document.getElementById('sw1-rest-ui');
  if (restUi) restUi.style.display = 'none';
  let floatingWidget = document.getElementById('rest-timer-widget-1');
  if (floatingWidget) floatingWidget.style.display = 'none';

  // Force the UI back to the Train tab so no one inherits the previous user's open page
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  let workoutPage = document.getElementById('page-workout');
  if (workoutPage) workoutPage.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active','p1','p2'));
  let navWorkout = document.getElementById('nav-workout');
  if (navWorkout) navWorkout.classList.add('active','p1');
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  let btn = document.getElementById('install-pwa-btn');
  if (btn) btn.style.display = 'inline-flex';
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  let btn = document.getElementById('install-pwa-btn');
  if (btn) btn.style.display = 'none';
});

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') console.log('User accepted the install prompt');
    deferredPrompt = null;
    let btn = document.getElementById('install-pwa-btn');
    if (btn) btn.style.display = 'none';
  });
}

// ====== LOCAL STORAGE (offline-only) ======
const LOCAL_STORAGE_KEY = 'dod_tracker_local';
let displayName = 'Not Set';

function saveState() {
  let toSave = JSON.parse(JSON.stringify(state));
  toSave.splits = SPLITS;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toSave));
}

function applyLoadedData(parsed) {
  if (!parsed) return;
  if (parsed.splits) {
    // Replace SPLITS entirely with the saved set, rather than merging on top
    // of the freshly reseeded defaults. A merge-only approach can never
    // reflect a deleted split, since the reset step always re-adds the
    // built-ins before this function runs.
    for (let k in SPLITS) delete SPLITS[k];
    for (let k in parsed.splits) { SPLITS[k] = parsed.splits[k]; }
  }
  delete parsed.splits;
  delete parsed.date;
  state = { ...state, ...parsed };
  state.date = new Date();
  if (!state.settings) state.settings = { useRestTimer: true, timerMerged: false, barbellWeight: 20, plates: [25, 20, 15, 10, 5, 2.5, 1.25] };
  if (state.settings.useRestTimer === undefined) state.settings.useRestTimer = true;
  if (state.settings.timerMerged === undefined) state.settings.timerMerged = false;
  if (state.settings.theme === undefined) state.settings.theme = 'claude';
  // Existing accounts keep their current (full-detail) experience by default;
  // only brand-new accounts (handled in the default `state` object above) start in Simple Mode.
  if (state.settings.simpleMode === undefined) state.settings.simpleMode = false;
  if (state.settings.showPlateMath === undefined) state.settings.showPlateMath = true;
  if (state.settings.showWarmupGen === undefined) state.settings.showWarmupGen = true;
  if (state.settings.showNotes === undefined) state.settings.showNotes = true;
  if (state.settings.showPRCalc === undefined) state.settings.showPRCalc = true;
  if (state.settings.compactButtons === undefined) state.settings.compactButtons = false;
  if (state.settings.keepAwake === undefined) state.settings.keepAwake = false;
  initTheme();
  if (!state.bw) state.bw = {1:{}};
  if (!state.bw[1]) state.bw[1] = {};
  if (!state.knownExerciseNames) state.knownExerciseNames = [];
  if (!state.knownWorkoutNames) state.knownWorkoutNames = [];
  if (!state.userMetrics) state.userMetrics = {1:{height:'',age:''}};
  state.profile = 1;
  state.sw = {1:{running:false,start:0,elapsed:0,interval:null}};
  if (!state.activeSplit || !SPLITS[state.activeSplit]) {
    state.activeSplit = defaultSplitForUser(null);
  }
}

function defaultSplitForUser(username){
  let preferred = CBUM_DEFAULT_USERS.includes((username || '').toLowerCase()) ? "CBum 8-day" : "Bro Split";
  if (SPLITS[preferred]) return preferred;
  for (let k in SPLITS) return k;
  return undefined;
}

async function loadState() {
  resetAppState();
  let cached = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (cached) {
    try { applyLoadedData(JSON.parse(cached)); } catch (e) {}
  } else {
    state.activeSplit = defaultSplitForUser(null);
  }
  if (state.profileName) displayName = state.profileName;
  document.body.classList.toggle('pitch-black', !!state.settings.pitchBlack);
}

function dateKey(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function getWorkoutKey(){return `${dateKey(state.date)}_${state.profile}`;}

function fmt(ms){
  let cs=Math.floor((ms%1000)/10);
  let s=Math.floor(ms/1000);
  let m=Math.floor(s/60);
  s=s%60;
  return (m<10?'0':'')+m+':'+(s<10?'0':'')+s+`<span class="sw-ms">.`+(cs<10?'0':'')+cs+`</span>`;
}

function parseRestTime(restStr, defaultTime) {
  if (!restStr) return defaultTime;
  let match = restStr.match(/(\d+)(?:\s*[-–]\s*(\d+))?\s*(min|m|sec|s)\b/i);
  if (match) {
    let val = parseInt(match[2] || match[1]);
    let unit = match[3].toLowerCase();
    return unit.startsWith('m') ? val * 60 : val;
  }
  let numMatch = restStr.match(/(\d+)(?:\s*[-–]\s*(\d+))?/);
  if (numMatch) {
    let val = parseInt(numMatch[2] || numMatch[1]);
    return val < 10 ? val * 60 : val;
  }
  return defaultTime;
}

function fmtSec(s) {
  if (s % 60 === 0) return (s/60) + 'm';
  if (s > 60) return Math.floor(s/60) + 'm ' + (s%60) + 's';
  return s + 's';
}

function fmtRestBadge(s) {
  if (s % 60 === 0) return Math.floor(s / 60) + 'M';
  let m = Math.floor(s / 60);
  let r = s % 60;
  return m > 0 ? m + 'M ' + r + 'S' : r + 'S';
}

function toggleSW(n){
  let sw=state.sw[n];
if(sw.running){
    clearInterval(sw.interval);
    sw.running=false;
    sw.elapsed=0;
    document.getElementById('sw'+n+'-time').innerHTML='00:00<span class="sw-ms">.00</span>';
} else {
    sw.elapsed=0;
    sw.start=Date.now();
    sw.running=true;
    sw.interval=setInterval(()=>{
      document.getElementById('sw'+n+'-time').innerHTML=fmt(Date.now()-sw.start);
    },10);
}
}

// Timer Sync System
function syncTimerUI() {
  let p = 1;
  let rt = restTimers[p];
  let isRunning = rt && rt.running;
  let showFloating = isRunning && !state.settings.timerMerged;
  let floatingWidget = document.getElementById('rest-timer-widget-' + p);
  if (floatingWidget) floatingWidget.style.display = showFloating ? 'flex' : 'none';
  if (isRunning && state.settings.timerMerged) setTimerTab('rest');
}

function startRestTimer(seconds = 90) {
  if (state.settings.useRestTimer === false) return;
  let p = state.profile;
  let rt = restTimers[p];
  rt.lastDuration = seconds;
  rt.end = Date.now() + seconds * 1000;
  rt.running = true;

  clearInterval(rt.interval);
  rt.interval = setInterval(() => updateRestTimer(p), 1000);

  syncTimerUI();
  updateRestTimer(p);
}

function updateRestTimer(p) {
  let rt = restTimers[p];
  if (!rt.running) return;

  let rem = Math.ceil((rt.end - Date.now()) / 1000);
  let floatText = document.getElementById('rest-timer-text-' + p);
  let topText = document.getElementById('sw' + p + '-rest-time');

  let displayStr = "";
  if (rem <= 0) {
    if (rt.interval) {
      clearInterval(rt.interval);
      rt.interval = null;
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
    }
    displayStr = "WORK";
  } else {
    let m = Math.floor(rem/60);
    let s = rem%60;
    displayStr = `${m}:${s<10?'0':''}${s}`;
  }

  if (floatText) floatText.textContent = displayStr;
  if (topText) topText.textContent = displayStr;
  let moduleDisplay = document.getElementById('timer-rest-display');
  if (moduleDisplay) moduleDisplay.textContent = displayStr;
  let moduleSub = document.getElementById('timer-rest-sub');
  if (moduleSub) moduleSub.textContent = rem <= 0 ? 'REST COMPLETE' : 'REST TIMER - ACTIVE SET';
  // update global header floating timer
  updateGlobalTimer(rt.running ? displayStr : null);
}

function adjustRestTimer(p, seconds) {
  let rt = restTimers[p];
  if (!rt.running) return;
  rt.end += seconds * 1000;
  if (!rt.interval) rt.interval = setInterval(() => updateRestTimer(p), 1000);
  updateRestTimer(p);
}

function closeRestTimer(p) {
  let rt = restTimers[p];
  clearInterval(rt.interval);
  rt.interval = null;
  rt.running = false;
  updateGlobalTimer(null);
  syncTimerUI();
}

function toggleTimerMerge() {
  state.settings.timerMerged = !state.settings.timerMerged;
  saveState();
  syncTimerUI();
}

function getProfileColor(p){return 'var(--g1)';}
function getProfileName(p){ return displayName || 'Not Set'; }

function updateProfileUI(){
  let addBtn=document.getElementById('add-ex-btn');
  if(addBtn) addBtn.style.background='var(--g1)';

  let nav=document.getElementById('nav-'+state.page);
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('p1','p2'));
  if(nav)nav.classList.add('p1');
  syncTimerUI();
}

function autoSaveBW(val){
  let v = parseFloat(val);
  let d = dateKey(state.date);
  if(isNaN(v)){
    delete state.bw[state.profile][d];
  } else {
    state.bw[state.profile][d] = v;
  }
  if(state.page === 'profile') {
    /* BMI removed */
    renderBWHistory();
    renderChart();
  }
  saveState();
}

function updateBMIDisplay(){ /* replaced by fitness level */ }

function hasLoggedData(dateStr,profile){
  let k = `${dateStr}_${profile}`;
  let w = state.workouts[k];
  return w && w.exs.some(e=>e.sets.some(s=>s.w||s.r));
}

function updateDateLabel(){
  let d = state.date;
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  // new single-line label: "WEDNESDAY, JUNE 24, 2026"
  let label = days[d.getDay()].toUpperCase() + ', ' + months[d.getMonth()].toUpperCase() + ' ' + d.getDate() + ', ' + d.getFullYear();
  let lbl = document.getElementById('cur-date-lbl');
  if (lbl) lbl.textContent = label;
  // legacy elements (no-ops if removed from HTML, safe)
  let monthEl = document.getElementById('cur-date-month');
  if (monthEl) monthEl.textContent = months[d.getMonth()].toUpperCase();
  let dstr = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  let dp = document.getElementById('hidden-date-picker');
  if (dp) dp.value = dstr;
}

function updateDateStatusDot(){
  let dot=document.getElementById('date-status-dot');
  if(!dot) return;
  let logged=hasLoggedData(dateKey(state.date), state.profile);
  dot.style.background=logged?getProfileColor(state.profile):'var(--txt3)';
}

function applyDateDirect(val){
  if(val){
    state.date=new Date(val+'T12:00:00');
    updateDateLabel();
    renderExerciseList();
    if(state.page === 'profile') renderProfilePage();
    saveState();
  }
}

function shiftDate(days) {
  let newDate = new Date(state.date);
  newDate.setDate(newDate.getDate() + days);
  state.date = newDate;
  updateDateLabel();
  renderExerciseList();
  if(state.page === 'profile') renderProfilePage();
  saveState();
}

function openAddSplit(){
  document.getElementById('modal-title').textContent='New Split Program';
  document.getElementById('modal-body').innerHTML=`
    <input id="new-split-name" class="add-ex-input u2" placeholder="Split name (e.g. PPL 6-day)" autocomplete="off">
    <div class="ac-list u9" id="new-split-name-ac"></div>
    <input id="new-split-days" class="add-ex-input u3" type="number" placeholder="Number of days" min="1" max="14">
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="addSplit()">Create</button>
    </div>`;
  openModal();
  attachAutocomplete('new-split-name', 'new-split-name-ac', getWorkoutNameSuggestions);
}

function addSplit(){
  let name=document.getElementById('new-split-name').value.trim();
  let days=parseInt(document.getElementById('new-split-days').value)||7;
  if(!name)return;
  SPLITS[name]={days:Array.from({length:days},(v,i)=>({name:'Day '+(i+1),rest:false,color:DAY_COLORS[i%DAY_COLORS.length],exs:[]}))};
  recordWorkoutName(name);
  closeModal();
  state.activeSplit=name;
  state.splitDayView=0;
  renderSplitSelector();
  renderSplitPage();
  saveState();
}

function renderSplitSelector(){
  let html='<div class="split-row">';
  for(let s in SPLITS){
    let active=s===state.activeSplit;
    let cls=active?(state.profile===1?'active-p1':'active-p2'):'';
    html+=`<div class="split-chip ${cls}" onclick="selectSplit('${s}')">${s}</div>`;
  }
  html+='</div>';
  let sel=document.getElementById('split-selector');
  if(sel) sel.innerHTML=html;

  let mainTitle = document.getElementById('split-main-title');
  if (mainTitle) mainTitle.textContent = state.activeSplit || 'Split Library';
  let editBtn = document.getElementById('edit-split-btn');
  if (editBtn) editBtn.style.display = state.activeSplit ? 'flex' : 'none';
}

function selectSplit(s){
  state.activeSplit=s;
  state.splitDayView=0;
  renderSplitSelector();
  renderSplitPage();
  saveState();
}

function getPRCalcHTML(ei, pct = 80) {
  let w=state.workouts[getWorkoutKey()];
  let ex=w.exs[ei];
  let pr=getPR(ex.name,state.profile)||100;
  return `
    <div class="pr-panel">
      <div style="display:flex; justify-content:space-between; align-items:flex-end;">
        <div>
          <div style="font-size:13px;font-weight:600;color:var(--txt2);">1RM PR: <span style="font-weight:800;font-size:15px;color:${getProfileColor(state.profile)};">${pr}kg</span></div>
          <div class="pr-weight" id="pr-wt-${ei}" style="font-size:24px; color:var(--txt); margin-top:4px;">${Math.round(pr*pct/100)}kg</div>
        </div>
        <div class="pr-pct" id="pr-pct-${ei}" style="color:${getProfileColor(state.profile)};">${pct}%</div>
      </div>
      <div class="pr-slider-wrap">
        <input type="range" min="50" max="100" value="${pct}" step="5" id="pr-slider-${ei}" oninput="updatePRCalc(${ei},this.value)" style="flex:1;">
      </div>
      <div style="display:flex; gap:8px; margin-top:12px; flex-wrap:wrap;">
        <button onclick="setNewPR(${ei})" style="flex:1 1 45%; background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:8px 14px;font-size:12px;color:${getProfileColor(state.profile)};cursor:pointer;font-weight:700;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.03em;">Set new 1RM PR</button>
        ${state.settings.showPlateMath !== false ? `<button onclick="openPlateCalc(${ei})" style="flex:1 1 45%; background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:8px 14px;font-size:12px;color:var(--txt);cursor:pointer;font-weight:700;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.03em;">🍽️ Plate Math</button>` : ''}
        ${state.settings.showWarmupGen !== false ? `<button onclick="generateWarmups(${ei})" style="flex:1 1 100%; background:rgba(255,39,65,0.15);border:1px solid rgba(255,39,65,0.3);border-radius:var(--radius);padding:8px 14px;font-size:12px;color:var(--o1);cursor:pointer;font-weight:700;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.04em;">🔥 Generate Warm-up Sets</button>` : ''}
      </div>
    </div>`;
}

function generateWarmups(ei) {
  let w = state.workouts[getWorkoutKey()];
  let ex = w.exs[ei];
  let slider = document.getElementById('pr-slider-'+ei);
  let pct = slider ? slider.value : 80;
  let pr = getPR(ex.name, state.profile) || 100;
  let target = Math.round(pr * pct / 100);

  let w1 = Math.round((target * 0.5) / 2.5) * 2.5;
  let w2 = Math.round((target * 0.7) / 2.5) * 2.5;
  let w3 = Math.round((target * 0.85) / 2.5) * 2.5;

  let warmups = [
    {w: w1, r: '10', uni: false, type: 'warmup'},
    {w: w2, r: '6', uni: false, type: 'warmup'},
    {w: w3, r: '3', uni: false, type: 'warmup'}
  ];

  ex.sets = warmups.concat(ex.sets);
  saveState();
  renderExerciseList();
}

function openPlateCalc(ei) {
  let w=state.workouts[getWorkoutKey()];
  let pr = getPR(w.exs[ei].name, state.profile) || 100;
  let slider = document.getElementById('pr-slider-'+ei);
  let pct = slider ? slider.value : 80;
  let target = Math.round(pr*pct/100);

  document.getElementById('modal-title').textContent='Barbell Plate Math';
  document.getElementById('modal-body').innerHTML=`
    <div style="text-align:center;">
      <div class="u15">Target Weight (kg)</div>
      <input id="plate-target-input" type="number" value="${target}" style="background:var(--bg3);border:2px solid ${getProfileColor(state.profile)};border-radius:var(--radius);padding:12px;color:var(--txt);font-size:24px;font-weight:800;text-align:center;width:120px;margin-bottom:20px;" oninput="calcPlates(this.value)">

      <div class="u15">Assumes ${state.settings.barbellWeight}kg Barbell</div>
      <div id="plate-results" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:24px;"></div>

      <div class="modal-btn-row">
        <button class="modal-btn modal-cancel" onclick="closeModal()">Close</button>
      </div>
    </div>
  `;
  openModal();
  calcPlates(target);
}

function calcPlates(targetStr) {
  let target = parseFloat(targetStr);
  let bar = state.settings.barbellWeight || 20;
  let res = document.getElementById('plate-results');

  if(isNaN(target) || target < bar) {
    res.innerHTML = `<span style="color:var(--txt3);font-size:14px;font-weight:600;">Weight must be > ${bar}kg (empty bar)</span>`;
    return;
  }

  let perSide = (target - bar) / 2;
  let plates = state.settings.plates.slice().sort((a, b) => b - a);
  let needed = [];

  for(let p of plates) {
    while(perSide >= p) {
      needed.push(p);
      perSide -= p;
    }
  }

  if(needed.length === 0) {
    res.innerHTML = `<span style="color:var(--txt2);font-size:14px;font-weight:600;">Just the bar!</span>`;
    return;
  }

  res.innerHTML = needed.map(p => `
    <div style="background:var(--bg4); border:1px solid var(--border2); border-radius:var(--radius); width:48px; height:48px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:14px; color:var(--txt);">${p}</div>
  `).join('');
}

function openSetTypeSelector(ei, si) {
  document.getElementById('modal-title').textContent = 'Select Set Type';
  document.getElementById('modal-body').innerHTML = `
    <div style="display:flex; flex-direction:column; gap:8px;">
      <button class="modal-btn" style="background:var(--bg4);color:var(--txt);" onclick="setSetType(${ei},${si},'normal')">Normal Working Set</button>
      <button class="modal-btn" style="background:rgba(255,39,65,0.15);color:var(--o1);border:1px solid rgba(255,39,65,0.3);" onclick="setSetType(${ei},${si},'warmup')">Warm-up Set</button>
      <button class="modal-btn" style="background:rgba(255,0,255,0.15);color:#ff00ff;border:1px solid rgba(255,0,255,0.3);" onclick="setSetType(${ei},${si},'drop')">Drop Set</button>
      <button class="modal-btn u16" onclick="setSetType(${ei},${si},'failure')">To Failure</button>
      <button class="modal-btn" style="background:rgba(204,255,0,0.15);color:#ccff00;border:1px solid rgba(204,255,0,0.3);" onclick="setSetType(${ei},${si},'pyramid')">Pyramid</button>
      <button class="modal-btn u16" onclick="setSetType(${ei},${si},'timed')">Timed Set</button>
      <button class="modal-btn" style="background:var(--bg3);color:var(--txt2);margin-top:12px;border:1px solid var(--border2);" onclick="closeModal()">Cancel</button>
    </div>
  `;
  openModal();
}

function setSetType(ei, si, type) {
  let w = state.workouts[getWorkoutKey()];
  w.exs[ei].sets[si].type = type;
  closeModal();
  renderExerciseList();
  saveState();
}
function toggleUni(ei, si) {
  let w = state.workouts[getWorkoutKey()];
  w.exs[ei].sets[si].uni = !w.exs[ei].sets[si].uni;
  renderExerciseList();
  saveState();
}
function toggleBWQuick(){
  let inp = document.getElementById('bw-quick-val');
  let btn = document.getElementById('bw-quick-wrap');
  if(!inp) return;
  let todayBW = (state.bw[state.profile] || {})[dateKey(state.date)] || '';
  if(inp.style.display === 'none'){
    inp.style.display = 'block';
    inp.value = todayBW || '';
    inp.focus();
    let lbl = document.getElementById('bw-quick-lbl');
    if(lbl) lbl.textContent = todayBW ? todayBW+'kg' : 'BW';
  } else {
    saveBWQuick();
  }
}
function saveBWQuick(){
  let inp = document.getElementById('bw-quick-val');
  if(!inp) return;
  let v = parseFloat(inp.value);
  if(v && v > 0){
    if(!state.bw[state.profile]) state.bw[state.profile] = {};
    state.bw[state.profile][dateKey(state.date)] = v;
    saveState();
    let lbl = document.getElementById('bw-quick-lbl');
    if(lbl) lbl.textContent = v+'kg';
  }
  inp.style.display = 'none';
}
function autoSaveBW(v){
  let val = parseFloat(v);
  if(!val || val <= 0) return;
  if(!state.bw[state.profile]) state.bw[state.profile] = {};
  state.bw[state.profile][dateKey(state.date)] = val;
  saveState();
  // update quick button label if visible
  let lbl = document.getElementById('bw-quick-lbl');
  if(lbl) lbl.textContent = val+'kg';
}

function renderExerciseList(){
  updateDateStatusDot();
  let w=state.workouts[getWorkoutKey()];
  let p=state.profile;
  let html='';

  let openPanels = { expand: {}, info: {}, hist: {}, pr: {}, note: {}, prSlider: {} };
  let listEl = document.getElementById('exercise-list');
  if (listEl) {
    listEl.querySelectorAll('.ex-item').forEach(item => {
      let ei = item.id.split('-')[1];
      if(document.getElementById('ex-expand-'+ei)?.style.display === 'block') openPanels.expand[ei] = true;
      if(document.getElementById('info-panel-'+ei)?.style.display === 'block') openPanels.info[ei] = true;
      if(document.getElementById('hist-panel-'+ei)?.style.display === 'block') openPanels.hist[ei] = true;
      if(document.getElementById('pr-panel-'+ei)?.style.display === 'block') {
        openPanels.pr[ei] = true;
        let slider = document.getElementById('pr-slider-'+ei);
        if(slider) openPanels.prSlider[ei] = slider.value;
      }
      if(document.getElementById('note-panel-'+ei)?.style.display === 'block') openPanels.note[ei] = true;
    });
  }

  if(!w||!w.exs||w.exs.length===0){
    let logged=hasLoggedData(dateKey(state.date), p);
    html=`<div class="empty-day-box">
      <div style="font-size:15px; font-weight:800; color:var(--txt); margin-bottom: 8px;">Ready to train?</div>
      <div style="font-size:13px; color:var(--txt3); line-height: 1.4; margin-bottom:16px;">
        ${logged ? 'No exercises logged for this profile today.' : 'Add your first exercise to start tracking, or import a split from your library.'}
      </div>
      <button class="import-btn" style="margin-bottom:12px; margin-top:0;" onclick="openAddExerciseModal()">+ Add New Exercise</button>
      <button class="import-btn" style="background:var(--bg3); color:var(--txt); border:1px solid var(--border2); box-shadow:none; margin-top:0;" onclick="goPage('split')">Browse Splits Library</button>
    </div>`;
  } else {
    let simpleMode = state.settings.simpleMode !== false;
    w.exs.forEach((ex,ei)=>{
      let histHtml=renderHistory(ex.name);
      let prPR=getPR(ex.name,p);
      let tagClass = ex.tag === 'OPENER' ? 'ex-tag-opener' : (ex.tag && ex.tag.includes('DROP') ? 'ex-tag-drop' : 'ex-tag-default');
      let tagHtml = ex.tag ? `<span class="day-ex-tag ${tagClass}">${ex.tag}</span>` : '';
      let showPRCalc = state.settings.showPRCalc !== false;
      let showNotes = state.settings.showNotes !== false;
      let infoBtnHtml = ex.splitInfo && (ex.splitInfo.method || ex.splitInfo.tempo || ex.splitInfo.notes) ? `<button class="ex-action-btn info" onclick="event.stopPropagation();toggleInfoPanel(${ei})">INFO</button>` : '';
      let exRestTime = parseRestTime(ex.splitInfo?.rest, 90);
      let restBadgeHtml = state.settings.useRestTimer !== false ? `<button type="button" class="ex-badge-rest" onclick="event.stopPropagation();startRestTimer(${exRestTime})">&#9201; ${fmtRestBadge(exRestTime)}</button>` : '';
      let prBadgeHtml = showPRCalc ? `<span class="ex-badge-pr">PR</span>` : '';

      html+=`<div class="ex-item" id="ex-${ei}" data-idx="${ei}">
        <div class="ex-header" onclick="toggleExExpand(${ei})">
          <div class="day-ex-handle reorder-handle-workout" onclick="event.stopPropagation()" aria-label="Drag to reorder" style="display:none;">⠿</div>
          <div class="ex-name-wrap">
            <div class="ex-title-row">
              <div class="ex-name" title="${ex.name}">${ex.name}</div>
              <div class="ex-badges">${prBadgeHtml}${restBadgeHtml}</div>
            </div>
            <div class="ex-sub-row">
              ${tagHtml}
              <div class="ex-meta">${ex.sets.length} set${ex.sets.length!==1?'s':''}${prPR ? '' : ''}</div>
            </div>
          </div>
          <div class="ex-actions-bottom" onclick="event.stopPropagation()">
            ${infoBtnHtml}
            <button class="ex-action-btn hist" onclick="toggleHistPanel(${ei})">HIST</button>
            ${showNotes ? `<button class="ex-action-btn note" onclick="toggleNotePanel(${ei})">NOTE</button>` : ''}
          </div>
        </div>
      <div class="ex-expand" id="ex-expand-${ei}" style="display:${openPanels.expand[ei]?'block':'none'};">
        ${ex.splitInfo ? `
        <div id="info-panel-${ei}" style="display:${openPanels.info[ei]?'block':'none'}; margin-bottom:12px;">
          <div class="u10">Program Instructions</div>
          <div style="background:var(--bg4);border-radius:var(--radius);padding:10px 12px;display:flex;flex-direction:column;gap:8px;">
            ${ex.splitInfo.method ? `<div><span class="u4">Method</span><span class="u11">${ex.splitInfo.method}</span></div>` : ''}
            ${ex.splitInfo.tempo ? `<div><span class="u4">Tempo</span><span class="u11">${ex.splitInfo.tempo}</span></div>` : ''}
            ${ex.splitInfo.rest ? `<div><span class="u4">Rest</span><span class="u11">${ex.splitInfo.rest}</span></div>` : ''}
            ${ex.splitInfo.notes ? `<div><span class="u4">Key Note</span><span style="color:${getProfileColor(state.profile)};font-size:13px;font-weight:600;">${ex.splitInfo.notes}</span></div>` : ''}
          </div>
        </div>
        ` : ''}
        <div id="hist-panel-${ei}" style="display:${openPanels.hist[ei]?'block':'none'};">
          <div class="u10">History</div>
          ${histHtml}
          <div class="u17"></div>
        </div>
        ${showPRCalc ? `
        <div id="pr-panel-${ei}" style="display:${openPanels.pr[ei]?'block':'none'};">
          <div class="u10">PR Calculator</div>
          <div id="pr-calc-${ei}">
            ${openPanels.pr[ei] ? getPRCalcHTML(ei, openPanels.prSlider[ei]) : ''}
          </div>
          <div class="u17"></div>
        </div>
        ` : ''}
        ${showNotes ? `
        <div id="note-panel-${ei}" style="display:${openPanels.note[ei]?'block':'none'};">
          <textarea id="note-txt-${ei}" style="background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:10px;color:var(--txt);font-size:13px;width:100%;resize:none;height:80px;" placeholder="Notes for this exercise...">${ex.note||''}</textarea>
          <button onclick="saveNote(${ei})" style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius);padding:8px 14px;color:var(--txt2);font-weight:700;font-size:12px;cursor:pointer;margin-top:8px;">Save note</button>
          <div style="height:8px;"></div>
        </div>
        ` : ''}
        <div class="set-labels">
            <div class="set-label">Type</div>
            <div class="set-label">Prev</div>
            <div class="set-label">kg</div>
            <div class="set-label">Reps</div>
            <div class="set-label" title="Unilateral (one side at a time)">UNI</div>
            <div class="set-label"></div>
          </div>
          ${(function(){
            let workingSetCount = 0;
            let warmupCount = 0;
            return ex.sets.map((s,si)=>{
              let prev=getPrevSet(ex.name,si);
              let st = s.type || 'normal';
              let label = '';
              let typeClass = '';

              if (st === 'warmup') { warmupCount++; label = 'W' + warmupCount; typeClass = 'type-warmup'; }
              else if (st === 'drop') { label = 'DROP'; typeClass = 'type-drop'; }
              else if (st === 'failure') { label = 'FAIL'; typeClass = 'type-failure'; }
              else if (st === 'pyramid') { label = 'PYR'; typeClass = 'type-pyramid'; }
              else if (st === 'timed') { label = 'TIME'; typeClass = 'type-timed'; }
              else { workingSetCount++; label = workingSetCount; typeClass = 'type-normal'; }

              return `<div class="set-row">
                <button class="set-num-btn ${typeClass}" onclick="openSetTypeSelector(${ei},${si})" title="Tap to change set type">${label}</button>
                <div class="set-prev" title="${prev}">${prev}</div>
                <input class="set-input" type="number" value="${s.w||''}" placeholder="0" oninput="updateSet(${ei},${si},'w',this.value)" step="0.5" min="0">
                <input class="set-input" type="number" value="${s.r||''}" placeholder="0" oninput="updateSet(${ei},${si},'r',this.value)" min="0">
                <button class="set-uni-btn ${s.uni?'active':''}" onclick="toggleUni(${ei},${si})" title="Unilateral (one side at a time)">${s.uni?'UNI':'—'}</button>
                <button class="set-delete" onclick="removeSet(${ei},${si})">✕</button>
              </div>`;
            }).join('');
          })()}
          <div class="u8">
            <button class="add-set-btn" onclick="addSet(${ei}, 'normal')">+ Add Set</button>
          </div>

          <div style="display:flex;gap:8px;margin-top:16px;">
            <button class="ex-footer-btn edit" onclick="editLoggedExerciseName(${ei})">&#9998; Edit Name</button>
            <button class="ex-footer-btn remove" onclick="removeExercise(${ei})">Remove</button>
          </div>
        </div>
      </div>`;
    });

    html += `<button class="add-set-btn add-exercise-btn" onclick="openAddExerciseModal()">+ Add New Exercise</button>`;
  }
  document.getElementById('exercise-list').innerHTML=html;
  initExListDragHandlers();
  // Restore reorder mode if active
  if(reorderMode && reorderMode.workout) {
    document.querySelectorAll('.reorder-handle-workout').forEach(h => h.style.display = 'flex');
    let btn = document.getElementById('reorder-toggle-workout');
    if(btn){btn.style.background='rgba(0,243,255,0.15)';btn.style.borderColor='var(--secondary)';btn.style.color='var(--secondary)';}
  }
}

function initExListDragHandlers(){
  let container = document.getElementById('exercise-list');
  if(!container) return;
  container.querySelectorAll('.ex-item > .ex-header > .reorder-handle-workout').forEach(handle=>{
    handle.onpointerdown = function(e){
      e.preventDefault();
      let item = handle.closest('.ex-item');
      startGenericDrag(item, container, '.ex-item', e, function(orderedIdxs){
        let w = state.workouts[getWorkoutKey()];
        if (!w || !w.exs) return;
        w.exs = orderedIdxs.map(idx => w.exs[idx]);
        renderExerciseList();
        saveState();
      });
    };
  });
}

function startGenericDrag(item, container, itemSelector, startEvent, onCommit){
  let startY = startEvent.clientY;
  let rect = item.getBoundingClientRect();
  item.classList.add('dragging');
  item.style.zIndex = 50;
  let placeholder = document.createElement('div');
  placeholder.className = 'day-ex-placeholder';
  placeholder.style.height = rect.height + 'px';
  item.parentNode.insertBefore(placeholder, item.nextSibling);

  function onMove(ev){
    let clientY = ev.clientY;
    let dy = clientY - startY;
    item.style.transform = `translateY(${dy}px)`;
    let siblings = Array.from(container.querySelectorAll(itemSelector + ':not(.dragging)'));
    for(let other of siblings){
      let r = other.getBoundingClientRect();
      let mid = r.top + r.height/2;
      if(clientY < mid){
        if(other.previousElementSibling !== placeholder) container.insertBefore(placeholder, other);
        break;
      } else if(other === siblings[siblings.length-1]){
        if(other.nextElementSibling !== placeholder) container.insertBefore(placeholder, other.nextElementSibling);
      }
    }
  }

  function onUp(){
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
    container.insertBefore(item, placeholder);
    placeholder.remove();
    item.classList.remove('dragging');
    item.style.transform = '';
    item.style.zIndex = '';
    let items = Array.from(container.querySelectorAll(itemSelector));
    let orderedIdxs = items.map(it => parseInt(it.dataset.idx,10));
    onCommit(orderedIdxs);
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onUp);
}

function importSplitToToday() {
  let split=SPLITS[state.activeSplit];
  if(!split) return;
  let day=split.days[state.splitDayView];
  if(!day || day.rest) return;

  let k=getWorkoutKey();

  let exs = day.exs.map(e => {
    let nSets = parseInt(e.sets);
    if (isNaN(nSets) || nSets < 1) nSets = 1;
    return {
      name: e.name,
      tag: e.tag || '',
      splitInfo: {
        method: e.weightMethod || '',
        tempo: e.tempo || '',
        rest: e.rest || '',
        notes: e.notes || ''
      },
      note: '',
      sets: Array.from({length: nSets}, () => ({w:'', r:'', uni:false, type:'normal'}))
    };
  });

  if(!state.workouts[k]) state.workouts[k] = { exs: [] };
  state.workouts[k].exs = state.workouts[k].exs.concat(exs);
  renderExerciseList();
  saveState();
  goPage('workout');
}

function toggleInfoPanel(ei){
  let el=document.getElementById('info-panel-'+ei);
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  el.style.display=el.style.display==='none'?'block':'none';
}

function toggleMorePanel(ei){
  let el=document.getElementById('ex-more-'+ei);
  if(!el) return;
  let isOpen = el.style.display === 'flex';
  el.style.display = isOpen ? 'none' : 'flex';
  // Also open expand panel so that info/hist/pr/note panels inside it are accessible
  if(!isOpen){
    let expand = document.getElementById('ex-expand-'+ei);
    if(expand) expand.style.display = 'block';
  }
}

function toggleExExpand(ei){
  let el=document.getElementById('ex-expand-'+ei);
  let opening = el.style.display==='none';
  el.style.display = opening ? 'block' : 'none';
  // When closing expand, also hide the more-row
  if(!opening){
    let moreRow = document.getElementById('ex-more-'+ei);
    if(moreRow) moreRow.style.display = 'none';
  }
  if(opening){
    requestAnimationFrame(()=>{
      el.scrollIntoView({behavior:'smooth', block:'nearest'});
    });
  }
}
function toggleHistPanel(ei){
  let el=document.getElementById('hist-panel-'+ei);
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  el.style.display=el.style.display==='none'?'block':'none';
}
function togglePRPanel(ei){
  let el=document.getElementById('pr-panel-'+ei);
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  el.style.display=el.style.display==='none'?'block':'none';
  if(el.style.display==='block'){
    document.getElementById('pr-calc-'+ei).innerHTML=getPRCalcHTML(ei);
  }
}
function toggleNotePanel(ei){
  let el=document.getElementById('note-panel-'+ei);
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  el.style.display=el.style.display==='none'?'block':'none';
}
function saveNote(ei){
  let w=state.workouts[getWorkoutKey()];
  w.exs[ei].note=document.getElementById('note-txt-'+ei).value;
  saveState();
}
function updatePRCalc(ei,pct){
  let w=state.workouts[getWorkoutKey()];
  let pr=getPR(w.exs[ei].name,state.profile)||100;
  document.getElementById('pr-pct-'+ei).textContent=pct+'%';
  document.getElementById('pr-wt-'+ei).textContent=Math.round(pr*pct/100)+'kg';
}

function setNewPR(ei){
  let w=state.workouts[getWorkoutKey()];
  let ex=w.exs[ei];
  document.getElementById('modal-title').textContent='New PR: '+ex.name;
  document.getElementById('modal-body').innerHTML=`
    <input id="new-pr-val" class="add-ex-input u3" type="number" placeholder="1RM weight (kg)" step="0.5">
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="savePR('${ex.name.replace(/'/g,"\\'")}')">Save PR</button>
    </div>`;
  openModal();
}

function savePR(name, valueOverride = null){
  let v = valueOverride || parseFloat(document.getElementById('new-pr-val').value);
  if(!v||isNaN(v))return;

  let canonicalName = name;
  for(let key in state.prData) {
      if (isSameEx(key, name)) {
          canonicalName = key;
          break;
      }
  }
  if(!state.prData[canonicalName]) state.prData[canonicalName] = {};
  state.prData[canonicalName][state.profile] = {w: v, date: dateKey(state.date)};

  if(!valueOverride) {
    closeModal();
    renderExerciseList();
    saveState();
    
  }
}

const PR_BURST_QUOTES=["NEW PR UNLOCKED! 🏆","LIMITS SHATTERED!","BEAST MODE: CONFIRMED","STRONGER THAN YESTERDAY!","THE IRON NEVER LIES!","YOU ARE THE PR!","HISTORY MADE. RIGHT NOW."];
function showPRBurst(exName, weight){
  let old = document.getElementById('pr-burst-overlay');
  if(old) old.remove();
  let q = PR_BURST_QUOTES[Math.floor(Math.random()*PR_BURST_QUOTES.length)];
  let wrap = document.createElement('div');
  wrap.id = 'pr-burst-overlay';
  wrap.className = 'pr-burst-wrap';
  wrap.innerHTML = `<div class="pr-burst-inner">
    <div>${q}</div>
    <div class="pr-burst-sub">${exName} · ${weight}kg</div>
  </div>`;
  document.body.appendChild(wrap);
  setTimeout(()=>{ if(wrap.parentNode) wrap.remove(); }, 3000);
}

function savePRAuto(name, weight, dateKeyStr, profile) {
  let canonicalName = name;
  for(let key in state.prData) {
      if (isSameEx(key, name)) {
          canonicalName = key;
          break;
      }
  }
  if(!state.prData[canonicalName]) state.prData[canonicalName] = {};
  let currentPR = state.prData[canonicalName][profile];
  if (!currentPR || weight > currentPR.w) {
      state.prData[canonicalName][profile] = {w: weight, date: dateKeyStr};
      return true;
  }
  return false;
}

function getPR(name, p) {
  let maxPR = null;
  for(let key in state.prData) {
      if (isSameEx(key, name) && state.prData[key][p]) {
          let w = state.prData[key][p].w;
          if (maxPR === null || w > maxPR) maxPR = w;
      }
  }
  return maxPR;
}

function getPrevSet(exName, si){
  let currentKey = getWorkoutKey();
  let dates=Object.keys(state.workouts)
    .filter(k => k.endsWith('_'+state.profile) && k < currentKey)
    .sort().reverse();

  for(let k of dates){
    let w=state.workouts[k];
    let ex=w.exs.find(e=>isSameEx(e.name, exName));
    if(ex&&ex.sets[si]&&ex.sets[si].w&&ex.sets[si].r){
      return ex.sets[si].w+'×'+ex.sets[si].r;
    }
  }
  return '—';
}

function renderHistory(exName){
  let rows=[];
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let currentKey = getWorkoutKey();

  for(let k in state.workouts){
    if(k.endsWith('_'+state.profile) && k !== currentKey){
      let w=state.workouts[k];
      let ex=w.exs.find(e=>isSameEx(e.name, exName));
      if(ex){
        let dstr=k.split('_')[0];
        let d=new Date(dstr+'T12:00:00');
        let sets=ex.sets.filter(s=>s.w&&s.r);
        if(sets.length>0){
          rows.push({dstr,date:d.getDate()+' '+months[d.getMonth()],sets});
        }
      }
    }
  }
  if(!rows.length)return '<div style="color:var(--txt3);font-size:12px;">No past history.</div>';
  rows.sort((a,b)=>a.dstr<b.dstr?-1:1);
  return rows.slice(-4).reverse().map(r=>`
    <div class="ex-history-row">
      <span class="ex-history-date">${r.date}</span>
      <span style="color:var(--txt);font-weight:600;">${r.sets.map(s=>{
        let typeInd='';
        if(s.type==='warmup')typeInd='<span style="color:var(--o1);font-size:10px;margin-left:2px;">W</span>';
        if(s.type==='drop')typeInd='<span style="color:#ff00ff;font-size:10px;margin-left:2px;">DROP</span>';
        if(s.type==='failure')typeInd='<span style="color:#a78bfa;font-size:10px;margin-left:2px;">FAIL</span>';
        if(s.type==='pyramid')typeInd='<span style="color:#eab308;font-size:10px;margin-left:2px;">PYR</span>';
        if(s.type==='timed')typeInd='<span style="color:#38bdf8;font-size:10px;margin-left:2px;">TIME</span>';
        return s.w+'kg×'+s.r+typeInd;
      }).join(', ')}</span>
    </div>`).join('');
}

function updateSet(ei,si,field,val){
  let w=state.workouts[getWorkoutKey()];
  w.exs[ei].sets[si][field]=val;
  updateDateStatusDot();

  let sw = w.exs[ei].sets[si].w;
  let sr = w.exs[ei].sets[si].r;

  if (field === 'r' && parseFloat(val) > 0 && sw && state.settings.useRestTimer !== false) {
     let exRestTime = parseRestTime(w.exs[ei].splitInfo?.rest, 90);
     startRestTimer(exRestTime);
  }

  if (sw && sr) {
    let weight = parseFloat(sw);
    let reps = parseInt(sr);
    if (!isNaN(weight) && weight > 0 && !isNaN(reps) && reps > 0) {
      let exName = w.exs[ei].name;
      let updated = savePRAuto(exName, weight, dateKey(state.date), state.profile);
      if (updated) {
        let prLabel = document.getElementById('pr-lbl-'+ei);
        if (prLabel) prLabel.textContent = '· PR: ' + weight + 'kg';
        showPRBurst(w.exs[ei].name, weight);
        if (state.page === 'pr') renderPRPage();
      }
    }
  }

  saveState();
}

function removeSet(ei, si) {
  let w=state.workouts[getWorkoutKey()];
  w.exs[ei].sets.splice(si, 1);
  renderExerciseList();
  saveState();
}

function addSet(ei, defaultType = 'normal'){
  let w=state.workouts[getWorkoutKey()];
  w.exs[ei].sets.push({w:'',r:'',uni:false,type:defaultType});
  renderExerciseList();
  saveState();
}

function removeExercise(ei){
  let w=state.workouts[getWorkoutKey()];
  let ex=w.exs[ei];
  let setCount = ex && ex.sets ? ex.sets.length : 0;
  let msg = setCount > 0
    ? `Remove "${ex.name}" and its ${setCount} logged set${setCount!==1?'s':''} from today?`
    : `Remove "${ex.name}" from today?`;
  if (!confirm(msg)) return;
  w.exs.splice(ei,1);
  renderExerciseList();
  saveState();
}

function editLoggedExerciseName(ei){
  let w=state.workouts[getWorkoutKey()];
  let ex=w.exs[ei];
  document.getElementById('modal-title').textContent='Edit Exercise Name';
  document.getElementById('modal-body').innerHTML=`
    <input id="edit-logged-ex-name" class="add-ex-input u2" type="text" value="${ex.name.replace(/"/g,'&quot;')}" autocomplete="off">
    <div class="ac-list u9" id="edit-logged-ex-name-ac"></div>
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmEditLoggedExerciseName(${ei})">Save</button>
    </div>`;
  openModal();
  attachAutocomplete('edit-logged-ex-name', 'edit-logged-ex-name-ac', getExerciseSuggestions);
}

function confirmEditLoggedExerciseName(ei){
  let newName=document.getElementById('edit-logged-ex-name').value.trim();
  if(!newName) return;
  let w=state.workouts[getWorkoutKey()];
  w.exs[ei].name=newName;
  recordExerciseName(newName);
  closeModal();
  renderExerciseList();
  saveState();
}

function openAddExerciseModal() {
  document.getElementById('modal-title').textContent = 'Add Exercise';
  document.getElementById('modal-body').innerHTML = `
    <div class="u19">
      <label class="u20">Exercise Name</label>
      <input class="add-ex-input u2" type="text" id="new-ex-name-modal" placeholder="e.g. Leg Extension" autocomplete="off">
      <div class="ac-list" id="new-ex-name-modal-ac"></div>
    </div>
    <div class="u19">
      <label class="u20">Execution Style (Optional Tag)</label>
      <select id="new-ex-tag-modal" class="add-ex-input" style="width:100%; background:var(--bg4); border:1px solid var(--border2); color:var(--txt);">
          <option value="">Normal (No Tag)</option>
          <option value="MAIN COMPOUND">Main Compound</option>
          <option value="DROP SET">Drop Set Focus</option>
          <option value="SUPERSET">Superset</option>
          <option value="TIMED">Timed Workout</option>
          <option value="PUMP">Pump / Burnout</option>
          <option value="FINISHER">Finisher</option>
      </select>
      <div style="font-size:11px; color:var(--txt3); margin-top:6px; line-height:1.4;">
          Note: This is just the overall label. You can configure individual sets as 'Drop Set', 'Warm-up', etc. directly in the tracker.
      </div>
    </div>
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmAddExercise()">Add to Workout</button>
    </div>
  `;
  openModal();
  attachAutocomplete('new-ex-name-modal', 'new-ex-name-modal-ac', getExerciseSuggestions);
}

function confirmAddExercise() {
  let name = document.getElementById('new-ex-name-modal').value.trim();
  let tag = document.getElementById('new-ex-tag-modal').value;
  if(!name) return;
  let k = getWorkoutKey();
  if(!state.workouts[k]) state.workouts[k] = {exs:[]};
  state.workouts[k].exs.push({name, tag, splitInfo:null, note:'', sets:[{w:'', r:'', uni:false, type:'normal'}]});
  recordExerciseName(name);
  closeModal();
  renderExerciseList();
  saveState();
}

function renderHistoryPage(){
  let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let daysByDate={};
  for(let k in state.workouts){
    let parts=k.split('_');
    let date=parts[0],profile=parseInt(parts[1]);
    let w=state.workouts[k];
    if(!w.exs.some(e=>e.sets.some(s=>s.w||s.r)))continue;
    if(!daysByDate[date])daysByDate[date]={};
    daysByDate[date][profile]=w;
  }
  let dates=Object.keys(daysByDate).sort().reverse();
  if(!dates.length){
    document.getElementById('history-list').innerHTML='<div class="u13">No workouts yet.<br><span class="u5">Train to see history here.</span></div>';
    return;
  }
  let html='';
  dates.forEach((date)=>{
    let d=new Date(date+'T12:00:00');
    let data=daysByDate[date];
    let dayNames=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    html+=`<div class="hist-day">
      <div class="hist-day-header">
        <div style="display:flex;align-items:center;gap:10px;">
          <div class="hist-day-num">${d.getDate()}</div>
          <div>
            <div class="hist-day-date">${dayNames[d.getDay()]}, ${months[d.getMonth()]} ${d.getFullYear()}</div>
          </div>
        </div>
      </div>
      <div class="hist-card">
        <div class="hist-profiles single">`;
    let prof = 1;
    let w=data[prof];
    html+=`<div class="hist-profile-col">`;
    let bw=state.bw[prof][date];
    if(bw)html+=`<div style="font-size:11px;font-weight:700;color:var(--txt2);margin-bottom:8px;">BW: ${bw}kg</div>`;
    if(w){
      w.exs.forEach(ex=>{
        let doneSets=ex.sets.filter(s=>s.w||s.r);
        if(!doneSets.length)return;
        html+=`<div class="hist-ex-name">${ex.name}</div>`;
        doneSets.forEach(s=>{
          let typeInd='';
          if(s.type==='warmup')typeInd='<span style="color:var(--o1);font-size:10px;margin-left:4px;font-weight:800;">W</span>';
          if(s.type==='drop')typeInd='<span style="color:#ff00ff;font-size:10px;margin-left:4px;font-weight:800;">DROP</span>';
          if(s.type==='failure')typeInd='<span style="color:#a78bfa;font-size:10px;margin-left:4px;font-weight:800;">FAIL</span>';
          if(s.type==='pyramid')typeInd='<span style="color:#eab308;font-size:10px;margin-left:4px;font-weight:800;">PYR</span>';
          if(s.type==='timed')typeInd='<span style="color:#38bdf8;font-size:10px;margin-left:4px;font-weight:800;">TIME</span>';
          let uniInd = s.uni ? `<span style="color:var(--secondary);font-size:10px;margin-left:4px;">UNI</span>` : '';
          if(s.w||s.r)html+=`<div class="hist-set-row">${s.w||'?'}kg × ${s.r||'?'}${uniInd}${typeInd}</div>`;
        });
      });
    } else {html+='<div style="color:var(--txt3);font-size:12px;font-style:italic;">No data</div>';}
    html+='</div>';
    html+=`</div></div></div>`;
  });
  document.getElementById('history-list').innerHTML=html;
}

function renderSplitPage(){
  let split=SPLITS[state.activeSplit];
  if(!split){document.getElementById('split-day-tabs').innerHTML='';document.getElementById('split-day-content').innerHTML='<div style="color:var(--txt2);padding:20px;">No split selected.</div>';return;}

  let tabHtml='';
  split.days.forEach((d,i)=>{
    let active=i===state.splitDayView;
    tabHtml+=`<div class="split-tab ${active?'active':''}" onclick="selectSplitTab(${i})">DAY ${i+1}</div>`;
  });
  document.getElementById('split-day-tabs').innerHTML=tabHtml;

  let day=split.days[state.splitDayView];
  let html=`<div class="day-card">
    <div class="day-header">
      <div style="min-width:0;flex:1;">
        <div class="day-label">DAY ${state.splitDayView+1}</div>
        <div class="day-name serif-title" title="${day.name}">${day.name}</div>
      </div>
      <div class="day-header-actions" style="flex-shrink:0;">
        <button onclick="showRules()" style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius);padding:6px 10px;color:var(--txt);font-size:11px;font-weight:800;cursor:pointer;margin-right:4px;">RULES</button>
        <div class="icon-btn" onclick="renameDay(${state.splitDayView})" aria-label="Rename day">✎</div>
        <div class="icon-btn" onclick="addExToSplit(${state.splitDayView})" aria-label="Add exercise">+</div>
      </div>
    </div>
    <div class="day-ex">`;

  if(day.rest){
    html+='<div style="color:var(--txt2);font-size:14px;font-weight:500;padding:14px 0;text-align:center;">Rest day — recovery is part of the program.</div>';
  } else if(!day.exs.length) {
    html+='<div style="color:var(--txt3);font-size:14px;padding:14px 0;text-align:center;">No exercises mapped yet. Tap + to add.</div>';
  } else {
    html+=`<button onclick="importSplitToToday()" class="import-btn " style="margin:4px 0 16px;">IMPORT DAY TO ACTIVE WORKOUT</button>`;

    day.exs.forEach((ex,i)=>{
      let tagColor=TAG_COLORS[ex.tag]||'#888780';
      html+=`<div class="day-ex-item" data-idx="${i}">
        <div class="day-ex-row">
          <div class="day-ex-handle reorder-handle-split" aria-label="Drag to reorder" style="margin-top:4px;display:none;">⠿</div>
          <div class="day-ex-num" onclick="toggleSplitExDetail(${i})">${i+1}</div>
          <div class="day-ex-name" onclick="toggleSplitExDetail(${i})" title="${ex.name}">${ex.name}</div>
          ${ex.tag?`<span class="day-ex-tag" style="background:${tagColor}22;color:${tagColor};border:1px solid ${tagColor}44;margin-top:2px;">${ex.tag}</span>`:''}
          <div class="icon-btn" onclick="event.stopPropagation();editSplitEx(${i})" aria-label="Edit exercise" style="margin-left:8px;">✎</div>
        </div>
        <div class="day-ex-detail u7" id="split-ex-detail-${i}">
          <div class="day-ex-grid">
            <div class="day-ex-field"><div class="day-ex-field-label">Sets</div><div class="day-ex-field-val">${ex.sets||'—'}</div></div>
            <div class="day-ex-field"><div class="day-ex-field-label">Reps</div><div class="day-ex-field-val">${ex.reps||'—'}</div></div>
            <div class="day-ex-field full"><div class="day-ex-field-label">Weight Method</div><div class="day-ex-field-val">${ex.weightMethod||'—'}</div></div>
            <div class="day-ex-field"><div class="day-ex-field-label">Tempo</div><div class="day-ex-field-val">${ex.tempo||'—'}</div></div>
            <div class="day-ex-field"><div class="day-ex-field-label">Rest</div><div class="day-ex-field-val">${ex.rest||'—'}</div></div>
          </div>
          ${ex.notes?`<div class="day-ex-note"><div class="day-ex-field-label" style="color:${day.color};">Key Note</div><div class="day-ex-field-val">${ex.notes}</div></div>`:''}
        </div>
      </div>`;
    });
  }
  html+=`</div></div>`;
  document.getElementById('split-day-content').innerHTML=html;
  initSplitDragHandlers();
  // Restore reorder mode visual state if active
  if(reorderMode && reorderMode.split) {
    document.querySelectorAll('.reorder-handle-split').forEach(h => h.style.display = 'flex');
    let btn = document.getElementById('reorder-toggle-split');
    if(btn){btn.style.background='rgba(0,243,255,0.15)';btn.style.borderColor='var(--secondary)';btn.style.color='var(--secondary)';}
  }
}

function initSplitDragHandlers(){
  let container = document.querySelector('#split-day-content .day-ex');
  if(!container) return;
  container.querySelectorAll('.reorder-handle-split').forEach(handle=>{
    handle.onpointerdown = function(e){
      e.preventDefault();
      let item = handle.closest('.day-ex-item');
      startSplitDrag(item, container, e);
    };
  });
}

function startSplitDrag(item, container, e){
  let startY = e.clientY;
  let rect = item.getBoundingClientRect();
  item.classList.add('dragging');
  item.style.zIndex = 50;
  let placeholder = document.createElement('div');
  placeholder.className = 'day-ex-placeholder';
  placeholder.style.height = rect.height + 'px';
  item.parentNode.insertBefore(placeholder, item.nextSibling);

  function onMove(ev){
    let dy = ev.clientY - startY;
    item.style.transform = `translateY(${dy}px)`;
    let siblings = Array.from(container.querySelectorAll('.day-ex-item:not(.dragging)'));
    for(let other of siblings){
      let r = other.getBoundingClientRect();
      let mid = r.top + r.height/2;
      if(ev.clientY < mid){
        if(other.previousElementSibling !== placeholder) container.insertBefore(placeholder, other);
        break;
      } else if(other === siblings[siblings.length-1]){
        if(other.nextElementSibling !== placeholder) container.insertBefore(placeholder, other.nextElementSibling);
      }
    }
  }

  function onUp(){
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
    container.insertBefore(item, placeholder);
    placeholder.remove();
    item.classList.remove('dragging');
    item.style.transform = '';
    item.style.zIndex = '';
    commitSplitOrder(container);
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onUp);
}

function commitSplitOrder(container){
  let day = SPLITS[state.activeSplit].days[state.splitDayView];
  if(!day || !day.exs) return;
  let items = Array.from(container.querySelectorAll('.day-ex-item'));
  let newOrder = items.map(it => day.exs[parseInt(it.dataset.idx,10)]);
  day.exs = newOrder;
  renderSplitPage();
  saveState();
}

function toggleSplitExDetail(i){
  let el=document.getElementById('split-ex-detail-'+i);
  let opening = getComputedStyle(el).display==='none';
  el.style.display = opening ? 'block' : 'none';
  if(opening){
    requestAnimationFrame(()=>{
      el.scrollIntoView({behavior:'smooth', block:'nearest'});
    });
  }
}

function selectSplitTab(i){
  state.splitDayView=i;
  renderSplitPage();
  saveState();
}

function toggleDayRest(dayIdx){
  let day=SPLITS[state.activeSplit].days[dayIdx];
  day.rest=!day.rest;
  renderSplitPage();
  saveState();
}

function renameDay(dayIdx){
  let day=SPLITS[state.activeSplit].days[dayIdx];
  document.getElementById('modal-title').textContent='Rename Day';
  document.getElementById('modal-body').innerHTML=`
    <input id="rename-day-input" class="add-ex-input u2" value="${day.name}" autocomplete="off">
    <div class="ac-list u9" id="rename-day-input-ac"></div>
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmRenameDay(${dayIdx})">Save</button>
    </div>`;
  openModal();
  attachAutocomplete('rename-day-input', 'rename-day-input-ac', getWorkoutNameSuggestions);
}
function confirmRenameDay(dayIdx){
  let v=document.getElementById('rename-day-input').value.trim();
  if(v){SPLITS[state.activeSplit].days[dayIdx].name=v; recordWorkoutName(v);}
  closeModal();
  renderSplitPage();
  saveState();
}

function renameActiveSplit(){
  if(!state.activeSplit) return;
  document.getElementById('modal-title').textContent='Rename Split Program';
  document.getElementById('modal-body').innerHTML=`
    <input id="rename-split-input" class="add-ex-input u2" value="${state.activeSplit}" autocomplete="off">
    <div class="ac-list u9" id="rename-split-input-ac"></div>
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmRenameSplit()">Save</button>
    </div>
    <button onclick="confirmDeleteSplit()" style="width:100%;margin-top:10px;background:rgba(255,39,65,0.1);border:1px solid rgba(255,39,65,0.3);border-radius:var(--radius);color:#ff2741;font-size:12px;font-weight:700;padding:10px 14px;cursor:pointer;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.04em;">🗑 Delete "${state.activeSplit}"</button>`;
  openModal();
  attachAutocomplete('rename-split-input', 'rename-split-input-ac', getWorkoutNameSuggestions);
}

function confirmRenameSplit(){
  let newName = document.getElementById('rename-split-input').value.trim();
  let oldName = state.activeSplit;
  if(newName && newName !== oldName) {
    if(!SPLITS[newName]) {
      SPLITS[newName] = SPLITS[oldName];
      delete SPLITS[oldName];
      state.activeSplit = newName;
      recordWorkoutName(newName);
    }
  }
  closeModal();
  renderSplitSelector();
  renderSplitPage();
  saveState();
}

function confirmDeleteSplit(){
  let name = state.activeSplit;
  if(!name) return;
  let dayCount = (SPLITS[name] && SPLITS[name].days && SPLITS[name].days.length) || 0;
  let msg = dayCount > 0
    ? `Delete the split "${name}" and its ${dayCount} programmed day${dayCount!==1?'s':''}? Logged workout history is not affected.`
    : `Delete the split "${name}"? Logged workout history is not affected.`;
  if(!confirm(msg)) return;

  delete SPLITS[name];
  state.activeSplit = defaultSplitForUser(null);
  state.splitDayView = 0;

  closeModal();
  renderSplitSelector();
  renderSplitPage();
  saveState();
  // Deletions are destructive, so skip the normal save debounce and push to
  // the cloud right away — otherwise a quick refresh can race ahead of the
  // debounced sync and pull back a stale (pre-deletion) copy from the cloud.
}

function showRules() {
  document.getElementById('modal-title').textContent='Program Rules';
  let html = '<div style="display:flex;flex-direction:column;gap:10px;">';
  RULES.forEach((r, i) => {
    html += `<div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius);padding:14px;display:flex;gap:14px;">
      <div style="width:26px;height:26px;background:rgba(0,243,255,0.12);color:var(--secondary);border:1px solid rgba(0,243,255,0.3);border-radius:var(--radius);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0;font-family:'JetBrains Mono',monospace;">${i+1}</div>
      <div>
        <div style="color:var(--primary);font-size:11px;font-weight:800;text-transform:uppercase;margin-bottom:6px;letter-spacing:0.08em;font-family:'JetBrains Mono',monospace;">${r.rule}</div>
        <div style="color:var(--txt);font-size:14px;line-height:1.5;">${r.method}</div>
      </div>
    </div>`;
  });
  html += '</div><div class="modal-btn-row"><button class="modal-btn modal-cancel" onclick="closeModal()">Close</button></div>';
  document.getElementById('modal-body').innerHTML = html;
  openModal();
}

function addExToSplit(dayIdx){
  document.getElementById('modal-title').textContent='Add Programmed Exercise';
  document.getElementById('modal-body').innerHTML=`
    <input id="split-ex-name" class="add-ex-input u2" placeholder="Exercise name" autocomplete="off">
    <div class="ac-list u21" id="split-ex-name-ac"></div>
    <div class="u22">
      <input id="split-ex-sets" class="add-ex-input u6" placeholder="Sets">
      <input id="split-ex-reps" class="add-ex-input u6" placeholder="Reps">
    </div>
    <select id="split-ex-tag" class="add-ex-input" style="width:100%;margin-bottom:10px;background:var(--bg4);border:1px solid var(--border2);color:var(--txt);">
        <option value="">Normal (No Tag)</option>
        <option value="MAIN COMPOUND">Main Compound</option>
        <option value="DROP SET">Drop Set Focus</option>
        <option value="SUPERSET">Superset</option>
        <option value="TIMED">Timed Workout</option>
        <option value="PUMP">Pump / Burnout</option>
        <option value="FINISHER">Finisher</option>
    </select>
    <input id="split-ex-method" class="add-ex-input u1" placeholder="Weight method (optional)">
    <input id="split-ex-tempo" class="add-ex-input u1" placeholder="Tempo (optional)">
    <input id="split-ex-rest" class="add-ex-input u1" placeholder="Rest (optional)">
    <input id="split-ex-notes" class="add-ex-input u3" placeholder="Key note (optional)">
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmAddToSplit(${dayIdx})">Add</button>
    </div>`;
  openModal();
  attachAutocomplete('split-ex-name', 'split-ex-name-ac', getExerciseSuggestions);
}

function confirmAddToSplit(dayIdx){
  let n=document.getElementById('split-ex-name').value.trim();
  if(!n)return;
  SPLITS[state.activeSplit].days[dayIdx].exs.push({
    name:n,
    sets:document.getElementById('split-ex-sets').value.trim(),
    reps:document.getElementById('split-ex-reps').value.trim(),
    tag:document.getElementById('split-ex-tag').value.trim(),
    weightMethod:document.getElementById('split-ex-method').value.trim(),
    tempo:document.getElementById('split-ex-tempo').value.trim(),
    rest:document.getElementById('split-ex-rest').value.trim(),
    notes:document.getElementById('split-ex-notes').value.trim()
  });
  recordExerciseName(n);
  closeModal();
  renderSplitPage();
  saveState();
}

function editSplitEx(i){
  let day=SPLITS[state.activeSplit].days[state.splitDayView];
  let ex=day.exs[i];
  document.getElementById('modal-title').textContent='Edit Programmed Exercise';
  document.getElementById('modal-body').innerHTML=`
    <input id="split-ex-name" class="add-ex-input u2" value="${ex.name}" autocomplete="off">
    <div class="ac-list u21" id="split-ex-name-ac"></div>
    <div class="u22">
      <input id="split-ex-sets" class="add-ex-input u6" value="${ex.sets||''}" placeholder="Sets">
      <input id="split-ex-reps" class="add-ex-input u6" value="${ex.reps||''}" placeholder="Reps">
    </div>
    <input id="split-ex-tag" class="add-ex-input u1" value="${ex.tag||''}" placeholder="Tag">
    <input id="split-ex-method" class="add-ex-input u1" value="${ex.weightMethod||''}" placeholder="Weight Method">
    <input id="split-ex-tempo" class="add-ex-input u1" value="${ex.tempo||''}" placeholder="Tempo">
    <input id="split-ex-rest" class="add-ex-input u1" value="${ex.rest||''}" placeholder="Rest">
    <input id="split-ex-notes" class="add-ex-input u3" value="${ex.notes||''}" placeholder="Key Note">
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p${state.profile}" onclick="confirmEditSplitEx(${i})">Save Changes</button>
    </div>
    <button class="modal-btn" style="width:100%;margin-top:10px;background:transparent;border:1px solid var(--danger-red);color:var(--danger-red);" onclick="removeSplitExFromModal(${i})">Delete Exercise</button>`;
  openModal();
  attachAutocomplete('split-ex-name', 'split-ex-name-ac', getExerciseSuggestions);
}
function confirmEditSplitEx(i){
  let day=SPLITS[state.activeSplit].days[state.splitDayView];
  let n=document.getElementById('split-ex-name').value.trim();
  if(!n)return;
  day.exs[i]={
    name:n,
    sets:document.getElementById('split-ex-sets').value.trim(),
    reps:document.getElementById('split-ex-reps').value.trim(),
    tag:document.getElementById('split-ex-tag').value.trim(),
    weightMethod:document.getElementById('split-ex-method').value.trim(),
    tempo:document.getElementById('split-ex-tempo').value.trim(),
    rest:document.getElementById('split-ex-rest').value.trim(),
    notes:document.getElementById('split-ex-notes').value.trim()
  };
  recordExerciseName(n);
  closeModal();
  renderSplitPage();
  saveState();
}
function removeSplitEx(i){
  let day=SPLITS[state.activeSplit].days[state.splitDayView];
  day.exs.splice(i,1);
  renderSplitPage();
  saveState();
}
function removeSplitExFromModal(i){
  let day=SPLITS[state.activeSplit].days[state.splitDayView];
  let ex=day.exs[i];
  if(!ex) return;
  if(!confirm(`Delete "${ex.name}" from this day?`)) return;
  day.exs.splice(i,1);
  closeModal();
  renderSplitPage();
  saveState();
}
function moveSplitEx(i, dir){
  let day=SPLITS[state.activeSplit].days[state.splitDayView];
  if(!day || !day.exs) return;
  let target = i + dir;
  if (target < 0 || target >= day.exs.length) return;
  let temp = day.exs[i];
  day.exs[i] = day.exs[target];
  day.exs[target] = temp;
  renderSplitPage();
  saveState();
}

function renderPRPage(){
  let html='';
  let p = 1;
  for(let name in state.prData){
    let pr=state.prData[name][p];
    if(pr){
      let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let d=new Date(pr.date+'T12:00:00');
      html+=`<div class="pr-list-item">
        <div style="min-width:0;flex:1;margin-right:10px;">
          <div class="pr-ex-name" title="${name}">${name}</div>
          <div class="pr-date">${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}</div>
        </div>
        <div class="u23" style="flex-shrink:0;">
          <div class="pr-value p${p}">${pr.w}kg</div>
          <div style="font-size:11px;font-weight:600;color:var(--txt3);letter-spacing:0.05em;margin-top:4px;">1RM RECORD</div>
        </div>
      </div>`;
    }
  }
  document.getElementById('pr-list').innerHTML=html||'<div class="u13">No PRs unlocked yet.<br><span class="u5">Track heavy sets to set records.</span></div>';
}

function renderBWHistory() {
  let bws = state.bw[state.profile] || {};
  let dates = Object.keys(bws).sort().reverse();
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let html = '';

  if(!dates.length){
    html += '<div class="u13">No weight history logged yet.<br><span class="u5">Log your BW above.</span></div>';
  } else {
    dates.forEach(date => {
      let d = new Date(date + 'T12:00:00');
      let w = bws[date];
      html += `<div class="pr-list-item">
        <div>
          <div class="pr-date" style="font-size:15px;font-weight:700;color:var(--txt);margin-top:0;">${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}</div>
        </div>
        <div class="u23">
          <div class="pr-value p${state.profile}" style="font-size:24px;">${w} <span class="u5">kg</span></div>
        </div>
      </div>`;
    });
  }

  let el = document.getElementById('bw-history-list');
  if(el) el.innerHTML = html;
}

function renderChart() {
  let bws = state.bw[state.profile] || {};
  let dates = Object.keys(bws).sort();
  let chartEl = document.getElementById('bw-chart-container');
  if(!chartEl) return;

  if (dates.length < 2) {
    chartEl.innerHTML = `<div style="text-align:center;color:var(--txt3);font-size:12px;padding:30px 0;">Need at least 2 entries to chart progress</div>`;
    return;
  }

  let entries = dates.slice(-14).map(d => ({ date: d, w: parseFloat(bws[d]) }));
  let minW = Math.min(...entries.map(e => e.w)) - 2;
  let maxW = Math.max(...entries.map(e => e.w)) + 2;
  let range = maxW - minW;
  if (range === 0) range = 10;

  let points = entries.map((e, i) => {
      let x = (i / (entries.length - 1)) * 100;
      let y = 100 - (((e.w - minW) / range) * 100);
      return `${x},${y}`;
  }).join(" ");

  let html = `
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:100px;overflow:visible;">
      <polyline fill="none" stroke="${getProfileColor(state.profile)}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${points}" />
      ${entries.map((e, i) => {
          let x = (i / (entries.length - 1)) * 100;
          let y = 100 - (((e.w - minW) / range) * 100);
          return `<circle cx="${x}" cy="${y}" r="3" fill="var(--bg2)" stroke="${getProfileColor(state.profile)}" stroke-width="2"/>`;
      }).join("")}
  </svg>`;

  chartEl.innerHTML = html;
}

// Detailed muscle group mapping
const MUSCLE_MAP = [
  // Legs
  { key:'Quads',      group:'Legs',      re:/squat|leg.*press|leg.*ext|lunge|sissy|hack/ },
  { key:'Hamstrings', group:'Legs',      re:/hamstring|leg.*curl|rdl|romanian|stiff.*leg|nordic/ },
  { key:'Glutes',     group:'Legs',      re:/glute|hip.*thrust|sumo|deadlift(?!.*row)/ },
  { key:'Calves',     group:'Legs',      re:/calf|calves|raise.*calf|raise.*heel/ },
  { key:'Lower Back', group:'Back',      re:/lower.*back|hyperext|back.*ext|good.*morning|deadlift(?!.*row)/ },
  // Back
  { key:'Lats',       group:'Back',      re:/lat.*pull|pulldown|chin.?up|pull.?up|cable.*lat|straight.*arm/ },
  { key:'Mid Back',   group:'Back',      re:/row|seated.*cable.*row|t.?bar|chest.*support|machine.*row/ },
  { key:'Traps',      group:'Back',      re:/shrug|trap|upright.*row|face.*pull/ },
  // Chest
  { key:'Chest',      group:'Chest',     re:/bench|chest|pec|fly|dip|push.?up|cable.*cross/ },
  // Shoulders
  { key:'Front Delt', group:'Shoulders', re:/front.*raise|overhead.*press|shoulder.*press|military|arnold/ },
  { key:'Side Delt',  group:'Shoulders', re:/lateral.*raise|side.*raise|upright.*row/ },
  { key:'Rear Delt',  group:'Shoulders', re:/rear.*delt|reverse.*fly|face.*pull|bent.*over.*fly/ },
  // Arms
  { key:'Biceps',     group:'Arms',      re:/curl(?!.*leg)(?!.*calf)|bicep|preacher/ },
  { key:'Triceps',    group:'Arms',      re:/tricep|skull|pushdown|dip|close.*grip.*bench|overhead.*ext|extension(?!.*leg)/ },
  { key:'Forearms',   group:'Arms',      re:/forearm|wrist.*curl|hammer.*curl|reverse.*curl/ },
  { key:'Wrist Flex', group:'Arms',      re:/wrist.*flex|grip/ },
];
const MUSCLE_GROUPS = ['Legs','Chest','Back','Shoulders','Arms'];

function getMuscleGroup(name) {
  let n = normalizeExName(name);
  for(let m of MUSCLE_MAP) { if(m.re.test(n)) return m.group; }
  return null; // skip 'Other' entirely
}
function getDetailedMuscle(name){
  let n = normalizeExName(name);
  for(let m of MUSCLE_MAP) { if(m.re.test(n)) return m.key; }
  return null;
}

function renderMuscleAnalytics() {
  let now = Date.now();
  // Group counts: {group: {total, detail: {muscle: count}}}
  let groups = {};
  MUSCLE_GROUPS.forEach(g => { groups[g] = {total:0, detail:{}}; });
  let grandTotal = 0;

  for (let k in state.workouts) {
    if(!k.endsWith('_' + state.profile)) continue;
    let dstr = k.split('_')[0];
    let d = new Date(dstr + 'T12:00:00');
    if ((now - d.getTime()) > 30 * 24 * 60 * 60 * 1000) continue; // 30 days

    let w = state.workouts[k];
    w.exs.forEach(ex => {
      let g = getMuscleGroup(ex.name);
      let detail = getDetailedMuscle(ex.name);
      if(!g || !groups[g]) return;
      ex.sets.forEach(s => {
        if(s.w && s.r && s.type !== 'warmup') {
          groups[g].total++;
          grandTotal++;
          if(detail){
            groups[g].detail[detail] = (groups[g].detail[detail]||0) + 1;
          }
        }
      });
    });
  }

  let html = '<div style="display:flex;flex-direction:column;gap:14px;">';
  MUSCLE_GROUPS.forEach(g => {
    let c = groups[g];
    if(c.total === 0) return;
    let pct = grandTotal > 0 ? (c.total / grandTotal) * 100 : 0;
    let detailHtml = '';
    let detailKeys = Object.keys(c.detail);
    if(detailKeys.length){
      detailHtml = detailKeys.sort((a,b)=>c.detail[b]-c.detail[a]).map(muscle => {
        let dp = c.total > 0 ? (c.detail[muscle]/c.total)*100 : 0;
        return `<div>
          <div class="muscle-sub-row"><span>${muscle}</span><span>${c.detail[muscle]} sets</span></div>
          <div class="muscle-sub-bar"><div class="muscle-sub-bar-fill" style="width:${dp}%;background:${getProfileColor(state.profile)};opacity:0.6;"></div></div>
        </div>`;
      }).join('');
    }
    html += `<div>
      <div class="muscle-group-row" onclick="toggleMuscleDetail('${g}')">
        <div style="display:flex;justify-content:space-between;font-size:11px;font-weight:800;color:var(--txt2);margin-bottom:6px;text-transform:uppercase;">
          <span>${g} <span style="color:var(--txt3);font-weight:500;font-size:10px;">(tap to expand)</span></span>
          <span>${c.total} sets</span>
        </div>
        <div style="background:var(--bg4);height:8px;border-radius:var(--radius);overflow:hidden;">
          <div style="background:${getProfileColor(state.profile)};height:100%;width:${pct}%;border-radius:var(--radius);"></div>
        </div>
      </div>
      <div class="muscle-detail" id="muscle-detail-${g}">${detailHtml}</div>
    </div>`;
  });
  if(grandTotal === 0) html += '<div style="text-align:center;color:var(--txt3);font-size:12px;padding:10px 0;">No working sets logged in last 30 days.</div>';
  html += '</div>';
  return html;
}

function toggleMuscleDetail(group){
  let el = document.getElementById('muscle-detail-'+group);
  if(!el) return;
  el.classList.toggle('open');
}

function exportData() {
  let rows = [["Date", "Exercise", "Set", "Type", "Weight", "Reps", "Unilateral"]];

  let dates = Object.keys(state.workouts).sort();
  for(let k of dates) {
      let parts = k.split('_');
      let dstr = parts[0];
      let w = state.workouts[k];
      w.exs.forEach(ex => {
          ex.sets.forEach((s, i) => {
              if(s.w || s.r) {
                  rows.push([dstr, `"${ex.name}"`, i+1, s.type||'normal', s.w||'', s.r||'', s.uni?'Yes':'No']);
              }
          });
      });
  }

  let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `DoOrDie_export_${dateKey(new Date())}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function openSettings() {
  let s = state.settings;
  let commonPlates = [25, 20, 15, 10, 7.5, 5, 2.5, 1.25, 0.5];

  let platesHtml = commonPlates.map(p => `
    <label class="plate-chip ${s.plates.includes(p) ? 'checked' : ''}">
      <input type="checkbox" value="${p}" class="setting-plate-cb" ${s.plates.includes(p) ? 'checked' : ''} onchange="this.parentElement.classList.toggle('checked',this.checked); saveSettingsAuto()">
      ${p} kg
    </label>
  `).join('');

  document.getElementById('modal-title').textContent='Settings';
  const curTheme = (state.settings && state.settings.theme) || 'claude';
  document.getElementById('modal-body').innerHTML=`
    <div class="set-section">
      <div class="set-section-label">Theme</div>
      <div id="theme-picker-wrap">${renderThemePicker(curTheme)}</div>
    </div>

    <div class="set-section">
      <div class="set-row-setting">
        <div>
          <div class="set-row-label">Auto-rest timer</div>
          <div class="set-row-sub">Starts counting down after each set</div>
        </div>
        <label class="set-toggle">
          <input type="checkbox" id="set-use-timer" ${s.useRestTimer !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
    </div>

    <div class="set-section">
      <div class="set-section-label">Display</div>
      <div class="set-row-setting">
        <div>
          <div class="set-row-label">Simple mode</div>
          <div class="set-row-sub">Group HIST/PR/NOTE/INFO behind one "More" button per exercise</div>
        </div>
        <label class="set-toggle">
          <input type="checkbox" id="set-simple-mode" ${s.simpleMode !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
      <div class="set-row-setting">
        <div>
          <div class="set-row-label">Bigger tap targets</div>
          <div class="set-row-sub">Larger set-type and icon buttons, easier to tap mid-set</div>
        </div>
        <label class="set-toggle">
          <input type="checkbox" id="set-compact-buttons" ${s.compactButtons === false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
      <div class="set-row-setting">
        <div>
          <div class="set-row-label">Keep screen on</div>
          <div class="set-row-sub">Prevents the screen from sleeping while the app is open</div>
        </div>
        <label class="set-toggle">
          <input type="checkbox" id="set-keep-awake" ${s.keepAwake ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
    </div>

    <div class="set-section">
      <div class="set-section-label">Optional Features</div>
      <div class="set-row-sub" style="margin-bottom:10px;">Turn off anything you don't use to keep the workout screen simpler.</div>
      <div class="set-row-setting">
        <div class="set-row-label">PR % calculator</div>
        <label class="set-toggle">
          <input type="checkbox" id="set-show-prcalc" ${s.showPRCalc !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
      <div class="set-row-setting">
        <div class="set-row-label">Plate math calculator</div>
        <label class="set-toggle">
          <input type="checkbox" id="set-show-platemath" ${s.showPlateMath !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
      <div class="set-row-setting">
        <div class="set-row-label">Warm-up set generator</div>
        <label class="set-toggle">
          <input type="checkbox" id="set-show-warmup" ${s.showWarmupGen !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
      <div class="set-row-setting">
        <div class="set-row-label">Exercise notes</div>
        <label class="set-toggle">
          <input type="checkbox" id="set-show-notes" ${s.showNotes !== false ? 'checked' : ''} onchange="saveSettingsAuto()">
          <span class="set-toggle-track"></span>
          <span class="set-toggle-thumb"></span>
        </label>
      </div>
    </div>

    <div class="set-section">
      <div class="set-section-label">Default barbell weight</div>
      <div class="set-row-setting">
        <div class="set-row-label">Empty bar</div>
        <input id="set-bar-weight" type="number" class="set-num-input" value="${s.barbellWeight}" oninput="saveSettingsAuto()" onchange="saveSettingsAuto()">
      </div>
    </div>

    <div class="set-section">
      <div class="set-section-label">Available plates (kg)</div>
      <div class="plate-grid">
        ${platesHtml}
      </div>
    </div>
  `;
  document.getElementById('modal-box').classList.add('settings-modal');
  openModal();
}

function saveSettings() {
  let bar = parseFloat(document.getElementById('set-bar-weight').value) || 20;

  let pCbs = document.querySelectorAll('.setting-plate-cb');
  let selectedPlates = [];
  pCbs.forEach(cb => {
    if(cb.checked) selectedPlates.push(parseFloat(cb.value));
  });

  selectedPlates.sort((a,b) => b - a);

  state.settings.useRestTimer = document.getElementById('set-use-timer').checked;
  state.settings.simpleMode = document.getElementById('set-simple-mode').checked;
  state.settings.compactButtons = !document.getElementById('set-compact-buttons').checked;
  state.settings.showPRCalc = document.getElementById('set-show-prcalc').checked;
  state.settings.showPlateMath = document.getElementById('set-show-platemath').checked;
  state.settings.showWarmupGen = document.getElementById('set-show-warmup').checked;
  state.settings.showNotes = document.getElementById('set-show-notes').checked;
  state.settings.keepAwake = document.getElementById('set-keep-awake').checked;
  state.settings.barbellWeight = bar;
  state.settings.plates = selectedPlates;

  saveState();
  applyWakeLock();
  closeModal();
  applyButtonSizing();
  updateProfileUI();
  if(state.page === 'workout') renderExerciseList();
  if(state.page === 'profile') renderProfilePage();
  
  
}

function saveSettingsAuto() {
  let barEl = document.getElementById('set-bar-weight');
  let bar = barEl ? (parseFloat(barEl.value) || 20) : (state.settings.barbellWeight || 20);

  let pCbs = document.querySelectorAll('.setting-plate-cb');
  let selectedPlates = [];
  pCbs.forEach(cb => {
    if(cb.checked) selectedPlates.push(parseFloat(cb.value));
  });
  selectedPlates.sort((a,b) => b - a);

  let timerEl = document.getElementById('set-use-timer');
  let simpleModeEl = document.getElementById('set-simple-mode');
  let compactEl = document.getElementById('set-compact-buttons');
  let prcalcEl = document.getElementById('set-show-prcalc');
  let platemathEl = document.getElementById('set-show-platemath');
  let warmupEl = document.getElementById('set-show-warmup');
  let notesEl = document.getElementById('set-show-notes');
  let awakeEl = document.getElementById('set-keep-awake');

  if(timerEl) state.settings.useRestTimer = timerEl.checked;
  if(simpleModeEl) state.settings.simpleMode = simpleModeEl.checked;
  if(compactEl) state.settings.compactButtons = !compactEl.checked;
  if(prcalcEl) state.settings.showPRCalc = prcalcEl.checked;
  if(platemathEl) state.settings.showPlateMath = platemathEl.checked;
  if(warmupEl) state.settings.showWarmupGen = warmupEl.checked;
  if(notesEl) state.settings.showNotes = notesEl.checked;
  if(awakeEl) state.settings.keepAwake = awakeEl.checked;
  state.settings.barbellWeight = bar;
  if(selectedPlates.length > 0) state.settings.plates = selectedPlates;

  saveState();
  applyWakeLock();
  applyButtonSizing();
  updateProfileUI();
  if(state.page === 'workout') renderExerciseList();
  if(state.page === 'profile') renderProfilePage();
  
  
}

function calcFitnessLevel(metrics, bw){
  // Waist-to-Height ratio based fitness score
  let score = 0; let label = 'Unknown'; let color = 'var(--txt3)'; let pct = 0;
  let height = parseFloat(metrics.height);
  let waist = parseFloat((metrics.measurements||{}).waist);
  let fatPct = parseFloat(metrics.fatPct);
  let age = parseFloat(metrics.age);
  let weight = parseFloat(bw);
  let detail = [];

  // Waist-to-Height ratio (primary method)
  if(waist && height){
    let whr = waist / height;
    detail.push('Waist-to-Height: ' + whr.toFixed(3));
    if(whr < 0.43){ score += 30; }
    else if(whr < 0.53){ score += 25; }
    else if(whr < 0.58){ score += 15; }
    else if(whr < 0.63){ score += 5; }
    else { score += 0; }
  }
  // Body fat %
  if(fatPct){
    detail.push('Body fat: ' + fatPct + '%');
    if(fatPct < 10){ score += 30; }
    else if(fatPct < 16){ score += 25; }
    else if(fatPct < 22){ score += 18; }
    else if(fatPct < 28){ score += 10; }
    else if(fatPct < 35){ score += 4; }
    else { score += 0; }
  }
  // BMI component (supporting)
  if(weight && height){
    let bmi = weight / ((height/100)**2);
    detail.push('BMI: ' + bmi.toFixed(1));
    if(bmi >= 18.5 && bmi <= 24.9){ score += 20; }
    else if(bmi >= 17 && bmi < 28){ score += 12; }
    else if(bmi >= 15 && bmi < 30){ score += 6; }
  }
  // Age-adjusted bonus
  if(age){ if(age < 30) score += 10; else if(age < 40) score += 8; else if(age < 50) score += 5; else score += 2; }

  let maxScore = (waist&&height?30:0) + (fatPct?30:0) + (weight&&height?20:0) + (age?10:0);
  if(maxScore === 0) return {label:'No Data', color:'var(--txt3)', pct:0, detail:[]};
  pct = Math.min(100, Math.round((score/maxScore)*100));

  if(pct >= 80){ label = 'Elite'; color = '#00f3ff'; }
  else if(pct >= 65){ label = 'Athletic'; color = '#ccff00'; }
  else if(pct >= 50){ label = 'Fit'; color = '#4ade80'; }
  else if(pct >= 35){ label = 'Average'; color = '#f59e0b'; }
  else { label = 'Below Avg'; color = '#ff2741'; }
  return {label, color, pct, detail};
}

function toggleStitchSetting(key, el) {
  let on = !!el.checked;
  if (key === 'useRestTimer') state.settings.useRestTimer = on;
  else if (key === 'timerMerged') state.settings.timerMerged = !on;
  else if (key === 'keepAwake') state.settings.keepAwake = on;
  else if (key === 'simpleMode') state.settings.simpleMode = on;
  else if (key === 'showPlateMath') state.settings.showPlateMath = on;
  else if (key === 'showWarmupGen') state.settings.showWarmupGen = on;
  else if (key === 'showNotes') state.settings.showNotes = on;
  else if (key === 'pitchBlack') {
    state.settings.pitchBlack = on;
    document.body.classList.toggle('pitch-black', on);
  }
  saveState();
  applyWakeLock();
  applyButtonSizing();
  syncTimerUI();
  if (state.page === 'workout') renderExerciseList();
}

function renderProfilePage() {
  let s = state.settings || {};
  let workouts = countWorkoutsLogged();
  let subline = displayName === 'Not Set' ? 'Not Set' : 'Local profile';

  let html = `
    <h1 class="settings-title">Settings</h1>

    <div class="settings-card">
      <div class="settings-avatar">?</div>
      <div class="settings-profile-text">
        <button type="button" class="settings-name-btn" onclick="editDisplayName()">
          <span>${getProfileName(state.profile)}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
        </button>
        <p class="settings-row-sub">${subline}</p>
        <p class="settings-workout-count">${workouts} Workout${workouts === 1 ? '' : 's'} Logged</p>
      </div>
    </div>

    <h3 class="settings-section-title">Timer Configurations</h3>
    <div class="settings-panel">
      <div class="settings-row">
        <div><div class="settings-row-label">Enable Rest Timer</div><div class="settings-row-sub">Popups rest dialog automatically after set logged</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.useRestTimer !== false ? 'checked' : ''} onchange="toggleStitchSetting('useRestTimer', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Show Floating Rest Widget</div><div class="settings-row-sub">Shows overlay clock on top bar during workspace runs</div></div>
        <label class="set-toggle"><input type="checkbox" ${!s.timerMerged ? 'checked' : ''} onchange="toggleStitchSetting('timerMerged', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Keep Screen Awake during workout</div><div class="settings-row-sub">Prevents device sleeping locks when clock executes</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.keepAwake ? 'checked' : ''} onchange="toggleStitchSetting('keepAwake', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
    </div>

    <h3 class="settings-section-title">Display Themes &amp; Compact Layout</h3>
    <div class="settings-panel">
      <div class="settings-row">
        <div><div class="settings-row-label">Simple Mode (Minimal Grid Lists)</div><div class="settings-row-sub">Removes exercise banners for compressed list rows</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.simpleMode ? 'checked' : ''} onchange="toggleStitchSetting('simpleMode', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Show Loaded Plate Math details</div><div class="settings-row-sub">Renders side plates needed descriptions in logs</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.showPlateMath !== false ? 'checked' : ''} onchange="toggleStitchSetting('showPlateMath', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Show Warmup Percentage Prompts</div><div class="settings-row-sub">Shows rapid warmup loader tools in log inputs</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.showWarmupGen !== false ? 'checked' : ''} onchange="toggleStitchSetting('showWarmupGen', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Show Exercise Cues and Notes inline</div><div class="settings-row-sub">Displays database exercise descriptions inside tabs</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.showNotes !== false ? 'checked' : ''} onchange="toggleStitchSetting('showNotes', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
      <div class="settings-row">
        <div><div class="settings-row-label">Pitch Black Mode Theme</div><div class="settings-row-sub">OLED-optimized, uses absolute pure black backgrounds</div></div>
        <label class="set-toggle"><input type="checkbox" ${s.pitchBlack ? 'checked' : ''} onchange="toggleStitchSetting('pitchBlack', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
      </div>
    </div>

    <h3 class="settings-section-title">Data Portability &amp; Backups</h3>
    <div class="settings-panel">
      <p class="settings-policy">This app runs strictly offline. All workout logs, splits, and metrics are stored locally in a secure database on your device — nothing is sent to the cloud.</p>
      <div class="settings-btn-row">
        <button type="button" class="settings-btn settings-btn-primary" onclick="copyBackup()">Copy Backup</button>
        <button type="button" class="settings-btn settings-btn-secondary" onclick="shareBackup()">Share File</button>
      </div>
      <p class="settings-row-sub" style="margin-top:16px;">Paste a JSON backup below to merge it with your current data.</p>
      <textarea id="backup-import-json" class="settings-textarea" placeholder="Paste JSON contents starting with { ... } here..."></textarea>
      <button type="button" class="settings-btn settings-import-btn" onclick="importBackup()">Import &amp; Merge Database</button>
    </div>

    <h3 class="settings-section-title">Danger Zone</h3>
    <div class="settings-panel settings-danger">
      <div class="settings-row-label">Hard Reset Database &amp; Settings</div>
      <p class="settings-row-sub">This will permanently wipe all logs, workout splits, exercises, body metrics, and reset your user profile settings back to completely empty.</p>
      <button type="button" class="settings-btn settings-danger-btn" onclick="hardResetApp()">Hard Reset Everything</button>
    </div>
  `;

  document.getElementById('profile-content').innerHTML = html;
  document.body.classList.toggle('pitch-black', !!s.pitchBlack);
}

function openFloatingPanel(type) {
  let overlay = document.getElementById('float-panel-overlay');
  let panel   = document.getElementById('float-panel');
  let title   = document.getElementById('float-panel-title');
  let body    = document.getElementById('float-panel-body');
  if(!overlay || !panel) return;

  // Populate content
  if(type === 'prs') {
    title.style.color = 'var(--g1)';
    title.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Personal Records`;
    body.innerHTML = '<div id="pr-list"></div>';
    renderPRPage();
  } else {
    title.style.color = 'var(--secondary)';
    title.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>Workout History`;
    body.innerHTML = '<div id="history-list"></div>';
    renderHistoryPage();
  }

  // Show with slide-up animation
  overlay.style.display = 'block';
  panel.style.display   = 'flex';
  // Force reflow then animate
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      panel.style.transform = 'translateY(0)';
    });
  });
  // Prevent background scroll
  document.getElementById('app').style.overflow = 'hidden';
}

function closeFloatingPanel() {
  let overlay = document.getElementById('float-panel-overlay');
  let panel   = document.getElementById('float-panel');
  if(!panel) return;
  panel.style.transform = 'translateY(100%)';
  setTimeout(() => {
    panel.style.display   = 'none';
    overlay.style.display = 'none';
    document.getElementById('app').style.overflow = '';
  }, 320);
}

function saveMeasurement(key, val){
  if(!state.userMetrics[state.profile]) state.userMetrics[state.profile] = {};
  if(!state.userMetrics[state.profile].measurements) state.userMetrics[state.profile].measurements = {};
  state.userMetrics[state.profile].measurements[key] = val;
  saveState();
  refreshFitnessCard();
}

function refreshFitnessCard(){
  let card = document.getElementById('fitness-level-card');
  if(!card) return;
  let metrics = state.userMetrics[state.profile] || {};
  let bws = state.bw[state.profile] || {};
  let bw = bws[dateKey(state.date)] || Object.values(bws).slice(-1)[0] || '';
  let fitness = calcFitnessLevel(metrics, bw);
  card.style.borderColor = fitness.color + '33';
  card.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;font-family:'JetBrains Mono',monospace;">Fitness Level</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span class="fitness-level-badge" style="background:${fitness.color}22;color:${fitness.color};border:1px solid ${fitness.color}44;">${fitness.label}</span>
      <span style="font-size:22px;font-weight:900;color:${fitness.color};font-family:'JetBrains Mono',monospace;">${fitness.pct}%</span>
    </div>
    <div class="fitness-bar-track">
      <div class="fitness-bar-fill" style="width:${fitness.pct}%;background:${fitness.color};"></div>
    </div>
    ${fitness.detail.length ? '<div style="margin-top:8px;">'+fitness.detail.map(d=>'<div style="font-size:10px;color:var(--txt3);margin-top:3px;">'+d+'</div>').join('')+'</div>' : '<div style="font-size:11px;color:var(--txt3);margin-top:8px;">Add waist measurement + body fat % for a full assessment.</div>'}
  `;
}

function updateBMI(){ /* replaced by fitness level */ }
function openModal(){document.getElementById('modal-overlay').classList.add('open');}
function closeModal(){document.getElementById('modal-overlay').classList.remove('open');document.getElementById('modal-box').classList.remove('settings-modal');}

// ── Reorder mode toggle ──────────────────────────────────────────────────
let reorderMode = {workout: false, split: false, cardio: false};

function toggleReorderMode(tab) {
  reorderMode[tab] = !reorderMode[tab];
  let on = reorderMode[tab];
  let btn = document.getElementById('reorder-toggle-' + tab);
  if(btn) {
    btn.style.background = on ? 'rgba(0,243,255,0.15)' : 'var(--bg3)';
    btn.style.borderColor = on ? 'var(--secondary)' : 'var(--border2)';
    btn.style.color = on ? 'var(--secondary)' : 'var(--txt3)';
  }
  // Show/hide drag handles
  let handleClass = '.reorder-handle-' + tab;
  document.querySelectorAll(handleClass).forEach(h => {
    h.style.display = on ? 'flex' : 'none';
  });
  // For cardio
  if(tab === 'cardio') {
    document.querySelectorAll('.reorder-handle-cardio').forEach(h => {
      h.style.display = on ? 'flex' : 'none';
    });
    initCardioDragHandlers();
  }
  if(tab === 'workout') initExListDragHandlers();
  if(tab === 'split') initSplitDragHandlers();
}

// ── Cardio Tracking ──────────────────────────────────────────────────────
function renderCardioPage() {
  let cardioLog = state.cardioLog || {};
  let entries = Object.entries(cardioLog).sort((a,b) => b[0].localeCompare(a[0]));
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  let entriesHtml = '';
  if(!entries.length) {
    entriesHtml = '<div class="u13">No cardio logged yet.<br><span class="u5">Log a session to track it here.</span></div>';
  } else {
    entries.forEach(([key, sessions]) => {
      let d = new Date(key + 'T12:00:00');
      entriesHtml += `<div style="margin-bottom:14px;">
        <div style="display:flex;align-items:center;gap:10px;padding:6px 0;">
          <div class="hist-day-num">${d.getDate()}</div>
          <div class="hist-day-date">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]}, ${months[d.getMonth()]} ${d.getFullYear()}</div>
        </div>`;
      sessions.forEach((s, si) => {
        entriesHtml += `<div class="section-card" style="margin-bottom:6px;">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
              <div class="reorder-handle-cardio" data-date="${key}" data-idx="${si}" style="color:var(--txt3);font-size:18px;cursor:grab;touch-action:none;display:none;width:24px;text-align:center;">⠿</div>
              <div style="font-size:14px;font-weight:700;color:var(--txt);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.type || 'Cardio'}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
              ${s.duration ? `<span style="background:rgba(0,243,255,0.12);color:var(--secondary);border:1px solid rgba(0,243,255,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.duration} min</span>` : ''}
              ${s.distance ? `<span style="background:rgba(204,255,0,0.12);color:var(--g1);border:1px solid rgba(204,255,0,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.distance} km</span>` : ''}
              ${s.calories ? `<span style="background:rgba(255,39,65,0.12);color:var(--o1);border:1px solid rgba(255,39,65,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.calories} kcal</span>` : ''}
              <button onclick="deleteCardioEntry('${key}',${si})" style="background:transparent;border:none;color:var(--txt3);font-size:16px;cursor:pointer;padding:2px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">✕</button>
            </div>
          </div>
          ${s.notes ? `<div style="padding:0 14px 10px;font-size:12px;color:var(--txt2);">${s.notes}</div>` : ''}
        </div>`;
      });
      entriesHtml += '</div>';
    });
  }

  const CARDIO_TYPES = ['Running','Cycling','Walking','Swimming','Rowing','Jump Rope','HIIT','Stairmaster','Elliptical','Other'];

  let html = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <div style="font-size:18px;font-weight:800;">Cardio Log</div>
      <button id="reorder-toggle-cardio" onclick="toggleReorderMode('cardio')" style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius);padding:5px 10px;color:var(--txt3);font-size:10px;font-weight:800;cursor:pointer;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.04em;display:flex;align-items:center;gap:5px;transition:all 0.2s;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9h18M3 15h18"/><path d="M8 4L3 9l5 5M16 4l5 5-5 5"/></svg>
        Reorder
      </button>
    </div>

    <!-- Log new session -->
    <div class="section-card" style="padding:14px;margin-bottom:16px;">
      <div class="section-title" style="margin-bottom:12px;">+ Log Session</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <div>
          <div style="font-size:10px;font-weight:800;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">Type</div>
          <select id="cardio-type-input" style="background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:9px 10px;color:var(--txt);font-size:13px;font-weight:700;width:100%;font-family:'JetBrains Mono',monospace;">
            ${CARDIO_TYPES.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
        <div>
          <div style="font-size:10px;font-weight:800;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">Duration (min)</div>
          <input id="cardio-duration-input" type="number" min="1" max="600" placeholder="30" class="set-input" style="width:100%;padding:9px 10px;">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:8px;">
        <div>
          <div style="font-size:10px;font-weight:800;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">Distance (km)</div>
          <input id="cardio-distance-input" type="number" min="0" step="0.1" placeholder="—" class="set-input" style="width:100%;padding:9px 10px;">
        </div>
        <div>
          <div style="font-size:10px;font-weight:800;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">Calories (kcal)</div>
          <input id="cardio-calories-input" type="number" min="0" placeholder="—" class="set-input" style="width:100%;padding:9px 10px;">
        </div>
      </div>
      <div style="margin-bottom:10px;">
        <div style="font-size:10px;font-weight:800;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;font-family:'JetBrains Mono',monospace;">Notes (optional)</div>
        <input id="cardio-notes-input" type="text" placeholder="e.g. morning run, zone 2..." class="set-input" style="width:100%;padding:9px 10px;">
      </div>
      <button onclick="logCardioSession()" class="import-btn" style="margin-top:4px;">LOG SESSION</button>
    </div>

    <!-- Stats summary -->
    <div id="cardio-stats" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px;">
      ${buildCardioStats(cardioLog)}
    </div>

    <!-- History -->
    <div id="cardio-entries">${entriesHtml}</div>
  `;

  document.getElementById('cardio-content').innerHTML = html;
  if(reorderMode.cardio) {
    document.querySelectorAll('.reorder-handle-cardio').forEach(h => h.style.display = 'flex');
    let btn = document.getElementById('reorder-toggle-cardio');
    if(btn){btn.style.background='rgba(0,243,255,0.15)';btn.style.borderColor='var(--secondary)';btn.style.color='var(--secondary)';}
  }
}

function buildCardioStats(cardioLog) {
  let totalSessions = 0, totalMinutes = 0, totalKm = 0;
  Object.values(cardioLog).forEach(sessions => {
    sessions.forEach(s => {
      totalSessions++;
      if(s.duration) totalMinutes += parseFloat(s.duration)||0;
      if(s.distance) totalKm += parseFloat(s.distance)||0;
    });
  });
  let statStyle = `background:var(--bg2);border:1px solid var(--border);border-radius:var(--radius);padding:12px;text-align:center;`;
  let labelStyle = `font-size:10px;font-weight:800;color:var(--secondary);text-transform:uppercase;letter-spacing:0.08em;font-family:'JetBrains Mono',monospace;`;
  let valStyle = `font-size:20px;font-weight:900;font-family:'JetBrains Mono',monospace;margin-top:4px;`;
  return `
    <div style="${statStyle}"><div style="${labelStyle}">Sessions</div><div style="${valStyle}">${totalSessions}</div></div>
    <div style="${statStyle}"><div style="${labelStyle}">Minutes</div><div style="${valStyle}">${totalMinutes}</div></div>
    <div style="${statStyle}"><div style="${labelStyle}">km</div><div style="${valStyle}">${totalKm.toFixed(1)}</div></div>
  `;
}

function logCardioSession() {
  let type = document.getElementById('cardio-type-input')?.value || 'Cardio';
  let duration = document.getElementById('cardio-duration-input')?.value;
  let distance = document.getElementById('cardio-distance-input')?.value;
  let calories = document.getElementById('cardio-calories-input')?.value;
  let notes = document.getElementById('cardio-notes-input')?.value;
  if(!duration && !distance) { alert('Enter at least duration or distance.'); return; }
  if(!state.cardioLog) state.cardioLog = {};
  let today = dateKey(state.date);
  if(!state.cardioLog[today]) state.cardioLog[today] = [];
  state.cardioLog[today].push({
    type, duration: duration||'', distance: distance||'', calories: calories||'', notes: notes||''
  });
  saveState();
  renderCardioPage();
}

function deleteCardioEntry(dateStr, idx) {
  if(!state.cardioLog || !state.cardioLog[dateStr]) return;
  state.cardioLog[dateStr].splice(idx, 1);
  if(!state.cardioLog[dateStr].length) delete state.cardioLog[dateStr];
  saveState();
  renderCardioPage();
}

function initCardioDragHandlers() {
  // No-op placeholder — cardio drag not yet needed since sessions are per-day
}

function goPage(name, fromPopstate){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active','p1','p2'));
  let nb=document.getElementById('nav-'+name);
  if(nb)nb.classList.add('active',state.profile===1?'p1':'p2');
  state.page=name;
  if(name==='workout')renderExerciseList();
  if(name==='split'){ renderSplitSelector(); renderSplitPage(); }
  if(name==='cardio')renderCardioPage();
  if(name==='profile')renderProfilePage();
  if(!fromPopstate){
    if(history.state && history.state.page === name) return;
    history.pushState({page:name}, '', '#'+name);
  }
}

window.addEventListener('popstate', function(e){
  if(document.getElementById('modal-overlay') && document.getElementById('modal-overlay').classList.contains('open')){
    closeModal();
    return;
  }
  let page = (e.state && e.state.page) || 'workout';
  goPage(page, true);
});

async function init(){
  await loadState();
  state.page = 'workout';
  updateDateLabel();
  updateProfileUI();
  applyButtonSizing();
  renderSplitSelector();
  history.replaceState({page:'workout'}, '', '#workout');
  goPage('workout');
  renderPRPage();
  applyWakeLock();
}

let _wakeLock = null;
async function applyWakeLock(){
  let want = !!(state.settings && state.settings.keepAwake);
  if(want){
    if('wakeLock' in navigator){
      try{
        if(_wakeLock) { try{ await _wakeLock.release(); }catch(e){} }
        _wakeLock = await navigator.wakeLock.request('screen');
        _wakeLock.addEventListener('release', ()=>{ _wakeLock = null; });
      }catch(e){
        console.log('Wake lock request failed:', e);
      }
    }
  } else {
    if(_wakeLock){
      try{ await _wakeLock.release(); }catch(e){}
      _wakeLock = null;
    }
  }
}
document.addEventListener('visibilitychange', ()=>{
  if(document.visibilityState === 'visible' && state.settings && state.settings.keepAwake){
    applyWakeLock();
  }
});

function applyButtonSizing(){
  document.body.classList.toggle('compact', !!(state.settings && state.settings.compactButtons));
}

/* ── ONBOARDING ── */
let obCurrentStep = 0;
let obSelectedTheme = 'claude';
const OB_STEPS = 6;
const OB_STEP_MAP = {
  0: 'ob-step-0',
  1: 'ob-step-gender', 
  2: 'ob-step-1',
  3: 'ob-step-fat',
  4: 'ob-step-2',
  5: 'ob-step-3'
};

const OB_DOT_MAP = {
  0: 'ob-dot-0',
  1: 'ob-dot-gender',
  2: 'ob-dot-1', 
  3: 'ob-dot-fat',
  4: 'ob-dot-2',
  5: 'ob-dot-3'
};


function showObStep(n) {
  // Ensure n is within valid range
  n = Math.max(0, Math.min(n, OB_STEPS - 1));
  
  for (let i = 0; i < OB_STEPS; i++) {
    const stepId = OB_STEP_MAP[i];
    const dotId = OB_DOT_MAP[i];
    const s = document.getElementById(stepId);
    const d = document.getElementById(dotId);
    if (s) s.classList.toggle('active', i === n);
    if (d) d.classList.toggle('done', i <= n);
  }
  obCurrentStep = n;
  // Force scroll to top of onboarding screen
  const obScreen = document.getElementById('onboarding-screen');
  if (obScreen) {
    obScreen.scrollTop = 0;
  }
}

function obNext() { 
  const nextStep = obCurrentStep + 1;
  showObStep(nextStep); 
}
function obBack() { 
  const prevStep = obCurrentStep - 1;
  showObStep(prevStep); 
}

function obSaveStats() {
  const h = parseFloat(document.getElementById('ob-height').value);
  const hu = document.getElementById('ob-height-unit').value;
  const w = parseFloat(document.getElementById('ob-weight').value);
  const wu = document.getElementById('ob-weight-unit').value;
  if (!state.userMetrics) state.userMetrics = {1:{},2:{}};
  if (!state.userMetrics[1]) state.userMetrics[1] = {};
  if (h && !isNaN(h)) {
    const hcm = hu === 'ft' ? +(h * 30.48).toFixed(1) : h;
    state.userMetrics[1].height = hcm;
  }
  if (w && !isNaN(w)) {
    const wkg = wu === 'lbs' ? +(w * 0.453592).toFixed(1) : w;
    state.bw[1][dateKey(new Date())] = wkg;
  }
  // Go to fat % step
  obShowFatStep();
}


// Gender and Age storage
let _obSelectedGender = null;

function obSelectGender(gender) {
  _obSelectedGender = gender;
  // Update UI
  document.querySelectorAll('.ob-gender-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('ob-gender-' + gender).classList.add('selected');
}

function obSaveGender() {
  const gender = _obSelectedGender;
  const age = parseInt(document.getElementById('ob-age-input').value);
  
  if (!gender) {
    alert('Please select a gender');
    return;
  }
  
  if (!state.userMetrics) state.userMetrics = {1:{},2:{}};
  if (!state.userMetrics[1]) state.userMetrics[1] = {};
  
  state.userMetrics[1].gender = gender;
  if (age && !isNaN(age)) state.userMetrics[1].age = age;
  
  // Move to stats step
  obNext();
}

// Fat body % option data
const FAT_PERCENTAGES = [12.5, 16.5, 20.5, 26.5, 35];
let _obFatSelected = null;

function obSelectFat(i, pct){
  _obFatSelected = pct;
  let inp = document.getElementById('ob-fat-pct');
  if(inp) inp.value = pct;
  document.querySelectorAll('.ob-fat-option').forEach((el, idx) => el.classList.toggle('selected', idx === i - 1));
}


function obShowFatStep(){
  // Set the correct body fat image based on gender
  const imgElement = document.getElementById('ob-fat-image');
  if(imgElement && bodyFatImages){
    const gender = _obSelectedGender || 'men';
    const imageKey = (gender === 'female') ? 'women' : 'men';
    imgElement.src = bodyFatImages[imageKey];
  }
  // Show fat step (index 3 in OB_STEP_MAP)
  showObStep(3);
}

// obSelectFat is defined above (unified, uses .ob-fat-option class)

function obSaveFat(){
  let v = parseFloat(document.getElementById('ob-fat-pct').value);
  if(v && !isNaN(v)){
    if(!state.userMetrics) state.userMetrics = {1:{measurements:{}},2:{measurements:{}}};
    if(!state.userMetrics[1]) state.userMetrics[1] = {measurements:{}};
    if(!state.userMetrics[2]) state.userMetrics[2] = {measurements:{}};
    if(!state.userMetrics[1].measurements) state.userMetrics[1].measurements = {};
    if(!state.userMetrics[2].measurements) state.userMetrics[2].measurements = {};
    state.userMetrics[1].fatPct = v;
  }
  // Proceed to PRs step — fat is step index 3 in OB_STEP_MAP, next is step 4 (ob-step-2)
  showObStep(4);
}

function obSavePRs() {
  const bench    = parseFloat(document.getElementById('ob-pr-bench').value);
  const squat    = parseFloat(document.getElementById('ob-pr-squat').value);
  const deadlift = parseFloat(document.getElementById('ob-pr-deadlift').value);
  const today    = dateKey(new Date());
  if (!state.prData) state.prData = {};
  const entries = [
    ['Flat Barbell Bench Press', bench],
    ['Back Squat', squat],
    ['Deadlift', deadlift],
  ];
  entries.forEach(([name, val]) => {
    if (val && !isNaN(val)) {
      if (!state.prData[name]) state.prData[name] = {};
      state.prData[name][1] = { w: val, date: today };
    }
  });
  obNext();
}

function obSaveTheme() {
  if (!state.settings) state.settings = {};
  state.settings.theme = obSelectedTheme;
  applyTheme(obSelectedTheme);
  obFinish();
}

function obFinish() {
  state.settings = state.settings || {};
  if (!state.settings.theme) {
    state.settings.theme = 'claude';
    applyTheme('claude');
  }
  state.settings.onboardingDone = true;
  saveState();
  document.getElementById('onboarding-screen').classList.remove('visible');
}

function buildObThemeGrid() {
  const grid = document.getElementById('ob-theme-grid');
  if (!grid) return;
  grid.innerHTML = THEMES.filter(t => t.active).map(t => `
    <div class="ob-theme-card ${t.id === obSelectedTheme ? 'selected' : ''}"
         onclick="obSelectTheme('${t.id}', this)">
      <div class="ob-theme-swatch" style="background:${t.swatch};"></div>
      <div class="ob-theme-name">${t.label}</div>
    </div>
  `).join('');
}

function obSelectTheme(id, el) {
  obSelectedTheme = id;
  document.querySelectorAll('.ob-theme-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  applyTheme(id);
  // re-style ob screen itself with the new theme vars
  document.getElementById('onboarding-screen').style.background = THEME_BG[id] || '#0D0D0D';
}

function showOnboarding() {
  obSelectedTheme = 'claude';
  applyTheme('claude');
  document.getElementById('onboarding-screen').style.background = THEME_BG['claude'];
  document.getElementById('onboarding-screen').classList.add('visible');
  showObStep(0);
  buildObThemeGrid();
}

/* ── THEME SYSTEM ── */
const THEMES = [
  { id:'claude',         label:'Claude',          swatch:'linear-gradient(135deg,#C15F3C,#1F1F1E)', active:true },
  { id:'cyberpunk',      label:'Cyberpunk',      swatch:'linear-gradient(135deg,#ccff00,#00f3ff)', active:true },
  { id:'hevy',           label:'Hevy Dark',       swatch:'linear-gradient(135deg,#3B82F6,#0F172A)', active:true },
  { id:'midnight-gold',  label:'Midnight Gold',   swatch:'linear-gradient(135deg,#F59E0B,#0D0D0D)', active:true },
  { id:'blood-orange',   label:'Blood Orange',    swatch:'linear-gradient(135deg,#FF4500,#0A0A0A)', active:true },
  { id:'chalk',          label:'Chalk',           swatch:'linear-gradient(135deg,#F5F4F0,#374151)', active:true },
  { id:'volt',           label:'Volt',            swatch:'linear-gradient(135deg,#CCFF00,#000000)', active:true },
  { id:'valorant',       label:'Valorant',        swatch:'linear-gradient(135deg,#FF4655,#0F1923)', active:true },
];

const THEME_BG = {
  'cyberpunk':'#0a0a0c','hevy':'#0F172A','midnight-gold':'#0D0D0D',
  'blood-orange':'#0A0A0A','chalk':'#F5F4F0','volt':'#000000','valorant':'#0F1923',
  'claude':'#1F1F1E'
};
function applyTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId === 'cyberpunk' ? '' : themeId);
  document.body.style.background = THEME_BG[themeId] || '#0a0a0c';
  if (state && state.settings) {
    state.settings.theme = themeId;
    saveState();
  }
}

function initTheme() {
  const saved = (state && state.settings && state.settings.theme) || 'claude';
  applyTheme(saved);
}

function renderThemePicker(currentTheme) {
  return `<div class="theme-picker">` +
    THEMES.map(t => {
      if (!t.active) {
        return `<div class="theme-option coming-soon">
          <div class="theme-swatch" style="background:${t.swatch};opacity:0.4;"></div>
          <div>${t.label}</div>
          <div class="theme-cs-lbl">COMING SOON</div>
        </div>`;
      }
      const isCur = (currentTheme||'claude') === t.id;
      return `<div class="theme-option ${isCur?'active':''}" onclick="applyThemeFromPicker('${t.id}')">
        <div class="theme-swatch" style="background:${t.swatch};${isCur?'box-shadow:0 0 0 2px #fff3;':''}"></div>
        <div>${t.label}</div>
      </div>`;
    }).join('') +
  `</div>`;
}

function applyThemeFromPicker(themeId) {
  applyTheme(themeId);
  const cur = (state.settings && state.settings.theme) || 'claude';
  const picker = document.getElementById('theme-picker-wrap');
  if (picker) picker.innerHTML = renderThemePicker(cur);
}

/* ── VALORANT SHADER BACKGROUND ──
   Fully self-contained and additive: watches the existing data-theme
   attribute via MutationObserver (set by applyTheme(), untouched above)
   and starts/stops its own WebGL render loop. Never calls into or
   modifies any existing theme/app function. No-ops harmlessly if WebGL
   is unavailable. */
(function () {
  let glCtx = null, glProg = null, glBuf = null, rafId = null, startT = null;
  let posLoc, timeLoc, resLoc;

  function isValorantActive() {
    return document.documentElement.getAttribute('data-theme') === 'valorant';
  }

  function mkShader(gl, type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    return s;
  }

  function initGL() {
    const canvas = document.getElementById('valorant-shader-canvas');
    if (!canvas || glCtx) return glCtx;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return null;

    const vsSource = `
      attribute vec2 position;
      varying vec2 v_uv;
      void main() {
        v_uv = position * 0.5 + 0.5;
        v_uv.y = 1.0 - v_uv.y;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_res;
      varying vec2 v_uv;
      float hash(vec2 p) {
        p = fract(p * vec2(127.1, 311.7));
        p += dot(p, p + 74.3);
        return fract(p.x * p.y);
      }
      float grid(vec2 uv, float s) {
        vec2 g = fract(uv * s);
        return step(0.96, max(g.x, g.y));
      }
      void main() {
        vec2 uv = v_uv;
        vec3 bg   = vec3(0.059, 0.098, 0.137);
        vec3 red  = vec3(1.0, 0.275, 0.333);
        vec3 teal = vec3(0.0, 0.71, 0.722);
        float g1 = grid(uv, 24.0) * 0.06;
        float g2 = grid(uv, 6.0) * 0.025;
        float pulse = sin(u_time * 0.4) * 0.5 + 0.5;
        float vign = 1.0 - smoothstep(0.3, 1.0, length(uv - 0.5) * 1.6);
        float scan = sin((uv.x - uv.y) * 30.0 - u_time * 1.5) * 0.5 + 0.5;
        scan = pow(scan, 8.0) * 0.04;
        float cg1 = smoothstep(0.7, 0.0, length(uv - vec2(0.0, 1.0))) * 0.08;
        float cg2 = smoothstep(0.5, 0.0, length(uv - vec2(1.0, 0.0))) * 0.04;
        float spark = step(0.9985, hash(uv * 200.0 + u_time * 0.3)) * pulse * vign;
        vec3 col = bg;
        col += red  * (g1 + g2) * vign * (0.5 + 0.5 * pulse);
        col += teal * scan * vign;
        col += red  * cg1;
        col += teal * cg2;
        col += red  * spark * 0.6;
        col += teal * spark * 0.3;
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const prog = gl.createProgram();
    gl.attachShader(prog, mkShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(prog, mkShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    glCtx = gl; glProg = prog; glBuf = buf;
    posLoc = gl.getAttribLocation(prog, 'position');
    timeLoc = gl.getUniformLocation(prog, 'u_time');
    resLoc = gl.getUniformLocation(prog, 'u_res');
    return gl;
  }

  function renderFrame(t) {
    if (!isValorantActive()) { rafId = null; return; }
    if (startT === null) startT = t;
    const canvas = document.getElementById('valorant-shader-canvas');
    const gl = glCtx;
    if (canvas && gl) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(glProg);
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, glBuf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
      gl.uniform1f(timeLoc, (t - startT) * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    rafId = requestAnimationFrame(renderFrame);
  }

  function startShader() {
    if (rafId) return;
    if (!initGL()) return;
    startT = null;
    rafId = requestAnimationFrame(renderFrame);
  }

  function stopShader() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  }

  function syncShaderToTheme() {
    if (isValorantActive()) startShader(); else stopShader();
  }

  try {
    const mo = new MutationObserver(syncShaderToTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  } catch (e) { /* MutationObserver unsupported — shader simply stays off */ }

  // Catch the case where valorant is already the active theme on first paint
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    syncShaderToTheme();
  } else {
    document.addEventListener('DOMContentLoaded', syncShaderToTheme);
  }
})();

const bodyFatImages = {
  women: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QESRXhpZgAASUkqAAgAAAADAA4BAgDIAAAAMgAAABoBBQABAAAA+gAAABsBBQABAAAAAgEAAAAAAABCb2R5IGZhdCBhbmQgbXVzY2xlIHBlcmNlbnRhZ2UgaW4gb3ZlcndlaWdodCBhbmQgc2xpbSBhZHVsdCBmZW1hbGUgc2lsaG91ZXR0ZXMuIEh1bWFuIGJvZHkgY29tcG9zaXRpb24gYW5hbHlzaXMuIENvbXBhcmlzb24gb2YgZGlmZmVyZW50IHR5cGVzIG9mIGZpZ3VyZXMuIE9iZXNlIGFuZCB0aGluIGNoYXJhY3RlcnMgdmVjdG9yIGlsbHVzdHJhdGlvbiwBAAABAAAALAEAAAEAAAD/4QY5aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEzNTk5MDg4NDMiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgcGx1czpEYXRhTWluaW5nPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3ZvY2FiL0RNSS1QUk9ISUJJVEVELUVYQ0VQVFNFQVJDSEVOR0lORUlOREVYSU5HIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+UGlrb3ZpdDQ0PC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Cb2R5IGZhdCBhbmQgbXVzY2xlIHBlcmNlbnRhZ2UgaW4gb3ZlcndlaWdodCBhbmQgc2xpbSBhZHVsdCBmZW1hbGUgc2lsaG91ZXR0ZXMuIEh1bWFuIGJvZHkgY29tcG9zaXRpb24gYW5hbHlzaXMuIENvbXBhcmlzb24gb2YgZGlmZmVyZW50IHR5cGVzIG9mIGZpZ3VyZXMuIE9iZXNlIGFuZCB0aGluIGNoYXJhY3RlcnMgdmVjdG9yIGlsbHVzdHJhdGlvbjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEzNTk5MDg4NDMtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwv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',
  men: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QESRXhpZgAASUkqAAgAAAADAA4BAgDIAAAAMgAAABoBBQABAAAA+gAAABsBBQABAAAAAgEAAAAAAABCb2R5IGZhdCBhbmQgbXVzY2xlIHBlcmNlbnRhZ2UgaW4gb3ZlcndlaWdodCBhbmQgbm9ybWFsIGFkdWx0IG1hbGUgc2lsaG91ZXR0ZXMuIEh1bWFuIGJvZHkgY29tcG9zaXRpb24gYW5hbHlzaXMuIENvbXBhcmlzb24gb2YgZGlmZmVyZW50IHR5cGVzIG9mIGZpZ3VyZXMuIE9iZXNlIGFuZCB0aGluIGNoYXJhY3RlcnMgdmVjdG9yIGlsbHVzdHJhdGlvbiwBAAABAAAALAEAAAEAAAD/4QY5aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcyIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEzNTk5MDg4MzYiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgcGx1czpEYXRhTWluaW5nPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3ZvY2FiL0RNSS1QUk9ISUJJVEVELUVYQ0VQVFNFQVJDSEVOR0lORUlOREVYSU5HIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+UGlrb3ZpdDQ0PC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5Cb2R5IGZhdCBhbmQgbXVzY2xlIHBlcmNlbnRhZ2UgaW4gb3ZlcndlaWdodCBhbmQgbm9ybWFsIGFkdWx0IG1hbGUgc2lsaG91ZXR0ZXMuIEh1bWFuIGJvZHkgY29tcG9zaXRpb24gYW5hbHlzaXMuIENvbXBhcmlzb24gb2YgZGlmZmVyZW50IHR5cGVzIG9mIGZpZ3VyZXMuIE9iZXNlIGFuZCB0aGluIGNoYXJhY3RlcnMgdmVjdG9yIGlsbHVzdHJhdGlvbjwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5pc3RvY2twaG90by5jb20vcGhvdG8vbGljZW5zZS1nbTEzNTk5MDg4MzYtP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwv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'
};

async function uninstallApp() {
  try {
    const reg = await navigator.serviceWorkerContainer.getRegistration();
    if (reg) {
      await reg.unregister();
      alert('App uninstalled successfully');
      window.location.href = './';
    } else {
      alert('App not installed');
    }
  } catch (err) {
    console.error('Uninstall failed:', err);
    alert('Error uninstalling app: ' + err.message);
  }
}


// ====== STITCH UI HELPERS ======
let timerTab = 'rest';
let restPresetSeconds = 90;

function setTimerTab(mode) {
  timerTab = mode;
  document.getElementById('timer-tab-rest')?.classList.toggle('active', mode === 'rest');
  document.getElementById('timer-tab-stopwatch')?.classList.toggle('active', mode === 'stopwatch');
  document.getElementById('timer-rest-panel')?.classList.toggle('hidden', mode !== 'rest');
  document.getElementById('timer-stopwatch-panel')?.classList.toggle('hidden', mode !== 'stopwatch');
}

function setRestPreset(sec) {
  restPresetSeconds = sec;
  document.querySelectorAll('.preset-chip').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === sec + 's');
  });
  let el = document.getElementById('timer-rest-display');
  if (el && !restTimers[1]?.running) {
    let m = Math.floor(sec / 60), s = sec % 60;
    el.textContent = m + ':' + (s < 10 ? '0' : '') + s;
  }
}

function applyManualRest() {
  let raw = (document.getElementById('timer-manual-input')?.value || '').trim();
  if (!raw) return;
  let sec = parseRestTime(raw, restPresetSeconds);
  setRestPreset(sec);
  startRestTimer(sec);
}

function toggleRestFromModule() {
  let rt = restTimers[1];
  if (rt.running) {
    closeRestTimer(1);
    setRestPreset(restPresetSeconds);
  } else {
    startRestTimer(restPresetSeconds);
  }
}

function resetStopwatch(n) {
  let sw = state.sw[n];
  if (sw.running) toggleSW(n);
  sw.elapsed = 0;
  let el = document.getElementById('sw' + n + '-time');
  if (el) el.innerHTML = '00:00<span class="sw-ms">.00</span>';
}

function countWorkoutsLogged() {
  if (!state.workouts) return 0;
  let keys = new Set();
  Object.keys(state.workouts).forEach(k => {
    let w = state.workouts[k];
    if (w && w.exs && w.exs.some(e => e.sets.some(s => s.w || s.r))) keys.add(k.split('_')[0]);
  });
  return keys.size;
}

function copyBackup() {
  let payload = JSON.stringify({ data: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'), splits: SPLITS, exportedAt: Date.now() }, null, 2);
  navigator.clipboard.writeText(payload).then(() => alert('Backup copied to clipboard')).catch(() => alert('Could not copy - select and copy manually from the textarea after Share.'));
}

function shareBackup() {
  let payload = JSON.stringify({ data: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'), splits: SPLITS, exportedAt: Date.now() }, null, 2);
  if (navigator.share) {
    navigator.share({ title: 'DOD Workout Backup', text: payload }).catch(() => {});
  } else {
    copyBackup();
  }
}

function importBackup() {
  let raw = (document.getElementById('backup-import-json')?.value || '').trim();
  if (!raw) return alert('Paste a backup JSON string first.');
  try {
    let parsed = JSON.parse(raw);
    let data = parsed.data || parsed;
    applyLoadedData(data);
    if (parsed.splits) {
      for (let k in SPLITS) delete SPLITS[k];
      for (let k in parsed.splits) SPLITS[k] = parsed.splits[k];
    }
    saveState();
    alert('Backup merged successfully.');
    renderProfilePage();
    if (state.page === 'workout') renderExerciseList();
    if (state.page === 'split') { renderSplitSelector(); renderSplitPage(); }
  } catch (e) {
    alert('Invalid JSON backup.');
  }
}

function hardResetApp() {
  if (!confirm('Permanently wipe all logs, splits, metrics, and settings?')) return;
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  location.reload();
}

function editDisplayName() {
  let name = prompt('Display name', displayName === 'Not Set' ? '' : displayName);
  if (name === null) return;
  displayName = name.trim() || 'Not Set';
  state.profileName = displayName;
  saveState();
  renderProfilePage();
}

/* ── Global header floating timer ── */
function updateGlobalTimer(text) {
  let el = document.getElementById('gh-timer');
  if (!el) return;
  if (text) {
    el.textContent = text;
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

/* ── Date section collapse/expand ── */
function toggleDateSection() {
  let btn = document.getElementById('date-chevron');
  let row = document.querySelector('.session-date-row');
  if (!btn || !row) return;
  let collapsed = btn.classList.toggle('collapsed');
  // hide everything in the date row except the chevron itself
  row.querySelectorAll(':scope > *:not(.chevron-btn)').forEach(el => {
    el.style.display = collapsed ? 'none' : '';
  });
}

/* ── Timer section collapse/expand ── */
function toggleTimerSection() {
  let btn = document.getElementById('timer-chevron');
  let body = document.getElementById('timer-body');
  if (!btn || !body) return;
  let collapsed = btn.classList.toggle('collapsed');
  body.style.display = collapsed ? 'none' : '';
}

async function bootstrapApp() {
  await init();
  setTimerTab('rest');
  setRestPreset(90);
  if (!state.settings?.onboardingDone) showOnboarding();
}

document.addEventListener('DOMContentLoaded', () => bootstrapApp());
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}
