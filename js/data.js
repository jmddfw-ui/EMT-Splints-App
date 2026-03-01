const SPLINTS = [
  {
    id: 'sam',
    name: 'SAM Splint',
    emoji: '📏',
    color: '#1f6feb',
    category: 'Moldable Rigid',
    regions: ['upper','lower'],
    injuries: ['fracture','dislocation','softtissue'],
    setting: ['commercial','improvised'],
    description: 'Lightweight aluminum core with foam padding that can be molded to any shape. One of the most versatile splints in the EMT toolkit.',
    indications: [
      'Suspected fractures of the forearm, wrist, hand, fingers',
      'Ankle and foot fractures',
      'Suspected dislocations of the wrist or ankle',
      'Cervical spine stabilization (improvised C-collar)',
      'Any situation requiring a quickly moldable rigid support'
    ],
    contraindications: [
      'Suspected femur fractures — use traction splint instead',
      'Open fractures with severe contamination (cover wound first)',
      'Spinal fractures requiring full immobilization (use backboard + collar)'
    ],
    warnings: [
      'Always check CSM (circulation, sensation, movement) before AND after application',
      'Do not apply so tight as to impair circulation — check capillary refill',
      'Pad bony prominences to prevent pressure sores'
    ],
    steps: [
      'Perform initial assessment, expose and visualize the injury',
      'Check CSM distal to the injury site',
      'Select appropriate SAM splint size; measure against the uninjured limb',
      'Mold the splint: create a three-point bend (C-curve) for rigidity',
      'Pad bony prominences with extra foam or gauze',
      'Position limb in position of function or as found (do not force)',
      'Apply splint and secure with roller gauze or elastic bandage, distal to proximal',
      'Re-check CSM and document findings'
    ],
    pearls: [
      'The "C-curve" or "T-bar" bend dramatically increases rigidity — always mold before applying',
      'Cold weather makes SAM splints stiffer; warm in your hands or axilla first',
      'For wrist fractures, splint in slight dorsiflexion (position of function)',
      '"Splint them as they lie" — do not attempt to realign unless no distal pulse'
    ],
    diagramType: 'forearm'
  },
  {
    id: 'air',
    name: 'Air / Pneumatic Splint',
    emoji: '🫧',
    color: '#3fb950',
    category: 'Inflatable',
    regions: ['upper','lower'],
    injuries: ['fracture','softtissue'],
    setting: ['commercial'],
    description: 'Transparent inflatable sleeve that provides circumferential pressure and immobilization. Particularly useful for distal extremity injuries.',
    indications: [
      'Forearm and wrist fractures',
      'Lower leg (tibia/fibula) fractures',
      'Ankle sprains and fractures',
      'Soft tissue injuries requiring compression',
      'Burns to extremities (reduces contamination risk)'
    ],
    contraindications: [
      'Femur fractures — insufficient stabilization',
      'Open fractures with protruding bone',
      'Suspected circulatory compromise — circumferential pressure may worsen',
      'Extreme cold environments — air volume changes with temperature'
    ],
    warnings: [
      'Circumferential pressure can mask deteriorating circulation — monitor closely',
      'Air volume changes with altitude and temperature — recheck pressure during transport',
      'Do NOT over-inflate — should indent slightly with fingertip pressure',
      'Remove rings, watches, and jewelry before application'
    ],
    steps: [
      'Expose and assess the injury; check distal CSM',
      'Remove jewelry and constrictive clothing from the limb',
      'Slide the deflated splint over the injured limb or your own arm first',
      'Position limb in position of function',
      'Zip or fasten the splint around the limb',
      'Inflate by mouth or pump until firm but with slight give',
      'Verify circulation — nail bed capillary refill < 2 seconds',
      'Re-check CSM every 5 minutes during transport'
    ],
    pearls: [
      'Altitude increases air pressure — in air transport, partially deflate to prevent over-inflation',
      'The transparency allows ongoing wound visualization during transport',
      'Effective for soft tissue injuries where compression also reduces swelling',
      'Not ideal in cold — air contracts and splint loosens; check frequently'
    ],
    diagramType: 'lower-leg'
  },
  {
    id: 'vacuum',
    name: 'Vacuum Splint',
    emoji: '💨',
    color: '#bc8cff',
    category: 'Vacuum-Conforming',
    regions: ['upper','lower'],
    injuries: ['fracture','dislocation'],
    setting: ['commercial'],
    description: 'Bag filled with polystyrene beads that conforms to body shape and hardens when air is evacuated. Excellent for complex injuries and patient comfort.',
    indications: [
      'Complex fractures (multiple sites, unusual angulation)',
      'Dislocations requiring immobilization in the deformed position',
      'Injuries to joints (knee, ankle, elbow) where rigid splints are difficult to fit',
      'Pelvic fractures when combined with pelvic binders',
      'Patient comfort priority during long transports'
    ],
    contraindications: [
      'Penetrating objects through the limb (cannot safely conform)',
      'Burns or wounds requiring frequent dressing changes',
      'Environments with sharp debris that could puncture the splint'
    ],
    warnings: [
      'A punctured vacuum splint immediately loses rigidity — have a backup plan',
      'Immobilizes in whatever position the limb is in — position correctly BEFORE applying',
      'Check for holes/punctures before use in the field'
    ],
    steps: [
      'Lay the splint flat and distribute beads evenly',
      'Assess injury and check distal CSM',
      'Position the injured limb carefully on the splint',
      'Wrap the splint around the limb, molding to its contours',
      'Maintain gentle pressure on the limb and connect the evacuation valve',
      'Evacuate air with pump until splint is firm and holds shape',
      'Secure straps without over-tightening',
      'Reassess CSM — document'
    ],
    pearls: [
      '"Set it in the position you find it" — vacuum splints are ideal when you cannot realign',
      'More comfortable than rigid splints for anxious patients, reducing pain and movement',
      'Always carry a backup SAM splint when using vacuum splints in the field',
      'Temperature stable unlike pneumatic splints — good for variable environments'
    ],
    diagramType: 'knee'
  },
  {
    id: 'traction-hare',
    name: 'Hare Traction Splint',
    emoji: '⚙️',
    color: '#e3b341',
    category: 'Traction',
    regions: ['lower'],
    injuries: ['traction','fracture'],
    setting: ['commercial'],
    description: 'Bipolar traction splint used specifically for mid-shaft femur fractures. Applies longitudinal traction to reduce blood loss, pain, and prevent further neurovascular injury.',
    indications: [
      'Isolated mid-shaft femur fractures',
      'Suspected femur fracture with significant pain, deformity, or shortening',
      'Mid-shaft femur fractures in patients > 8 years old'
    ],
    contraindications: [
      'Hip fractures or dislocations — traction may worsen the injury',
      'Knee injuries (ligamentous or fracture) — ankle hitch will cause harm',
      'Lower leg fractures (tibia/fibula) — do not apply',
      'Pelvic fractures — increases internal bleeding',
      'Partial amputations of the leg',
      'Injuries within 2 inches of the knee or ankle'
    ],
    warnings: [
      'NEVER use for hip or pelvis fractures — can cause catastrophic bleeding',
      'Assess for ankle and knee injury BEFORE applying — ankle hitch is contraindicated with these',
      'Must be applied before long backboard in multi-system trauma',
      'Traction amount: approximately 10% of body weight or until pain relief'
    ],
    steps: [
      'Perform scene size-up and ensure mechanism suggests femur fracture',
      'Manually stabilize the limb while partner prepares the Hare splint',
      'Apply padded ankle hitch around the ankle (above the malleoli)',
      'Position the splint — ischial pad snug against the ischial tuberosity',
      'Secure the thigh strap (proximal) and connect to ischial ring',
      'Apply mechanical traction via windlass until approximately equal to 10% body weight',
      'Secure remaining straps (avoid the fracture site and knee)',
      'Reassess PMS (pulse, motor, sensation) distal to injury',
      'Secure to long backboard for transport'
    ],
    pearls: [
      'Femur fractures can harbor 1.5–2 liters of blood loss into the thigh — traction reduces this',
      'The patient should report pain relief when correct traction is achieved',
      'Two-rescuer technique is strongly preferred — one maintains manual traction throughout',
      'Always re-examine for open femur fractures (may have small wounds in the groin or buttock)',
      'Pediatric patients < 8 years: consider Sager or improvised traction instead'
    ],
    diagramType: 'traction'
  },
  {
    id: 'traction-sager',
    name: 'Sager Traction Splint',
    emoji: '⚙️',
    color: '#f0883e',
    category: 'Traction',
    regions: ['lower'],
    injuries: ['traction','fracture'],
    setting: ['commercial'],
    description: 'Unipolar (single-shaft) traction splint positioned medially. Can be used bilaterally and fits better on the long backboard. Requires less space than the Hare.',
    indications: [
      'Mid-shaft femur fractures (same as Hare)',
      'Bilateral femur fractures (two Sager splints can be applied)',
      'Confined space extractions where Hare splint is too bulky'
    ],
    contraindications: [
      'Same as Hare Traction Splint (hip, knee, pelvis, ankle injuries)',
      'Genitalia injuries — medial placement may cause pressure'
    ],
    warnings: [
      'Medial shaft must be padded to prevent perineal pressure necrosis on long transports',
      'Traction gauge built-in — use it; target ~10% body weight',
      'Do not flex the knee during application'
    ],
    steps: [
      'Manual inline traction maintained throughout by partner',
      'Position padded perineal cushion against the ischium (medial thigh, not groin)',
      'Extend shaft to approximate limb length + 6 inches',
      'Apply ankle straps bilaterally above the malleoli',
      'Attach ankle strap to hook at end of shaft',
      'Apply traction via ratchet mechanism — monitor gauge (target ~10% body weight)',
      'Secure thigh and lower leg straps (avoid knee)',
      'Confirm PMS distal to injury'
    ],
    pearls: [
      'Sager applies traction against the ischium; Hare applies against the groin — know the difference',
      'Fits flat on the backboard more easily than the Hare — preferred for complex MVC patients',
      'Built-in traction gauge removes guesswork — use it every time'
    ],
    diagramType: 'traction'
  },
  {
    id: 'improvised',
    name: 'Improvised Splint',
    emoji: '🌿',
    color: '#56d364',
    category: 'Improvised',
    regions: ['upper','lower'],
    injuries: ['fracture','dislocation','softtissue'],
    setting: ['improvised'],
    description: 'Any rigid material available (boards, ski poles, rolled magazines, walking sticks) padded and secured with available materials. Essential wilderness and mass-casualty skill.',
    indications: [
      'Any suspected fracture or dislocation when commercial splints are unavailable',
      'Mass casualty incidents where supplies are exhausted',
      'Wilderness or remote emergencies',
      'Patient entrapment or prolonged transport'
    ],
    contraindications: [
      'Do not delay evacuation attempting elaborate improvised splints',
      'Do not use materials that may break or collapse under load'
    ],
    warnings: [
      'Improvised materials may have sharp edges — pad thoroughly',
      'Secure firmly but not so tight as to impair circulation',
      'Reassess CSM more frequently due to less reliable materials'
    ],
    steps: [
      'Identify the injury and plan splint to extend one joint above and below the fracture',
      'Gather available rigid material (board, pole, rolled newspaper, umbrella)',
      'Pad the rigid material generously with clothing, foam, or soft materials',
      'Apply padding between the splint and bony prominences',
      'Secure with available cordage (belts, torn clothing, bandanas, shoelaces)',
      'Tie knots on the side, not over the bone',
      'Check CSM — loosen if circulation is impaired',
      'Reassess every 10 minutes'
    ],
    pearls: [
      'The golden rule: splint one joint above AND one joint below the fracture',
      'A pillow or sleeping bag is an excellent improvised ankle/foot splint',
      'Buddy-taping a broken finger to its neighbor is the simplest improvised splint',
      'In cold, remove as little clothing as possible — pad over clothes instead'
    ],
    diagramType: 'improvised'
  },
  {
    id: 'pillow',
    name: 'Pillow Splint',
    emoji: '🛏️',
    color: '#58a6ff',
    category: 'Soft / Conforming',
    regions: ['lower'],
    injuries: ['fracture','dislocation','softtissue'],
    setting: ['improvised','commercial'],
    description: 'Pillow or bulky soft dressing wrapped around the ankle/foot and secured. Excellent comfort and mild immobilization for distal lower extremity injuries.',
    indications: [
      'Ankle sprains and fractures',
      'Foot fractures',
      'Calcaneus (heel) fractures',
      'Distal tibia/fibula fractures',
      'Any distal lower leg injury when rigid splint is unavailable or uncomfortable'
    ],
    contraindications: [
      'Proximal or mid-shaft tibia/fibula fractures — need rigid immobilization',
      'Suspected compartment syndrome — do not circumferentially wrap tightly'
    ],
    warnings: [
      'Provides minimal rigid immobilization — patient must not weight bear',
      'Monitor for increasing swelling (compartment syndrome)',
      'Reassess CSM frequently on long transports'
    ],
    steps: [
      'Assess ankle and foot; check pedal pulses and sensation',
      'Fold a pillow in half lengthwise',
      'Place injured extremity centered on the pillow',
      'Wrap the pillow around the foot and ankle',
      'Secure with bandages or cravats — snug but not tight',
      'Elevate the extremity if possible',
      'Reassess CSM and document'
    ],
    pearls: [
      'Most practical for lateral ankle sprains vs. true fractures — always transport for X-ray',
      'If no pillow: blanket, towel, or clothing rolled into a U-shape works well',
      'The gentle compression also reduces swelling — a clinical advantage of this splint type'
    ],
    diagramType: 'ankle'
  },
  {
    id: 'sling-swathe',
    name: 'Sling & Swathe',
    emoji: '🦾',
    color: '#f85149',
    category: 'Soft / Shoulder',
    regions: ['upper'],
    injuries: ['fracture','dislocation','softtissue'],
    setting: ['commercial','improvised'],
    description: 'Sling supports the arm; swathe binds the arm against the torso to prevent rotation. Standard immobilization for shoulder, clavicle, and humerus injuries.',
    indications: [
      'Clavicle (collarbone) fractures',
      'Proximal and mid-shaft humerus fractures',
      'Shoulder dislocations (after reduction or en route)',
      'Shoulder separations (AC joint injuries)',
      'Soft tissue injuries to the shoulder girdle',
      'Elbow injuries where immobilization against the body is indicated'
    ],
    contraindications: [
      'Open wounds in the axilla — bandage first, monitor carefully',
      'Suspected vascular injury to the axillary artery — do not compress further'
    ],
    warnings: [
      'Swathe must not compress the chest wall enough to impair breathing',
      'Check radial pulse before and after application',
      'Monitor for numbness/tingling (axillary nerve involvement common in shoulder dislocations)'
    ],
    steps: [
      'Assess the shoulder and upper arm; check radial pulse and grip strength',
      'Support the arm at the elbow at a 90° angle (or position of comfort)',
      'Apply sling under the arm, with the knot to the side (not on the spine)',
      'Ensure the sling supports from the wrist to the elbow — wrist should not hang free',
      'Apply swathe (bandage or cravat) around the upper arm and torso',
      'Secure the swathe — firm, not tight; patient should breathe normally',
      'Recheck radial pulse, grip, and sensation',
      'Keep fingers exposed for ongoing CSM monitoring'
    ],
    pearls: [
      'Fingers must be visible and free for ongoing circulation checks',
      'For a shoulder dislocation, immobilize in the position of comfort — do not force neutral',
      'A clavicle fracture causes the patient to "cradle" the arm — this is the natural splinting position',
      'Improvised sling: use a large triangular bandage, scarf, or jacket corner'
    ],
    diagramType: 'shoulder'
  },
  {
    id: 'buddy-tape',
    name: 'Buddy Taping',
    emoji: '🤝',
    color: '#79c0ff',
    category: 'Soft / Digits',
    regions: ['upper','lower'],
    injuries: ['fracture','dislocation','softtissue'],
    setting: ['commercial','improvised'],
    description: 'Taping an injured finger or toe to an adjacent uninjured digit. Simple, effective immobilization for digit fractures and sprains.',
    indications: [
      'Finger fractures (phalanges)',
      'Finger dislocations (after reduction)',
      'Toe fractures',
      'Finger sprains with suspected small fractures',
      'Temporary stabilization of any digit injury'
    ],
    contraindications: [
      'Open fractures — do not tape over open wounds',
      'Gross deformity or angulation requiring reduction',
      'Suspected tendon avulsion (mallet finger) — needs DIP extension splint instead',
      'Circulatory compromise in the digit'
    ],
    warnings: [
      'Always place padding (gauze) BETWEEN the digits before taping',
      'Tape proximal to the joint — never directly over a joint if possible',
      'Check capillary refill in the taped digit'
    ],
    steps: [
      'Assess the digit — neurovascular status, deformity',
      'Gently straighten the digit if mildly angulated (do not force)',
      'Place a strip of gauze or foam between the injured and adjacent digit',
      'Apply 1/2-inch tape around both digits — two strips, at the proximal and middle phalanx',
      'Do not tape directly over joints (prevents mobility assessment)',
      'Check capillary refill in the fingertip',
      'Instruct patient to keep the hand elevated'
    ],
    pearls: [
      'ALWAYS put padding between digits — tape directly on skin causes maceration and pain',
      'For a toe, buddy-tape the 4th and 5th toes together — classic mechanism (stubbing)',
      'Not a definitive treatment — all digit fractures need X-ray and orthopedic follow-up',
      'Mallet finger (drooping DIP) needs an extension splint, NOT buddy taping'
    ],
    diagramType: 'finger'
  },
  {
    id: 'long-arm-posterior',
    name: 'Long Arm Posterior Splint',
    emoji: '💪',
    color: '#d2a8ff',
    category: 'Plaster / Fiberglass',
    regions: ['upper'],
    injuries: ['fracture','dislocation'],
    setting: ['hospital'],
    description: 'Plaster or fiberglass slab applied to the posterior surface of the upper extremity from the palm to the upper arm. Standard ED immobilization for elbow and forearm injuries.',
    indications: [
      'Distal humerus fractures',
      'Elbow fractures and dislocations',
      'Radial head fractures',
      'Forearm fractures (both bone forearm)',
      'Post-reduction stabilization of elbow injuries'
    ],
    contraindications: [
      'Circumferential casting when swelling is expected — use splint only',
      'Grossly contaminated open fractures needing operative washout'
    ],
    warnings: [
      'Never apply a circular cast in the acute setting — splint only, leave room for swelling',
      'Elbow should be at 90°, forearm neutral rotation, wrist slight extension (position of function)',
      'Monitor for compartment syndrome: pain out of proportion, pain with passive stretch'
    ],
    steps: [
      'Measure and cut plaster/fiberglass to extend from knuckles to mid-upper arm',
      'Dip plaster in warm water; squeeze out excess moisture',
      'Apply stockinette and webril (cotton padding) to the entire extremity first',
      'Apply wet plaster slab to the posterior surface of the arm',
      'Mold in 90° elbow flexion, neutral rotation',
      'Overwrap with elastic bandage, proximal to distal',
      'Hold in position until hardened (plaster: 5–7 min; fiberglass: 3 min)',
      'Perform and document neurovascular exam post-application'
    ],
    pearls: [
      'Used in the ED, not the field — EMTs should use SAM splint or sling pre-hospital',
      'Compartment syndrome is the critical complication — any EMT should recognize the 5 Ps',
      '"The cast cannot help the arm that is getting bigger" — always use splints acutely',
      'Plaster generates heat while curing — warn the patient'
    ],
    diagramType: 'elbow'
  },
  // ── 5 NEW SPLINT TYPES ──────────────────────────────────────────────────────
  {
    id: 'c-collar',
    name: 'Cervical Collar (C-Collar)',
    emoji: '🫙',
    color: '#ffa657',
    category: 'Spinal Immobilization',
    regions: ['spine'],
    injuries: ['fracture','softtissue'],
    setting: ['commercial'],
    description: 'Rigid circumferential collar applied to the neck to limit cervical spine movement. Used whenever mechanism of injury suggests possible cervical spine involvement.',
    indications: [
      'Any MOI with potential for cervical spine injury (MVC, falls, diving)',
      'Complaints of neck pain or tenderness after trauma',
      'Altered mental status following trauma (cannot rule out spinal injury)',
      'Distracting injuries that prevent reliable pain assessment',
      'Unconscious trauma patients (assume spinal injury until proven otherwise)'
    ],
    contraindications: [
      'Penetrating neck injuries where collar may compress wound or increase bleeding',
      'Significant airway compromise where collar prevents management',
      'Patients who strongly resist application (forced application may cause injury)',
      'Pre-existing cervical spine disease with known fixed deformity (e.g., ankylosing spondylitis) — splint in position found'
    ],
    warnings: [
      'C-collar alone does NOT fully immobilize the spine — always combine with long backboard or scoop stretcher',
      'Incorrect sizing causes extension (too large) or flexion (too small) — both harmful',
      'Do not remove once applied in the field — hospital will clear the spine',
      'Monitor airway: collar can make intubation difficult — have suction ready'
    ],
    steps: [
      'Maintain manual inline stabilization (MILS) throughout the entire procedure',
      'Size the collar: measure from the top of the shoulder to the chin with 2 fingers',
      'Match measurement to collar size markings (extrication, no-neck, short, regular, tall)',
      'Pre-form the collar if needed; position the chin piece under the chin first',
      'Slide the back panel behind the neck without losing MILS',
      'Secure the velcro — snug, able to insert one finger under the front',
      'Verify the chin is fully supported and the collar is not covering the ears',
      'Maintain MILS until patient is fully secured to backboard or cot'
    ],
    pearls: [
      'MILS must be maintained from start to finish — the collar is secondary to manual control',
      'The most common sizing error is going too large — when in doubt, size down',
      'Stiff neck from muscle spasm ≠ spinal fracture, but treat it as one until cleared',
      'A properly sized collar allows mouth opening (vomiting) but limits flexion/extension',
      'In a combative patient, maintaining MILS and rapid packaging may be safer than struggling with a collar'
    ],
    diagramType: 'c-collar'
  },
  {
    id: 'board-splint',
    name: 'Padded Rigid Board Splint',
    emoji: '🪵',
    color: '#a5d6ff',
    category: 'Rigid / Board',
    regions: ['upper','lower'],
    injuries: ['fracture','dislocation'],
    setting: ['commercial','improvised'],
    description: 'Padded aluminum or wooden board applied alongside a fractured extremity. Non-circumferential by design, making it safe when significant swelling is expected. One of the oldest and most reliable field splints.',
    indications: [
      'Long bone fractures of the forearm, humerus, tibia, or fibula',
      'Fractures with significant swelling where circumferential splints are risky',
      'Multiple extremity fractures in MCI when resources are limited',
      'Supplemental splinting alongside a sling or traction device',
      'Pediatric fractures where moldable splints are difficult to size'
    ],
    contraindications: [
      'Femur fractures — requires traction splint, not board alone',
      'Joint injuries where board cannot bridge adequately',
      'Open fractures with significant contamination on the contact surface'
    ],
    warnings: [
      'Board must extend one joint above AND one joint below the fracture site',
      'Padding between the board and the limb is not optional — bony prominences will develop pressure injuries quickly',
      'Reassess CSM — boards can slip and apply focal pressure to vessels or nerves'
    ],
    steps: [
      'Assess and expose the injury; perform distal CSM baseline',
      'Select a board that will extend one joint above and one below the fracture',
      'Pad the board generously — especially at bony prominences',
      'Have a partner maintain manual stabilization of the fracture',
      'Position the padded board alongside (or behind) the limb',
      'Secure with roller bandage or cravats — start distal and work proximal',
      'Leave the fracture site accessible if possible for re-assessment',
      'Reassess CSM; document and transport'
    ],
    pearls: [
      'Non-circumferential design means the limb can swell without losing circulation — critical for high-energy injuries',
      'Two boards on opposite sides of the limb create superior rigidity for larger bones (e.g., humerus)',
      'In a pinch, cardboard folded into a channel shape works as an effective improvised board splint',
      'Board splints are preferred over air splints for open fractures or wounds requiring monitoring'
    ],
    diagramType: 'board'
  },
  {
    id: 'pelvic-binder',
    name: 'Pelvic Binder / SAM Pelvic Sling',
    emoji: '🔗',
    color: '#ff7b72',
    category: 'Circumferential Compression',
    regions: ['spine'],
    injuries: ['fracture'],
    setting: ['commercial'],
    description: 'Circumferential compression device applied at the level of the greater trochanters. Reduces pelvic volume to tamponade hemorrhage in open-book pelvic fractures. A potentially life-saving intervention.',
    indications: [
      'Suspected open-book (AP compression) pelvic fracture',
      'High-energy MOI with pelvic tenderness or instability (MVC, fall from height)',
      'Hypotension with suspected pelvic source in trauma patient',
      'Pelvic pain/instability combined with signs of hemorrhagic shock'
    ],
    contraindications: [
      'Lateral compression pelvic fractures — binder may worsen fracture displacement',
      'Vertical shear pelvic fractures — binder alone is insufficient',
      'Do NOT apply to abdomen or iliac crests — must be at greater trochanters only'
    ],
    warnings: [
      'NEVER perform a manual pelvic "rock" exam in the field — it dislodges clots and worsens bleeding',
      'Incorrect placement (too high) fails to close the fracture and can injure abdominal organs',
      'Once applied, do NOT remove in the pre-hospital setting — hemorrhage can resume',
      'A sheet wrapped tightly around the pelvis is an acceptable improvised binder if commercial device unavailable'
    ],
    steps: [
      'Recognize mechanism: high-energy trauma with possible pelvic injury',
      'Do NOT perform pelvic spring/rock assessment — skip it',
      'Log roll or slide patient as a unit (maintain spinal precautions)',
      'Position the binder beneath the patient at the level of the greater trochanters (widest part of hips)',
      'Bring both ends of the binder up and over the pelvis at the greater trochanter level',
      'Apply firm circumferential tension and secure according to device instructions',
      'Internally rotate the feet slightly ("toes in") to help close the pelvis — secure with bandage',
      'Reassess vital signs — improvement in BP/HR may indicate successful hemorrhage control'
    ],
    pearls: [
      'The retroperitoneal space can hold 3–4 liters of blood — a pelvic binder can be a lifesaving bridge to OR',
      'Placement at the GREATER TROCHANTERS (not iliac crests) is the most critical technical detail',
      'A bedsheet folded to about 6 inches wide and wrapped tightly is a valid improvised binder',
      'Tying the feet in internal rotation ("frog-legged inward") helps mechanically close an open book fracture',
      'Skin integrity under the binder: prolonged use can cause pressure necrosis — hospital will manage'
    ],
    diagramType: 'pelvis'
  },
  {
    id: 'mallet-splint',
    name: 'Mallet Finger Splint (Stack Splint)',
    emoji: '☝️',
    color: '#7ee787',
    category: 'Digital Extension',
    regions: ['upper'],
    injuries: ['softtissue','fracture'],
    setting: ['commercial','hospital'],
    description: 'A small rigid or semi-rigid splint that holds the DIP (distal interphalangeal) joint in full extension. Used exclusively for mallet finger — avulsion of the extensor tendon at the fingertip.',
    indications: [
      'Mallet finger: extensor tendon avulsion at the DIP joint (classic "jammed finger" with drooping tip)',
      'Bony mallet: small avulsion fracture at the base of the distal phalanx',
      'Any injury where the patient cannot actively extend the DIP joint'
    ],
    contraindications: [
      'Large fracture fragments (>1/3 of the joint surface) — may require surgery',
      'Volar subluxation of the distal phalanx — surgical referral',
      'Open mallet injuries — wound care first, then splint',
      'PIP or MCP injuries — different splinting strategy required'
    ],
    warnings: [
      'DIP must be maintained in FULL extension continuously for 6–8 weeks — even one flexion resets the clock',
      'NEVER flex the DIP during dressing changes — slide splint off while holding the fingertip in extension',
      'Splint the DIP only — PIP must remain free to prevent stiffness',
      'Buddy taping alone is NOT adequate for mallet finger'
    ],
    steps: [
      'Identify mallet deformity: patient cannot extend the DIP joint against gravity',
      'Select appropriate stack splint size for the affected finger',
      'Hold the DIP joint in full (or very slight hyperextension) — do not flex',
      'Slide the splint over the finger so the dorsal surface supports the fingertip in extension',
      'Secure with tape — do not tape so tightly as to impair circulation',
      'Confirm the PIP joint is completely free to flex and extend',
      'Instruct patient: DIP must never flex, even during splint changes',
      'Arrange orthopedic follow-up within 1–2 weeks'
    ],
    pearls: [
      'The DIP must NEVER flex during the entire treatment period — one accidental flex restarts 6–8 weeks',
      'During splint changes: hold fingertip in extension on a flat surface while the splint is replaced',
      'If commercial stack splint unavailable: tongue depressor cut to length works as an improvised version',
      'Mallet finger from basketball/volleyball is very common — EMTs encounter this regularly',
      'PIP joint must stay free — PIP stiffness is a complication of overzealous immobilization'
    ],
    diagramType: 'mallet'
  },
  {
    id: 'sugar-tong-humerus',
    name: 'Sugar Tong Splint (Humerus)',
    emoji: '🦴',
    color: '#cae8ff',
    category: 'Plaster / Fiberglass',
    regions: ['upper'],
    injuries: ['fracture'],
    setting: ['hospital'],
    description: 'U-shaped plaster or fiberglass slab that wraps from the axilla, around the elbow, and up the lateral arm. Used in the ED for mid-shaft humerus fractures. Pre-hospital EMTs use sling & swathe instead.',
    indications: [
      'Mid-shaft humerus fractures (primary ED indication)',
      'Distal humerus fractures in some protocols',
      'Situations where elbow immobilization at 90° is required alongside upper arm support'
    ],
    contraindications: [
      'Pre-hospital setting — sling & swathe is the appropriate pre-hospital alternative',
      'Open fractures requiring operative washout',
      'Circumferential swelling — use splint, never circular cast'
    ],
    warnings: [
      'Radial nerve runs in the spiral groove of the humerus — radial nerve palsy (wrist drop) is a common complication of mid-shaft humerus fractures',
      'Always assess wrist and finger extension before and after application',
      'Significant shortening or angulation may require hanging cast technique instead'
    ],
    steps: [
      'Apply stockinette the full length of the arm',
      'Pad with webril (cotton), paying extra attention to the axilla and bony prominences',
      'Measure plaster/fiberglass from the axilla, around the olecranon, and up the lateral arm',
      'Wet the slab; apply starting from the axilla down to the olecranon and back up the lateral humerus',
      'Mold elbow at 90°, forearm in neutral rotation',
      'Overwrap with elastic bandage; hold until hardened',
      'Apply a collar-and-cuff or sling to support the forearm',
      'Perform and document thorough neurological exam including radial nerve function (wrist and finger extension)'
    ],
    pearls: [
      'Radial nerve palsy (wrist drop, inability to extend fingers) may be present at time of injury — document before splinting',
      'EMT takeaway: recognize wrist drop as a humerus fracture complication and document it',
      'Pre-hospital: sling & swathe with optional SAM splint alongside the humerus is appropriate',
      'Mid-shaft humerus fractures are sometimes treated non-operatively with a functional brace — transport for evaluation'
    ],
    diagramType: 'sugar-tong'
  }
];

