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
  sw: {1:{running:false,start:0,elapsed:0,interval:null,laps:[]}},
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
    compactButtons: false,
    lockUI: true,
    waterReminder: { enabled: false, intervalMinutes: 60 },
  }
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
    sw: {1:{running:false,start:0,elapsed:0,interval:null,laps:[]}},
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
      compactButtons: false,
      lockUI: true,
      waterReminder: { enabled: false, intervalMinutes: 60 },
    }
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
  if (!state.settings.waterReminder) state.settings.waterReminder = { enabled: false, intervalMinutes: 60 };
  // Existing accounts keep their current (full-detail) experience by default;
  // only brand-new accounts (handled in the default `state` object above) start in Simple Mode.
  if (state.settings.simpleMode === undefined) state.settings.simpleMode = false;
  if (state.settings.showPlateMath === undefined) state.settings.showPlateMath = true;
  if (state.settings.showWarmupGen === undefined) state.settings.showWarmupGen = true;
  if (state.settings.showNotes === undefined) state.settings.showNotes = true;
  if (state.settings.showPRCalc === undefined) state.settings.showPRCalc = true;
  if (state.settings.compactButtons === undefined) state.settings.compactButtons = false;
  if (state.settings.keepAwake === undefined) state.settings.keepAwake = false;
  if (state.settings.lockUI === undefined) state.settings.lockUI = true;
  if (state.settings.singleExpand === undefined) state.settings.singleExpand = true;
  if (!state.bw) state.bw = {1:{}};
  if (!state.bw[1]) state.bw[1] = {};
  if (!state.knownExerciseNames) state.knownExerciseNames = [];
  if (!state.knownWorkoutNames) state.knownWorkoutNames = [];
  if (!state.userMetrics) state.userMetrics = {1:{height:'',age:''}};
  state.profile = 1;
  state.sw = {1:{running:false,start:0,elapsed:0,interval:null,laps:[]}};
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

const SW_PLAY_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const SW_PAUSE_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
const RT_RESET_ICON = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35A8 8 0 1 0 19.9 14h-2.16a6 6 0 1 1-1.46-6.14L13 11h7V4l-2.35 2.35z"/></svg>';

function toggleSW(n){
  let sw = state.sw[n];
  if (!sw.laps) sw.laps = [];
  if (sw.running) {
    // PAUSE
    clearInterval(sw.interval);
    sw.elapsed += Date.now() - sw.start;
    sw.running = false;
    let btn = document.getElementById('sw' + n + '-play');
    if (btn) { btn.innerHTML = SW_PLAY_ICON; btn.title = 'Start'; }
  } else {
    // PLAY / RESUME
    sw.start = Date.now();
    sw.running = true;
    sw.interval = setInterval(() => {
      let total = sw.elapsed + (Date.now() - sw.start);
      let el = document.getElementById('sw' + n + '-time');
      if (el) el.innerHTML = fmt(total);
    }, 10);
    let btn = document.getElementById('sw' + n + '-play');
    if (btn) { btn.innerHTML = SW_PAUSE_ICON; btn.title = 'Pause'; }
  }
}

function lapStopwatch(n) {
  let sw = state.sw[n];
  if (!sw.laps) sw.laps = [];
  if (!sw.running && sw.elapsed === 0) return; // nothing recorded yet
  let total = sw.elapsed + (sw.running ? (Date.now() - sw.start) : 0);
  // Split time = total - previous lap total
  let prevTotal = sw.laps.length > 0 ? sw.laps[sw.laps.length - 1].total : 0;
  sw.laps.push({ total, split: total - prevTotal, num: sw.laps.length + 1 });
  renderLaps(n);
}

function renderLaps(n) {
  let sw = state.sw[n];
  let container = document.getElementById('sw-laps-list');
  if (!container) return;
  if (!sw.laps || sw.laps.length === 0) { container.innerHTML = ''; return; }
  // Fastest and slowest split
  let splits = sw.laps.map(l => l.split);
  let fastest = Math.min(...splits);
  let slowest = Math.max(...splits);
  container.innerHTML = sw.laps.slice().reverse().map(l => {
    let tag = '';
    if (sw.laps.length > 1) {
      if (l.split === fastest) tag = '<span class="lap-tag lap-fast">BEST</span>';
      else if (l.split === slowest) tag = '<span class="lap-tag lap-slow">SLOW</span>';
    }
    return `<div class="lap-row">
      <span class="lap-num">LAP ${l.num}</span>
      ${tag}
      <span class="lap-split">${fmtLap(l.split)}</span>
      <span class="lap-total">${fmtLap(l.total)}</span>
    </div>`;
  }).join('');
}

function fmtLap(ms) {
  let cs = Math.floor((ms % 1000) / 10);
  let s = Math.floor(ms / 1000) % 60;
  let m = Math.floor(ms / 60000);
  return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s + '.' + (cs < 10 ? '0' : '') + cs;
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

  // The rest timer's main button does double duty: play when idle, reset when running
  // (pressing it mid-run used to trigger the exact same action as the separate reset
  // button, so the two have been merged into one). Icons match the stopwatch button's
  // size/style exactly so nothing visually shifts when switching tabs.
  let playBtn = document.getElementById('timer-rest-play');
  if (playBtn) {
    playBtn.innerHTML = isRunning ? RT_RESET_ICON : SW_PLAY_ICON;
    playBtn.title = isRunning ? 'Reset' : 'Start';
  }
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
  if(isNaN(v) || v <= 0){
    delete state.bw[state.profile][d];
  } else {
    state.bw[state.profile][d] = v;
  }
  saveState();
  if(state.page === 'profile') {
    renderBWHistory();
    renderChart();
  }
  let lbl = document.getElementById('bw-quick-lbl');
  if(lbl && (!v || v <= 0)) return;
  if(lbl && v > 0) lbl.textContent = v + 'kg';
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
  let dayNames = ['S','M','T','W','T','F','S'];
  // new single-line label: "WEDNESDAY, JUNE 24, 2026"
  let label = days[d.getDay()].toUpperCase() + ', ' + months[d.getMonth()].toUpperCase() + ' ' + d.getDate() + ', ' + d.getFullYear();
  let lbl = document.getElementById('cur-date-lbl');
  if (lbl) lbl.textContent = label;
  // global header date subtitle
  let ghSub = document.getElementById('gh-date-sub');
  if (ghSub) ghSub.textContent = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  // legacy elements (no-ops if removed from HTML, safe)
  let monthEl = document.getElementById('cur-date-month');
  if (monthEl) monthEl.textContent = months[d.getMonth()].toUpperCase();
  let dstr = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  let dp = document.getElementById('hidden-date-picker');
  if (dp) dp.value = dstr;
  // render week strip
  renderWeekStrip();
}

function renderWeekStrip() {
  let strip = document.getElementById('week-strip');
  if (!strip) return;
  let d = state.date;
  let dayLetters = ['S','M','T','W','T','F','S'];
  // Render 5 weeks: 2 before current week, current week, 2 after
  let dow = d.getDay();
  let weekStart = new Date(d);
  weekStart.setDate(d.getDate() - dow); // start of current week (Sun)
  let rangeStart = new Date(weekStart);
  rangeStart.setDate(weekStart.getDate() - 14); // 2 weeks back
  strip.innerHTML = '';
  let activeCol = null;
  for (let i = 0; i < 35; i++) {
    let day = new Date(rangeStart);
    day.setDate(rangeStart.getDate() + i);
    let isActive = day.toDateString() === d.toDateString();
    let col = document.createElement('div');
    col.className = 'week-day-col' + (isActive ? ' active' : '');
    col.innerHTML = `<span class="week-day-letter">${dayLetters[day.getDay()]}</span><span class="week-day-num">${day.getDate()}</span>`;
    col.addEventListener('click', () => {
      state.date = new Date(day);
      updateDateLabel();
      renderExerciseList();
      if(state.page === 'profile') renderProfilePage();
      saveState();
    });
    strip.appendChild(col);
    if (isActive) activeCol = col;
  }
  // Scroll so the active day is centred
  if (activeCol) {
    setTimeout(() => {
      let stripRect = strip.getBoundingClientRect();
      let colRect = activeCol.getBoundingClientRect();
      let offset = colRect.left - stripRect.left - (stripRect.width / 2) + (colRect.width / 2);
      strip.scrollLeft += offset;
    }, 0);
  }
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
  let splitsDisplay = document.getElementById('splits-selected-name');
  if (splitsDisplay) splitsDisplay.textContent = state.activeSplit || '';
  let locked = !!(state.settings && state.settings.lockUI);
  let editBtn = document.getElementById('edit-split-btn');
  if (editBtn) editBtn.style.display = (state.activeSplit && !locked) ? 'flex' : 'none';
  let addBtn = document.getElementById('add-split-btn');
  if (addBtn) addBtn.style.display = locked ? 'none' : 'flex';
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
        ${state.settings.showPlateMath !== false ? `<button onclick="openPlateCalc(${ei})" style="flex:1 1 45%; background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:8px 14px;font-size:12px;color:var(--txt);cursor:pointer;font-weight:700;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.03em;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></svg> Plate Math</button>` : ''}
        ${state.settings.showWarmupGen !== false ? `<button onclick="generateWarmups(${ei})" style="flex:1 1 100%; background:rgba(255,39,65,0.15);border:1px solid rgba(255,39,65,0.3);border-radius:var(--radius);padding:8px 14px;font-size:12px;color:var(--o1);cursor:pointer;font-weight:700;font-family:'JetBrains Mono',monospace;text-transform:uppercase;letter-spacing:0.04em;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:4px;"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> Generate Warm-up Sets</button>` : ''}
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
  let lbl = document.getElementById('bw-quick-lbl');
  let icon = document.getElementById('bw-quick-icon');
  let chip = document.getElementById('bw-quick-chip');
  if(!inp) return;
  if(inp.style.display === 'none'){
    let todayBW = (state.bw[state.profile] || {})[dateKey(state.date)] || '';
    if(icon) icon.style.display = 'none';
    if(lbl) lbl.style.display = 'none';
    inp.style.display = 'inline-block';
    inp.value = todayBW || '';
    if(chip) chip.classList.add('active');
    inp.focus();
    inp.select();
  } else {
    saveBWQuick();
  }
}
function saveBWQuick(){
  let inp = document.getElementById('bw-quick-val');
  let lbl = document.getElementById('bw-quick-lbl');
  let icon = document.getElementById('bw-quick-icon');
  let chip = document.getElementById('bw-quick-chip');
  if(!inp) return;
  let v = parseFloat(inp.value);
  if(v && v > 0){
    if(!state.bw[state.profile]) state.bw[state.profile] = {};
    state.bw[state.profile][dateKey(state.date)] = v;
    saveState();
    if(lbl) lbl.textContent = v+'kg';
  } else if(lbl) {
    let todayBW = (state.bw[state.profile] || {})[dateKey(state.date)] || '';
    lbl.textContent = todayBW ? todayBW+'kg' : 'BW';
  }
  inp.style.display = 'none';
  inp.value = '';
  if(icon) icon.style.display = '';
  if(lbl) lbl.style.display = '';
  if(chip) chip.classList.remove('active');
}
function updateBWQuickLabel(){
  let lbl = document.getElementById('bw-quick-lbl');
  let inp = document.getElementById('bw-quick-val');
  if(!lbl || (inp && inp.style.display !== 'none')) return;
  let todayBW = (state.bw[state.profile] || {})[dateKey(state.date)] || '';
  lbl.textContent = todayBW ? todayBW+'kg' : 'BW';
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
  updateBWQuickLabel();
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
      let timerBtnHtml = state.settings.useRestTimer !== false ? `<button type="button" class="ex-action-btn timer" onclick="event.stopPropagation();startRestTimer(${exRestTime})">&#9201; ${fmtRestBadge(exRestTime)}</button>` : '';
      let prBtnHtml = showPRCalc ? `<button class="ex-action-btn pr" onclick="event.stopPropagation();togglePRPanel(${ei})">PR</button>` : '';

      html+=`<div class="ex-item" id="ex-${ei}" data-idx="${ei}" onclick="toggleExExpand(${ei})">
        <div class="ex-header">
          <div class="ex-name-wrap">
            <div class="ex-title-row">
              <div class="ex-name" title="${ex.name}">${ex.name}</div>
            </div>
            <div class="ex-sub-row">
              ${tagHtml}
              <div class="ex-meta">${ex.sets.length} set${ex.sets.length!==1?'s':''}</div>
            </div>
          </div>
          <div class="ex-header-actions">
            ${timerBtnHtml}
          </div>
        </div>
      <div class="ex-expand" id="ex-expand-${ei}" style="display:${openPanels.expand[ei]?'block':'none'};" onclick="event.stopPropagation()">
        <div class="ex-panel-actions">
          ${prBtnHtml}
          <button class="ex-action-btn hist" onclick="event.stopPropagation();toggleHistPanel(${ei})">HIST</button>
          ${showNotes ? `<button class="ex-action-btn note" onclick="event.stopPropagation();toggleNotePanel(${ei})">NOTE</button>` : ''}
          ${infoBtnHtml}
        </div>
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
    setReorderActiveState('workout', true);
    let btn = document.getElementById('reorder-toggle-workout');
    if(btn){btn.style.background='rgba(0,243,255,0.15)';btn.style.borderColor='var(--secondary)';btn.style.color='var(--secondary)';}
  }
}

function initExListDragHandlers(){
  let container = document.getElementById('exercise-list');
  if(!container) return;
  container.querySelectorAll('.ex-item').forEach(item=>{
    item.onpointerdown = function(e){
      if(!(reorderMode && reorderMode.workout)) return;
      if(e.target.closest('button')) return;
      e.preventDefault();
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

/* Close all sub-panels for a given exercise index */
function closeAllSubPanels(ei){
  ['hist-panel','pr-panel','note-panel','info-panel'].forEach(id=>{
    let el=document.getElementById(id+'-'+ei);
    if(el) el.style.display='none';
  });
}

/* Open exactly one sub-panel, closing the rest first */
function openSubPanel(ei, panelId){
  let el=document.getElementById(panelId+'-'+ei);
  if(!el) return;
  let isOpen = el.style.display==='block';
  closeAllSubPanels(ei);
  if(!isOpen) el.style.display='block';
}

function toggleInfoPanel(ei){
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  openSubPanel(ei,'info-panel');
}

function toggleMorePanel(ei){
  let el=document.getElementById('ex-more-'+ei);
  if(!el) return;
  let isOpen = el.style.display === 'flex';
  el.style.display = isOpen ? 'none' : 'flex';
  if(!isOpen){
    let expand = document.getElementById('ex-expand-'+ei);
    if(expand) expand.style.display = 'block';
  }
}

function toggleExExpand(ei){
  if(reorderMode && reorderMode.workout) return;
  let el=document.getElementById('ex-expand-'+ei);
  let opening = el.style.display==='none';
  if(!opening){
    // Closing — collapse all sub-panels first
    closeAllSubPanels(ei);
    let moreRow = document.getElementById('ex-more-'+ei);
    if(moreRow) moreRow.style.display = 'none';
  } else if(state.settings.singleExpand !== false){
    // Accordion mode — collapse any other expanded exercise card first
    collapseAllExpandedCards('workout');
  }
  el.style.display = opening ? 'block' : 'none';
  if(opening){
    requestAnimationFrame(()=>{
      el.scrollIntoView({behavior:'smooth', block:'nearest'});
    });
  }
}

function toggleHistPanel(ei){
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  openSubPanel(ei,'hist-panel');
}

function togglePRPanel(ei){
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  let wasOpen = document.getElementById('pr-panel-'+ei)?.style.display==='block';
  openSubPanel(ei,'pr-panel');
  if(!wasOpen){
    let calc=document.getElementById('pr-calc-'+ei);
    if(calc) calc.innerHTML=getPRCalcHTML(ei);
  }
}

function toggleNotePanel(ei){
  let expand=document.getElementById('ex-expand-'+ei);
  expand.style.display='block';
  openSubPanel(ei,'note-panel');
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

/* ── POWER QUOTE ENGINE ──────────────────────────────────────────
   Shows ONE quote at a time under the header. Each quote stays on
   screen for QUOTE_REPEAT_COUNT "views" (it re-pulses each cycle)
   before swapping to the next quote in the list. Big arsenal of
   quotes below — built to hit hard every single time it's read. */
const POWER_QUOTES = [
  "DISCIPLINE OVER MOTIVATION",
  "THE IRON NEVER LIES",
  "EARN IT EVERY DAY",
  "PAIN IS TEMPORARY, PRIDE IS FOREVER",
  "NO EXCUSES, ONLY RESULTS",
  "OUTWORK YESTERDAY",
  "STRONGER THAN YOUR EXCUSES",
  "SHOW UP. LIFT. REPEAT.",
  "GROWTH LIVES OUTSIDE COMFORT",
  "CONSISTENCY BEATS INTENSITY",
  "BUILT NOT BORN",
  "DO OR DIE",
  "BE THE STORM, NOT THE VICTIM OF IT",
  "WEAK MINDS QUIT. YOU DON'T.",
  "DEMAND MORE FROM YOURSELF",
  "EVERY REP IS A PROMISE KEPT",
  "FEAR THE MIRROR, NOT THE WEIGHT",
  "SUFFER NOW, DOMINATE LATER",
  "YOU WERE BORN TO CONQUER",
  "THE GRIND DOESN'T CARE HOW YOU FEEL",
  "GREATNESS IS EARNED IN SILENCE",
  "BECOME UNSTOPPABLE",
  "NO ONE IS COMING TO SAVE YOU. RISE.",
  "PRESSURE MAKES DIAMONDS",
  "TRAIN LIKE YOUR FUTURE DEPENDS ON IT",
  "COMFORT IS THE ENEMY OF PROGRESS",
  "RELENTLESS BEATS TALENTED",
  "YOUR ONLY COMPETITION IS YESTERDAY'S YOU",
  "MAKE FEAR YOUR FUEL",
  "CHAMPIONS TRAIN, LOSERS COMPLAIN",
  "OWN THE GRIND",
  "WHAT YOU AVOID, OWNS YOU",
  "GO UNTIL THERE'S NOTHING LEFT",
  "THE BODY ACHIEVES WHAT THE MIND BELIEVES",
  "HARD CHOICES, EASY LIFE",
  "ZERO DAYS OFF FROM YOUR STANDARDS",
  "PROVE IT WHEN NO ONE IS WATCHING",
  "RESPECT THE PROCESS, FEAR NOTHING",
  "RUTHLESS WITH YOUR EXCUSES",
  "RISE LIKE IT'S WAR",
  "RECLAIM YOUR POWER, REP BY REP",
  "RESULTS DON'T LIE, EFFORT DOESN'T HIDE",
  "EAT YOUR DOUBTS FOR BREAKFAST",
  "BE DANGEROUS IN PURSUIT OF YOUR GOALS",
  "STRENGTH IS BUILT IN THE DARK",
  "NEVER NEGOTIATE WITH WEAKNESS",
  "ATTACK THE DAY BEFORE IT ATTACKS YOU",
  "SACRIFICE NOW, DOMINATE FOREVER",
  "FORGE YOURSELF IN FIRE",
  "ONE MORE REP. ALWAYS ONE MORE.",
  "YOUR LIMITS ARE A LIE YOU TELL YOURSELF"
];
let _quoteIdx = 0;
let _quotePasses = 0;

function initPowerQuotes(){
  let wrap = document.querySelector('.quote-power-wrap');
  let el = document.getElementById('quote-power-text');
  if(!wrap || !el) return;

  // Build a continuous sequence of quotes
  // Each quote appears 2 times before the separator
  let quoteSequence = [];
  let totalDuration = 0;
  
  POWER_QUOTES.forEach((quote, idx) => {
    // Add quote twice
    for (let i = 0; i < 2; i++) {
      quoteSequence.push({ text: quote, isQuote: true });
      totalDuration++;
    }
    // Add separator (except after the last quote's second occurrence)
    if (idx < POWER_QUOTES.length - 1 || true) { // Always add after each pair
      quoteSequence.push({ text: '|', isQuote: false });
      totalDuration += 0.3; // Separators are shorter
    }
  });

  // Calculate animation duration (each unit = ~1 second of scroll)
  // Adjust the multiplier to control scroll speed
  const baseSpeed = 0.6; // seconds per unit
  const totalAnimationDuration = (quoteSequence.length * baseSpeed) + 5; // Add buffer

  // Build HTML content
  let html = '';
  quoteSequence.forEach((item, idx) => {
    if (item.isQuote) {
      html += `<span>${item.text}</span>`;
      // Add separator after each quote (except the last one overall)
      if (idx < quoteSequence.length - 1 && quoteSequence[idx + 1].isQuote) {
        html += `<div class="quote-power-divider"></div>`;
      }
    }
  });
  
  el.innerHTML = html;
  
  // Duplicate content to create seamless loop
  el.innerHTML = el.innerHTML + el.innerHTML;
  
  // Set animation duration
  el.style.animationDuration = totalAnimationDuration + 's';
}

/* ── WATER REMINDER ENGINE ───────────────────────────────────────
   Two layers, since there's no backend to push from:
   1) Periodic Background Sync — lets the service worker fire a
      reminder even when the app is closed, but ONLY on Chromium-based
      Android browsers with the PWA actually installed, and only on the
      browser's own schedule (often clamped to a several-hour minimum
      no matter what interval is requested). Not available on iOS
      Safari, desktop Firefox, or in a plain browser tab.
   2) An in-tab setInterval — fires reliably at the exact interval, but
      only while this tab/app is open. Runs everywhere, always, as the
      dependable fallback under the best-effort layer above. */
let _waterReminderTimer = null;
const WATER_REMINDER_MESSAGES = [
  "Time to hydrate. Grab some water.",
  "Quick water break — your body needs it.",
  "Drink up. Stay sharp, stay strong.",
  "Hydration check: top up your water.",
  "Don't skip this one — drink some water."
];

function waterReminderCapability(){
  let hasPeriodicSync = 'serviceWorker' in navigator && 'PeriodicSyncManager' in window;
  return hasPeriodicSync ? 'periodic' : 'in-app';
}

function startWaterReminderTimer(){
  stopWaterReminderTimer();
  let cfg = state.settings.waterReminder;
  if(!cfg || !cfg.enabled) return;
  let ms = (cfg.intervalMinutes || 60) * 60 * 1000;
  _waterReminderTimer = setInterval(fireWaterReminder, ms);
}
function stopWaterReminderTimer(){
  if(_waterReminderTimer){ clearInterval(_waterReminderTimer); _waterReminderTimer = null; }
}
function fireWaterReminder(){
  let msg = WATER_REMINDER_MESSAGES[Math.floor(Math.random()*WATER_REMINDER_MESSAGES.length)];
  pushWaterConfigToSW(true);
  // Always route through the SW on Android — new Notification() from the page
  // is silently blocked; only registration.showNotification() (inside the SW)
  // produces a real Android system notification.
  if('serviceWorker' in navigator && navigator.serviceWorker.controller && Notification.permission === 'granted'){
    navigator.serviceWorker.controller.postMessage({ type: 'WATER_FIRE', body: msg });
    showWaterToast(msg);
    return;
  }
  // Fallback for desktop / browsers where SW messaging isn't available.
  if('Notification' in window && Notification.permission === 'granted'){
    try { new Notification('DO OR DIE', { body: msg, icon: 'https://raw.githubusercontent.com/raghendh/dod/main/icon-192.png' }); } catch(e) {}
  }
  showWaterToast(msg);
}
function showWaterToast(msg){
  let old = document.getElementById('water-toast');
  if(old) old.remove();
  let wrap = document.createElement('div');
  wrap.id = 'water-toast';
  wrap.className = 'water-toast-wrap';
  wrap.innerHTML = `<span class="water-toast-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.5s6 7 6 11.5a6 6 0 0 1-12 0c0-4.5 6-11.5 6-11.5z"/></svg></span><span class="water-toast-text">${msg}</span>`;
  document.body.appendChild(wrap);
  setTimeout(() => { if(wrap.parentNode) wrap.remove(); }, 6000);
}

// Sends the current water-reminder settings to the service worker, which
// caches them (via the Cache API — the only storage a SW can reliably read
// from inside a periodicsync event) so it knows whether/how often to fire
// on its own. markFired=true also stamps "last fired now" to keep the SW's
// own due-time check in sync with whatever just fired from the page side.
function pushWaterConfigToSW(markFired){
  if(!('serviceWorker' in navigator) || !navigator.serviceWorker.controller) return;
  let cfg = state.settings.waterReminder || { enabled: false, intervalMinutes: 60 };
  navigator.serviceWorker.controller.postMessage({
    type: 'WATER_CONFIG',
    enabled: cfg.enabled,
    intervalMinutes: cfg.intervalMinutes,
    lastFired: markFired ? Date.now() : 0
  });
}

async function registerWaterPeriodicSync(){
  if(!('serviceWorker' in navigator) || !('PeriodicSyncManager' in window)) return false;
  try {
    let reg = await navigator.serviceWorker.ready;
    let status = await navigator.permissions.query({ name: 'periodic-background-sync' });
    if(status.state !== 'granted') return false;
    let cfg = state.settings.waterReminder || { intervalMinutes: 60 };
    await reg.periodicSync.register('water-reminder', {
      minInterval: (cfg.intervalMinutes || 60) * 60 * 1000
    });
    return true;
  } catch(e) {
    return false; // unsupported, permission not grantable here, or registration failed — silently fall back
  }
}
async function unregisterWaterPeriodicSync(){
  if(!('serviceWorker' in navigator) || !('PeriodicSyncManager' in window)) return;
  try {
    let reg = await navigator.serviceWorker.ready;
    await reg.periodicSync.unregister('water-reminder');
  } catch(e) { /* nothing to clean up */ }
}

function toggleWaterReminder(on){
  if(!state.settings.waterReminder) state.settings.waterReminder = { enabled: false, intervalMinutes: 60 };
  if(on && 'Notification' in window){
    if(Notification.permission === 'default'){
      Notification.requestPermission().then(() => finishWaterReminderToggle(on));
      return;
    }
    if(Notification.permission === 'denied'){
      alert('Notifications are blocked for this app.\n\nTo fix: open Android Settings → Apps → your browser → Notifications → enable them, then come back and turn this on.');
      // Still enable the in-app toast fallback even without permission.
    }
  }
  finishWaterReminderToggle(on);
}
function finishWaterReminderToggle(on){
  state.settings.waterReminder.enabled = on;
  saveState();
  startWaterReminderTimer();
  pushWaterConfigToSW(false);
  if(on) registerWaterPeriodicSync().then(() => { if(state.page === 'profile') renderProfilePage(); });
  else unregisterWaterPeriodicSync();
  if(state.page === 'profile') renderProfilePage();
}
function setWaterReminderInterval(minutes){
  if(!state.settings.waterReminder) state.settings.waterReminder = { enabled: false, intervalMinutes: 60 };
  state.settings.waterReminder.intervalMinutes = parseInt(minutes, 10) || 60;
  saveState();
  startWaterReminderTimer();
  pushWaterConfigToSW(false);
  if(state.settings.waterReminder.enabled) registerWaterPeriodicSync();
  if(state.page === 'profile') renderProfilePage();
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
  let locked = !!(state.settings && state.settings.lockUI);
  let html=`<div class="day-card">
    <div class="day-header">
      <div style="min-width:0;flex:1;">
        <div class="day-label">DAY ${state.splitDayView+1}</div>
        <div class="day-name serif-title" title="${day.name}">${day.name}</div>
      </div>
      <div class="day-header-actions" style="flex-shrink:0;">
        <button onclick="showRules()" style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius);padding:6px 10px;color:var(--txt);font-size:11px;font-weight:800;cursor:pointer;margin-right:4px;">RULES</button>
        ${locked ? '' : `<div class="icon-btn" onclick="renameDay(${state.splitDayView})" aria-label="Rename day">✎</div>
        <div class="icon-btn" onclick="addExToSplit(${state.splitDayView})" aria-label="Add exercise">+</div>`}
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
      html+=`<div class="day-ex-item" data-idx="${i}" onclick="toggleSplitExDetail(${i})">
        <div class="day-ex-row">
          <div class="day-ex-num">${i+1}</div>
          <div class="day-ex-name" title="${ex.name}">${ex.name}</div>
          ${ex.tag?`<span class="day-ex-tag" style="background:${tagColor}22;color:${tagColor};border:1px solid ${tagColor}44;margin-top:2px;">${ex.tag}</span>`:''}
          ${locked ? '' : `<div class="icon-btn" onclick="event.stopPropagation();editSplitEx(${i})" aria-label="Edit exercise" style="margin-left:8px;">✎</div>`}
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
    setReorderActiveState('split', true);
    let btn = document.getElementById('reorder-toggle-split');
    if(btn){btn.style.background='rgba(0,243,255,0.15)';btn.style.borderColor='var(--secondary)';btn.style.color='var(--secondary)';}
  }
}

function initSplitDragHandlers(){
  let container = document.querySelector('#split-day-content .day-ex');
  if(!container) return;
  container.querySelectorAll('.day-ex-item').forEach(item=>{
    item.onpointerdown = function(e){
      if(!(reorderMode && reorderMode.split)) return;
      if(e.target.closest('button') || e.target.closest('.icon-btn')) return;
      e.preventDefault();
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
  if(reorderMode && reorderMode.split) return;
  let el=document.getElementById('split-ex-detail-'+i);
  let opening = getComputedStyle(el).display==='none';
  if(opening && state.settings.singleExpand !== false){
    // Accordion mode — collapse any other expanded day-exercise card first
    collapseAllExpandedCards('split');
  }
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

  if (!dates.length) {
    html = '<div class="u13">No weigh-ins logged yet.</div>';
  } else {
    dates.forEach(date => {
      let d = new Date(date + 'T12:00:00');
      let w = bws[date];
      html += `<div class="pr-list-item">
        <div class="pr-date" style="font-size:14px;font-weight:700;color:var(--txt);margin-top:0;">${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}</div>
        <div class="pr-value">${w} <span style="font-size:13px;font-weight:600;color:var(--txt-muted);">kg</span></div>
      </div>`;
    });
  }

  let el = document.getElementById('bw-history-list');
  if (el) el.innerHTML = html;
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

// ====== CSV IMPORT ======
function triggerCSVImport() {
  document.getElementById('csv-import-file')?.click();
}

function handleCSVFileSelected(input) {
  let file = input.files && input.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = () => {
    try {
      let result = parseCSVImport(String(reader.result || ''));
      if (result.rows === 0) {
        alert('No valid rows found in the CSV.\n\nExpected columns: Date, Exercise, Set, Type, Weight, Reps, Unilateral');
        return;
      }
      saveState();
      alert(`CSV imported successfully!\n${result.rows} set(s) across ${result.days} day(s) merged into your logs.`);
      if (state.page === 'workout') renderExerciseList();
      renderProfilePage();
    } catch (e) {
      alert('Failed to import CSV: ' + e.message);
    }
    input.value = '';
  };
  reader.onerror = () => { alert('Could not read that file.'); input.value = ''; };
  reader.readAsText(file);
}

function parseCSVImport(text) {
  // Normalise line endings
  let lines = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(l => l.trim());
  if (lines.length < 2) throw new Error('File appears empty.');

  // Parse a single CSV line respecting quoted fields
  function parseLine(line) {
    let fields = [], cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      let ch = line[i];
      if (ch === '"') { inQ = !inQ; continue; }
      if (ch === ',' && !inQ) { fields.push(cur.trim()); cur = ''; continue; }
      cur += ch;
    }
    fields.push(cur.trim());
    return fields;
  }

  let headers = parseLine(lines[0]).map(h => h.toLowerCase().replace(/\s+/g,''));
  let iDate = headers.indexOf('date');
  let iEx   = headers.findIndex(h => h.startsWith('exercise'));
  let iSet  = headers.findIndex(h => h.startsWith('set'));
  let iType = headers.findIndex(h => h.startsWith('type'));
  let iW    = headers.findIndex(h => h === 'weight' || h === 'weight(kg)');
  let iR    = headers.findIndex(h => h === 'reps');
  let iUni  = headers.findIndex(h => h.startsWith('uni') || h.startsWith('lateral'));

  if (iDate === -1 || iEx === -1) throw new Error('CSV must have at least "Date" and "Exercise" columns.');

  let rowCount = 0, daySet = new Set();

  for (let li = 1; li < lines.length; li++) {
    let f = parseLine(lines[li]);
    if (f.every(c => !c)) continue; // blank row

    let dateStr = f[iDate] || '';
    let exName  = f[iEx]   || '';
    if (!dateStr || !exName) continue;

    // Accept YYYY-MM-DD or DD/MM/YYYY or MM/DD/YYYY
    let iso = dateStr;
    if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(dateStr)) {
      let parts = dateStr.split(/[\/\-]/);
      iso = `${parts[2]}-${parts[0].padStart(2,'0')}-${parts[1].padStart(2,'0')}`;
    }

    let wKey = iso; // e.g. "2025-06-01"
    if (!state.workouts) state.workouts = {};
    if (!state.workouts[wKey]) state.workouts[wKey] = { exs: [] };

    let workout = state.workouts[wKey];
    let ex = workout.exs.find(e => e.name.toLowerCase() === exName.toLowerCase());
    if (!ex) {
      ex = { name: exName, tag: '', sets: [], notes: '' };
      workout.exs.push(ex);
    }

    // Set index from CSV (1-based) — we fill gaps with empty sets
    let setIdx = iSet !== -1 ? (parseInt(f[iSet]) || 1) - 1 : ex.sets.length;
    while (ex.sets.length <= setIdx) ex.sets.push({ w: '', r: '', type: 'normal', uni: false });

    let setObj = ex.sets[setIdx];
    if (iW  !== -1 && f[iW])  setObj.w    = f[iW];
    if (iR  !== -1 && f[iR])  setObj.r    = f[iR];
    if (iType !== -1 && f[iType]) setObj.type = f[iType] || 'normal';
    if (iUni !== -1) setObj.uni = /yes|true|1/i.test(f[iUni] || '');

    rowCount++;
    daySet.add(iso);
  }

  return { rows: rowCount, days: daySet.size };
}

// ── NEW BACKUP SYSTEM ──────────────────────────────────────────────────
function buildBackupPayload() {
  return JSON.stringify({ data: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'), splits: SPLITS, exportedAt: Date.now() }, null, 2);
}

function downloadBackupFile(payload, fileName) {
  let blob = new Blob([payload], { type: 'application/json' });
  let url = URL.createObjectURL(blob);
  let a = document.createElement('a');
  a.href = url;
  a.download = fileName || `dod-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportJSON() {
  let payload = buildBackupPayload();
  let fileName = `dod-backup-${new Date().toISOString().slice(0,10)}.json`;
  downloadBackupFile(payload, fileName);
}