// ─── QUIZ QUESTIONS ───────────────────────────────────────────────────────────

const QUESTIONS = [
  // ── Original 10 ──────────────────────────────────────────────────────────────
  {
    scenario: 'You arrive on scene to a 28-year-old male who fell off a ladder. He has <strong>severe pain and obvious deformity of the mid-thigh</strong>, the leg appears shortened and externally rotated. Vitals: BP 100/70, HR 120. Which splint is most appropriate?',
    options: ['SAM Splint', 'Hare or Sager Traction Splint', 'Air Splint', 'Pillow Splint'],
    correct: 1,
    explanation: 'Mid-shaft femur fractures are the primary indication for a traction splint (Hare or Sager). The femoral canal can hold 1.5–2L of blood — traction reduces the fracture gap, decreasing hemorrhage. The shortened, externally rotated leg is a classic femur fracture presentation. Air and SAM splints provide no meaningful femur stabilization.'
  },
  {
    scenario: 'A 45-year-old woman slipped on ice. She has <strong>pain, swelling, and tenderness over the lateral ankle</strong>. Pedal pulse is present, sensation intact. You have limited supplies. What is the most appropriate field splint?',
    options: ['Traction Splint', 'Pillow Splint', 'Buddy Tape', 'Sling & Swathe'],
    correct: 1,
    explanation: 'A pillow splint is ideal for ankle and foot injuries. It conforms to the shape, provides gentle compression, and is extremely comfortable. Traction splints are only for femur fractures. Buddy taping is for digits. Sling & swathe is for upper extremity.'
  },
  {
    scenario: 'You have a patient with a <strong>suspected shoulder dislocation</strong> after a football tackle. The arm is held slightly abducted and externally rotated. He is in significant pain. Best immobilization:',
    options: ['Hare Traction Splint', 'SAM Splint in anatomical position', 'Sling & Swathe in position of comfort', 'Air Splint'],
    correct: 2,
    explanation: 'Sling & swathe in the position of comfort is correct. Never force a dislocated shoulder into anatomical position — you risk fracturing the humeral head or injuring the axillary nerve. The sling supports the arm weight; the swathe prevents painful movement. "Splint them as they lie" applies here.'
  },
  {
    scenario: 'An 8-year-old fell from monkey bars and has <strong>point tenderness of the wrist and a "dinner fork" deformity</strong>. Which splint and position is appropriate?',
    options: ['Buddy tape to adjacent finger', 'SAM splint with wrist in slight extension', 'Traction splint', 'Sling only, no rigid splint needed'],
    correct: 1,
    explanation: 'A "dinner fork" deformity suggests a Colles fracture (distal radius). A SAM splint molded to extend from the palm to mid-forearm, with the wrist in slight dorsiflexion (position of function), is appropriate. Traction splints are for femur only. Buddy tape is for digits. A sling alone provides inadequate immobilization for this fracture.'
  },
  {
    scenario: 'You\'re treating a victim of a motorcycle crash who has <strong>an angulated tibial fracture with an open wound</strong>. Which type of splint is contraindicated?',
    options: ['SAM Splint (padded)', 'Vacuum Splint', 'Air / Pneumatic Splint', 'Padded Board Splint'],
    correct: 2,
    explanation: 'Air splints are contraindicated for open fractures with protruding bone, because the circumferential pressure can impair circulation and push contamination into the wound. SAM splints (padded), vacuum splints, and board splints can all be applied over a sterile dressing without circumferential pressure.'
  },
  {
    scenario: 'A patient has a <strong>suspected femur fracture AND an ipsilateral knee injury</strong>. You were going to apply a Hare traction splint. You should:',
    options: ['Apply the traction splint anyway — femur takes priority', 'Use a padded board splint or vacuum splint instead', 'The ankle hitch is contraindicated — do not apply traction to this limb', 'Apply the air splint to the entire leg'],
    correct: 2,
    explanation: 'A knee injury is a contraindication to the ankle hitch required for traction splints. Traction through a damaged knee can cause catastrophic additional injury. Use a padded long board splint or vacuum splint instead. Know your local protocol regarding exceptions.'
  },
  {
    scenario: 'You\'re buddy-taping a patient\'s broken ring finger to the middle finger. Before you tape, what is the most critical step?',
    options: ['Apply antiseptic spray between the fingers', 'Place gauze/foam padding BETWEEN the digits', 'Tape directly over the proximal IP joint', 'Check blood pressure'],
    correct: 1,
    explanation: 'Always place padding (gauze or foam) between the digits before buddy taping. Direct tape on skin causes maceration, blistering, and pain with removal. This is perhaps the most commonly forgotten step in digit splinting.'
  },
  {
    scenario: 'While transporting a patient with a Hare traction splint applied for a femur fracture, the patient reports <strong>worsening pain and the traction feels loose</strong>. Your best action:',
    options: ['Remove the traction splint and use a long board', 'Reassess and retighten traction to restore ~10% body weight tension', 'Ignore — some pain is expected with femur fractures', 'Apply an air splint over the traction splint'],
    correct: 1,
    explanation: 'Traction splints can loosen during transport as swelling and muscle spasm change. Reassess the traction tension and retighten to approximately 10% of body weight. The patient should report pain relief at correct tension. Removing traction risks re-injury and increased hemorrhage.'
  },
  {
    scenario: 'A vacuum splint is MOST advantageous over a SAM splint in which scenario?',
    options: ['Mid-shaft femur fracture', 'A complex knee dislocation that must be transported in a deformed position', 'Simple wrist fracture in a cooperative adult', 'Clavicle fracture'],
    correct: 1,
    explanation: 'Vacuum splints excel when a joint cannot or should not be realigned and must be transported in a deformed position. They conform to and harden around whatever shape the limb is in. SAM splints require a more standardized limb position.'
  },
  {
    scenario: 'Which is NOT a component of the CSM assessment performed before and after splint application?',
    options: ['Capillary refill (circulation)', 'Strength and motor function (movement)', 'Skin rash and dermatology assessment', 'Sensation (numbness/tingling distal to injury)'],
    correct: 2,
    explanation: 'CSM stands for Circulation, Sensation, and Movement. Circulation: distal pulse and capillary refill < 2 sec. Sensation: numbness or tingling distal to fracture. Movement: wiggle fingers or toes. Skin rash assessment is not part of the standard CSM check.'
  },
  // ── New questions for new splint types ───────────────────────────────────────
  {
    scenario: 'A 22-year-old is brought in from a high-speed MVC. She has severe pelvic pain, blood pressure is 82/50 and falling, HR 138. On exam, <strong>the pelvis feels unstable</strong>. What is the most important immediate intervention (after airway/breathing)?',
    options: ['Apply a traction splint to both femurs', 'Apply a pelvic binder at the level of the greater trochanters', 'Perform a manual pelvic rock exam to confirm the fracture', 'Apply a long backboard and transport without further intervention'],
    correct: 1,
    explanation: 'Pelvic binder application at the greater trochanters is the answer. Open-book pelvic fractures can harbor 3–4 liters of retroperitoneal bleeding. The binder reduces pelvic volume and tamponades hemorrhage. Critically: NEVER perform a pelvic rock exam in the field — it dislodges clots and worsens hemorrhage. This is one of the most high-stakes field interventions an EMT can perform.'
  },
  {
    scenario: 'A basketball player jammed his finger and presents with <strong>a drooping fingertip that he cannot extend at the last joint (DIP)</strong>, despite having normal PIP and MCP movement. What is the correct splint and position?',
    options: ['Buddy tape the finger to its neighbor', 'Stack (mallet) splint with DIP in full extension', 'SAM splint with the entire finger in flexion', 'Sling the hand against the chest'],
    correct: 1,
    explanation: 'This is a classic mallet finger — avulsion of the extensor tendon at the DIP. The only correct treatment is a stack/mallet splint holding the DIP in FULL extension. Buddy taping does NOT hold the DIP in extension and allows flexion, preventing healing. The PIP must remain free. The DIP must never flex during the 6–8 week treatment period.'
  },
  {
    scenario: 'You are applying a cervical collar to a trauma patient. After sizing, you notice the collar is slightly too large. What is the clinical consequence of an oversized C-collar?',
    options: ['It will cause the neck to flex forward, increasing spinal injury risk', 'It will extend the neck backward, potentially worsening a cervical fracture', 'It has no clinical significance as long as it stays on', 'It reduces the risk of airway compromise'],
    correct: 1,
    explanation: 'An oversized C-collar causes hyperextension of the cervical spine. This is dangerous for a patient with an unstable cervical fracture. An undersized collar causes flexion. Both are harmful. Always size correctly: measure from shoulder to chin. When in doubt, size down rather than up, and maintain MILS regardless of collar size.'
  },
  {
    scenario: 'You are splinting a tibia fracture with significant swelling already present. Comparing a <strong>padded board splint to an air splint</strong> for this injury, which is more appropriate and why?',
    options: ['Air splint — provides better circumferential support', 'Board splint — non-circumferential design allows limb to swell without losing circulation', 'They are equivalent — choose based on availability', 'Air splint — altitude changes do not affect it'],
    correct: 1,
    explanation: 'The board splint\'s key advantage is that it is non-circumferential. As swelling increases, a circumferential splint (like an air splint) can act like a tourniquet. A board splint applied alongside the limb leaves room for expansion. This is especially important with high-energy injuries where significant post-injury swelling is expected.'
  },
  {
    scenario: 'A patient with a mid-shaft humerus fracture after a direct blow has <strong>wrist drop and inability to extend the fingers</strong> on that side. What does this finding indicate and what should you document?',
    options: ['This is normal — wrist drop is expected from pain inhibition', 'Radial nerve injury — document this neurological deficit clearly before splinting', 'Ulnar nerve injury — requires immediate surgical intervention', 'Axillary nerve injury — apply sling only, no documentation needed'],
    correct: 1,
    explanation: 'Wrist drop (inability to extend the wrist and fingers) indicates radial nerve injury. The radial nerve runs in the spiral groove of the mid-shaft humerus and is commonly injured with mid-shaft fractures. This deficit must be documented before splinting to distinguish pre-existing injury from splint-induced compression. Pre-hospital: apply sling & swathe, document the deficit, and transport.'
  },
  {
    scenario: 'Where EXACTLY should a pelvic binder be positioned on the patient\'s body?',
    options: ['At the level of the iliac crests (hip bones)', 'At the level of the greater trochanters (widest part of the hips)', 'At the level of the umbilicus for maximum compression', 'At the symphysis pubis'],
    correct: 1,
    explanation: 'The pelvic binder must be placed at the level of the greater trochanters — the widest part of the hips. This is where circumferential compression most effectively closes an open-book pelvic fracture. Placing it at the iliac crests is a common error that reduces effectiveness and can cause abdominal injury. Feet should be internally rotated ("toes in") to help close the fracture.'
  },
  {
    scenario: 'You are treating a mallet finger. During transport, the patient\'s stack splint comes loose and they accidentally <strong>flex the DIP joint once</strong> before you reapply the splint. What do you tell them?',
    options: ['One flex is fine as long as the splint goes back on immediately', 'That single flexion has restarted the entire 6–8 week treatment clock', 'Flexion is acceptable as long as extension is still possible', 'The treatment period is shortened after one accidental flex'],
    correct: 1,
    explanation: 'This is the defining pearl of mallet finger care: even a single unintentional DIP flexion restarts the entire 6–8 week immobilization period. The extensor tendon cannot heal if it is allowed to become slack even momentarily. Patients must be explicitly warned of this. Splint changes must be done by holding the fingertip in extension on a flat surface while the splint is replaced — never allowing the DIP to flex.'
  },
  {
    scenario: 'An unconscious trauma patient arrives from a high-speed MVC. Your partner asks whether to apply a cervical collar since the patient cannot report neck pain. You should:',
    options: ['Skip it — no neck pain reported means no cervical injury', 'Apply the collar — unconscious trauma patients cannot reliably report spinal injury and receive full spinal precautions', 'Wait for hospital X-rays before immobilizing', 'Only immobilize if the patient has visible neck deformity'],
    correct: 1,
    explanation: 'Unconscious trauma patients always receive full spinal precautions including C-collar. They cannot report pain or tenderness — the only reliable indicator available to you. High-energy MOI plus unconsciousness equals assumed spinal injury until cleared by imaging in the ED. Apply the collar, maintain MILS, and secure to a long backboard.'
  },
  // ── Additional questions (2 per splint type) ─────────────────────────────────
  {
    scenario: 'You are applying a SAM splint to a suspected wrist fracture. Before securing it, your partner reminds you to mold it first. What technique most significantly increases a SAM splint\'s rigidity?',
    options: ['Warming it with your hands before bending', 'Creating a C-curve or T-bar bend in the aluminum core', 'Applying it flat with extra layers of gauze underneath', 'Wetting it like plaster before use'],
    correct: 1,
    explanation: 'The C-curve (three-point bend) is what transforms a floppy SAM splint into a rigid support. Without molding, the flat aluminum provides surprisingly little resistance. The arch created by the C-curve distributes load and resists bending — just like corrugated cardboard is stronger than flat cardboard. Always mold before applying.'
  },
  {
    scenario: 'Mid-transport, you notice the vacuum splint on a patient\'s injured knee has gone completely soft and is no longer rigid. What is the most likely cause and correct response?',
    options: ['Normal — vacuum splints relax over time, just re-tighten the straps', 'The splint has been punctured — apply a backup rigid splint immediately', 'The beads have settled — knead the splint to redistribute them', 'Re-inflate with air to restore rigidity'],
    correct: 1,
    explanation: 'A vacuum splint that goes soft has been punctured and lost its seal. Unlike air splints which can be re-inflated, a punctured vacuum splint cannot be field-repaired. Apply your backup splint immediately (SAM or padded board). This is why carrying a backup when using vacuum splints is essential — they are excellent but fragile.'
  },
  {
    scenario: 'Which statement BEST describes the key mechanical difference between the Sager and Hare traction splints?',
    options: ['The Hare is unipolar and applies traction via the ankle only; the Sager is bipolar', 'The Sager is unipolar and applies traction medially against the ischium; the Hare is bipolar and applies against the groin', 'Both are functionally identical — choice is based only on availability', 'The Sager uses a windlass mechanism; the Hare uses a ratchet gauge'],
    correct: 1,
    explanation: 'Hare = bipolar (two poles), ischial pad seats in the groin/inguinal fold, windlass mechanism at the distal end. Sager = unipolar (one central shaft), padded perineal cushion applies against the ischium (medial), built-in traction gauge on the shaft. The Sager sits flat on the backboard and can be used bilaterally — key advantages in MVC patients.'
  },
  {
    scenario: 'A patient arrives from a motorcycle crash with suspected bilateral femur fractures. Which traction splint system is best suited for this situation?',
    options: ['One Hare traction splint applied to the worse leg only', 'Two Sager traction splints, one applied to each leg', 'A single traction splint to the dominant leg; board splint to the other', 'Traction splints are contraindicated when both femurs are fractured'],
    correct: 1,
    explanation: 'Two Sager splints can be applied simultaneously — one per leg. The Sager\'s medial unipolar design allows bilateral use without the splints interfering with each other. The Hare traction splint cannot practically be used bilaterally. Bilateral femur fractures represent massive hemorrhage risk (up to 4L blood loss) — traction on both legs is critical.'
  },
  {
    scenario: 'While hiking 5 miles from the trailhead, a companion sustains a suspected mid-shaft forearm fracture. No commercial splints are available. What is the single most important principle when building an improvised splint?',
    options: ['Use the hardest material available regardless of length', 'The splint must extend one joint above AND one joint below the fracture', 'Wrap the limb as tightly as possible to prevent movement', 'Only splint if the patient cannot walk out on their own'],
    correct: 1,
    explanation: 'One joint above AND one joint below is the golden rule of splinting. For a forearm fracture, the splint must span from the hand past the elbow. This prevents rotation at the fracture site, which is the primary cause of re-injury during transport. Without bridging both adjacent joints, even a rigid improvised splint provides minimal immobilization.'
  },
  {
    scenario: 'When securing an improvised splint, where should the securing ties be positioned relative to the fracture site?',
    options: ['Directly over the fracture to prevent it from shifting', 'On either side of the fracture site, never over it or over bony prominences', 'Only proximal to the fracture to allow distal swelling', 'Position does not matter as long as the splint is tight'],
    correct: 1,
    explanation: 'Ties over the fracture site cause direct pressure on the injury and significant pain. Ties over bony prominences cause pressure injuries quickly. Position ties on either side of the fracture at soft tissue areas, knots to the side (not on top of the limb). "Snug but not tight" — you should be able to slip one finger under each tie.'
  },
  {
    scenario: 'During transport with a pillow splint on an ankle injury, the patient reports increasing pain and you observe pale, cool toes with capillary refill of 4 seconds. What is your immediate action?',
    options: ['Administer pain medication and continue transport', 'Loosen or remove the securing bandages immediately and reassess', 'Elevate the limb higher and apply ice', 'Document the finding but continue — some swelling is expected'],
    correct: 1,
    explanation: 'Pale, cool toes with capillary refill > 2 seconds indicate circulatory compromise — the splint is too tight. Loosen immediately. This is a CSM failure that should have been caught on the regular 5-minute reassessments. If loosening does not restore circulation within 1–2 minutes, remove the splint entirely and reapply more loosely. Document everything.'
  },
  {
    scenario: 'A patient with a clavicle fracture has a sling applied but keeps moving their arm outward. What is the purpose of the swathe, and why does this patient need it?',
    options: ['The swathe elevates the arm to reduce swelling at the clavicle', 'The swathe binds the arm against the torso to prevent shoulder rotation and movement at the fracture site', 'The swathe replaces the sling for clavicle injuries specifically', 'The swathe prevents the sling knot from slipping'],
    correct: 1,
    explanation: 'The sling supports the arm weight and reduces gravitational pull on the fracture. The swathe binds the arm against the chest to prevent the arm from swinging away from the body, which would produce rotation and distraction forces at the clavicle fracture. Without the swathe, a sling alone allows too much motion — both are always used together for clavicle and proximal humerus injuries.'
  },
  {
    scenario: 'You are buddy-taping a patient\'s fractured 5th (little) toe. Which toe should it be taped to, and what must be placed between them?',
    options: ['The 3rd toe; no padding needed for small toes', 'The 4th toe; padding (gauze or foam) must be placed between them', 'Either neighbor; tape whichever is more convenient', 'Do not buddy tape toes — use a rigid splint only'],
    correct: 1,
    explanation: 'The 4th toe is the correct neighbor for the 5th. Always tape to the immediately adjacent digit. Padding between the toes is mandatory — direct tape-to-skin contact causes maceration (skin breakdown from moisture), blistering, and painful removal. Confirm the 4th toe is uninjured before using it as the "buddy." Two strips of tape: one at the proximal phalanx, one at the middle phalanx.'
  },
  {
    scenario: 'A patient with a posterior long arm splint for an elbow fracture reports forearm pain of 9/10 that worsens when you gently extend their fingers. The pain is not relieved by elevation or analgesia. What must you immediately suspect?',
    options: ['Medication side effect — switch analgesics', 'Compartment syndrome — requiring immediate transport and surgical evaluation', 'Normal post-fracture pain — reassure the patient', 'The splint is too short — apply a longer one'],
    correct: 1,
    explanation: 'Pain out of proportion, worsening with passive stretch, and unresponsive to analgesics are the hallmark signs of compartment syndrome. The 5 Ps: Pain, Pressure, Paresthesia, Paralysis (late), Pallor. Pain with passive stretch of the muscles in the affected compartment is the earliest and most reliable sign. This is a surgical emergency requiring fasciotomy. Transport immediately and alert the receiving hospital.'
  },
  {
    scenario: 'Why is a posterior splint always preferred over a circumferential cast when treating acute fractures in the emergency setting?',
    options: ['A cast is cheaper and faster to apply', 'A splint leaves room for swelling; a circumferential cast can become a tourniquet as edema increases', 'Casts provide inferior immobilization to splints in all situations', 'Plaster is always used for splints and is stronger than cast material'],
    correct: 1,
    explanation: 'Acute fractures always swell. A circumferential cast has no give — as the limb expands, the cast compresses it like a tourniquet, causing compartment syndrome. A posterior splint is only on one side of the limb, leaving the soft tissue free to swell. This is one of the most fundamental ED orthopedic principles: never apply a circular cast acutely. Splint first, cast later once swelling resolves.'
  },
  {
    scenario: 'You are splinting a mid-shaft humerus fracture in the field and have both a SAM splint and a padded board available. What is the most effective way to use these together?',
    options: ['Use only the SAM splint — adding the board creates excess weight', 'Apply boards on the medial and lateral sides of the humerus, then secure with a sling and swathe', 'Use only the board — SAM splints are too flexible for the humerus', 'Apply the SAM splint distally and the board proximally'],
    correct: 1,
    explanation: 'The humerus is a large bone with strong muscles on all sides. A single board allows rotation. Applying boards on both medial and lateral sides creates a rigid channel that prevents rotation and angulation. Secure with roller gauze, then apply a sling and swathe to keep the arm against the body. This combination is far superior to either alone for mid-shaft humerus fractures.'
  },
  {
    scenario: 'What is the most clinically significant neurological finding to specifically assess for and document BEFORE splinting a mid-shaft humerus fracture?',
    options: ['Biceps reflex', 'Wrist drop and inability to extend the fingers — indicating radial nerve injury', 'Grip strength only', 'Sensation in the palm'],
    correct: 1,
    explanation: 'The radial nerve runs in the spiral groove of the humerus and is injured in up to 18% of mid-shaft humerus fractures. Wrist drop — inability to actively extend the wrist and fingers — is the classic presentation. This MUST be documented before splinting. If found after splinting, it is impossible to know whether the nerve was injured by the fracture or compressed by the splint. Pre-hospital: apply sling and swathe, document the deficit clearly.'
  },
  {
    scenario: 'A patient is transported by helicopter after an air splint was applied on scene. At altitude, the patient reports increasing tightness and pain in the splinted arm. What is the most likely cause?',
    options: ['The splint fabric tightened due to temperature drop', 'Decreased atmospheric pressure at altitude caused the air inside to expand, over-inflating the splint', 'The fracture has worsened during transport', 'This is a normal sensation and does not require intervention'],
    correct: 1,
    explanation: "As altitude increases, atmospheric pressure decreases. By Boyle's Law, the air inside the splint expands, increasing intra-splint pressure and compressing the limb. The splint should be partially deflated during air transport and rechecked regularly. This problem is unique to pneumatic (air) splints — vacuum splints and rigid splints are not affected by altitude changes. Always ask about air transport when choosing a splint type."
  },
  {
    scenario: 'The Sager traction splint has a built-in traction gauge. A patient weighs approximately 180 lbs. Using the 10% body weight guideline, what is the target traction force, and what should confirm you have the right amount?',
    options: ['18 lbs; confirmed by the leg returning to normal length', 'About 18 lbs; confirmed when the patient reports pain relief in the thigh', '180 lbs; apply maximum tension until the windlass locks', 'Traction amount does not matter — apply as tight as possible'],
    correct: 1,
    explanation: 'Target traction is approximately 10% of body weight — about 18 lbs for a 180 lb patient. The built-in gauge on the Sager removes guesswork; always use it. The key clinical confirmation is patient-reported pain relief: when correct traction is achieved, muscle spasm decreases and pain significantly improves. Over-traction (pulling too hard) can cause neurovascular injury. Never exceed 15 lbs on a pediatric patient.'
  }
];


// ─── DIAGRAMS ─────────────────────────────────────────────────────────────────