function shareBackup() {
  let payload = buildBackupPayload();
  let fileName = `dod-backup-${new Date().toISOString().slice(0,10)}.json`;

  if (!navigator.share) {
    // Web Share API isn't available at all in this browser context
    // (common on desktop browsers, or if the app isn't served over HTTPS).
    alert('Sharing isn\'t supported in this browser — downloading the backup file instead.');
    downloadBackupFile(payload, fileName);
    return;
  }

  let file = new File([payload], fileName, { type: 'application/json' });
  let canShareFile = !!(navigator.canShare && navigator.canShare({ files: [file] }));

  let shareAttempt = canShareFile
    ? navigator.share({ title: 'DOD Workout Backup', files: [file] })
    : navigator.share({ title: 'DOD Workout Backup', text: payload });

  shareAttempt.catch((err) => {
    if (err && err.name === 'AbortError') return; // user closed the share sheet — not an error
    // Share genuinely failed (rare) — fall back to download so the user still gets their backup.
    alert('Share failed — downloading the backup file instead.');
    downloadBackupFile(payload, fileName);
  });
}

function triggerJSONImport() {
  document.getElementById('json-import-file')?.click();
}

function handleJSONFileSelected(input) {
  let file = input.files && input.files[0];
  if (!file) return;
  let reader = new FileReader();
  reader.onload = () => {
    try {
      let parsed = JSON.parse(reader.result);
      let data = parsed.data || parsed;
      applyLoadedData(data);
      if (parsed.splits) {
        for (let k in SPLITS) delete SPLITS[k];
        for (let k in parsed.splits) SPLITS[k] = parsed.splits[k];
      }
      saveState();
      alert('JSON backup imported successfully.');
      renderProfilePage();
      if (state.page === 'workout') renderExerciseList();
      if (state.page === 'split') { renderSplitSelector(); renderSplitPage(); }
    } catch (e) {
      alert('Invalid JSON file: ' + e.message);
    }
    input.value = '';
  };
  reader.onerror = () => {
    alert('Could not read file.');
    input.value = '';
  };
  reader.readAsText(file);
}

// ─────────────────── REST OF THE APP (unchanged from here on) ───────────────────

function openSettings() {
  let s = state.settings;
  let commonPlates = [25, 20, 15, 10, 7.5, 5, 2.5, 1.25, 0.5];

  let platesHtml = commonPlates.map(p => `
    <label class="plate-chip ${s.plates.includes(p) ? 'checked' : ''}" onclick="event.preventDefault();this.querySelector('input').checked=!this.querySelector('input').checked;this.classList.toggle('checked',this.querySelector('input').checked);saveSettingsAuto();">
      <input type="checkbox" value="${p}" class="setting-plate-cb" tabindex="-1" ${s.plates.includes(p) ? 'checked' : ''}>
      ${p} kg
    </label>
  `).join('');

  document.getElementById('modal-title').textContent='Settings';
  document.getElementById('modal-body').innerHTML=`
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
  else if (key === 'lockUI') state.settings.lockUI = on;
  else if (key === 'singleExpand') state.settings.singleExpand = on;
  else if (key === 'pitchBlack') {
    state.settings.pitchBlack = on;
    document.body.classList.toggle('pitch-black', on);
  }
  saveState();
  applyWakeLock();
  applyButtonSizing();
  syncTimerUI();
  if (state.page === 'workout') renderExerciseList();
  if (state.page === 'split') { renderSplitSelector(); renderSplitPage(); }
}

/* ── Profile page tab state ── */
let profileTab = 'stats';
let profileExpandedCard = null; // 'bw' | 'pr' | 'hist' | null — tracks which Stats card is open across re-renders

function switchProfileTab(tab) {
  profileTab = tab;
  document.querySelectorAll('.profile-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });
  document.getElementById('profile-tab-stats').style.display   = tab === 'stats'    ? 'block' : 'none';
  document.getElementById('profile-tab-settings').style.display = tab === 'settings' ? 'block' : 'none';
}

function renderProfilePage() {
  let s = state.settings || {};
  let workouts = countWorkoutsLogged();
  let subline = displayName === 'Not Set' ? 'Not Set' : 'Local profile';
  let metrics = state.userMetrics[state.profile] || {};
  let m = metrics.measurements || {};
  let bws = state.bw[state.profile] || {};
  let todayBW = bws[dateKey(state.date)] || Object.values(bws).slice(-1)[0] || '';
  let fitness = calcFitnessLevel(metrics, todayBW);
  let waterCfg = state.settings.waterReminder || { enabled: false, intervalMinutes: 60 };

  /* ── Build PRs HTML ── */
  let prHtml = '';
  let p = state.profile;
  for (let name in state.prData) {
    let pr = state.prData[name][p];
    if (pr) {
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let d = new Date(pr.date + 'T12:00:00');
      prHtml += `<div class="pr-list-item">
        <div style="min-width:0;flex:1;margin-right:10px;">
          <div class="pr-ex-name" title="${name}">${name}</div>
          <div class="pr-date">${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}</div>
        </div>
        <div class="u23" style="flex-shrink:0;">
          <div class="pr-value">${pr.w}kg</div>
          <div style="font-size:11px;font-weight:600;color:var(--txt3);letter-spacing:0.05em;margin-top:4px;">1RM RECORD</div>
        </div>
      </div>`;
    }
  }

  /* ── Build Workout History HTML ── */
  let histHtml = '';
  let months2 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let daysByDate = {};
  for (let k in state.workouts) {
    let parts = k.split('_');
    let date = parts[0];
    let w = state.workouts[k];
    if (!w.exs.some(e => e.sets.some(s => s.w || s.r))) continue;
    if (!daysByDate[date]) daysByDate[date] = {};
    daysByDate[date][1] = w;
  }
  let histDates = Object.keys(daysByDate).sort().reverse();
  if (!histDates.length) {
    histHtml = '<div class="u13">No workouts logged yet.<br><span class="u5">Train to see history here.</span></div>';
  } else {
    let dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    histDates.forEach(date => {
      let d = new Date(date + 'T12:00:00');
      let w = daysByDate[date][1];
      let bw = bws[date];
      histHtml += `<div class="hist-day">
        <div class="hist-day-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="hist-day-num">${d.getDate()}</div>
            <div class="hist-day-date">${dayNames[d.getDay()]}, ${months2[d.getMonth()]} ${d.getFullYear()}</div>
          </div>
        </div>
        <div class="hist-card">
          <div class="hist-profile-col">
            ${bw ? `<div style="font-size:11px;font-weight:700;color:var(--txt-muted);margin-bottom:8px;">BW: ${bw}kg</div>` : ''}`;
      if (w) {
        w.exs.forEach(ex => {
          let doneSets = ex.sets.filter(s => s.w || s.r);
          if (!doneSets.length) return;
          histHtml += `<div class="hist-ex-name">${ex.name}</div>`;
          doneSets.forEach(s => {
            let typeInd = '';
            if (s.type === 'warmup')   typeInd = '<span style="color:var(--accent);font-size:10px;margin-left:4px;font-weight:800;">W</span>';
            if (s.type === 'drop')     typeInd = '<span style="color:#c678dd;font-size:10px;margin-left:4px;font-weight:800;">DROP</span>';
            if (s.type === 'failure')  typeInd = '<span style="color:#a78bfa;font-size:10px;margin-left:4px;font-weight:800;">FAIL</span>';
            if (s.type === 'pyramid')  typeInd = '<span style="color:#eab308;font-size:10px;margin-left:4px;font-weight:800;">PYR</span>';
            if (s.type === 'timed')    typeInd = '<span style="color:#38bdf8;font-size:10px;margin-left:4px;font-weight:800;">TIME</span>';
            let uniInd = s.uni ? `<span style="color:var(--green);font-size:10px;margin-left:4px;">UNI</span>` : '';
            if (s.w || s.r) histHtml += `<div class="hist-set-row">${s.w||'?'}kg × ${s.r||'?'}${uniInd}${typeInd}</div>`;
          });
        });
      }
      histHtml += `</div></div></div>`;
    });
  }

  /* ── Build bodyweight chart SVG ── */
  let chartHtml = '';
  let bwDates = Object.keys(bws).sort();
  if (bwDates.length < 2) {
    chartHtml = '<div style="text-align:center;color:var(--txt3);font-size:12px;padding:24px 0;">Log at least 2 weigh-ins to see the chart.</div>';
  } else {
    let entries = bwDates.slice(-14).map(d2 => ({ date: d2, w: parseFloat(bws[d2]) }));
    let minW = Math.min(...entries.map(e => e.w)) - 2;
    let maxW = Math.max(...entries.map(e => e.w)) + 2;
    let range = maxW - minW || 10;
    let points = entries.map((e, i) => {
      let x = (i / (entries.length - 1)) * 100;
      let y = 100 - (((e.w - minW) / range) * 100);
      return `${x},${y}`;
    }).join(' ');
    chartHtml = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="width:100%;height:80px;overflow:visible;display:block;">
      <polyline fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${points}"/>
      ${entries.map((e, i) => {
        let x = (i / (entries.length - 1)) * 100;
        let y = 100 - (((e.w - minW) / range) * 100);
        return `<circle cx="${x}" cy="${y}" r="3" fill="var(--card-bg)" stroke="var(--accent)" stroke-width="2"/>`;
      }).join('')}
    </svg>`;
  }

  /* ── BW history list ── */
  let bwHistHtml = '';
  let bwHistDates = Object.keys(bws).sort().reverse();
  if (!bwHistDates.length) {
    bwHistHtml = '<div class="u13">No weigh-ins logged yet.</div>';
  } else {
    let months3 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    bwHistDates.forEach(date => {
      let d = new Date(date + 'T12:00:00');
      bwHistHtml += `<div class="pr-list-item">
        <div class="pr-date" style="font-size:14px;font-weight:700;color:var(--txt);margin-top:0;">${d.getDate()} ${months3[d.getMonth()]} ${d.getFullYear()}</div>
        <div class="pr-value">${bws[date]} <span style="font-size:13px;font-weight:600;color:var(--txt-muted);">kg</span></div>
      </div>`;
    });
  }

  let html = `
    <!-- ── Profile identity card ── -->
    <div class="settings-card" style="margin-top:16px;">
      <div class="settings-avatar">${(getProfileName(state.profile) || '?')[0].toUpperCase()}</div>
      <div class="settings-profile-text">
        <button type="button" class="settings-name-btn" onclick="editDisplayName()">
          <span>${getProfileName(state.profile)}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
        </button>
        <p class="settings-row-sub">${subline}</p>
        <p class="settings-workout-count">${workouts} Workout${workouts === 1 ? '' : 's'} Logged</p>
      </div>
    </div>

    <!-- ── Tab switcher ── -->
    <div class="profile-tabs">
      <button class="profile-tab-btn ${profileTab === 'stats' ? 'active' : ''}" data-tab="stats" onclick="switchProfileTab('stats')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-3 3"/></svg>
        Stats &amp; Records
      </button>
      <button class="profile-tab-btn ${profileTab === 'settings' ? 'active' : ''}" data-tab="settings" onclick="switchProfileTab('settings')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        Settings
      </button>
    </div>

    <!-- ══════════════════════════════════════
         TAB 1 — STATS & RECORDS
    ══════════════════════════════════════ -->
    <div id="profile-tab-stats" style="display:${profileTab === 'stats' ? 'block' : 'none'};">

      <!-- Fitness Level -->
      <div class="profile-section-title">Fitness Level</div>
      <div class="settings-panel" id="fitness-level-card" style="border-color:${fitness.color}33;">
        <div style="font-size:11px;font-weight:700;color:var(--txt3);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">Overall Score</div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <span class="fitness-level-badge" style="background:${fitness.color}22;color:${fitness.color};border:1px solid ${fitness.color}44;">${fitness.label}</span>
          <span style="font-size:22px;font-weight:900;color:${fitness.color};">${fitness.pct}%</span>
        </div>
        <div class="fitness-bar-track"><div class="fitness-bar-fill" style="width:${fitness.pct}%;background:${fitness.color};"></div></div>
        ${fitness.detail.length
          ? '<div style="margin-top:8px;">' + fitness.detail.map(d2 => `<div style="font-size:10px;color:var(--txt3);margin-top:3px;">${d2}</div>`).join('') + '</div>'
          : '<div style="font-size:11px;color:var(--txt3);margin-top:8px;">Add waist measurement + body fat % for a full assessment.</div>'}
      </div>

      <!-- Body Measurements -->
      <div class="profile-section-title">Body Measurements</div>
      <div class="settings-panel">
        <div class="profile-measure-grid">
          <div class="profile-measure-field">
            <div class="profile-measure-label">Height (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 178" value="${metrics.height || ''}"
              onchange="saveMeasurement('height', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">Age</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 25" value="${metrics.age || ''}"
              onchange="let v=parseInt(this.value); if(!state.userMetrics[state.profile]) state.userMetrics[state.profile]={}; state.userMetrics[state.profile].age = isNaN(v)?'':v; saveState(); refreshFitnessCard();">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">Waist (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 82" value="${m.waist || ''}"
              onchange="saveMeasurement('waist', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">Body Fat %</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 15" value="${metrics.fatPct || ''}"
              onchange="let v=parseFloat(this.value); if(!state.userMetrics[state.profile]) state.userMetrics[state.profile]={}; state.userMetrics[state.profile].fatPct = isNaN(v)?'':v; saveState(); refreshFitnessCard();">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">Chest (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 100" value="${m.chest || ''}"
              onchange="saveMeasurement('chest', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">Hips (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 95" value="${m.hips || ''}"
              onchange="saveMeasurement('hips', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">L Arm (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 38" value="${m.leftArm || ''}"
              onchange="saveMeasurement('leftArm', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">R Arm (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 38" value="${m.rightArm || ''}"
              onchange="saveMeasurement('rightArm', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">L Thigh (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 58" value="${m.leftThigh || ''}"
              onchange="saveMeasurement('leftThigh', this.value ? parseFloat(this.value) : '')">
          </div>
          <div class="profile-measure-field">
            <div class="profile-measure-label">R Thigh (cm)</div>
            <input type="number" class="profile-measure-input" placeholder="e.g. 58" value="${m.rightThigh || ''}"
              onchange="saveMeasurement('rightThigh', this.value ? parseFloat(this.value) : '')">
          </div>
        </div>
      </div>

      <!-- Water Reminder -->
      <div class="collapse-card" id="collapse-water">
        <div class="collapse-card-header" onclick="toggleProfileCollapse('water')">
          <span class="profile-section-title" style="margin:0;">Water Reminder</span>
          <button type="button" class="chevron-btn ${profileExpandedCard === 'water' ? '' : 'collapsed'}" id="chevron-water" aria-label="Toggle water reminder">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          </button>
        </div>
        <div class="collapse-card-body ${profileExpandedCard === 'water' ? '' : 'collapsed'}" id="collapse-body-water">
          <div class="settings-panel" style="margin-top:10px;">
            <div class="settings-row">
              <div><div class="settings-row-label">Remind me to drink water</div><div class="settings-row-sub">Notifies you at your chosen interval</div></div>
              <label class="set-toggle"><input type="checkbox" id="water-reminder-toggle" ${waterCfg.enabled ? 'checked' : ''} onchange="toggleWaterReminder(this.checked)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
            </div>
            <div class="set-row-setting" style="padding-top:14px;border-top:1px solid var(--border);margin-top:14px;">
              <div><div class="settings-row-label">Remind every</div></div>
              <select id="water-interval-select" onchange="setWaterReminderInterval(this.value)"
                style="background:var(--bg4);border:1px solid var(--border2);border-radius:var(--radius);padding:9px 10px;color:var(--txt);font-size:13px;font-weight:700;font-family:'JetBrains Mono',monospace;">
                <option value="30" ${waterCfg.intervalMinutes==30?'selected':''}>30 min</option>
                <option value="45" ${waterCfg.intervalMinutes==45?'selected':''}>45 min</option>
                <option value="60" ${waterCfg.intervalMinutes==60?'selected':''}>1 hour</option>
                <option value="90" ${waterCfg.intervalMinutes==90?'selected':''}>1.5 hours</option>
                <option value="120" ${waterCfg.intervalMinutes==120?'selected':''}>2 hours</option>
                <option value="180" ${waterCfg.intervalMinutes==180?'selected':''}>3 hours</option>
              </select>
            </div>
            <div id="water-reminder-status" style="font-size:11px;color:var(--txt3);margin-top:12px;line-height:1.5;">
              ${waterCfg.enabled
                ? (waterReminderCapability() === 'periodic'
                    ? `Fires every ${waterCfg.intervalMinutes} min while the app is open, and can also fire in the background on this browser — though Android may space background reminders out further apart than that.`
                    : `Fires every ${waterCfg.intervalMinutes} min while the app is open. This browser doesn't support background delivery, so it won't fire while the app is fully closed.`)
                : 'Turn this on to get reminded to drink water. Works reliably while the app is open; background delivery when closed is best-effort and depends on your browser.'}
            </div>
          </div>
        </div>
      </div>

      <!-- Bodyweight Log -->
      <div class="collapse-card" id="collapse-bw">
        <div class="collapse-card-header" onclick="toggleProfileCollapse('bw')">
          <span class="profile-section-title" style="margin:0;">Bodyweight</span>
          <button type="button" class="chevron-btn ${profileExpandedCard === 'bw' ? '' : 'collapsed'}" id="chevron-bw" aria-label="Toggle bodyweight">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          </button>
        </div>
        <div class="collapse-card-body ${profileExpandedCard === 'bw' ? '' : 'collapsed'}" id="collapse-body-bw">
          <div class="settings-panel" style="margin-top:10px;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
              <input type="number" id="profile-bw-input" class="profile-measure-input" placeholder="Today's weight (kg)"
                value="${todayBW}" step="0.1" min="30" max="300" style="flex:1;">
              <button onclick="let v=parseFloat(document.getElementById('profile-bw-input').value);if(v&&v>0){autoSaveBW(v);renderChart();renderBWHistory();}" class="timer-set-btn" style="height:44px;padding:0 18px;">Log</button>
            </div>
            <div id="bw-chart-container" style="margin-bottom:12px;">${chartHtml}</div>
            <div id="bw-history-list">${bwHistHtml}</div>
          </div>
        </div>
      </div>

      <!-- Personal Records -->
      <div class="collapse-card" id="collapse-pr">
        <div class="collapse-card-header" onclick="toggleProfileCollapse('pr')">
          <span class="profile-section-title" style="margin:0;">Personal Records</span>
          <button type="button" class="chevron-btn ${profileExpandedCard === 'pr' ? '' : 'collapsed'}" id="chevron-pr" aria-label="Toggle personal records">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          </button>
        </div>
        <div class="collapse-card-body ${profileExpandedCard === 'pr' ? '' : 'collapsed'}" id="collapse-body-pr">
          <div id="pr-list" class="settings-panel" style="padding:0;margin-top:10px;">
            ${prHtml || '<div class="u13" style="padding:20px;">No PRs set yet.<br><span class="u5">Use the PR panel on any exercise to record your 1RM.</span></div>'}
          </div>
        </div>
      </div>

      <!-- Workout History -->
      <div class="collapse-card" id="collapse-hist">
        <div class="collapse-card-header" onclick="toggleProfileCollapse('hist')">
          <span class="profile-section-title" style="margin:0;">Workout History</span>
          <button type="button" class="chevron-btn ${profileExpandedCard === 'hist' ? '' : 'collapsed'}" id="chevron-hist" aria-label="Toggle workout history">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
          </button>
        </div>
        <div class="collapse-card-body ${profileExpandedCard === 'hist' ? '' : 'collapsed'}" id="collapse-body-hist">
          <div id="history-list" style="margin-top:10px;">
            ${histHtml}
          </div>
        </div>
      </div>

      <!-- Muscle Volume (last 30 days) -->
      <div class="profile-section-title">Muscle Volume — Last 30 Days</div>
      <div class="settings-panel">
        ${renderMuscleAnalytics()}
      </div>

    </div><!-- /profile-tab-stats -->

    <!-- ══════════════════════════════════════
         TAB 2 — SETTINGS
    ══════════════════════════════════════ -->
    <div id="profile-tab-settings" style="display:${profileTab === 'settings' ? 'block' : 'none'};">

      <h3 class="settings-section-title">Editing Lock</h3>
      <div class="settings-panel">
        <div class="settings-row">
          <div><div class="settings-row-label">Lock UI</div><div class="settings-row-sub">Hides rename, add, and edit controls in the Splits tab to prevent accidental changes</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.lockUI ? 'checked' : ''} onchange="toggleStitchSetting('lockUI', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
      </div>

      <h3 class="settings-section-title">Timer</h3>
      <div class="settings-panel">
        <div class="settings-row">
          <div><div class="settings-row-label">Enable Rest Timer</div><div class="settings-row-sub">Starts countdown automatically after each set is logged</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.useRestTimer !== false ? 'checked' : ''} onchange="toggleStitchSetting('useRestTimer', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Keep Screen Awake</div><div class="settings-row-sub">Prevents the screen sleeping while the app is open</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.keepAwake ? 'checked' : ''} onchange="toggleStitchSetting('keepAwake', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
      </div>

      <h3 class="settings-section-title">Display</h3>
      <div class="settings-panel">
        <div class="settings-row">
          <div><div class="settings-row-label">Show Plate Math</div><div class="settings-row-sub">Shows the plates needed for a given barbell weight</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.showPlateMath !== false ? 'checked' : ''} onchange="toggleStitchSetting('showPlateMath', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Show Warm-up Generator</div><div class="settings-row-sub">Generates warm-up sets based on your working weight</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.showWarmupGen !== false ? 'checked' : ''} onchange="toggleStitchSetting('showWarmupGen', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Show PR Calculator</div><div class="settings-row-sub">Shows the percentage-based 1RM calculator on exercises</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.showPRCalc !== false ? 'checked' : ''} onchange="toggleStitchSetting('showPRCalc', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Show Exercise Notes</div><div class="settings-row-sub">Displays cues and coaching notes inside exercise panels</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.showNotes !== false ? 'checked' : ''} onchange="toggleStitchSetting('showNotes', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Single Card Expand</div><div class="settings-row-sub">Only one exercise card can be expanded at a time</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.singleExpand !== false ? 'checked' : ''} onchange="toggleStitchSetting('singleExpand', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
        <div class="settings-row">
          <div><div class="settings-row-label">Pitch Black Mode</div><div class="settings-row-sub">OLED-optimized pure black backgrounds</div></div>
          <label class="set-toggle"><input type="checkbox" ${s.pitchBlack ? 'checked' : ''} onchange="toggleStitchSetting('pitchBlack', this)"><span class="set-toggle-track"></span><span class="set-toggle-thumb"></span></label>
        </div>
      </div>

      <h3 class="settings-section-title">Barbell &amp; Plates</h3>
      <div class="settings-panel">
        <div class="set-row-setting" style="padding-bottom:14px;border-bottom:1px solid var(--border);margin-bottom:14px;">
          <div><div class="settings-row-label">Empty bar weight (kg)</div></div>
          <input type="number" id="set-bar-weight-inline" class="set-num-input" value="${s.barbellWeight || 20}"
            onchange="state.settings.barbellWeight = parseFloat(this.value)||20; saveState();">
        </div>
        <div class="profile-measure-label" style="margin-bottom:10px;">Available plates (kg)</div>
        <div class="plate-grid">
          ${[25, 20, 15, 10, 7.5, 5, 2.5, 1.25, 0.5].map(pl => `
            <label class="plate-chip ${s.plates && s.plates.includes(pl) ? 'checked' : ''}" onclick="event.preventDefault();var inp=this.querySelector('input');inp.checked=!inp.checked;this.classList.toggle('checked',inp.checked);var cbs=document.querySelectorAll('.setting-plate-cb');var sel=[];cbs.forEach(function(c){if(c.checked)sel.push(parseFloat(c.value));});sel.sort(function(a,b){return b-a;});state.settings.plates=sel;saveState();">
              <input type="checkbox" value="${pl}" class="setting-plate-cb" tabindex="-1"
                ${s.plates && s.plates.includes(pl) ? 'checked' : ''}>
              ${pl} kg
            </label>`).join('')}
        </div>
      </div>

      <h3 class="settings-section-title">App Updates</h3>
      <div class="settings-panel">
        <p class="settings-row-sub" style="margin-bottom:10px;">If a feature you expect isn't showing up after a GitHub update, tap this to force-check for a newer version.</p>
        <button type="button" class="settings-btn settings-btn-secondary" style="width:100%;" onclick="checkForAppUpdate()">Check for Updates</button>
      </div>

      <h3 class="settings-section-title">Data &amp; Backups</h3>
      <div class="settings-panel">
        <p class="settings-policy">This app runs strictly offline. All data is stored locally on your device — nothing is sent to the cloud.</p>
        <div class="data-backup-label">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export
        </div>
        <div class="settings-btn-row" style="margin-bottom:14px;">
          <button type="button" class="settings-btn data-btn-export" onclick="exportJSON()" style="flex:1;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Export JSON
          </button>
          <button type="button" class="settings-btn data-btn-export" onclick="exportData()" style="flex:1;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>
            Export CSV
          </button>
        </div>
        <div class="data-backup-label">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Import
        </div>
        <div class="settings-btn-row">
          <button type="button" class="settings-btn data-btn-import" onclick="triggerJSONImport()" style="flex:1;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Import JSON
          </button>
          <button type="button" class="settings-btn data-btn-import" onclick="triggerCSVImport()" style="flex:1;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>
            Import CSV
          </button>
        </div>
        <p class="settings-row-sub" style="margin-top:10px;">CSV format: Date, Exercise, Set, Type, Weight, Reps, Unilateral — matches the export format exactly.</p>
        <input type="file" id="json-import-file" accept=".json,application/json" style="display:none;" onchange="handleJSONFileSelected(this)">
        <input type="file" id="csv-import-file" accept=".csv,text/csv" style="display:none;" onchange="handleCSVFileSelected(this)">
      </div>

      <h3 class="settings-section-title">Danger Zone</h3>
      <div class="settings-panel settings-danger">
        <div class="settings-row-label">Hard Reset</div>
        <p class="settings-row-sub">Permanently wipes all logs, splits, measurements, and settings.</p>
        <button type="button" class="settings-btn settings-danger-btn" onclick="hardResetApp()">Hard Reset Everything</button>
      </div>

    </div><!-- /profile-tab-settings -->
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

/* Collapse any expanded card(s) in the given tab. Called whenever the
   reorder button is pressed, so dragging never starts on/under an
   expanded card. */
function collapseAllExpandedCards(tab) {
  if (tab === 'workout') {
    document.querySelectorAll('#exercise-list .ex-item').forEach(item => {
      let ei = item.dataset.idx;
      let expand = document.getElementById('ex-expand-' + ei);
      if (expand && expand.style.display === 'block') {
        closeAllSubPanels(ei);
        let moreRow = document.getElementById('ex-more-' + ei);
        if (moreRow) moreRow.style.display = 'none';
        expand.style.display = 'none';
      }
    });
  } else if (tab === 'split') {
    document.querySelectorAll('#split-day-content .day-ex-detail').forEach(el => {
      el.style.display = 'none';
    });
  } else if (tab === 'cardio') {
    document.querySelectorAll('#cardio-entries .cardio-session-detail').forEach(el => {
      el.style.display = 'none';
    });
  }
}

const REORDER_CARD_SELECTOR = {
  workout: '#exercise-list .ex-item',
  split: '#split-day-content .day-ex-item',
  cardio: '#cardio-entries .cardio-session-card'
};

function setReorderActiveState(tab, on) {
  let selector = REORDER_CARD_SELECTOR[tab];
  if(!selector) return;
  document.querySelectorAll(selector).forEach((card, i) => {
    if(on) {
      card.style.setProperty('--wiggle-offset', (i % 5) * 0.06);
      card.classList.add('reorder-active');
    } else {
      card.classList.remove('reorder-active');
      card.style.removeProperty('--wiggle-offset');
    }
  });
}

function toggleReorderMode(tab) {
  collapseAllExpandedCards(tab);
  reorderMode[tab] = !reorderMode[tab];
  let on = reorderMode[tab];
  let btn = document.getElementById('reorder-toggle-' + tab);
  if(btn) {
    btn.style.background = on ? 'rgba(0,243,255,0.15)' : 'var(--bg3)';
    btn.style.borderColor = on ? 'var(--secondary)' : 'var(--border2)';
    btn.style.color = on ? 'var(--secondary)' : 'var(--txt3)';
  }
  setReorderActiveState(tab, on);
  if(tab === 'cardio') initCardioDragHandlers();
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
      entriesHtml += `<div class="cardio-day-group" data-date="${key}" style="margin-bottom:14px;">
        <div style="display:flex;align-items:center;gap:10px;padding:6px 0;">
          <div class="hist-day-num">${d.getDate()}</div>
          <div class="hist-day-date">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]}, ${months[d.getMonth()]} ${d.getFullYear()}</div>
        </div>`;
      sessions.forEach((s, si) => {
        entriesHtml += `<div class="section-card cardio-session-card" data-date="${key}" data-idx="${si}" style="margin-bottom:6px;">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
              <div style="font-size:14px;font-weight:700;color:var(--txt);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${s.type || 'Cardio'}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
              ${s.duration ? `<span style="background:rgba(0,243,255,0.12);color:var(--secondary);border:1px solid rgba(0,243,255,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.duration} min</span>` : ''}
              ${s.distance ? `<span style="background:rgba(204,255,0,0.12);color:var(--g1);border:1px solid rgba(204,255,0,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.distance} km</span>` : ''}
              ${s.calories ? `<span style="background:rgba(255,39,65,0.12);color:var(--o1);border:1px solid rgba(255,39,65,0.3);border-radius:var(--radius);font-size:11px;font-weight:800;padding:4px 8px;font-family:'JetBrains Mono',monospace;">${s.calories} kcal</span>` : ''}
              <button onclick="event.stopPropagation();deleteCardioEntry('${key}',${si})" style="background:transparent;border:none;color:var(--txt3);font-size:16px;cursor:pointer;padding:2px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;">✕</button>
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
  initCardioDragHandlers();
  if(reorderMode.cardio) {
    setReorderActiveState('cardio', true);
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
  document.querySelectorAll('#cardio-entries .cardio-session-card').forEach(item => {
    item.onpointerdown = function(e) {
      if(!reorderMode.cardio) return;
      if(e.target.closest('button')) return;
      let container = item.closest('.cardio-day-group');
      let date = item.dataset.date;
      if (!container || !date) return;
      e.preventDefault();
      startGenericDrag(item, container, '.cardio-session-card', e, function(orderedIdxs) {
        let sessions = state.cardioLog && state.cardioLog[date];
        if (!sessions) return;
        state.cardioLog[date] = orderedIdxs.map(idx => sessions[idx]);
        saveState();
        renderCardioPage();
      });
    };
  });
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
const OB_STEPS = 7;
const OB_STEP_MAP = {
  0: 'ob-step-0',
  1: 'ob-step-name',
  2: 'ob-step-gender',
  3: 'ob-step-1',
  4: 'ob-step-fat',
  5: 'ob-step-2',
  6: 'ob-step-3'
};

const OB_DOT_MAP = {
  0: 'ob-dot-0',
  1: 'ob-dot-name',
  2: 'ob-dot-gender',
  3: 'ob-dot-1',
  4: 'ob-dot-fat',
  5: 'ob-dot-2',
  6: 'ob-dot-3'
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

function obSaveName() {
  const name = (document.getElementById('ob-name-input')?.value || '').trim();
  if (name) {
    state.profileName = name;
    displayName = name;
  }
  obNext();
}

function editDisplayName() {
  document.getElementById('modal-title').textContent = 'Edit Name';
  document.getElementById('modal-body').innerHTML = `
    <input id="edit-name-input" class="add-ex-input u2" placeholder="Your name" value="${displayName !== 'Not Set' ? displayName : ''}" maxlength="40" autocomplete="given-name">
    <div class="modal-btn-row">
      <button class="modal-btn modal-cancel" onclick="closeModal()">Cancel</button>
      <button class="modal-btn modal-confirm-p1" onclick="
        let v=document.getElementById('edit-name-input').value.trim();
        if(v){state.profileName=v;displayName=v;saveState();renderProfilePage();}
        closeModal();
      ">Save</button>
    </div>`;
  openModal();
  setTimeout(() => document.getElementById('edit-name-input')?.focus(), 50);
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
  // Show fat step (index 4 in OB_STEP_MAP)
  showObStep(4);
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
  // Proceed to PRs step — fat is step index 4 in OB_STEP_MAP, next is step 5 (ob-step-2)
  showObStep(5);
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
  state.settings = state.settings || {};
  state.settings.pitchBlack = document.body.classList.contains('pitch-black');
  obFinish();
}

function obFinish() {
  state.settings = state.settings || {};
  state.settings.onboardingDone = true;
  saveState();
  document.getElementById('onboarding-screen').classList.remove('visible');
}

function showOnboarding() {
  document.getElementById('onboarding-screen').classList.add('visible');
  showObStep(0);
}

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
  let rt = restTimers[1];
  if (rt && rt.running) {
    // Timer is mid-run: treat the preset tap as a quick "add time" action,
    // same as the +30s button, instead of silently doing nothing.
    adjustRestTimer(1, sec);
    return;
  }
  let el = document.getElementById('timer-rest-display');
  if (el) {
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
  if (sw.running) {
    clearInterval(sw.interval);
    sw.running = false;
  }
  sw.elapsed = 0;
  sw.laps = [];
  let el = document.getElementById('sw' + n + '-time');
  if (el) el.innerHTML = '00:00<span class="sw-ms">.00</span>';
  let btn = document.getElementById('sw' + n + '-play');
  if (btn) { btn.innerHTML = SW_PLAY_ICON; btn.title = 'Start'; }
  renderLaps(n);
}

function hardResetApp() {
  document.getElementById('modal-title').textContent = '⚠️ Hard Reset Everything';
  document.getElementById('modal-body').innerHTML = `
    <div style="text-align:center;padding:8px 0 16px;">
      <p style="margin:0 0 8px;font-size:14px;color:var(--txt);">This will wipe <strong>all workout logs, splits, bodyweight records, settings, and PRs</strong> — exactly like a fresh install.</p>
      <p style="margin:0 0 20px;font-size:12px;color:var(--txt-muted);">This cannot be undone. Export your data first if you want a backup.</p>
      <button type="button" class="settings-btn settings-danger-btn" style="width:100%;margin-bottom:10px;" onclick="confirmHardReset()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg> YES, WIPE EVERYTHING</button>
      <button type="button" class="settings-btn" style="width:100%;" onclick="closeModal()">Cancel</button>
    </div>
  `;
  openModal();
}

function confirmHardReset() {
  closeModal();
  // Stop all intervals
  if (state.sw && state.sw[1] && state.sw[1].interval) clearInterval(state.sw[1].interval);
  if (restTimers && restTimers[1] && restTimers[1].interval) clearInterval(restTimers[1].interval);
  // Nuke localStorage
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  // Full re-init (same flow as a first-time app open)
  init().then(() => {
    showOnboarding();
  });
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

function openSettings() {
  // Already defined above.
}

// ── Global header floating timer ──
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
  let body = document.getElementById('date-card-body');
  if (!btn || !body) return;
  let collapsed = btn.classList.toggle('collapsed');
  body.classList.toggle('collapsed', collapsed);
}

/* ── Timer section collapse/expand ── */
function toggleTimerSection() {
  let btn = document.getElementById('timer-chevron');
  let body = document.getElementById('timer-body');
  if (!btn || !body) return;
  let collapsed = btn.classList.toggle('collapsed');
  body.style.display = collapsed ? 'none' : '';
}

/* ── Profile stats cards: Bodyweight / Water Reminder / Personal Records / Workout History ──
   Only one of these may be expanded at a time. Expanding one auto-collapses the others. */
function toggleProfileCollapse(key) {
  let isCurrentlyOpen = profileExpandedCard === key;
  profileExpandedCard = isCurrentlyOpen ? null : key;

  ['bw', 'water', 'pr', 'hist'].forEach(k => {
    let chevron = document.getElementById('chevron-' + k);
    let body = document.getElementById('collapse-body-' + k);
    if (!chevron || !body) return;
    let shouldBeOpen = (k === profileExpandedCard);
    chevron.classList.toggle('collapsed', !shouldBeOpen);
    body.classList.toggle('collapsed', !shouldBeOpen);
  });
}

async function bootstrapApp() {
  await init();
  setTimerTab('rest');
  setRestPreset(90);
  initPowerQuotes();
  startWaterReminderTimer();
  if (!state.settings?.onboardingDone) showOnboarding();
}

document.addEventListener('DOMContentLoaded', () => bootstrapApp());
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      console.log('SW registered:', reg);

      // Always ask the browser to re-check sw.js against the network copy.
      reg.update().catch(() => {});

      // If a new worker is already sitting in "waiting" (installed but not yet
      // active — this is the state Android gets stuck in when the PWA is only
      // ever backgrounded, never fully closed), tell it to take over right now
      // instead of waiting for zero clients, which may never happen on mobile.
      if (reg.waiting) {
        reg.waiting.postMessage('SKIP_WAITING');
      }

      // Catch the case where a worker finishes installing *while* this page
      // is open (e.g. update() above just found one).
      reg.addEventListener('updatefound', () => {
        let newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && reg.waiting) {
            reg.waiting.postMessage('SKIP_WAITING');
          }
        });
      });

      // Give the SW our current water-reminder settings (it has no other way
      // to read them) and, if the reminder was left on from a previous
      // session, try to (re-)register periodic background sync — this is a
      // no-op cleanly swallowed by registerWaterPeriodicSync() on any
      // browser that doesn't support it.
      navigator.serviceWorker.ready.then(() => {
        pushWaterConfigToSW(false);
        if (state.settings?.waterReminder?.enabled) registerWaterPeriodicSync();
      });
    }).catch(err => console.error('SW registration failed:', err));

    // When a new service worker takes control, the page is still showing the
    // old cached content in memory — reload once so the user sees the update.
    let hasReloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hasReloaded) return;
      hasReloaded = true;
      window.location.reload();
    });
  });
}

/* ── Manual "Check for Updates" button (Settings → App Updates) ──
   Forces the same update-check + skip-waiting sequence on demand, with
   visible feedback, instead of passively hoping the background check runs. */
function checkForAppUpdate() {
  if (!('serviceWorker' in navigator)) {
    alert('Service workers aren\'t supported in this browser.');
    return;
  }

  navigator.serviceWorker.getRegistration().then(reg => {
    if (!reg) {
      alert('No service worker registered yet — try reloading the app first.');
      return;
    }

    reg.update().then(() => {
      // Give the browser a brief moment to finish installing if it found something new.
      setTimeout(() => {
        if (reg.waiting) {
          reg.waiting.postMessage('SKIP_WAITING');
          alert('Update found — applying it now.');
          // controllerchange listener (registered above) will reload the page.
        } else {
          alert('You\'re already on the latest version.');
        }
      }, 800);
    }).catch(() => {
      alert('Couldn\'t check for updates — check your internet connection.');
    });
  });
}