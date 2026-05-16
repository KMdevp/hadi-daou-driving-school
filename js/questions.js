const allQuestions = [




  // 👉 miniii busss   mini buss

  
    {
    type: "normal",
    id: 1,
    category: "minibus",
    question: {
      ar: "ما هو تعريف الباص من الفئة 1D في قانون السير اللبناني؟",
      fr: "Quelle est la définition du bus de catégorie D1 dans le code de la route libanais ?",
      en: "What is the definition of a Category D1 bus under Lebanese Traffic Law?"
    },
    options: {
      ar: [
        "مركبة لنقل البضائع يتجاوز وزنها 3500 كلغ.",
        "مركبة لنقل الركاب تتسع لـ 24 راكباً.",
        "مركبة لنقل الركاب تضم أكثر من 8 مقاعد ولا تتعدى 16 مقعداً عدا مقعد السائق."
      ],
      fr: [
        "Un véhicule pour le transport de marchandises dont le poids dépasse 3500 kg.",
        "Un véhicule pour le transport de passagers pouvant accueillir 24 passagers.",
        "Un véhicule pour le transport de passagers comprenant plus de 8 sièges et ne dépassant pas 16 sièges, sans compter le siège du conducteur."
      ],
      en: [
        "A vehicle for transporting goods weighing more than 3500 kg.",
        "A vehicle for transporting passengers that holds up to 24 passengers.",
        "A vehicle for transporting passengers comprising more than 8 seats and not exceeding 16 seats, excluding the driver's seat."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 2,
    category: "minibus",
    question: {
      ar: "ما هو السن الأدنى المطلوب للحصول على رخصة سوق عمومية من الفئة 1D؟",
      fr: "Quel est l'âge minimum requis pour obtenir un permis de conduire public de catégorie D1 ?",
      en: "What is the minimum age required to obtain a Category D1 public driving license?"
    },
    options: {
      ar: ["20 سنة.", "21 سنة.", "25 سنة."],
      fr: ["20 ans.", "21 ans.", "25 ans."],
      en: ["20 years.", "21 years.", "25 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 3,
    category: "minibus",
    question: {
      ar: "هل يسمح لسائق باص من الفئة 1D أن يجر مقطورة خلف الباص؟",
      fr: "Un conducteur de bus de catégorie D1 est-il autorisé à tracter une remorque derrière le bus ?",
      en: "Is a Category D1 bus driver permitted to tow a trailer behind the bus?"
    },
    options: {
      ar: [
        "نعم، بشرط ألا يتجاوز وزن المقطورة 750 كلغ.",
        "لا، يمنع جر أي مقطورة مهما كان وزنها.",
        "نعم، بشرط أن تكون مخصصة للركاب."
      ],
      fr: [
        "Oui, à condition que le poids de la remorque ne dépasse pas 750 kg.",
        "Non, il est interdit de tracter une remorque quel que soit son poids.",
        "Oui, à condition qu'elle soit destinée aux passagers."
      ],
      en: [
        "Yes, provided that the weight of the trailer does not exceed 750 kg.",
        "No, towing any trailer is prohibited regardless of its weight.",
        "Yes, provided that it is designated for passengers."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 4,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين دون سن الخمسين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs de moins de cinquante ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers under the age of fifty?"
    },
    options: {
      ar: ["سنتان.", "5 سنوات.", "10 سنوات."],
      fr: ["2 ans.", "5 ans.", "10 ans."],
      en: ["Two years.", "5 years.", "10 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 5,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين بين سن الخمسين وسن الخمس وستين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs âgés entre cinquante et soixante-cinq ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers between the ages of fifty and sixty-five?"
    },
    options: {
      ar: ["سنتان.", "3 سنوات.", "5 سنوات."],
      fr: ["2 ans.", "3 ans.", "5 ans."],
      en: ["Two years.", "3 years.", "5 years."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 6,
    category: "minibus",
    question: {
      ar: "ما مدة صلاحية رخصة سوق عمومية من الفئة 1D للسائقين بعد سن الخمس وستين؟",
      fr: "Quelle est la durée de validité d'un permis de conduire public de catégorie D1 pour les conducteurs après l'âge de soixante-cinq ans ?",
      en: "What is the validity period of a Category D1 public driving license for drivers over the age of sixty-five?"
    },
    options: {
      ar: ["سنتان.", "3 سنوات.", "5 سنوات."],
      fr: ["2 ans.", "3 ans.", "5 ans."],
      en: ["Two years.", "3 years.", "5 years."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 7,
    category: "minibus",
    question: {
      ar: "ما هي التجهيزات الإجبارية التي يجب توافرها في باص من فئة 1D لنقل الركاب؟",
      fr: "Quels sont les équipements obligatoires qui doivent être disponibles dans un bus de catégorie D1 pour le transport de passagers ?",
      en: "What is the mandatory equipment that must be available in a Category D1 bus for passenger transport?"
    },
    options: {
      ar: [
        "جهاز تلفاز للركاب.",
        "ستائر داكنة جداً على النوافذ.",
        "جهازي إطفاء حريق، حقيبة إسعافات أولية، ومثلث التحذير."
      ],
      fr: [
        "Un téléviseur pour les passagers.",
        "Des rideaux très sombres sur les fenêtres.",
        "Deux extincteurs, une trousse de premiers secours et un triangle de signalisation."
      ],
      en: [
        "A television set for passengers.",
        "Very dark curtains on the windows.",
        "Two fire extinguishers, a first aid kit, and a warning triangle."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 8,
    category: "minibus",
    question: {
      ar: "أين يجب وضع لوحة التسجيل في باصات الفئة 1D؟",
      fr: "Où la plaque d'immatriculation doit-elle être placée sur les bus de catégorie D1 ?",
      en: "Where must the registration plate be placed on Category D1 buses?"
    },
    options: {
      ar: [
        "في مقدمة ومؤخرة الباص فقط.",
        "في مقدمة ومؤخرة الباص وقرب السائق.",
        "في مقدمة ومؤخرة وإلى جانب الباص."
      ],
      fr: [
        "À l'avant et à l'arrière du bus uniquement.",
        "À l'avant et à l'arrière du bus et près du conducteur.",
        "À l'avant, à l'arrière et sur le côté du bus."
      ],
      en: [
        "At the front and rear of the bus only.",
        "At the front and rear of the bus and near the driver.",
        "At the front, rear, and on the side of the bus."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 9,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء القانوني الصحيح عند توقف الباص لإنزال وإصعاد الركاب؟",
      fr: "Quelle est la procédure légale correcte lors de l'arrêt du bus pour faire monter et descendre des passagers ?",
      en: "What is the correct legal procedure when stopping the bus to pick up or drop off passengers?"
    },
    options: {
      ar: [
        "الاقتراب قدر الإمكان من الحافة اليمنى للطريق.",
        "التوقف بناءً على طلب الراكب وفي المكان الذي يحدده.",
        "التوقف في أي مساحة مناسبة لتسهيل النزول والصعود."
      ],
      fr: [
        "S'approcher autant que possible du bord droit de la route.",
        "S'arrêter à la demande du passager et à l'endroit qu'il détermine.",
        "S'arrêter dans n'importe quel espace approprié pour faciliter la descente et la montée."
      ],
      en: [
        "Approach the right edge of the road as much as possible.",
        "Stop based on the passenger's request and at the specific location they determine.",
        "Stop in any suitable area to facilitate getting on and off."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 10,
    category: "minibus",
    question: {
      ar: "متى يجب إجراء المعاينة الميكانيكية لباصات الفئة 1D العمومية؟",
      fr: "Quand l'inspection mécanique doit-elle être effectuée pour les bus publics de catégorie D1 ?",
      en: "When must the mechanical inspection be performed for Category D1 public buses?"
    },
    options: {
      ar: [
        "مرة كل سنة.",
        "مرة كل سنتين للباصات التي يقل تاريخ صنعها عن عشر سنوات.",
        "مرة كل سنتين للباصات التي يقل تاريخ صنعها عن خمس سنوات."
      ],
      fr: [
        "Une fois par an.",
        "Une fois tous les deux ans pour les bus dont la date de fabrication est inférieure à dix ans.",
        "Une fois tous les deux ans pour les bus dont la date de fabrication est inférieure à cinq ans."
      ],
      en: [
        "Once every year.",
        "Once every two years for buses manufactured less than ten years ago.",
        "Once every two years for buses manufactured less than five years ago."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 11,
    category: "minibus",
    question: {
      ar: "في حال وجود عطل في أضواء الكابح، ماذا يجب على سائق باص من فئة 1D أن يفعل؟",
      fr: "En cas de panne des feux de stop, que doit faire un conducteur de bus de catégorie D1 ?",
      en: "In the event of a brake light malfunction, what must a Category D1 bus driver do?"
    },
    options: {
      ar: [
        "الاستمرار في القيادة بحذر حتى انتهاء الدوام.",
        "إصلاح العطل فوراً وعدم السير بالمركبة في حال شكل ذلك خطراً.",
        "استخدام أضواء التنبيه وإخراج اليد من النافذة عند كل توقف."
      ],
      fr: [
        "Continuer à conduire prudemment jusqu'à la fin des heures de travail.",
        "Réparer la panne immédiatement et ne pas circuler avec le véhicule si cela présente un danger.",
        "Utiliser les feux de détresse et sortir la main par la fenêtre à chaque arrêt."
      ],
      en: [
        "Continue driving cautiously until the end of the shift.",
        "Repair the malfunction immediately and do not drive the vehicle if doing so poses a danger.",
        "Use hazard lights and stick a hand out of the window at every stop."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 12,
    category: "minibus",
    question: {
      ar: "أي من هذه الشروط ضروري للحصول على رخصة سوق عمومية لباص من فئة 1D؟",
      fr: "Laquelle de ces conditions est nécessaire pour obtenir un permis de conduire public pour un bus de catégorie D1 ?",
      en: "Which of these conditions is necessary to obtain a Category D1 public bus driving license?"
    },
    options: {
      ar: [
        "أن يجيد لغة أجنبية إضافة إلى العربية.",
        "أن لا يكون محتاجاً لنظارات طبية.",
        "أن يكون لديه رخصة سوق سيارة فئة B عمومية."
      ],
      fr: [
        "Maîtriser une langue étrangère en plus de l'arabe.",
        "Ne pas avoir besoin de lunettes médicales.",
        "Être titulaire d'un permis de conduire de voiture catégorie B publique."
      ],
      en: [
        "Must be fluent in a foreign language in addition to Arabic.",
        "Must not require medical glasses.",
        "Must hold a Category B public car driving license."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 13,
    category: "minibus",
    question: {
      ar: "ما هي النسبة المسموحة للكحول في دم سائق مركبة نقل ركاب (1D) أثناء القيادة؟",
      fr: "Quel est le taux d'alcoolémie autorisé dans le sang d'un conducteur de véhicule de transport de passagers (D1) pendant la conduite ?",
      en: "What is the permitted blood alcohol concentration for a driver of a passenger vehicle (D1) while driving?"
    },
    options: {
      ar: ["صفر غ/لتر.", "0.2 غ/لتر.", "0.5 غ/لتر."],
      fr: ["Zéro g/litre.", "0,2 g/litre.", "0,5 g/litre."],
      en: ["Zero g/liter.", "0.2 g/liter.", "0.5 g/liter."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 14,
    category: "minibus",
    question: {
      ar: "ماذا يعني وجود خطين متواصلين في وسط الطريق لسائق الباص؟",
      fr: "Que signifie la présence de deux lignes continues au milieu de la route pour un conducteur de bus ?",
      en: "What does the presence of two continuous lines in the middle of the road mean for a bus driver?"
    },
    options: {
      ar: [
        "يمنع التجاوز لكن يمكن التدوير (tour demi) فوقها.",
        "يمنع التجاوز لكن يمكن الالتفاف (turn-U) فوقها.",
        "يمنع التجاوز أو اجتياز الخطين تماماً."
      ],
      fr: [
        "Le dépassement est interdit mais il est possible de faire demi-tour par-dessus.",
        "Le dépassement est interdit mais il est possible de faire un U-turn par-dessus.",
        "Le dépassement ou le franchissement total des deux lignes est interdit."
      ],
      en: [
        "Overtaking is prohibited, but turning (demi tour) over them is possible.",
        "Overtaking is prohibited, but turning (U-turn) over them is possible.",
        "Overtaking or crossing the two lines is completely prohibited."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 15,
    category: "minibus",
    question: {
      ar: "في حال تعطل الباص في نفق، ما هو الإجراء الأول؟",
      fr: "En cas de panne du bus dans un tunnel, quelle est la première procédure ?",
      en: "If the bus breaks down in a tunnel, what is the first procedure?"
    },
    options: {
      ar: [
        "تشغيل أضواء التنبيه والطلب من الركاب المساعدة في دفع الباص إلى موقع آمن.",
        "تشغيل أضواء التنبيه والاتصال بخدمة القطر مع إبقاء الركاب هادئين داخل الباص.",
        "تشغيل أضواء الطوارئ (الرباعي) ومحاولة إخراج الركاب لمكان آمن إذا كان ذلك ممكناً."
      ],
      fr: [
        "Allumer les feux de détresse et demander aux passagers d'aider à pousser le bus vers un endroit sûr.",
        "Allumer les feux de détresse et appeler le service de remorquage tout en gardant les passagers calmes à l'intérieur du bus.",
        "Allumer les feux de détresse (les quatre clignotants) et tenter de faire sortir les passagers vers un endroit sûr si cela est possible."
      ],
      en: [
        "Turn on hazard lights and ask passengers to help push the bus to a safe location.",
        "Turn on hazard lights, contact towing services, and keep passengers calm inside the bus.",
        "Turn on hazard lights (four-way flashers) and attempt to evacuate passengers to a safe place if possible."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 16,
    category: "minibus",
    question: {
      ar: "ما هي المسافة الدنيا التي يجب تركها بين باص من فئة 1D والمركبة التي أمامه؟",
      fr: "Quelle est la distance minimale à laisser entre un bus de catégorie D1 et le véhicule qui le précède ?",
      en: "What is the minimum distance that must be left between a Category D1 bus and the vehicle in front of it?"
    },
    options: {
      ar: [
        "مسافة الأمان (قاعدة الثانيتين أو أكثر حسب السرعة).",
        "ضعفي طول الباص.",
        "ثلاثة أضعاف طول الباص."
      ],
      fr: [
        "La distance de sécurité (règle des deux secondes ou plus selon la vitesse).",
        "Deux fois la longueur du bus.",
        "Trois fois la longueur du bus."
      ],
      en: [
        "The safety distance (the two-second rule or more depending on speed).",
        "Twice the length of the bus.",
        "Three times the length of the bus."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 17,
    category: "minibus",
    question: {
      ar: "هل يجب على ركاب الباص (1D) وضع حزام الأمان؟",
      fr: "Le passager du bus (D1) doit-il mettre la ceinture de sécurité ?",
      en: "Must passengers of a (D1) bus wear a seatbelt?"
    },
    options: {
      ar: [
        "نعم، جميع الركاب ملزمون بوضع الحزام إذا كان الباص مجهزاً بها.",
        "لا داعي لاستخدام أحزمة الأمان، لأن الباص ثقيل وآمن.",
        "فقط عند السير بسرعة تفوق 100 كم/س."
      ],
      fr: [
        "Oui, tous les passagers sont obligés de mettre la ceinture si le bus en est équipé.",
        "Pas besoin d'utiliser les ceintures de sécurité, car le bus est lourd et sûr.",
        "Seulement en roulant à une vitesse supérieure à 100 km/h."
      ],
      en: [
        "Yes, all passengers are required to wear the belt if the bus is equipped with them.",
        "No need to use safety belts because the bus is heavy and safe.",
        "Only when driving at a speed exceeding 100 km/h."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 18,
    category: "minibus",
    question: {
      ar: "ما هو اللون المخصص للوحة تسجيل الباصات العمومية في لبنان؟",
      fr: "Quelle est la couleur réservée à la plaque d'immatriculation des bus publics au Liban ?",
      en: "What is the designated color for the registration plate of public buses in Lebanon?"
    },
    options: {
      ar: [
        "الأرقام بالأحمر مع طرف اللوحة أحمر.",
        "الأرقام بالكحلي مع طرف اللوحة أحمر.",
        "الأرقام بالأحمر مع طرف اللوحة أبيض."
      ],
      fr: [
        "Les chiffres en rouge avec le bord de la plaque en rouge.",
        "Les chiffres en bleu marine avec le bord de la plaque en rouge.",
        "Les chiffres en rouge avec le bord de la plaque en blanc."
      ],
      en: [
        "Red numbers with a red edge.",
        "Navy blue numbers with a red edge.",
        "Red numbers with a white edge."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 19,
    category: "minibus",
    question: {
      ar: "من أي جهة يجب على الركاب الصعود إلى الباص؟",
      fr: "De quel côté les passagers doivent-ils monter dans le bus ?",
      en: "From which side must passengers board the bus?"
    },
    options: {
      ar: [
        "من أي جهة يختاروها شرط ألا يعيق السير.",
        "من الجهة اليمنى المحاذية للرصيف إذا وجد.",
        "من الجهة اليمنى."
      ],
      fr: [
        "Du côté qu'ils choisissent à condition de ne pas gêner la circulation.",
        "Du côté droit adjacent au trottoir s'il existe.",
        "Du côté droit."
      ],
      en: [
        "From any side they choose provided it does not obstruct traffic.",
        "From the right side adjacent to the sidewalk if available.",
        "From the right side."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 20,
    category: "minibus",
    question: {
      ar: "ماذا يجب أن يفعل سائق الباص عند اقترابه من سكة حديد غير محروسة؟",
      fr: "Que doit faire un conducteur de bus lorsqu'il s'approche d'un passage à niveau non gardé ?",
      en: "What must a bus driver do when approaching an unguarded railway crossing?"
    },
    options: {
      ar: [
        "عدم الاهتمام لأن القطارات نادرة في لبنان.",
        "التوقف التام والتأكد من خلو السكة من القطارات.",
        "إطلاق الزمور وزيادة السرعة للعبور بسرعة."
      ],
      fr: [
        "Ne pas s'en soucier car les trains sont rares au Liban.",
        "L'arrêt complet et s'assurer que la voie est libre de trains.",
        "Klaxonner et augmenter la vitesse pour traverser rapidement."
      ],
      en: [
        "Ignore it because trains are rare in Lebanon.",
        "Stop completely and ensure the track is clear of trains.",
        "Honk the horn and increase speed to cross quickly."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 21,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء الأول الذي يجب القيام به فور حدوث حريق في محرك الباص؟",
      fr: "Quelle est la première procédure à suivre immédiatement en cas d'incendie dans le moteur du bus ?",
      en: "What is the first procedure that must be done immediately upon a fire occurring in the bus engine?"
    },
    options: {
      ar: [
        "الاتصال بقوى الأمن والطوارئ.",
        "إخلاء الركاب، ثم محاولة إطفاء الحريق باستخدام المطفأة دون فتح الغطاء بالكامل.",
        "فتح غطاء المحرك وسكب الماء عليه فوراً وبسرعة."
      ],
      fr: [
        "Appeler les forces de sécurité et les urgences.",
        "Évacuer les passagers, puis tenter d'éteindre l'incendie à l'aide de l'extincteur sans ouvrir complètement le capot.",
        "Ouvrir le capot du moteur et verser de l'eau immédiatement et rapidement."
      ],
      en: [
        "Call security forces and emergency services.",
        "Evacuate passengers, then attempt to extinguish the fire using the extinguisher without fully opening the hood.",
        "Open the engine hood and pour water on it immediately and quickly."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 22,
    category: "minibus",
    question: {
      ar: "ما هي الحمولة القصوى المسموح بها فوق سطح باص فئة 1D؟",
      fr: "Quelle est la charge maximale autorisée sur le toit d'un bus de catégorie D1 ?",
      en: "What is the maximum load permitted on the roof of a Category D1 bus?"
    },
    options: {
      ar: [
        "لا يسمح بوضع أي حمولة.",
        "الحمولة التي لا تزيد عن ارتفاع متر فوق الباص مهما كان وزنها.",
        "الحمولة التي لا تتجاوز الوزن الإجمالي المسموح به للباص مع الركاب ولا تؤثر على توازن المركبة."
      ],
      fr: [
        "Il est interdit de placer une quelconque charge.",
        "Une charge dont la hauteur ne dépasse pas un mètre, quel que soit son poids.",
        "Une charge ne dépassant pas le poids total autorisé pour le bus avec les passagers et n'affectant pas l'équilibre du véhicule."
      ],
      en: [
        "Placing any load is not permitted.",
        "Loads that do not exceed a height of one meter above the bus regardless of weight.",
        "Loads that do not exceed the total allowed weight for the bus with passengers and do not affect vehicle balance."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 23,
    category: "minibus",
    question: {
      ar: "عند القيادة في الضباب الكثيف، أي أضواء يجب استخدامها؟",
      fr: "Lors de la conduite dans un brouillard épais, quels feux doivent être utilisés ?",
      en: "When driving in thick fog, which lights must be used?"
    },
    options: {
      ar: [
        "إطفاء كافة الأضواء.",
        "الأضواء العالية (القوية).",
        "أضواء الضباب والأضواء المنخفضة."
      ],
      fr: [
        "Éteindre tous les feux.",
        "Les feux de route (les phares puissants).",
        "Les feux antibrouillard et les feux de croisement (codes)."
      ],
      en: [
        "Turn off all lights.",
        "High beams (strong lights).",
        "Fog lights and low beams."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 24,
    category: "minibus",
    question: {
      ar: "ماذا تفعل إذا شعرت بالنعاس أثناء قيادة الباص؟",
      fr: "Que faites-vous si vous ressentez de la somnolence en conduisant le bus ?",
      en: "What do you do if you feel drowsy while driving the bus?"
    },
    options: {
      ar: [
        "زيادة السرعة لزيادة الانتباه وتخفيض قوة النعاس.",
        "التوقف في مكان آمن وأخذ قسط من الراحة.",
        "فتح النافذة وتشغيل الراديو بصوت عالٍ مع شرب القهوة."
      ],
      fr: [
        "Augmenter la vitesse pour accroître l'attention et réduire la force de la somnolence.",
        "S'arrêter dans un endroit sûr et prendre un moment de repos.",
        "Ouvrir la fenêtre et allumer la radio à volume élevé tout en buvant du café."
      ],
      en: [
        "Increase speed to increase attention and reduce drowsiness.",
        "Stop in a safe place and take a rest.",
        "Open the window and play the radio loudly while drinking coffee."
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 25,
    category: "minibus",
    question: {
      ar: "ما هي عقوبة قيادة باص من فئة 1D برخصة سوق من غير فئة 1D؟",
      fr: "Quelle est la sanction pour la conduite d'un bus de catégorie D1 avec un permis de conduire autre que la catégorie D1 ?",
      en: "What is the penalty for driving a Category D1 bus with a driving license of a category other than D1?"
    },
    options: {
      ar: [
        "لا يتم تنظيم محضر فوراً ويكتفى بتنبيه شفهي وإعطاء مهلة شهر للتقدم لامتحان فئة باص، وفي حال عدم حيازة رخصة بعد شهر يتم تنظيم محضر.",
        "تنظيم محضر طابع من الفئة الثالثة، أي غرامة مالية واحتجاز للمركبة إضافة إلى إعطاء مهلة شهر للتقدم لامتحان فئة باص.",
        "تنظيم محضر من الفئة الخامسة، أي غرامة مالية وحجز المركبة وسحب نقاط من الرخصة."
      ],
      fr: [
        "Aucun procès-verbal n'est dressé immédiatement ; un avertissement verbal suffit avec un délai d'un mois pour passer l'examen de la catégorie D1, et en cas de non-obtention du permis après un mois, un procès-verbal est dressé.",
        "Dresser un procès-verbal de troisième catégorie, une amende financière et la saisie du véhicule, en plus d'un délai d'un mois pour passer l'examen de la catégorie D1.",
        "Dresser un procès-verbal de cinquième catégorie, une amende financière, la saisie du véhicule et le retrait de points du permis."
      ],
      en: [
        "No report is issued immediately; a verbal warning is sufficient, and a one-month grace period is given to apply for the bus category exam. If a license is not obtained after a month, a report is issued.",
        "Issuing a Category 3 violation report, meaning a financial fine and impounding the vehicle, in addition to giving a one-month deadline to apply for the bus category exam.",
        "Issuing a Category 5 violation report, meaning a financial fine, impounding the vehicle, and deducting points from the license."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 26,
    category: "minibus",
    question: {
      ar: "ما عدد مثلث التنبيه التي يتوجب وضعها في حال تعطل الباص على طريق سريع؟",
      fr: "Quel est le nombre de triangles de signalisation à placer en cas de panne du bus sur une voie rapide ?",
      en: "How many warning triangles must be placed if the bus breaks down on a highway?"
    },
    options: {
      ar: [
        "واحد على مسافة لا تقل عن 50 إلى 100 متر خلف الباص.",
        "اثنان، الأول على مسافة 25 متر والثاني على مسافة 50 متر خلف الباص.",
        "ثلاثة، الأول على مسافة 25 متر والثاني على مسافة 50 متر خلف الباص والثالث فوق سطح الباص."
      ],
      fr: [
        "Un seul à une distance d'au moins 50 à 100 mètres derrière le bus.",
        "Deux : le premier à une distance de 25 mètres et le second à une distance de 50 mètres derrière le bus.",
        "Trois : le premier à une distance de 25 mètres, le second à une distance de 50 mètres derrière le bus et le troisième sur le toit du bus."
      ],
      en: [
        "One at a distance of no less than 50 to 100 meters behind the bus.",
        "Two, the first at a distance of 25 meters and the second at a distance of 50 meters behind the bus.",
        "Three, the first at 25 meters, the second at 50 meters behind the bus, and the third on top of the bus roof."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 27,
    category: "minibus",
    question: {
      ar: "لمن يجب إفساح الطريق على تقاطعات الطرق غير المنظمة بإشارات؟",
      fr: "À qui doit-on céder le passage aux intersections non régies par des feux de signalisation ?",
      en: "To whom must the right of way be yielded at road intersections not regulated by signals?"
    },
    options: {
      ar: [
        "لأي مركبة قادمة من اليمين.",
        "للباصات التي تسير بسرعة أكبر.",
        "للباصات التي تشغل أنوار التنبيه."
      ],
      fr: [
        "À tout véhicule venant de la droite.",
        "Aux bus qui roulent à une vitesse plus élevée.",
        "Aux bus qui utilisent les feux de détresse."
      ],
      en: [
        "To any vehicle coming from the right.",
        "To buses traveling at a higher speed.",
        "To buses operating their lights."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 28,
    category: "minibus",
    question: {
      ar: "هل يسمح لسائق الباص باستخدام الهاتف المحمول بواسطة سماعة الأذن (Free-Hands)؟",
      fr: "Est-il permis au conducteur de bus d'utiliser un téléphone portable avec une oreillette (mains libres) ?",
      en: "Is a bus driver permitted to use a mobile phone using an earpiece (Hands-free)?"
    },
    options: {
      ar: [
        "نعم، مسموح فقط لإرسال الرسائل الصوتية.",
        "يمنع استخدامه إلا في حالات الضرورة القصوى مع الحفاظ على التركيز التام.",
        "لا، يمنع منعاً باتاً تحت أي ظرف."
      ],
      fr: [
        "Oui, autorisé uniquement pour envoyer des messages vocaux.",
        "Son utilisation est interdite sauf en cas d'extrême nécessité tout en maintenant une concentration totale.",
        "Non, strictement interdit en toutes circonstances."
      ],
      en: [
        "Yes, allowed only for sending voice messages.",
        "Its use is prohibited except in cases of extreme necessity while maintaining full concentration.",
        "No, it is strictly prohibited under any circumstance."
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 29,
    category: "minibus",
    question: {
      ar: "ما هي أقصى فترة قيادة متواصلة مسموح بها لسائق الباص قبل أخذ استراحة؟",
      fr: "Quelle est la durée maximale de conduite continue autorisée pour un conducteur de bus avant de prendre une pause ?",
      en: "What is the maximum continuous driving period allowed for a bus driver before taking a break?"
    },
    options: {
      ar: ["ساعتان.", "3 ساعات.", "4 ساعات."],
      fr: ["2 heures.", "3 heures.", "4 heures."],
      en: ["Two hours.", "3 hours.", "4 hours."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 30,
    category: "minibus",
    question: {
      ar: "ما هو ترتيب الإجراءات الصحيحة عند الرغبة في الانعطاف يميناً بباص من فئة 1D؟",
      fr: "Quel est l'ordre correct des procédures pour tourner à droite avec un bus de catégorie D1 ?",
      en: "What is the correct order of procedures when desiring to turn right with a Category D1 bus?"
    },
    options: {
      ar: [
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بهدوء.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بعد استخدام المسرب الأيسر لتوسيع المسار والسماح بانعطاف هادئ للركاب.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، ثم الانعطاف من ضمن المسرب الأيمن دون توسيع المسار."
      ],
      fr: [
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner calmement.",
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner après avoir utilisé la voie de gauche pour élargir la trajectoire et permettre un virage calme pour les passagers.",
        "Mettre le clignotant à droite, vérifier suffisamment les rétroviseurs, puis tourner depuis la voie de droite sans élargir la trajectoire."
      ],
      en: [
        "Signal right a sufficient distance ahead, check mirrors, then turn calmly.",
        "Signal right a sufficient distance ahead, check mirrors, then turn after using the left lane to widen the path and allow a calm turn for passengers.",
        "Signal right a sufficient distance ahead, then turn from within the right lane without widening the path."
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 31,
    category: "minibus",
    question: {
      ar: "ما هو الإجراء الصحيح عند الرغبة في الانعطاف يساراً بباص من فئة 1D؟",
      fr: "Quelle est la procédure correcte pour tourner à gauche avec un bus de catégorie D1 ?",
      en: "What is the correct procedure when desiring to turn left with a Category D1 bus?"
    },
    options: {
      ar: [
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بهدوء.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، مراقبة المرايا، ثم الانعطاف بعد استخدام المسرب الأيمن لتوسيع المسار والسماح بانعطاف هادئ للركاب.",
        "إعطاء إشارة اتجاه قبل مسافة كافية، ثم الانعطاف من ضمن المسرب الأيسر دون توسيع المسار."
      ],
      fr: [
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner calmement.",
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner après avoir utilisé la voie de droite pour élargir la trajectoire et permettre un virage calme pour les passagers.",
        "Mettre le clignotant à gauche, vérifier suffisamment les rétroviseurs, puis tourner depuis la voie de gauche sans élargir la trajectoire."
      ],
      en: [
        "Signal left a sufficient distance ahead, check mirrors, then turn calmly.",
        "Signal left a sufficient distance ahead, check mirrors, then turn after using the right lane to widen the path and allow a calm turn for passengers.",
        "Signal left a sufficient distance ahead, then turn from within the left lane without widening the path."
      ]
    },
    correct: 0
  },





// 👉 mini truckkkk   mini truckkk





   {
    type: "normal",
    id: 1,
    category: "small_truck",
    question: {
      ar: "إن شاحنة محملة لا يمكنها نقل أكثر من:",
      fr: "Un camion chargé ne peut pas transporter plus de :",
      en: "A loaded truck cannot transport more than:"
    },
    options: {
      ar: ["شخصين.", "شخص واحد.", "وفق العدد المحدّد في الرخصة."],
      fr: ["Deux personnes.", "Une personne.", "Selon le nombre spécifié dans le permis."],
      en: ["Two people.", "One person.", "According to the number specified in the license."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 2,
    category: "small_truck",
    question: {
      ar: "على كل سائق شاحنة أن ينتبه إلى عرض مركبته خاصةً:",
      fr: "Tout conducteur de camion doit faire attention à la largeur de son véhicule surtout :",
      en: "Every truck driver must pay attention to the width of his vehicle specifically:"
    },
    options: {
      ar: ["عند تجاوزه لمركبة أخرى.", "عند قيادته في الطرق المفتوحة.", "عند أخذه قسطاً من الراحة."],
      fr: ["Lorsqu'il dépasse un autre véhicule.", "Lorsqu'il roule sur des routes ouvertes.", "Lorsqu'il prend une pause."],
      en: ["When overtaking another vehicle.", "When driving on open roads.", "When taking a rest break."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 3,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur d'un petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يرجع إلى الخلف في الأماكن المكتظة.", "يرجع إلى الخلف داخل النفق.", "يتفادى الرجوع إلى الخلف في الأماكن المكتظة."],
      fr: ["Faire marche arrière dans les endroits encombrés.", "Faire marche arrière dans un tunnel.", "Éviter la marche arrière dans les endroits encombrés."],
      en: ["Reverse in crowded places.", "Reverse inside a tunnel.", "Avoid reversing in crowded places."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 4,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur du petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يلم ببعض خصائص مركبته.", "يلم بكل خصائص مركبته.", "يلم بخصائص مركبة السائق الآخر."],
      fr: ["Connaître certaines caractéristiques de son véhicule.", "Connaître toutes les caractéristiques de son véhicule.", "Connaître les caractéristiques du véhicule d'un autre conducteur."],
      en: ["Be familiar with some of his vehicle's characteristics.", "Be familiar with all of his vehicle's characteristics.", "Be familiar with the characteristics of the previous driver's vehicle."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 5,
    category: "small_truck",
    question: {
      ar: "يكمن الخطر أثناء القيادة عند الاقتراب من قمة مرتفع في:",
      fr: "Le danger en conduisant à l'approche du sommet d'une côte réside dans :",
      en: "The danger while driving when approaching a crest (top of a hill) lies in:"
    },
    options: {
      ar: ["عدم رؤية ما يجري خلف المرتفع.", "إزدياد اندفاع المركبة تلقائياً.", "انخفاض درجة حرارة المحرك."],
      fr: ["Le fait de ne pas voir ce qui se passe derrière la crête.", "L'augmentation automatique de l'élan du véhicule.", "La diminution de la température du moteur."],
      en: ["Not seeing what is happening behind the crest.", "The vehicle's momentum increasing automatically.", "The engine temperature decreasing."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 6,
    category: "small_truck",
    question: {
      ar: "عند اقترابك من قمة مرتفع على سرعة عالية، عليك أن:",
      fr: "Lorsque vous approchez du sommet d'une côte à grande vitesse, vous devez :",
      en: "When you approach a crest at high speed, you must:"
    },
    options: {
      ar: ["تزيد سرعتك.", "تحافظ على سرعتك.", "تخفف سرعتك."],
      fr: ["Augmenter votre vitesse.", "Maintenir votre vitesse.", "Réduire votre vitesse."],
      en: ["Increase your speed.", "Maintain your speed.", "Reduce your speed."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 7,
    category: "small_truck",
    question: {
      ar: "عند اقترابك من قمة مرتفع، عليك أن تتوقع خلف القمة:",
      fr: "Lorsque vous approchez du sommet d'une côte, vous devez vous attendre derrière la crête à :",
      en: "When you approach a crest, you must expect behind the crest:"
    },
    options: {
      ar: ["وجود عقبات.", "عدم وجود عقبات.", "انفراجاً في حركة المرور."],
      fr: ["La présence d'obstacles.", "L'absence d'obstacles.", "Une amélioration de la circulation."],
      en: ["The presence of obstacles.", "The absence of obstacles.", "A relief in traffic flow."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 8,
    category: "small_truck",
    question: {
      ar: "إذا استعملت الزمور بشكل متواصل عند اقترابك من قمة مرتفع، فإن ذلك:",
      fr: "Si vous utilisez le klaxon de façon continue en approchant du sommet d'une côte, cela :",
      en: "If you use the horn continuously when approaching a crest, then that:"
    },
    options: {
      ar: ["سيمكنك من سماع زمور الآخرين.", "سيمنعك من سماع زمور القادمين من خلف القمة.", "لن يساعدك بشيء."],
      fr: ["Vous permettra d'entendre les klaxons des autres.", "Vous empêchera d'entendre les klaxons de ceux qui viennent de derrière la crête.", "Ne vous aidera en rien."],
      en: ["Will enable you to hear the horns of others.", "Will prevent you from hearing the horns of those coming from behind the crest.", "Will not help you with anything."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 9,
    category: "small_truck",
    question: {
      ar: "عندما تقترب بشاحنتك من منحدر على سرعة عالية، يجب عليك أن تخفف سرعتك و:",
      fr: "Lorsque vous approchez avec votre camion d'une descente à grande vitesse, vous devez réduire votre vitesse et :",
      en: "When you approach a descent (downhill slope) with your truck at high speed, you must reduce your speed and:"
    },
    options: {
      ar: ["تختار ترس سرعة أعلى.", "تبقى على نفس ترس السرعة.", "تختار ترس سرعة أقل."],
      fr: ["Choisir un rapport de vitesse plus élevé.", "Rester sur le même rapport.", "Choisir un rapport de vitesse inférieur."],
      en: ["Choose a higher gear speed.", "Stay on the same gear speed.", "Choose a lower gear speed."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 10,
    category: "small_truck",
    question: {
      ar: "عندما تقود شاحنتك على منحدر، للسيطرة على مركبتك يجب عليك أن تعتمد على:",
      fr: "Lorsque vous conduisez votre camion dans une descente, pour contrôler votre véhicule vous devez compter sur :",
      en: "When you drive your truck on a descent, to control your vehicle you must rely on:"
    },
    options: {
      ar: ["كابح الخدمة وكابح الوقوف.", "الترس العالي بالدرجة الأولى.", "الترس المنخفض بالدرجة الأولى."],
      fr: ["Le frein de service et le frein de stationnement.", "Le rapport élevé au premier degré.", "Le rapport bas au premier degré."],
      en: ["The service brake and the parking brake.", "The high gear in the first degree.", "The low gear in the first degree."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 11,
    category: "small_truck",
    question: {
      ar: "إن استعمالك للمكابح الرئيسية في الشاحنة بشكل متواصل على منحدر طويل، يبطل مفعول:",
      fr: "L'utilisation continue des freins principaux du camion sur une longue descente annule l'effet :",
      en: "Your continuous use of the main brakes on a long descent invalidates their effect:"
    },
    options: {
      ar: ["الكابح بسبب ارتفاع حرارة الخمادات.", "البطارية بسبب الاستهلاك الزائد للكهرباء.", "الرادياتور بسبب الحرارة الزائدة في المحرك."],
      fr: ["Des freins à cause de l'élévation de leur température.", "De la batterie à cause de la consommation excessive.", "Du radiateur à cause de la chaleur excessive du moteur."],
      en: ["Because of the rise in their temperature.", "Because of the battery due to excessive consumption.", "Because of the radiator due to excessive heat."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 12,
    category: "small_truck",
    question: {
      ar: "عندما تقود شاحنتك على منحدر طويل، يجب عليك أن تستعمل ترس سرعة:",
      fr: "Lorsque vous conduisez votre camion sur une longue descente, vous devez utiliser un rapport de vitesse :",
      en: "When you drive your truck on a long descent, you must use a gear speed:"
    },
    options: {
      ar: ["عالي والكوابح الإضافية.", "منخفض والكوابح الإضافية.", "منخفض وفرامل اليد."],
      fr: ["Élevé avec les freins auxiliaires.", "Bas avec les freins auxiliaires.", "Bas avec le frein à main."],
      en: ["High and the additional brakes.", "Low and the additional brakes.", "Low and the handbrake."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 13,
    category: "small_truck",
    question: {
      ar: "إذا دخلت منحدراً طويلاً بالشاحنة وتأخرت بالانتقال إلى ترس سرعة منخفض وأصبحت سرعتك عالية، فسوف:",
      fr: "Si vous entrez dans une longue descente avec le camion et que vous retardez le passage à un rapport inférieur jusqu'à ce que votre vitesse devienne élevée, alors :",
      en: "If you entered a descent for a long time with the truck and delayed shifting to a low gear speed and your speed became high, then:"
    },
    options: {
      ar: ["يصبح من السهل عليك الانتقال إلى ترس سرعة منخفض.", "تنخفض سرعتك تلقائياً.", "يصبح من المستحيل الانتقال إلى ترس سرعة منخفض للسيطرة على المركبة."],
      fr: ["Il devient facile de passer à un rapport inférieur.", "Votre vitesse diminue automatiquement.", "Il devient impossible de passer à un rapport inférieur pour contrôler le véhicule."],
      en: ["It becomes easy for you to shift to a low gear speed.", "Your speed decreases automatically.", "It becomes impossible to shift to a low gear speed to control the vehicle."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 14,
    category: "small_truck",
    question: {
      ar: "عند قيادتك الشاحنة صعوداً، يجب عليك أن تختار ترس سرعة:",
      fr: "Lorsque vous conduisez le camion en montée, vous devez choisir un rapport de vitesse :",
      en: "When driving the truck uphill, you must choose a gear speed:"
    },
    options: {
      ar: ["منخفض يتناسب مع شدة المرتفع ووزن حمولة مركبتك.", "عالي يتناسب مع شدة المرتفع ولكن لا يتناسب مع وزن الحمولة.", "منخفض لا يتناسب مع شدة المرتفع ووزن الحمولة."],
      fr: ["Bas, adapté à la pente et au poids de la charge.", "Élevé, adapté à la pente mais non au poids de la charge.", "Bas, non adapté à la pente ni au poids de la charge."],
      en: ["Low that corresponds with the steepness of the incline and the weight of your vehicle's load.", "High that corresponds with the steepness of the incline but does not correspond with the load weight.", "Low that does not correspond with the steepness of the incline and the load weight."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 15,
    category: "small_truck",
    question: {
      ar: "عند قيادتك للشاحنة صعوداً متواصلاً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée continue, vous devez :",
      en: "When driving the truck uphill continuously, you must:"
    },
    options: {
      ar: ["تجنب إجهاد المحرك.", "حافظ على سرعة الشاحنة قدر المستطاع.", "عدم السماح للمركبات الصغيرة بتجاوزك."],
      fr: ["Éviter de fatiguer le moteur.", "Maintenir autant que possible la vitesse du camion.", "Ne pas permettre aux petits véhicules de vous dépasser."],
      en: ["Avoid straining the engine.", "Maintain the truck's speed as much as possible.", "Not allow small vehicles to overtake you."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 16,
    category: "small_truck",
    question: {
      ar: "عند قيادتك للشاحنة صعوداً متواصلاً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée continue, vous devez :",
      en: "When driving the truck uphill continuously, you must:"
    },
    options: {
      ar: ["النظر إلى مؤشر الحرارة معظم الوقت.", "التزام أقصى اليسار قدر المستطاع.", "التزام أقصى اليمين قدر المستطاع."],
      fr: ["Regarder l'indicateur de température la plupart du temps.", "Rester à l'extrême gauche autant que possible.", "Rester à l'extrême droite autant que possible."],
      en: ["Look at the temperature gauge most of the time.", "Keep to the far left as much as possible.", "Keep to the far right as much as possible."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 17,
    category: "small_truck",
    question: {
      ar: "عند قيادتك الشاحنة صعوداً، يجب عليك:",
      fr: "Lorsque vous conduisez le camion en montée, vous devez :",
      en: "When driving the truck uphill, you must:"
    },
    options: {
      ar: ["تسهيل مهمة الآخرين حين يتجاوزونك.", "عدم تسهيل مهمة الآخرين حين يتجاوزونك.", "التزمير للآخرين حين يتجاوزونك."],
      fr: ["Faciliter la tâche des autres lorsqu'ils vous dépassent.", "Ne pas faciliter la tâche des autres lorsqu'ils vous dépassent.", "Klaxonner les autres lorsqu'ils vous dépassent."],
      en: ["Facilitate the task of others when they overtake you.", "Not facilitate the task of others when they overtake you.", "Honk at others when they overtake you."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 18,
    category: "small_truck",
    question: {
      ar: "إذا كنت تريد أن تتجاوز بشاحنتك مركبة أخرى صعوداً، وكان ذلك سيستغرقك وقتاً طويلاً، فعليك أن:",
      fr: "Si vous voulez dépasser un autre véhicule avec votre camion en montée et que cela doit prendre longtemps, vous devez :",
      en: "If you want to overtake another vehicle with your truck while going uphill, and that will take you a long time, you must:"
    },
    options: {
      ar: ["تصر على القيام بهذا التجاوز.", "تزيد من سرعتك.", "تصرف النظر عن هذا التجاوز."],
      fr: ["Insister pour effectuer ce dépassement.", "Augmenter votre vitesse.", "Abandonner cette manœuvre de dépassement."],
      en: ["Insist on performing this overtaking maneuver.", "Increase your speed.", "Abandon this overtaking maneuver."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 19,
    category: "small_truck",
    question: {
      ar: "إن قيادة الشاحنة على طريق وعرة، تحتّم عليك أن:",
      fr: "Conduire le camion sur une route difficile vous oblige à :",
      en: "Driving the truck on a rough and rugged road necessitates that you:"
    },
    options: {
      ar: ["تزيد من سرعتك قليلاً.", "تكون حذراً وأن تخطط للطريق مسبقاً.", "لا تعطي الأمر أية أهمية."],
      fr: ["Augmenter légèrement votre vitesse.", "Être prudent et planifier la route à l'avance.", "Ne donner aucune importance à cela."],
      en: ["Increase your speed slightly.", "Be cautious and plan the route in advance.", "Give the matter no importance."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 20,
    category: "small_truck",
    question: {
      ar: "أثناء قيادة الشاحنة على مختلف الطرقات، يجب عليك أن:",
      fr: "En conduisant le camion sur différentes routes, vous devez :",
      en: "While driving the truck on various roads, you must:"
    },
    options: {
      ar: ["تتجنب الطرق الوعرة قدر المستطاع.", "تختار الطرق الوعرة لأنها أقل زحمة.", "تختار الطرق الوعرة لأنها ذات صفة طبيعية."],
      fr: ["Éviter autant que possible les routes difficiles.", "Choisir les routes difficiles parce qu'elles sont moins encombrées.", "Choisir les routes difficiles parce qu'elles sont naturelles."],
      en: ["Avoid rough roads as much as possible.", "Choose rough roads because they are less crowded.", "Choose rough roads because they are of a natural character."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 21,
    category: "small_truck",
    question: {
      ar: "إذا توجب على سائق المركبة أن يرجع بمركبته إلى الخلف، يجب عليه أن:",
      fr: "Si le conducteur d'un véhicule est obligé de faire marche arrière, il doit :",
      en: "If the vehicle driver is obliged to reverse with his vehicle, he must:"
    },
    options: {
      ar: ["يرجع على سرعة رجوع معتدلة.", "يجعل مسافة الرجوع أطول مسافة ممكنة.", "يجعل مسافة الرجوع أقصر مسافة ممكنة."],
      fr: ["Reculer à une vitesse modérée.", "Rendre la distance de recul aussi longue que possible.", "Rendre la distance de recul aussi courte que possible."],
      en: ["Reverse at a medium speed.", "Make the reversing distance as long as possible.", "Make the reversing distance as short as possible."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 22,
    category: "small_truck",
    question: {
      ar: "كسائق شاحنة، يلزمك القانون بإعطاء الأفضلية:",
      fr: "En tant que conducteur de camion, la loi vous oblige à céder la priorité :",
      en: "As a driver, the law requires you to give priority to:"
    },
    options: {
      ar: ["للمركبات المسرعة.", "للحافلات المدرسية المستخدِمة لأنوار التحذير.", "للمركبات المبطئة."],
      fr: ["Aux véhicules en excès de vitesse.", "Aux autobus scolaires utilisant les feux d'avertissement.", "Aux véhicules lents."],
      en: ["Speeding vehicles.", "School buses using warning lights.", "Slow-moving vehicles."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 23,
    category: "small_truck",
    question: {
      ar: "إن المرايا المحدبة في المركبات تظهر الأجسام:",
      fr: "Les rétroviseurs convexes dans les véhicules montrent les objets :",
      en: "Convex mirrors in vehicles show objects:"
    },
    options: {
      ar: ["على مسافات أبعد مما هي عليه.", "على مسافات أقرب مما هي عليه.", "بشكل غير واضح."],
      fr: ["À des distances plus éloignées qu'elles ne le sont réellement.", "À des distances plus proches qu'elles ne le sont réellement.", "De manière peu claire."],
      en: ["At distances farther than they actually are.", "At distances closer than they actually are.", "In an unclear manner."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 24,
    category: "small_truck",
    question: {
      ar: "عندما ينظر سائق المركبة في المرآة المحدبة، فإنه يرى فيها الأجسام:",
      fr: "Lorsque le conducteur regarde dans un miroir convexe, il voit les objets :",
      en: "When a vehicle driver looks into a convex mirror, he sees objects in it:"
    },
    options: {
      ar: ["على حجمها العادي.", "بشكل مصغّر.", "بشكل باهت."],
      fr: ["À leur taille normale.", "Sous une forme réduite.", "Sous une forme pâle."],
      en: ["At their normal size.", "In a miniaturized form (smaller size).", "In a faded form."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 25,
    category: "small_truck",
    question: {
      ar: "على سائق المركبة إذا كان يتعاطى الأدوية الطبية، أن يعرف مدى تأثير هذه الأدوية على القيادة وذلك:",
      fr: "Si le conducteur prend des médicaments, il doit connaître leur effet sur la conduite, et cela :",
      en: "If a vehicle driver is taking medical drugs, he must know the extent of the effect of these drugs on driving, and that is:"
    },
    options: {
      ar: ["قبل القيادة.", "أثناء القيادة.", "بعد حصول الحادث."],
      fr: ["Avant de conduire.", "Pendant la conduite.", "Après l'accident."],
      en: ["Before driving.", "While driving.", "After an accident occurs."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 26,
    category: "small_truck",
    question: {
      ar: "إن بعض الأدوية الطبية لها تأثير منوّم، لذلك يجب على السائق أن:",
      fr: "Certains médicaments ont un effet soporifique, donc le conducteur doit :",
      en: "Some medical drugs have a hypnotic (drowsy) effect, therefore the driver must:"
    },
    options: {
      ar: ["يتناولها عند مشارفة القيادة على الانتهاء.", "يتناولها بعد الانتهاء من القيادة.", "يتناولها مع عقاقير اليقظة أثناء القيادة."],
      fr: ["Les prendre lorsque la conduite est sur le point de se terminer.", "Les prendre après avoir fini de conduire.", "Les prendre avec des stimulants pendant la conduite."],
      en: ["Take them when driving is about to end.", "Take them after finishing driving.", "Take them with alertness drugs while driving."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 27,
    category: "small_truck",
    question: {
      ar: "إن أفضل وسيلة ليعرف السائق مدى تأثير الدواء الطبي على قيادته هي أن:",
      fr: "Le meilleur moyen pour le conducteur de connaître l'effet d'un médicament sur sa conduite est de :",
      en: "The best way for a driver to know the extent of a medical drug's effect on his driving is to:"
    },
    options: {
      ar: ["يسأل أحد السائقين.", "يسأل الطبيب المعالج.", "يتناول الدواء ويجربه في القيادة."],
      fr: ["Demander à un autre conducteur.", "Demander au médecin traitant.", "Prendre le médicament et l'essayer en conduisant."],
      en: ["Ask one of the drivers.", "Ask the treating physician.", "Take the medicine and experiment with it while driving."]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 28,
    category: "small_truck",
    question: {
      ar: "من الوسائل المساعدة التي تمكّن السائق من معرفة مدى تأثير الدواء الطبي على قيادته هي:",
      fr: "Parmi les moyens utiles qui permettent au conducteur de connaître l'effet d'un médicament sur sa conduite, il y a :",
      en: "Among the helpful means that enable the driver to know the extent of a medical drug's effect on his driving are:"
    },
    options: {
      ar: ["تناول الدواء دون الرجوع إلى ورقة التعليمات المرفقة.", "تناول الدواء قبل القيادة وقراءة ورقة التعليمات بعد القيادة.", "قراءة ورقة التعليمات المرفقة مع الدواء قبل تناول الدواء وقبل القيادة."],
      fr: ["Prendre le médicament sans consulter la notice jointe.", "Prendre le médicament avant de conduire puis lire la notice après la conduite.", "Lire la notice jointe au médicament avant de le prendre et avant de conduire."],
      en: ["Taking the medicine without referring to the attached instruction leaflet.", "Taking the medicine before driving and reading the instructions after driving.", "Reading the attached instruction leaflet with the medicine before taking the medicine and before driving."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 29,
    category: "small_truck",
    question: {
      ar: "يستطيع سائق المركبة أن يعرف مدى التأثير الذي يسببه الدواء على قيادته عن طريق:",
      fr: "Le conducteur peut connaître l'effet causé par le médicament sur sa conduite en :",
      en: "A vehicle driver can know the extent of the effect caused by the medicine on his driving by:"
    },
    options: {
      ar: ["سؤاله للصيدلي قبل البدء بالقيادة وقبل تناول الدواء.", "سؤاله للصيدلي على الهاتف أثناء القيادة وبعد تناول الدواء.", "تجربة ذلك بنفسه فيتناول الدواء أثناء القيادة."],
      fr: ["Demandant au pharmacien avant de commencer à conduire et avant de prendre le médicament.", "Demandant au pharmacien au téléphone pendant la conduite et après avoir pris le médicament.", "L'essayant lui-même en prenant le médicament pendant la conduite."],
      en: ["Asking the pharmacist before starting to drive and before taking the medicine.", "Asking the pharmacist on the phone while driving and after taking the medicine.", "Trying it himself, so he takes the medicine while driving."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 30,
    category: "small_truck",
    question: {
      ar: "على كل سائق شاحنة أن ينتبه إلى عرض مركبته خاصةً:",
      fr: "Tout conducteur de camion doit faire attention à la largeur de son véhicule surtout :",
      en: "Every truck driver must pay attention to the width of his vehicle specifically:"
    },
    options: {
      ar: ["عند دخوله في مكان ضيق.", "عند قيادته في الأماكن المفتوحة.", "قبل تفريغ حمولته."],
      fr: ["Lorsqu'il entre dans un endroit étroit.", "Lorsqu'il conduit dans des endroits ouverts.", "Avant de décharger sa cargaison."],
      en: ["When entering a narrow place.", "When driving in open places.", "Before unloading his cargo."]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 31,
    category: "small_truck",
    question: {
      ar: "على سائق الشاحنة الصغيرة أن:",
      fr: "Le conducteur du petit camion doit :",
      en: "A small truck driver must:"
    },
    options: {
      ar: ["يرجع إلى الخلف في الأماكن المكتظة.", "يرجع إلى الخلف بعد التقاطع مباشرة.", "يتفادى الرجوع إلى الخلف في الأماكن المكتظة."],
      fr: ["Faire marche arrière dans les endroits encombrés.", "Faire marche arrière juste après le carrefour.", "Éviter la marche arrière dans les endroits encombrés."],
      en: ["Reverse in crowded places.", "Reverse immediately after an intersection.", "Avoid reversing in crowded places."]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 32,
    category: "small_truck",
    question: {
      ar: "على سائق محملة بخزانات أو براميل، قبل بدء الرحلة، أن يتأكد من أن:",
      fr: "Le conducteur d'un camion chargé de citernes ou de barils doit, avant le départ, s'assurer que :",
      en: "A driver of a truck loaded with tanks or barrels, before starting the trip, must ensure that:"
    },
    options: {
      ar: ["كل أغطية الخزانات أو البراميل محكمة الإغلاق.", "بعض أغطية الخزانات محكمة الإغلاق.", "الخزانات أو البراميل ممتلئة أو فارغة كلياً ومحكمة الإغلاق."],
      fr: ["Tous les couvercles des citernes ou des barils sont bien fermés.", "Quelques couvercles des citernes sont bien fermés.", "Les citernes ou les barils sont entièrement pleins ou entièrement vides et bien fermés."],
      en: ["All tank covers or barrels are tightly closed.", "Some tank covers are tightly closed.", "The tanks or barrels are full or completely empty and tightly closed."]
    },
    correct: 2
  },













// 👉 sign  signnnnn

{
  type: "sign",
  id: 1,
  category: "signs",
  image: "images/signs/1.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["انتبه مطبات", "انتبه انخفاض", "انتبه طريق زلق"],
  fr: [
    "Attention dos d’âne",
    "Attention dépression",
    "Attention route glissante"
  ],
  en: [
    "Warning bumps",
    "Warning dip",
    "Warning slippery road"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 2,
  category: "signs",
  image: "images/signs/3.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["انتبه منعطف يسار", "اتجاه مستديرة", "انتبه منعطف يمين"],
  fr: [
    "Attention virage à gauche",
    "Sens giratoire",
    "Attention virage à droite"
  ],
  en: [
    "Warning left curve",
    "Roundabout direction",
    "Warning right curve"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 3,
  category: "signs",
  image: "images/signs/4.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["اتجاه إجباري يسار", "انتبه منعطف يسار", "انتبه منعطف يمين"],
  fr: [
    "Direction obligatoire à gauche",
    "Attention virage à gauche",
    "Attention virage à droite"
  ],
  en: [
    "Mandatory left",
    "Warning left curve",
    "Warning right curve"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 4,
  category: "signs",
  image: "images/signs/5.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["انتبه منطقة سير على خطين", "انتبه منعطفان أولهما يسار ", "انتبه منعطفان أولهما يمين "],
  fr: [
    "Attention circulation à double sens",
    "Attention double virage, premier à gauche",
    "Attention double virage, premier à droite"
  ],
  en: [
    "Warning two-way traffic",
    "Warning double curve, first to the left",
    "Warning double curve, first to the right"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 5,
  category: "signs",
  image: "images/signs/6.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["انتبه منطقة سير على خطين", "انتبه منعطفان أولهما يسار ", "انتبه منعطفان أولهما يمين "],
  fr: [
    "Attention circulation à double sens",
    "Attention double virage, premier à gauche",
    "Attention double virage, premier à droite"
  ],
  en: [
    "Warning two-way traffic",
    "Warning double curve, first to the left",
    "Warning double curve, first to the right"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 6,
  category: "signs",
  image: "images/signs/10.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["انتبه طريق ضيق", "انتبه منحدر خطر", "انتبه طريق زلق"],
  fr: [
    "Attention chaussée rétrécie",
    "Attention descente dangereuse",
    "Attention route glissante"
  ],
  en: [
    "Warning narrow road",
    "Warning dangerous slope",
    "Warning slippery road"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 7,
  category: "signs",
  image: "images/signs/11.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممر غير مؤمن", "ممنوع المرور", "انتبه أولاد أو مدرسة"],
  fr: [
    "Passage non protégé",
    "Accès interdit",
    "Attention enfants / école"
  ],
  en: [
    "Unprotected crossing",
    "No entry",
    "Warning children / school"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 8,
  category: "signs",
  image: "images/signs/13.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["حيوانات متشردة", "ممنوع للحيوانات", "انتبه حيوانات"],
  fr: [
    "Animaux errants",
    "Interdit aux animaux",
    "Attention animaux"
  ],
  en: [
    "Stray animals",
    "No animals allowed",
    "Warning animals"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 9,
  category: "signs",
  image: "images/signs/14.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["انتبه منطقة سير على خطين ", "انتبه تقاطع طرق بدون أفضلية", "انتبه تقاطع مع طريق رئيسي"],
  fr: [
    " Attention circulation à double sens",
    "Attention intersection sans priorité",
    " Attention intersection avec une route principale"
  ],
  en: [
    "Warning two-way traffic",
    "Warning intersection without priority",
    "Warning intersection with a main road"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 10,
  category: "signs",
  image: "images/signs/15.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["انتبه أخطار متنوعة", "ممنوع الالتفاف", "انتبه مستديرة"],
  fr: [
    "Attention dangers divers",
    "Demi-tour interdit",
    "Attention rond-point"
  ],
  en: [
    "Warning various dangers",
    "No U-turn",
    "Warning roundabout"
  ]
},
  correct: 2
},


{
  type: "sign",
  id: 11,
  category: "signs",
  image: "images/signs/17.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انتبه تقاطع طرق بدون أفضلية",
    "انتبه أفضلية المرور من الجهة المقابلة",
    "انتبه تقاطع "
  ],
  fr: [
    "Attention intersection sans priorité",
    "Attention priorité aux véhicules venant en sens inverse",
    "Attention intersection"
  ],
  en: [
    "Warning intersection without priority",
    "Warning priority to oncoming traffic",
    "Warning intersection"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 12,
  category: "signs",
  image: "images/signs/18.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "التقاء مع طريق سريع", 
    "انتبه تقاطع مع طرق بدون أفضلية",
    "انتبه أفضلية المرور للسيات المتجة من الجهة المقابلة" 
  ],
  fr: [
    "Intersection avec une autoroute",
    "Attention intersection sans priorité",
    "Attention priorité aux véhicules venant en sens inverse"
  ],
  en: [
    "Junction with a highway",
    "Warning intersection without priority",
    "Warning priority to oncoming traffic"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 13,
  category: "signs",
  image: "images/signs/19.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["انتبه تقاطع على اليمين", "انتبه تقاطع طرق بدون أفضلية", "انتبه أفضلية المرور للسيارات المتجهة من الجهة المقابلة"]   ,
  fr: [
    "Attention intersection à droite",
    "Attention intersection sans priorité",
    "Attention priorité aux véhicules venant en sens inverse"
  ],
  en: [
    "Warning right intersection",
    "Warning no priority intersection",
    "Warning priority to oncoming traffic"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 14,
  category: "signs",
  image: "images/signs/24.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["توقف لحظة", "نهاية تحديد السرعة  ", " طريق أفضلية"],
  fr: [
    "Arrêt momentané",
    "Fin de limitation de vitesse",
    "Route prioritaire"
  ],
  en: [
    "Brief stop",
    "End of speed limit",
    "Priority road"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 15,
  category: "signs",
  image: "images/signs/25.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["ممر غير مخصص للمشاة", "ممنوع مرور المشاة", "انتبه ممر للمشاة"],
  fr: [
    "Passage non réservé aux piétons",
    "Passage interdit aux piétons",
    "Attention passage piéton"
  ],
  en: [
    "Not a pedestrian path",
    "No entry for pedestrians",
    "Warning pedestrian crossing"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 16,
  category: "signs",
  image: "images/signs/26.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["ممر لعربات اليد", "ممنوع مرور الدراجات", "انتبه ممر للدراجات "],
  fr: [
    "Voie pour charrettes",
    "Passage interdit aux vélos",
    "Attention piste cyclable"
  ],
  en: [
    "Hand cart path",
    "No entry for bicycles",
    "Warning bicycle lane"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 17,
  category: "signs",
  image: "images/signs/29.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["انتبه طريق واسع", "طريق ضيق من اليسار", "انتبه طريق ضيق"],
  fr: [
    "Attention route large",
    "Chaussée rétrécie à gauche",
    "Attention chaussée rétrécie"
  ],
  en: [
    "Warning wide road",
    "Road narrows on the left",
    "Warning narrow road"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 18,
  category: "signs",
  image: "images/signs/31.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [" أفضلية مرور لليمين", "انتبه طريق ضيق من اليمين", "انتبه طريق ضيق من اليسار"],
  fr: [
    "Priorité à droite",
    "Attention chaussée rétrécie à droite",
    "Attention chaussée rétrécie à gauche"
  ],
  en: [
    "Priority to the right",
    "Warning road narrows on the right",
    "Warning road narrows on the left"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 19,
  category: "signs",
  image: "images/signs/30.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["نهاية الأفضلية", "انتبه طريق ضيق من اليمين", "انتبه أفضلية المرور من الجهة المقابلة"],
  fr: [
    "Fin de priorité",
    "Attention chaussée rétrécie à droite",
    "Attention priorité aux véhicules venant en sens inverse"
  ],
  en: [
    "End of priority",
    "Warning road narrows on the right",
    "Warning priority to oncoming traffic"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 20,
  category: "signs",
  image: "images/signs/32.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["منطقة جبلية", "انتبه سقوط او وجود صخور", "انتبه طريق ضيق "],
  fr: [
    "Zone montagneuse",
    "Attention chute de pierres",
    "Attention chaussée rétrécie"
  ],
  en: [
    "Mountain area",
    "Warning falling rocks",
    "Warning narrow road"
  ]
},
  correct: 1
},


{
  type: "sign",
  id: 21,
  category: "signs",
  image: "images/signs/33.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["ممنوع الدخول لجميع السيارات","انتبه إشارات كهرابائية", "انتبه مستديرة"],
  fr: [
    "Accès interdit à tous les véhicules",
    "Attention feux de signalisation",
    "Attention rond-point"
  ],
  en: [
    "No entry for all vehicles",
    "Warning traffic lights ahead",
    "Warning roundabout"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 22,
  category: "signs",
  image: "images/signs/37.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع المرور", "انتبه افسح الطريق-طريق أفضلية أمامك", "انتبه أخطار متنوعة"],
  fr: [
    "Accès interdit",
    "Attention cédez le passage, priorité devant",
    "Attention dangers divers"
  ],
  en: [
    "No entry",
    "Warning give way, priority ahead",
    "Warning various dangers"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 23,
  category: "signs",
  image: "images/signs/38.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع المرور", "انتبه افسح الطريق-طريق أفضلية أمامك", "انتبه أخطار متنوعة"],
  fr: [
    "Accès interdit",
    "Attention cédez le passage, priorité devant",
    "Attention dangers divers"
  ],
  en: [
    "No entry",
    "Warning give way, priority ahead",
    "Warning various dangers"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 24,
  category: "signs",
  image: "images/signs/39.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع المرور", "نهاية الأفضلية", " انتبه أفضلية المرور للسيارات المتجهة من الجهة المقابلة  "],
    fr: ["Accès interdit", "Fin de priorité", "Priorité sens inverse"],
    en: ["No entry", "End of priority", "Priority to oncoming traffic"]
  },
  correct: 1
},

{
  type: "sign",
  id: 25,
  category: "signs",
  image: "images/signs/40.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع التجاوز لجميع  المركبات", "نهاية الأفضلية", "أفضلية المرور للسيارات المتجهة من الجهة المقابلة"],
  fr: [
    "Dépassement interdit pour tous les véhicules",
    "Fin de priorité",
    "Priorité aux véhicules venant en sens inverse"
  ],
  en: [
    "No overtaking for all vehicles",
    "End of priority",
    "Priority to oncoming vehicles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 26,
  category: "signs",
  image: "images/signs/41.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["طريق باتجاه واحد", "ممنوع الدخول", "توقف"],
  fr: [
    "Sens unique",
    "Accès interdit",
    "Arrêt"
  ],
  en: [
    "One-way road",
    "No entry",
    "Stop"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 27,
  category: "signs",
  image: "images/signs/42.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["طريق باتجاه واحد", "ممنوع الوقوف", "ممنوع الدخول لعموم السيارات"],
  fr: [
    "Sens unique",
    "Stationnement interdit",
    "Accès interdit à tous les véhicules"
  ],
  en: [
    "One-way road",
    "No parking",
    "No entry for all vehicles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 28,
  category: "signs",
  image: "images/signs/43.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["أخطار متنوعة", "ممنوع الوقوف", "ممنوع المرور"],
  fr: [
    "Dangers divers",
    "Stationnement interdit",
    "Accès interdit"
  ],
  en: [
    "Various dangers",
    "No parking",
    "No entry"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 29,
  category: "signs",
  image: "images/signs/44.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع التجاوز للشاحنات", "ممنوع المرور", "ممنوع التجاوز لجميع المركبات"],
  fr: [
    "Dépassement interdit aux camions",
    "Accès interdit",
    "Dépassement interdit pour tous les véhicules"
  ],
  en: [
    "No overtaking for trucks",
    "No entry",
    "No overtaking for all vehicles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 30,
  category: "signs",
  image: "images/signs/45.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["30 كلم/س السرعة القصوى", "80 كلم/س السرعة الدنيا", "أانتبه افسح الطريق ا فضلية أمامك "],
  fr: [
    "Vitesse maximale 30 km/h",
    "Vitesse minimale 80 km/h",
    "Attention cédez le passage, priorité en face"
  ],
  en: [
    "Maximum speed 30 km/h",
    "Minimum speed 80 km/h",
    "Warning give way, priority ahead"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 31,
  category: "signs",
  image: "images/signs/46.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["مسرح", "ممنوع الوقوف", "ممنوع التزمير"],
  fr: [
    "Théâtre",
    "Stationnement interdit",
    "Klaxon interdit"
  ],
  en: [
    "Theatre",
    "No parking",
    "No horn"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 32,
  category: "signs",
  image: "images/signs/47.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["طريق مخصص للشاحنات", "مسموح التجاوز للشاحنات", "ممنوع التجاوز للشاحنات"],
  fr: [
    "Route réservée aux camions",
    "Dépassement autorisé pour les camions",
    "Dépassement interdit pour les camions"
  ],
  en: [
    "Road reserved for trucks",
    "Overtaking allowed for trucks",
    "Overtaking prohibited for trucks"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 33,
  category: "signs",
  image: "images/signs/48.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["مسموح مرور عربات الحيوانات ", "ممنوع مرور المشاة", "ممنوع مرور عربات الحيوانات"],
  fr: [
    "Circulation autorisée pour les charrettes à animaux",
    "Passage interdit aux piétons",
    "Passage interdit aux charrettes à animaux"
  ],
  en: [
    "Animal carts allowed",
    "No entry for pedestrians",
    "No entry for animal carts"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 34,
  category: "signs",
  image: "images/signs/49.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع مرور السيارات", "ممر مخصص للمشاة", "ممنوع مرور المشاة"],
  fr: [
    "Passage interdit aux voitures",
    "Voie réservée aux piétons",
    "Passage interdit aux piétons"
  ],
  en: [
    "No entry for cars",
    "Lane reserved for pedestrians",
    "No entry for pedestrians"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 35,
  category: "signs",
  image: "images/signs/50.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["ممر إجباري للسيارات", "ممر مخصص للدراجات", "ممنوع مرور الدراجات"],
  fr: [
    "Voie obligatoire pour les voitures",
    "Voie réservée aux vélos",
    "Passage interdit aux vélos"
  ],
  en: [
    "Mandatory lane for cars",
    "Lane reserved for bicycles",
    "No entry for bicycles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 36,
  category: "signs",
  image: "images/signs/51.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["  طريق مخصص الدراجات النارية", "ممر للدراجات النارية", "ممنوع مرور الدراجات النارية"],
  fr: [
    "Voie réservée aux motos",
    "Passage pour motos",
    "Passage interdit aux motos"
  ],
  en: [
    "Road reserved for motorcycles",
    "Motorcycle path",
    "No entry for motorcycles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 37,
  category: "signs",
  image: "images/signs/52.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع وقوف عربات اليد ", "ممر مخصص لعربات اليد", "ممنوع مرور عربات اليد"],
  fr: [
    "Stationnement interdit aux charrettes à bras",
    "Voie réservée aux charrettes à bras",
    "Passage interdit aux charrettes à bras"
  ],
  en: [
    "No parking for hand carts",
    "Lane reserved for hand carts",
    "No entry for hand carts"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 38,
  category: "signs",
  image: "images/signs/53.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["ممنوع وقوف السيارات", "طريق مخصص للسيارات", "ممنوع مرور جميع أنواع السيارات"],
  fr: [
    "Stationnement interdit aux voitures",
    "Voie réservée aux voitures",
    "Passage interdit à tous les types de voitures"
  ],
  en: [
    "No parking for cars",
    "Road reserved for cars",
    "No entry for all types of cars"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 39,
  category: "signs",
  image: "images/signs/55.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["ممنوع مرور الشاحنات التي يزيد عرضها عن 2.3 متر", "ممنوع مرور الشاحنات", "ممنوع مرور السيارات التي يزيد طولها عن 2.3 متر"],
  fr: [
    "Passage interdit aux camions de plus de 2,3 mètres de longueur",
    "Passage interdit aux camions",
    "Passage interdit aux voitures de plus de 2,3 mètres de longueur"
  ],
  en: [
    "No entry for trucks longer than 2.3 meters",
    "No entry for trucks",
    "No entry for cars longer than 2.3 meters"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 40,
  category: "signs",
  image: "images/signs/56.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["اتجاه إجباري للشاحنات", "ممنوع مرور الشاحنات التي يزيد وزنها عن 3.5 طن", "ممنوع مرور الشاحنات التي يزيد علوها عن 3.5 متر"],
  fr: [
    "Direction obligatoire pour les camions",
    "Passage interdit aux camions de plus de 3.5 tonnes",
    "Passage interdit aux camions de plus de 3.5 mètres de hauteur"
  ],
  en: [
    "Mandatory direction for trucks",
    "No entry for trucks over 3.5 tons",
    "No entry for trucks over 3.5 meters in height"
  ]
},
  correct: 2
},



{
  type: "sign",
  id: 41,
  category: "signs",
  image: "images/signs/57.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
    ar: ["ممنوع مرور زيادة الحمولة اكثر من 10 امتار ", "ممنوع مرور الشاحنات التي يزيد حمولتهاعن 6,5  طن ",  "ممنوع المرور الشاحنات التي يفوق طولها عن 10 امتار"],
fr: [
  "Passage interdit aux véhicules dépassant 10 mètres",
  "Passage interdit aux camions de plus de 6,5 tonnes",
  "Passage interdit aux camions dépassant 10 mètres de longueur"
],
en: [
  "No entry for vehicles exceeding 10 meters",
  "No entry for trucks over 6.5 tons",
  "No entry for trucks longer than 10 meters"
]
  },
 correct: 2
},

{
  type: "sign",
  id: 42,
  category: "signs",
  image: "images/signs/58.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "ممنوع مرور الشاحنات التي يفوق علوها عن 7 امتار  ",
    "ممنوع الشاحنات التي تزيد حمولة كل دولاب عن 7 طن",
    "ممنوع مرور الشاحنات  التي  تزيد حمولتها عن 7 طن "
  ],
  fr: [
    "Passage interdit aux camions de plus de 7 mètres de hauteur",
    "Passage interdit aux camions dont la charge par essieu dépasse 7 tonnes",
    "Passage interdit aux camions de plus de 7 tonnes"
  ],
  en: [
    "No entry for trucks higher than 7 meters",
    "No entry for trucks with axle load over 7 tons",
    "No entry for trucks over 7 tons"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 43,
  category: "signs",
  image: "images/signs/60.png",
  question: {
  ar: "ماذا تعني هذه الإشارة؟",
  fr: "Que signifie ce panneau ?",
  en: "What does this sign mean?"
},
options: {
  ar: ["بداية الأشارات الممنوعة", "ممنوع السرعة ", "نهاية الأشارات الممنوعة "],
  fr: [
    "Début des interdictions",
    "Vitesse interdite",
    "Fin des interdictions"
  ],
  en: [
    "Start of prohibitions",
    "Speed prohibited",
    "End of prohibitions"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 44,
  category: "signs",
  image: "images/signs/61.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["تحديد السرعة ", "  بداية تحديد السرعة", "نهاية تحديد السرعة"  ],
  fr: [
    "Limitation de vitesse",
    "Début de limitation de vitesse",
    "Fin de limitation de vitesse"
  ],
  en: [
    "Speed limit",
    "Start of speed limit",
    "End of speed limit"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 45,
  category: "signs",
  image: "images/signs/62.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["اتجاه إجباري على اليسار", "ممنوع ألتفاف على اليمين    ", " الألتفاف على اليمين "],
  fr: [
    "Direction obligatoire à gauche",
    "Tourner à droite interdit",
    "Tourner à droite"
  ],
  en: [
    "Mandatory left",
    "No right turn",
    "Turn right"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 46,
  category: "signs",
  image: "images/signs/63.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["اتجاه اختياري مستقيم او يمين ", "   التفاف على اليسار", "ممنوع التفاف على اليسار"],
  fr: [
    "Direction au choix tout droit ou à droite",
    "Tourner à gauche",
    "Tourner à gauche interdit"
  ],
  en: [
    "Straight or right direction",
    "Turn left",
    "No left turn"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 47,
  category: "signs",
  image: "images/signs/64.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["اتجاه إجباري مستقيم", "ممنوع المرور يمين او يسار", " اتجاه اجباري يمين او يسار"],
  fr: [
    "Direction obligatoire tout droit",
    "Passage interdit à droite et à gauche",
    "Direction obligatoire à droite ou à gauche"
  ],
  en: [
    "Straight ahead only",
    "No right or left turn",
    "Mandatory right or left"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 48,
  category: "signs",
  image: "images/signs/65.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["اتجاه إجباري للشاحنات لجهة  اليمين", "ممنوع التجاه نحو اليسار", " اتجاه اختياري يمين أو مستقيم"],
  fr: [
    "Direction obligatoire à droite pour les camions",
    "Tourner à gauche interdit",
    "Direction au choix à droite ou tout droit"
  ],
  en: [
    "Mandatory right for trucks",
    "No left turn",
    "Right or straight direction"
  ]
},
  correct: 2
},



{
  type: "sign",
  id: 50,
  category: "signs",
  image: "images/signs/66.png",
  question: {
  ar: "ماذا تعني هذه الإشارة؟",
  fr: "Que signifie ce panneau ?",
  en: "What does this sign mean?"
},
options: {
  ar: ["ممر إجباري نحو  اليسار", "اتجاه اختياري يسار أو مستقيم", "ممنوع الاتجاه نحو اليسار"],
  fr: [
    "Direction obligatoire à gauche",
    "Direction au choix à gauche ou tout droit",
    "Tourner à gauche interdit"
  ],
  en: [
    "Mandatory left",
    "Left or straight direction",
    "No left turn"
  ]
},
correct: 1
},

{
  type: "sign",
  id: 51,
  category: "signs",
  image: "images/signs/68.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: ["  اتجاه اختياري  مستقيم   ", "     ممنوع  الالتفاف الى اليمين ", "  ممر اجباري  يمين"],
  fr: [
    "Direction obligatoire tout droit",
    "Tourner à droite interdit",
    "Direction obligatoire à droite"
  ],
  en: [
    "Straight ahead only",
    "No right turn",
    "Mandatory right"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 52,
  category: "signs",
  image: "images/signs/69.png",
  question: {
  ar: "ماذا تعني هذه الإشارة؟",
  fr: "Que signifie ce panneau ?",
  en: "What does this sign mean?"
},
options: {
  ar: ["  ممنوع  الالتفاف   يمين او يسار", "  اتجاه   اختياري نحو اليمين   ", "  ممر  اجباري  يمين او يسار"],
  fr: [
    "Tourner à droite et à gauche interdit",
    "Direction au choix vers la droite",
    "Tourner à droite et à gauche interdit"
  ],
  en: [
    "No right or left turn",
    "Optional direction to the right",
    "No right or left turn"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 53,
  category: "signs",
  image: "images/signs/71.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: ["نهاية حلبة الدرجات  الهوائية", "طريق  مخصص للدرجات  الهوائية", "طريق للمشات و الدرجات الهوائية"],
  fr: [
    "Fin de la piste cyclable",
    "Piste cyclable",
    "Voie pour piétons et cyclistes"
  ],
  en: [
    "End of bicycle lane",
    "Bicycle lane",
    "Pedestrian and bicycle path"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 54,
  category: "signs",
  image: "images/signs/72.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "ممنوع مرور المشاة والدراجات الهوائية",
    "طريق فقط للمشاة والدراجات الهوائية",
    "نهاية حلبة الدراجات الهوائية"
  ],
  fr: [
    "Accès interdit aux piétons et aux cyclistes",
    "Voie réservée aux piétons et aux cyclistes",
    "Fin de la piste cyclable"
  ],
  en: [
    "No entry for pedestrians and bicycles",
    "Path for pedestrians and bicycles only",
    "End of bicycle lane"
  ]
  },
  correct: 1
},

{
  type: "sign",
  id: 55,
  category: "signs",
  image: "images/signs/75.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "اتجاه إجباري  يمين",
    "وجهة السير ",
    "ممنوع الالتفاف يميناً "
  ],
  fr: [
    "Direction obligatoire",
    "Direction de circulation à droite",
    "Demi-tour interdit"
  ],
  en: [
    "Mandatory direction",
    "Direction of traffic to the right",
    "No U-turn"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 56,
  category: "signs",
  image: "images/signs/76.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "التفاف إلى  الزامي",
    "وجهة السير",
    "ممنوع الالتفاف"
  ],
  fr: [
    "Tourner à droite",
    "Sens de circulation",
    "Demi-tour interdit"
  ],
  en: [
    "Turn right",
    "Direction of traffic",
    "No U-turn"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 57,
  category: "signs",
  image: "images/signs/77.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع مرور الأوتوبيسات",
    "طريق مخصص للأوتوبيسات",
    "نهاية منع  تجاوز الأوتوبيسات" 
  ],
  fr: [
    "Accès interdit aux autobus",
    "Voie réservée aux autobus",
    "Fin de voie des autobus"
  ],
  en: [
    "No entry for buses",
    "Bus lane",
    "End of bus lane"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 58,
  category: "signs",
  image: "images/signs/78.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "ممنوع مرور الشاحنات التي يزيد وزنها عن 6,5 طن",
    "طريق مخصص للشاحنات",
    "ممنوع مرور الشاحنات"
  ],
  fr: [
    "Passage interdit aux camions de plus de 6,5 tonnes",
    "Voie réservée aux camions",
    "Passage interdit aux camions"
  ],
  en: [
    "No entry for trucks over 6.5 tons",
    "Truck lane",
    "No entry for trucks"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 59,
  category: "signs",
  image: "images/signs/79.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "طريق إلزامي للشاحنات",
    "ممنوع وقوف الشاحنات",
    "ممنوع مرور الشاحنات التي تزيد حمولتها عن 6,5 طن"
  ],
  fr: [
    "Voie obligatoire pour les camions",
    "Stationnement interdit aux camions",
    "Passage interdit aux camions de plus de 6,5 tonnes"
  ],
  en: [
    "Mandatory road for trucks",
    "No parking for trucks",
    "No entry for trucks over 6.5 tons"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 60,
  category: "signs",
  image: "images/signs/80.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "طريق إلزامي للشاحنات",
    "ممنوع مرور الشاحنات المحملة بمواد خطرة",
    "ممنوع مرور الشاحنات التي تجرّ قاطرة"
  ],
  fr: [
    "Voie obligatoire pour les camions",
    "Passage interdit aux camions transportant des matières dangereuses",
    "Passage interdit aux camions avec remorque"
  ],
  en: [
    "Mandatory road for trucks",
    "No entry for trucks carrying hazardous materials",
    "No entry for trucks with trailers"
  ]
},
  correct: 2
},



{
  type: "sign",
  id: 61,
  category: "signs",
  image: "images/signs/81.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "موقف للآليات الزراعية",
    "طريق مخصص للآليات الزراعية",
    "ممنوع مرور الآليات الزراعية"
  ],
  fr: [
    "Stationnement réservé aux véhicules agricoles",
    "Voie réservée aux véhicules agricoles",
    "Accès interdit aux véhicules agricoles"
  ],
  en: [
    "Parking for agricultural vehicles",
    "Road for agricultural vehicles",
    "No entry for agricultural vehicles"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 62,
  category: "signs",
  image: "images/signs/84.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "نهاية منع التجاوز للشاحنات",
    "نهاية منع التجاوز",
    "انتبه منطقة سير على خطين"
  ],
  fr: [
    "Fin d’interdiction de dépassement pour les camions",
    "Fin d’interdiction de dépassement",
    "Attention circulation à double sens"
  ],
  en: [
    "End of no overtaking for trucks",
    "End of no overtaking",
    "Warning two-way traffic"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 63,
  category: "signs",
  image: "images/signs/85.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "طريق مخصص للشاحنات فقط",
    "نهاية منع التجاوز للشاحنات",
    "انتبه منطقة سير على خطين"
  ],
  fr: [
    "Voie réservée aux camions uniquement",
    "Fin d’interdiction de dépassement pour les camions",
    "Attention circulation à double sens"
  ],
  en: [
    "Road reserved for trucks only",
    "End of no overtaking for trucks",
    "Warning two-way traffic"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 64,
  category: "signs",
  image: "images/signs/86.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع التجاوز لجميع المركبات",
    "ممنوع المرور",
    "ممنوع الوقوف"
  ],
  fr: [
    "Dépassement interdit pour tous les véhicules",
    "Accès interdit",
    "Stationnement interdit"
  ],
  en: [
    "No overtaking for all vehicles",
    "No entry",
    "No parking"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 65,
  category: "signs",
  image: "images/signs/87.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع المرور والتوقف",
    "ممنوع الوقوف",
    "ممنوع المرور"
  ],
  fr: [
    "Circulation et arrêt interdits",
    "Stationnement interdit",
    "Accès interdit"
  ],
  en: [
    "No entry and no stopping",
    "No parking",
    "No entry"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 66,
  category: "signs",
  image: "images/signs/88.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع الوقوف في هذا المكان",
    "ممنوع المرور في هذا الاتجاه",
    "اتجاه إجباري مستقيم"
  ],
  fr: [
    "Stationnement interdit à cet endroit",
    "Accès interdit dans ce sens",
    "Direction obligatoire tout droit"
  ],
  en: [
    "No parking in this place",
    "No entry in this direction",
    "Straight ahead only"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 67,
  category: "signs",
  image: "images/signs/89.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "ممنوع الوقوف يساراً",
    "ممنوع الاتجاه نحو اليسار",
    "وجهة السير إلى اليسار"
  ],
  fr: [
    "Stationnement interdit à gauche",
    "Tourner à gauche interdit",
    "Direction de circulation à gauche"
  ],
  en: [
    "No parking on the left",
    "No left turn",
    "Direction of traffic to the left"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 68,
  category: "signs",
  image: "images/signs/90.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع الوقوف يميناً",
    "ممنوع الاتجاه نحو اليمين",
    "وجهة السير إلى اليمين"
  ],
  fr: [
    "Stationnement interdit à droite",
    "Tourner à droite interdit",
    "Direction de circulation à droite"
  ],
  en: [
    "No parking on the right",
    "No right turn",
    "Direction of traffic to the right"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 69,
  category: "signs",
  image: "images/signs/91.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع الالتفاف",
    "وجهة السير مستديرة",
    "موقع توقف"
  ],
  fr: [
    "Demi-tour interdit",
    "Sens giratoire",
    "Arrêt"
  ],
  en: [
    "No U-turn",
    "Roundabout direction",
    "Stop location"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 70,
  category: "signs",
  image: "images/signs/92.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ادنى سرعة اجبارية",
    "ممنوع الوقوف أكثر من 30 دقيقة",
    "السرعة القصوى 30"
  ],
  fr: [
    "Fin de la vitesse minimale",
    "Stationnement interdit plus de 30 minutes",
    "Vitesse maximale 30"
  ],
  en: [
    "End of minimum speed",
    "No parking for more than 30 minutes",
    "Maximum speed 30"
  ]
},
  correct: 0
},


{
  type: "sign",
  id: 71,
  category: "signs",
  image: "images/signs/94.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انتبه طريق زلق",
    "يجب نزع السلاسل المعدنية",
    "السير مسموح للمركبات المجهزة بسلاسل معدنية فقط"
  ],
  fr: [
    "Attention route glissante",
    "Fin d’obligation des chaînes",
    "Circulation autorisée uniquement aux véhicules équipés de chaînes"
  ],
  en: [
    "Warning slippery road",
    "End of mandatory chains",
    "Only vehicles with chains are allowed"
  ]
},
  correct: 2  
},

{
  type: "sign",
  id: 72,
  category: "signs",
  image: "images/signs/95.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع المرور للمشاة",
    "طريق للمشاة",
    "منتزه"
  ],
  fr: [
    "Accès interdit aux piétons",
    "Voie pour piétons",
    "Parc"
  ],
  en: [
    "No entry for pedestrians",
    "Pedestrian path",
    "Park"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 73,
  category: "signs",
  image: "images/signs/96.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "طريق مخصص للمشاة",
    "ممر للمشاة فوق الطريق",
    "نهاية طريق المشاة"
  ],
  fr: [
    "Voie réservée aux piétons",
    "Passage piéton au-dessus de la route",
    "Fin de la voie piétonne"
  ],
  en: [
    "Pedestrian-only path",
    "Pedestrian overpass",
    "End of pedestrian path"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 74,
  category: "signs",
  image: "images/signs/97.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع وقوف الدراجات الهوائية",
    "ممنوع مرور الدراجات الهوائية",
    "حلبة مخصصة للدراجات الهوائية"
  ],
  fr: [
    "Stationnement interdit aux vélos",
    "Accès interdit aux vélos",
    "Piste réservée aux vélos"
  ],
  en: [
    "No parking for bicycles",
    "No entry for bicycles",
    "Bicycle lane"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 75,
  category: "signs",
  image: "images/signs/98.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "اتجاه إجباري نحو اليسار",
    "ممنوع الوقوف يساراً",
    "ممنوع الالتفاف يساراً"
  ],
  fr: [
    "Direction obligatoire à gauche",
    "Stationnement interdit à gauche",
    "Tourner à gauche interdit"
  ],
  en: [
    "Mandatory left",
    "No parking on the left",
    "No left turn"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 76,
  category: "signs",
  image: "images/signs/99.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "مستشفى",
    "طريق على خطين موصول بجسر",
    "انتبه جسر متحرك"
  ],
  fr: [
    "Hôpital",
    "Route à double sens avec pont",
    "Attention pont mobile"
  ],
  en: [
    "Hospital",
    "Two-way road with a bridge",
    "Warning movable bridge"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 77,
  category: "signs",
  image: "images/signs/100.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع مرور المشاة",
    "انتبه ممر للمشاة",
    "نهاية طريق المشاة"
  ],
  fr: [
    "Accès interdit aux piétons",
    "Attention passage piéton",
    "Fin de la voie piétonne"
  ],
  en: [
    "No entry for pedestrians",
    "Warning pedestrian crossing",
    "End of pedestrian path"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 78,
  category: "signs",
  image: "images/signs/104.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "يمنع ركوب الدراجات الهوائية",
    "ممر مخصص للدراجات الهوائية",
    "حلبة مخصصة للدراجات الهوائية"
  ],
  fr: [
    "Circulation des vélos interdite",
    "Piste réservée aux vélos",
    "Circuit réservé aux vélos"
  ],
  en: [
    "Cycling prohibited",
    "Bicycle lane",
    "Bicycle track"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 79,
  category: "signs",
  image: "images/signs/106.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "نقطة التقاء خطين",
    "طريق يصل بخط رئيسي",
    "طريق غير نافذ"
  ],
  fr: [
    "Point de rencontre de deux routes",
    "Route raccordée à une route principale",
    "Route sans issue"
  ],
  en: [
    "Intersection point",
    "Road connecting to a main road",
    "Dead end road"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 80,
  category: "signs",
  image: "images/signs/107.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انتبه مدرج طيران",
    "انتبه جسر",
    "أوتوستراد"
  ],
  fr: [
    "Attention piste d’atterrissage",
    "Attention pont",
    "Autoroute"
  ],
  en: [
    "Warning airstrip",
    "Warning bridge",
    "Highway"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 81,
  category: "signs",
  image: "images/signs/108.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "جسر فوق الطريق",
    "نهاية الأوتوستراد",
    "انتبه طريق ضيق"
  ],
  fr: [
    "Pont au-dessus de la route",
    "Fin de l’autoroute",
    "Attention route étroite"
  ],
  en: [
    "Bridge over the road",
    "End of highway",
    "Warning narrow road"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 82,
  category: "signs",
  image: "images/signs/109.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "جسر",
    "نفق",
    "انتبه طريق وعرة"
  ],
  fr: [
    "Pont",
    "Tunnel",
    "Attention route accidentée"
  ],
  en: [
    "Bridge",
    "Tunnel",
    "Warning rough road"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 83,
  category: "signs",
  image: "images/signs/111.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "مركز نجدة ومساعدة",
    "موقف مخصص للمعاقين",
    "للأطباء فقط"
  ],
  fr: [
    "Centre de secours et d’assistance",
    "Stationnement réservé aux personnes handicapées",
    "Réservé aux médecins uniquement"
  ],
  en: [
    "Rescue and assistance center",
    "Parking reserved for disabled persons",
    "For doctors only"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 84,
  category: "signs",
  image: "images/signs/112.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع وقوف المعاقين",
    "موقف لحظة",
    "موقف مخصص للمعوقين"
  ],
  fr: [
    "Stationnement interdit aux handicapés",
    "Arrêt momentané",
    "Stationnement réservé aux handicapés"
  ],
  en: [
    "No parking for disabled persons",
    "Short stop",
    "Parking reserved for disabled persons"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 85,
  category: "signs",
  image: "images/signs/113.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "  موقف لحظة    ",
    "موقف ",
    "     ممنوع الوقوف"
  ],
  fr: [
    "  Arrêt momentané  ",
    "Stationnement",
    "Stationnement interdit"
  ],
  en: [
    "One minute parking",
    "Short stop",
    "No parking"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 86,
  category: "signs",
  image: "images/signs/116.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "موقف تاكسي",
    "ممنوع وقوف سيارات التاكسي",
    "موقف للعموم ممنوع لسيارات التاكسي أكثر من سيارتين"
  ],
  fr: [
    "Stationnement pour taxis",
    "Stationnement interdit aux taxis",
    "Stationnement public interdit aux taxis de plus de deux véhicules"
  ],
  en: [
    "Taxi parking",
    "No parking for taxis",
    "Public parking, no more than two taxis allowed"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 87,
  category: "signs",
  image: "images/signs/117.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "إزالة فورية",
    "استعلامات ",
    "شرطة"
  ],
  fr: [
    "Enlèvement immédiat",
    "Renseignements",
    "Police"
  ],
  en: [
    "Immediate removal",
    "Information",
    "Police"
  ]
} ,
  correct: 2
},

{
  type: "sign",
  id: 88,
  category: "signs",
  image: "images/signs/118.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "استعلامات",
    "محطة وقود",
    "مركز إنترنت"
  ],
  fr: [
    "Renseignements",
    "Station-service",
    "Centre Internet"
  ],
  en: [
    "Information",
    "Fuel station",
    "Internet center"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 89,
  category: "signs",
  image: "images/signs/119.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "موقف مخصص للشرطة",
    " للإطفاء",
    "شرطة البلدية"
  ],
  fr: [
    "Stationnement réservé à la police",
    "   pompiers",
    "Police de municipale"
  ],
  en: [
    "Parking reserved for police",
    "Fire department ",
    "Municipal police"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 90,
  category: "signs",
  image: "images/signs/121.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "خط الطريق الرئيسي",
    "انعطاف غير مباشر إلى اليسار",
    "تقاطع خطر"
  ],
  fr: [
    "Route principale",
    "Virage indirect à gauche",
    "Intersection dangereuse"
  ],
  en: [
    "Main road",
    "Indirect left turn",
    "Dangerous intersection"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 91,
  category: "signs",
  image: "images/signs/127.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع الوقوف",
    "موقف لحظة",
    "موقف"
  ],
  fr: [
    "Stationnement interdit",
    "Arrêt momentané",
    "Stationnement"
  ],
  en: [
    "No parking",
    "Short stop",
    "Parking"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 92,
  category: "signs",
  image: "images/signs/128.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "فندق",
    "مطعم",
    "مركز للتصليح"
  ],
  fr: [
    "Hôtel",
    "Restaurant",
    "Centre de réparation"
  ],
  en: [
    "Hotel",
    "Restaurant",
    "Repair center"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 93,
  category: "signs",
  image: "images/signs/129.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "استعلامات",
    "مطعم",
    "مرطبات"
  ],
  fr: [
    "Renseignements",
    "Restaurant",
    "Boissons rafraîchissantes"
  ],
  en: [
    "Information",
    "Restaurant",
    "Refreshments"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 94,
  category: "signs",
  image: "images/signs/132.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "مطعم",
    "هاتف",
    "محطة وقود"
  ],
  fr: [
    "Restaurant",
    "Téléphone",
    "Station-service"
  ],
  en: [
    "Restaurant",
    "Telephone",
    "Fuel station"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 95,
  category: "signs",
  image: "images/signs/133.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "مطعم",
    "مركز للتصليح",
    "محطة وقود"
  ],
  fr: [
    "Restaurant",
    "Centre de réparation",
    "Station-service"
  ],
  en: [
    "Restaurant",
    "Repair center",
    "Fuel station"
  ]
},
  correct: 2
},

{
  type: "sign",
  id: 96,
  category: "signs",
  image: "images/signs/134.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options:{
  ar: [
    "موقف باص",
    "ممنوع وقوف الباصات",
    "خط مخصص للباصات"
  ],
  fr: [
    "Arrêt de bus",
    "Stationnement interdit aux bus",
    "Voie réservée aux bus"
  ],
  en: [
    "Bus stop",
    "No parking for buses",
    "Bus lane"
  ]
},
  correct: 0
},

{
  type: "sign",
  id: 97,
  category: "signs",
  image: "images/signs/136.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "ممنوع الوقوف",
    "موقع للمقطورات والخيم",
    "موقع توقف ونداء ومساعدة"
  ],
  fr: [
    "Stationnement interdit",
    "Aire pour caravanes et camping",
    "Aire d’arrêt et d’appel d’urgence"
  ],
  en: [
    "No parking",
    "Caravan and camping area",
    "Stopping and emergency call point"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 98,
  category: "signs",
  image: "images/signs/139.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انعطاف",
    "خفف السرعة",
    "انعطاف غير مباشر إلى اليسار"
  ],
  fr: [
    "Virage",
    "Ralentir",
    "Virage indirect à gauche"
  ],
  en: [
    "Turn",
    "Slow down",
    "Indirect left turn"
  ]
},
  correct: 0
},


{
  type: "sign",
  id: 100,
  category: "signs",
  image: "images/signs/2.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انتبه انخفاضات",
    "انتبه مطبات",
    "انتبه منعطف يمين"
  ],
  fr: [
    "Attention dépressions",
    "Attention dos d’âne",
    "Attention virage à droite"
  ],
  en: [
    "Warning dips",
    "Warning speed bumps",
    "Warning right curve"
  ]
},
  correct: 1
},

{
  type: "sign",
  id: 99,
  category: "signs",
  image: "images/signs/141.png",
  question: {
    ar: "ماذا تعني هذه الإشارة؟",
    fr: "Que signifie ce panneau ?",
    en: "What does this sign mean?"
  },
  options: {
  ar: [
    "انعطاف",
    "انعطاف غير مباشر إلى اليسار",
    "خفف السرعة"
  ],
  fr: [
    "Virage",
    "Virage indirect à gauche",
    "Ralentir"
  ],
  en: [
    "Turn",
    "Indirect left turn",
    "Slow down"
  ]
},

  correct: 2
},



  {
    type: "normal",
    id: 1,
    category: "safety",
    license: "G",
    question: {
      ar: "عند دخولك في نفق أثناء القيادة نهاراً، عليك:",
      fr: "Lorsque vous entrez dans un tunnel en conduisant de jour, vous devez :",
      en: "When entering a tunnel during daytime driving, you must:"
    },
    options: {
      ar: [
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي) وزيادة السرعة",
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي) وتخفيف السرعة",
        "استعمال الزمور"
      ],
      fr: [
        "Allumer les feux de croisement et accélérer",
        "Allumer les feux de croisement et ralentir",
        "Utiliser le klaxon"
      ],
      en: [
        "Turn on low beam lights and increase speed",
        "Turn on low beam lights and reduce speed",
        "Use the horn"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 2,
    category: "safety",
    license: "G",
    question: {
      ar: "عند قيادتك لمركبة أثناء الليل خلف مركبة أخرى عليك:",
      fr: "Lorsque vous conduisez la nuit derrière un autre véhicule, vous devez :",
      en: "When driving at night behind another vehicle, you must:"
    },
    options: {
      ar: [
        "تشغيل الإضاءة المنخفضة (أضواء التلاقي)",
        "استعمال أضواء الطريق (الإضاءة العالية)",
        "عدم استعمال الضوء"
      ],
      fr: [
        "Utiliser les feux de croisement",
        "Utiliser les feux de route",
        "Ne pas utiliser les feux"
      ],
      en: [
        "Use low beam lights",
        "Use high beam lights",
        "Do not use lights"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 3,
    category: "safety",
    license: "G",
    question: {
      ar: "في حال ظهور مركبة من الجهة المعاكسة أثناء استعمالك للإضاءة العالية ليلاً، عليك:",
      fr: "Lorsqu’un véhicule arrive en sens inverse pendant que vous utilisez les feux de route la nuit, vous devez :",
      en: "When a vehicle approaches from the opposite direction while using high beams at night, you must:"
    },
    options: {
      ar: [
        "الانتقال إلى ضوء التلاقي",
        "إطفاء الضوء نهائياً",
        "تقطيع الضوء بين ضوء الطريق وضوء التلاقي"
      ],
      fr: [
        "Passer aux feux de croisement",
        "Éteindre complètement les feux",
        "Alterner entre feux de route et croisement"
      ],
      en: [
        "Switch to low beam",
        "Turn off lights completely",
        "Flash between high and low beams"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 4,
    category: "safety",
    license: "G",
    question: {
      ar: "عند تعبئة خزان مركبتك بالوقود، عليك:",
      fr: "Lors du remplissage du réservoir de carburant, vous devez :",
      en: "When refueling your vehicle, you must:"
    },
    options: {
      ar: [
        "أن تبقي المحرك شغّالاً",
        "ألا تهتم لأن هذا الأمر لا ينطوي على أي خطر",
        "أن تطفئ محرك المركبة"
      ],
      fr: [
        "Laisser le moteur en marche",
        "Ne pas faire attention car cela ne présente aucun danger",
        "Éteindre le moteur du véhicule"
      ],
      en: [
        "Keep the engine running",
        "Ignore it as it presents no danger",
        "Turn off the vehicle engine"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 5,
    category: "law",
    license: "G",
    question: {
      ar: "عندما تتحول الإشارة من اللون الأخضر إلى اللون الأصفر لحظة عبور مركبتك التقاطع، عليك:",
      fr: "Lorsque le feu passe du vert au jaune au moment où vous franchissez l’intersection, vous devez :",
      en: "When the traffic light turns from green to yellow at the moment you are crossing the intersection, you must:"
    },
    options: {
      ar: [
        "التوقف فوراً وسط التقاطع",
        "متابعة سيرك بانتباه",
        "تركيز نظرك على الإشارة"
      ],
      fr: [
        "S’arrêter immédiatement au milieu de l’intersection",
        "Continuer avec prudence",
        "Fixer le feu"
      ],
      en: [
        "Stop immediately in the middle of the intersection",
        "Proceed carefully",
        "Focus on the signal"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 6,
    category: "safety",
    license: "G",
    question: {
      ar: "عند شعورك بالنعاس الشديد أثناء القيادة، عليك:",
      fr: "Lorsque vous ressentez une forte somnolence en conduisant, vous devez :",
      en: "When you feel strong drowsiness while driving, you must:"
    },
    options: {
      ar: [
        "أن تتناول الأدوية المنشطة ومتابعة السير",
        "ألا تهتم لأن النعاس سيزول سريعاً",
        "أن تتوقف فوراً في مكان آمن لتأخذ قسطاً من الراحة"
      ],
      fr: [
        "Prendre des stimulants et continuer",
        "Ignorer car cela passera rapidement",
        "S’arrêter dans un endroit sûr pour se reposer"
      ],
      en: [
        "Take stimulants and continue",
        "Ignore it as it will pass quickly",
        "Stop in a safe place and rest"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 7,
    category: "law",
    license: "G",
    question: {
      ar: "عند اقترابك من تقاطع معين يوجد فيه شرطي يقوم بتنظيم السير، ويوجد إشارة مرور ضوئية وإشارة سير ثابتة عليك الالتزام بـ:",
      fr: "À l’approche d’une intersection où un agent règle la circulation, avec un feu et un panneau, vous devez suivre :",
      en: "When approaching an intersection where a traffic officer is regulating traffic, and there is a traffic light and a fixed sign, you must follow:"
    },
    options: {
      ar: [
        "تعليمات شرطي السير",
        "الإشارة الضوئية فقط",
        "إشارة السير الثابتة فقط"
      ],
      fr: [
        "Les instructions de l’agent de circulation",
        "Le feu de signalisation uniquement",
        "Le panneau uniquement"
      ],
      en: [
        "The traffic officer’s instructions",
        "The traffic light only",
        "The fixed road sign only"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 8,
    category: "safety",
    license: "BC",
    question: {
      ar: "فور جلوس السائق خلف المقود عليه أولاً أن:",
      fr: "Dès que le conducteur s’assoit derrière le volant, il doit d’abord :",
      en: "As soon as the driver sits behind the wheel, he must first:"
    },
    options: {
      ar: [
        "يربط حزام الأمان، ثم يعدل المرايا، ثم يعدل المقعد، بهذا الترتيب",
        "يربط حزام الأمان، ثم يعدل المقعد، ثم يعدل المرايا، بهذا الترتيب",
        "يعدل المقعد، ثم يعدل المرايا، ثم يربط حزام الأمان، بهذا الترتيب"
      ],
      fr: [
        "Attacher la ceinture, puis régler les rétroviseurs, puis régler le siège, dans cet ordre",
        "Attacher la ceinture, puis régler le siège, puis régler les rétroviseurs, dans cet ordre",
        "Régler le siège, puis régler les rétroviseurs, puis attacher la ceinture, dans cet ordre"
      ],
      en: [
        "Fasten the seat belt, then adjust the mirrors, then adjust the seat, in this order",
        "Fasten the seat belt, then adjust the seat, then adjust the mirrors, in this order",
        "Adjust the seat, then adjust the mirrors, then fasten the seat belt, in this order"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 9,
    category: "safety",
    license: "G",
    question: {
      ar: "في كل يوم وقبل الانطلاق بالمركبة أو الدراجة لأول مرة، على السائق أن:",
      fr: "Chaque jour, avant de démarrer le véhicule ou la moto pour la première fois, le conducteur doit :",
      en: "Every day, before starting the vehicle or motorcycle for the first time, the driver must:"
    },
    options: {
      ar: [
        "يقوم بفحص روتيني لمختلف أنظمة المركبة",
        "لا يقوم بأي فحص طالما أن المحرك يعمل",
        "يستمع إلى نشرة الأحوال الجوية"
      ],
      fr: [
        "Effectuer une vérification routinière des différents systèmes du véhicule",
        "Ne faire aucune vérification tant que le moteur fonctionne",
        "Écouter le bulletin météo"
      ],
      en: [
        "Perform a routine check of the vehicle’s different systems",
        "Do no inspection as long as the engine works",
        "Listen to the weather forecast"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 10,
    category: "safety",
    license: "G",
    question: {
      ar: "لا بأس على السائق أثناء القيادة إذا:",
      fr: "Il n’y a pas de problème pour le conducteur pendant la conduite s’il :",
      en: "It is acceptable for the driver while driving if he:"
    },
    options: {
      ar: [
        "قرأ الصحيفة",
        "استعمل الهاتف",
        "استمع إلى الراديو بصوت منخفض"
      ],
      fr: [
        "Lit le journal",
        "Utilise le téléphone",
        "Écoute la radio à faible volume"
      ],
      en: [
        "Reads the newspaper",
        "Uses the phone",
        "Listens to the radio at low volume"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 11,
    category: "safety",
    license: "BC",
    question: {
      ar: "على السائق والراكب أن يربطوا حزام الأمان",
      fr: "Le conducteur et le passager doivent attacher leur ceinture de sécurité :",
      en: "The driver and passenger must fasten their seat belts:"
    },
    options: {
      ar: [
        "قبل تشغيل المحرك",
        "قبل الإنطلاق",
        "ضمن دقيقة من الإنطلاق"
      ],
      fr: [
        "Avant de démarrer le moteur",
        "Avant le départ",
        "Dans la minute suivant le départ"
      ],
      en: [
        "Before starting the engine",
        "Before moving off",
        "Within one minute of moving off"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 12,
    category: "safety",
    license: "BC",
    question: {
      ar: "الهدف من مسند الرأس الموجود أعلى المقعد هو",
      fr: "Le but de l’appuie-tête situé en haut du siège est :",
      en: "The purpose of the headrest located at the top of the seat is:"
    },
    options: {
      ar: [
        "إراحة الرأس أثناء الرحلة",
        "منع انكسار الرقبة أو العنق إذا تعرضت المركبة لصدمة من الخلف",
        "استعماله كوسادة للنوم ليلاً في الرحلات الطويلة"
      ],
      fr: [
        "Reposer la tête pendant le trajet",
        "Empêcher une fracture du cou ou de la nuque si le véhicule subit un choc arrière",
        "L’utiliser comme coussin pour dormir la nuit lors des longs trajets"
      ],
      en: [
        "To rest the head during the trip",
        "To prevent neck injury if the vehicle is hit from behind",
        "To use it as a pillow for sleeping at night during long trips"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 13,
    category: "safety",
    license: "G",
    question: {
      ar: "تقل مقدرة السائق على التركيز أثناء القيادة بسبب:",
      fr: "La capacité du conducteur à se concentrer diminue pendant la conduite à cause de :",
      en: "The driver's ability to concentrate while driving decreases due to:"
    },
    options: {
      ar: [
        "القيادة داخل المدينة",
        "الإرهاق والنعاس",
        "تمتعه بالحيوية والنشاط"
      ],
      fr: [
        "La conduite en ville",
        "La fatigue et la somnolence",
        "Le fait d’être actif et énergique"
      ],
      en: [
        "Driving in the city",
        "Fatigue and drowsiness",
        "Being energetic and active"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 14,
    category: "safety",
    license: "G",
    question: {
      ar: "استخدام الهاتف الخلوي أثناء القيادة يؤثر على قيادة السائق بشكل:",
      fr: "L’utilisation du téléphone portable pendant la conduite affecte la conduite de manière :",
      en: "Using a mobile phone while driving affects driving in a:"
    },
    options: {
      ar: [
        "سلبي وإيجابي معاً",
        "سلبي",
        "إيجابي"
      ],
      fr: [
        "Positive et négative à la fois",
        "Négative",
        "Positive"
      ],
      en: [
        "Both positive and negative",
        "Negative",
        "Positive"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 15,
    category: "safety",
    license: "G",
    question: {
      ar: "النصيحة الأولى للسائق المحتسي للكحول هي:",
      fr: "Le premier conseil pour un conducteur ayant consommé de l’alcool est :",
      en: "The first advice for a driver who consumed alcohol is:"
    },
    options: {
      ar: [
        "ألا يبالي للأمر",
        "ألا يقود حتى ينتهي مفعول الكحول",
        "أن يقود على سرعة منخفضة"
      ],
      fr: [
        "Ne pas s’en soucier",
        "Ne pas conduire jusqu’à disparition de l’effet de l’alcool",
        "Conduire à basse vitesse"
      ],
      en: [
        "Not to care about it",
        "Not to drive until the alcohol effect ends",
        "Drive at low speed"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 16,
    category: "safety",
    license: "G",
    question: {
      ar: "إن القيادة تحت تأثير الأدوية المنومة تكون:",
      fr: "Conduire sous l’effet de médicaments somnifères est :",
      en: "Driving under the influence of sleeping medications is:"
    },
    options: {
      ar: [
        "خطيرة",
        "غير خطيرة",
        "أقل تعباً"
      ],
      fr: [
        "Dangereuse",
        "Pas dangereuse",
        "Moins fatigante"
      ],
      en: [
        "Dangerous",
        "Not dangerous",
        "Less tiring"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 17,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا علقت دواسة الوقود أثناء القيادة عليك فوراً:",
      fr: "Si la pédale d’accélérateur reste coincée pendant la conduite, vous devez immédiatement :",
      en: "If the accelerator pedal gets stuck while driving, you must immediately:"
    },
    options: {
      ar: [
        "تضع الترس على الحيادي وتطفئ المحرك وتتوقف على جانب الطريق",
        "تصفر ترس السرعة",
        "تشد فرامل اليد"
      ],
      fr: [
        "Mettre au point mort, couper le moteur et s’arrêter sur le côté",
        "Réduire la vitesse",
        "Tirer le frein à main"
      ],
      en: [
        "Shift to neutral, turn off the engine, and stop on the roadside",
        "Reduce gear/speed",
        "Pull the handbrake"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 18,
    category: "safety",
    license: "BC",
    question: {
      ar: "إذا انفتح غطاء المحرك فجأة أثناء سير المركبة، عليك فوراً:",
      fr: "Si le capot du moteur s’ouvre soudainement pendant la conduite, vous devez immédiatement :",
      en: "If the engine hood suddenly opens while driving, you must immediately:"
    },
    options: {
      ar: [
        "تضغط على الفرامل بشدة",
        "تخفف السرعة تدريجياً وتتوقف المركبة إلى جانب الطريق",
        "تزيد سرعتك قليلاً"
      ],
      fr: [
        "Freiner brusquement",
        "Ralentir progressivement et s’arrêter sur le côté",
        "Accélérer légèrement"
      ],
      en: [
        "Brake hard",
        "Slow down تدريجياً and stop on the side",
        "Increase speed slightly"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 19,
    category: "safety",
    license: "G",
    question: {
      ar: "في حال المطر الشديد، وحتى يتفادى السائق المخاطر، يجب عليه أن يبدأ رحلته:",
      fr: "En cas de forte pluie, pour éviter les dangers, le conducteur doit commencer son trajet :",
      en: "In heavy rain, to avoid danger, the driver should start the trip:"
    },
    options: {
      ar: [
        "متأخراً عن المعتاد",
        "في وقت أكبر من المعتاد",
        "متأخراً بالخبر"
      ],
      fr: [
        "Plus tard que d’habitude",
        "Plus tôt que d’habitude",
        "En retard sans préparation"
      ],
      en: [
        "Later than usual",
        "Earlier than usual",
        "Late without preparation"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 20,
    category: "safety",
    license: "G",
    question: {
      ar: "قبل أن يصعد السائق إلى مركبته عليه أولاً أن:",
      fr: "Avant de monter dans son véhicule, le conducteur doit d’abord :",
      en: "Before getting into the vehicle, the driver must first:"
    },
    options: {
      ar: [
        "يربط حزام الأمان",
        "ينظر تحت المركبة ويدور حولها",
        "يتأكد أن لديه وقت كاف"
      ],
      fr: [
        "Attacher la ceinture",
        "Regarder sous et autour du véhicule",
        "S’assurer d’avoir assez de temps"
      ],
      en: [
        "Fasten the seatbelt",
        "Check under and around the vehicle",
        "Make sure he has enough time"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 21,
    category: "safety",
    license: "G",
    question: {
      ar: "يجب على سائق المركبة، أثناء القيادة على طرقات مزدحمة، أن يأخذ لمحة سريعة على المرايا مرة كل:",
      fr: "Sur une route encombrée, le conducteur doit jeter un coup d'œil aux rétroviseurs toutes les :",
      en: "While driving on busy roads, the driver should glance at the mirrors every:"
    },
    options: {
      ar: [
        "8 إلى 4 ثواني",
        "30 ثانية",
        "45 ثانية"
      ],
      fr: [
        "Toutes les 4 à 8 secondes",
        "30 secondes",
        "45 secondes"
      ],
      en: [
        "Every 4 to 8 seconds",
        "Every 30 seconds",
        "Every 45 seconds"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 22,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا أراد السائق أن ينعطف بمركبته إلى جهة اليمين، عليه قبل الانعطاف أن ينظر في:",
      fr: "Si le conducteur veut tourner à droite, il doit avant de tourner regarder :",
      en: "If a driver wants to turn right, before turning he must look at:"
    },
    options: {
      ar: [
        "كل المرايا وخاصة في المرآة اليمنى والبقعة العمياء",
        "المرآة اليمنى فقط",
        "المرآة اليسرى فقط"
      ],
      fr: [
        "Tous les rétroviseurs وخاصة le rétroviseur droit et l’angle mort",
        "Le rétroviseur droit فقط",
        "Le rétroviseur gauche فقط"
      ],
      en: [
        "All mirrors especially the right mirror and blind spot",
        "Right mirror only",
        "Left mirror only"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 23,
    category: "safety",
    license: "G",
    question: {
      ar: "الخطر الأكبر الذي تشكله المركبات المتوقفة إلى جانب الرصيف الأيمن على السائق المار بقربها هو:",
      fr: "Le plus grand danger des véhicules stationnés sur le côté droit pour un conducteur qui passe à proximité est :",
      en: "The greatest danger of parked vehicles on the right side for a passing driver is:"
    },
    options: {
      ar: [
        "ارتفاع صوت الراديو منها",
        "رمي النفايات منها",
        "خروج المشاة وخاصة الأطفال من بين تلك المركبات المتوقفة"
      ],
      fr: [
        "Le bruit élevé de la radio",
        "Le jet de déchets",
        "La sortie de piétons وخاصة enfants entre les véhicules"
      ],
      en: [
        "Loud radio noise",
        "Throwing garbage",
        "Pedestrians especially children emerging between vehicles"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 24,
    category: "safety",
    license: "G",
    question: {
      ar: "الخطر الذي تشكله المركبات المتوقفة إلى جانب الرصيف الأيمن على السائق المار بقربها هو:",
      fr: "Le danger des véhicules stationnés à droite pour un conducteur passant à proximité est :",
      en: "The danger of parked vehicles on the right side for a passing driver is:"
    },
    options: {
      ar: [
        "احتمال انطلاق إحداها ودخولها السير فجأة",
        "فتح صندوق الأمتعة",
        "إصدارها صوت جهاز إنذار السرقة"
      ],
      fr: [
        "Le démarrage soudain d’un véhicule",
        "L’ouverture du coffre",
        "Le déclenchement de l’alarme"
      ],
      en: [
        "Sudden movement into traffic",
        "Opening the trunk",
        "Alarm sound"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 25,
    category: "safety",
    license: "G",
    question: {
      ar: "كسائق احترازي عليك أن:",
      fr: "En tant que conducteur prudent, vous devez :",
      en: "As a defensive driver, you should:"
    },
    options: {
      ar: [
        "لا تتنازل عن أفضليتك بالمرور",
        "تتنازل عن أفضليتك بالمرور منعاً للحادث",
        "تأخذ أفضليتك بالمرور عنوة لأنها من حقك"
      ],
      fr: [
        "Ne jamais céder votre priorité",
        "Céder votre priorité pour éviter un accident",
        "Prendre votre priorité de force"
      ],
      en: [
        "Never give up your priority",
        "Give up your priority to avoid an accident",
        "Force your priority"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 26,
    category: "safety",
    license: "G",
    question: {
      ar: "أثناء القيادة، وقبل استعمالك للفرامل، عليك أولاً أن تنظر:",
      fr: "Pendant la conduite, avant d'utiliser les freins, vous devez d'abord regarder :",
      en: "While driving, before using the brakes, you must first look:"
    },
    options: {
      ar: [
        "إلى يسارك",
        "إلى يمينك",
        "في المرايا وخاصة في المرآة الداخلية"
      ],
      fr: [
        "À gauche",
        "À droite",
        "Dans les rétroviseurs وخاصة le rétroviseur intérieur"
      ],
      en: [
        "To your left",
        "To your right",
        "In the mirrors especially the rear-view mirror"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 27,
    category: "safety",
    license: "BC",
    question: {
      ar: "إن نظام منع انغلاق الفرامل (ABS) في المركبات الحديثة في حالة الفرملة الشديدة:",
      fr: "Le système ABS dans les véhicules modernes lors d'un freinage شديد :",
      en: "The ABS system in modern vehicles during hard braking:"
    },
    options: {
      ar: [
        "من الطبيعي أن يسبب ارتجاجاً في دواسة الفرامل فقط",
        "من الطبيعي أن يصدر ضوضاء وأن يسبب ارتجاجاً في دواسة الفرامل",
        "ليس من الطبيعي أن يصدر ضوضاء وأن يسبب ارتجاجاً في دواسة الفرامل"
      ],
      fr: [
        "Provoque seulement des vibrations",
        "Produit du bruit et des vibrations",
        "Ne produit ni bruit ni vibration"
      ],
      en: [
        "Causes only vibration",
        "Produces noise and vibration",
        "Does not produce noise or vibration"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 28,
    category: "safety",
    license: "BC",
    question: {
      ar: "من حسنات نظام منع انغلاق الفرامل (ABS) في المركبات الحديثة، في حالة الفرملة الشديدة، أنه:",
      fr: "Un avantage du système ABS lors d’un freinage شديد est :",
      en: "One advantage of ABS during hard braking is:"
    },
    options: {
      ar: [
        "لا يمنع انغلاق الفرامل، ولا يمكن السائق من توجيه المركبة",
        "يمنع انغلاق الفرامل فقط",
        "يمنع انغلاق الفرامل، ويمكن السائق من توجيه المركبة"
      ],
      fr: [
        "N’empêche pas le blocage et ne permet pas de diriger",
        "Empêche seulement le blocage",
        "Empêche le blocage et permet de diriger"
      ],
      en: [
        "Does not prevent locking and cannot steer",
        "Only prevents locking",
        "Prevents locking and allows steering"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 29,
    category: "safety",
    license: "G",
    question: {
      ar: "عند تعرض مركبتك للانزلاق، عليك، وبسرعة بديهة، أن:",
      fr: "Si votre véhicule dérape, vous devez immédiatement :",
      en: "If your vehicle skids, you must immediately:"
    },
    options: {
      ar: [
        "تزيد السرعة",
        "ترفع قدمك عن دواسة الوقود ولا تضغط على الفرامل، وأن توجه المركبة إلى الجهة التي تنزلق بها",
        "تضغط الفرامل وتوجه مركبتك بعكس اتجاه مؤخرتها"
      ],
      fr: [
        "Accélérer",
        "Relâcher l'accélérateur et diriger dans le sens du dérapage",
        "Freiner et diriger à l’opposé"
      ],
      en: [
        "Increase speed",
        "Release accelerator and steer in direction of skid",
        "Brake and steer opposite"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 30,
    category: "safety",
    license: "G",
    question: {
      ar: "إن تركك لمسافة أمان بين مركبتك والمركبة التي أمامك مباشرة أثناء السير يمكنك من:",
      fr: "Garder une distance de sécurité vous permet de :",
      en: "Keeping a safe distance allows you to:"
    },
    options: {
      ar: [
        "قراءة لوحة تسجيل تلك المركبة",
        "التمتع بالمناظر الخلابة حولك",
        "تفادي اصطدامك بها في حال توقفت فجأة"
      ],
      fr: [
        "Lire la plaque du véhicule",
        "Profiter du paysage",
        "Éviter une collision en cas d’arrêt soudain"
      ],
      en: [
        "Read the license plate",
        "Enjoy scenery",
        "Avoid collision if it stops suddenly"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 31,
    category: "law",
    license: "G",
    question: {
      ar: "لحظة انطلاق المركبة التي أمامك مباشرة عند تحول ضوء إشارة المرور من اللون الأحمر إلى اللون الأخضر عليك أن:",
      fr: "Lorsque le véhicule devant démarre au feu vert, vous devez :",
      en: "When the vehicle ahead starts at green light, you must:"
    },
    options: {
      ar: [
        "تتأكد من خلو الطريق ثم تنطلق بمركبتك",
        "تزمر",
        "تنطلق فوراً بمركبتك خلفها وبسرعة"
      ],
      fr: [
        "Vérifier que la route est libre puis démarrer",
        "Klaxonner",
        "Démarrer فوراً بسرعة"
      ],
      en: [
        "Make sure the road is clear then go",
        "Honk",
        "Start immediately fast"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 32,
    category: "law",
    license: "G",
    question: {
      ar: "عندما تقترب بمركبتك من إشارة مرور ضوئية تصدر ضوء واحد أصفر متقطع، يجب عليك أن:",
      fr: "Lorsque vous approchez d’un feu clignotant jaune, vous devez :",
      en: "When approaching a flashing yellow traffic light, you must:"
    },
    options: {
      ar: [
        "تربط حزام الأمان",
        "تتوقف",
        "تعطي الأفضلية"
      ],
      fr: [
        "Attacher la ceinture",
        "S’arrêter",
        "Céder le passage"
      ],
      en: [
        "Fasten seatbelt",
        "Stop",
        "Give priority"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 33,
    category: "law",
    license: "G",
    question: {
      ar: "إن وضع حزام الأمان:",
      fr: "Le port de la ceinture de sécurité est :",
      en: "Wearing a seatbelt is:"
    },
    options: {
      ar: [
        "غير ضروري بالمطلق",
        "ضروري للراكبين الأماميين فقط",
        "ضروري لجميع ركاب السيارة"
      ],
      fr: [
        "Pas nécessaire",
        "Seulement pour les passagers avant",
        "Pour tous les passagers"
      ],
      en: [
        "Not necessary",
        "Only for front passengers",
        "For all passengers"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 34,
    category: "safety",
    license: "G",
    question: {
      ar: "في حال حصول عطل فجائي في السيارة وأنت تسير بها على الطريق العام، عليك أن:",
      fr: "En cas de panne soudaine sur la route, vous devez :",
      en: "If your car suddenly breaks down on the road, you must:"
    },
    options: {
      ar: [
        "تتابع السير إلى المكان الذي تقصده",
        "تتوقف السيارة فوراً حيث أنت",
        "تغادر الطريق العام عند أقرب مسافة"
      ],
      fr: [
        "Continuer jusqu’à destination",
        "S’arrêter immédiatement",
        "Quitter la route dès que possible"
      ],
      en: [
        "Continue driving",
        "Stop immediately",
        "Leave the road as soon as possible"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 35,
    category: "safety",
    license: "G",
    question: {
      ar: "يجب على السائق أن يمسك بالمقود:",
      fr: "Le conducteur doit tenir le volant :",
      en: "The driver must hold the steering wheel:"
    },
    options: {
      ar: [
        "بأصابع اليدين",
        "بكلتا اليدين",
        "بيد واحدة"
      ],
      fr: [
        "Avec les doigts",
        "Avec les deux mains",
        "Avec une seule main"
      ],
      en: [
        "With fingers",
        "With both hands",
        "With one hand"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 36,
    category: "law",
    license: "C",
    question: {
      ar: "لا يجوز أن يزيد عدد الركاب في الشاحنة المحملة عن:",
      fr: "Le nombre de passagers dans un camion chargé ne doit pas dépasser :",
      en: "The number of passengers in a loaded truck must not exceed:"
    },
    options: {
      ar: [
        "لا يحق لها نقل أي شخص",
        "العدد المحدد في الرخصة",
        "شخص واحد"
      ],
      fr: [
        "Aucun passager",
        "Le nombre indiqué sur la licence",
        "Une seule personne"
      ],
      en: [
        "No passengers allowed",
        "Number specified in license",
        "One person"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 37,
    category: "safety",
    license: "C",
    question: {
      ar: "عند ربط القاطرة بالمقطورة، على السائق أن يتأكد من أن:",
      fr: "Lors de l’attelage d’une remorque, le conducteur doit vérifier que :",
      en: "When coupling a trailer, the driver must ensure that:"
    },
    options: {
      ar: [
        "المقطورة تلامس الأرض على رجل واحدة",
        "مكابح المقطورة غير مشدودة وأرجلها تلامس الأرض",
        "مكابح المقطورة مشدودة وأرجلها تلامس الأرض"
      ],
      fr: [
        "La remorque touche le sol sur une seule jambe",
        "Freins non serrés et supports au sol",
        "Freins serrés et supports au sol"
      ],
      en: [
        "Trailer touches ground on one leg",
        "Brakes not engaged and legs on ground",
        "Brakes engaged and legs on ground"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 38,
    category: "safety",
    license: "C",
    question: {
      ar: "بعد ربط القاطرة بالمقطورة على السائق أن ينتبه إلى أن:",
      fr: "Après avoir attelé la remorque, le conducteur doit vérifier que :",
      en: "After coupling the trailer, the driver must ensure that:"
    },
    options: {
      ar: [
        "الأسلاك الكهربائية فقط موصولة بشكل جيد",
        "خطوط الهواء فقط موصولة بشكل جيد",
        "خطوط الهواء والأسلاك الكهربائية موصولة بشكل جيد"
      ],
      fr: [
        "Seulement les câbles électriques sont bien connectés",
        "Seulement les conduites d’air sont bien connectées",
        "Les câbles électriques et les conduites d’air sont bien connectés"
      ],
      en: [
        "Only electrical cables are properly connected",
        "Only air lines are properly connected",
        "Both air lines and electrical cables are properly connected"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 39,
    category: "safety",
    license: "C",
    question: {
      ar: "عند الشروع بربط القاطرة بالمقطورة على السائق أن:",
      fr: "Lors de l’attelage de la remorque, le conducteur doit :",
      en: "When coupling the trailer, the driver must:"
    },
    options: {
      ar: [
        "يرجع القاطرة ببطء تحت المقطورة",
        "يرجع القاطرة بسرعة تحت المقطورة",
        "يرجع القاطرة ببطء فوق المقطورة"
      ],
      fr: [
        "Reculer lentement sous la remorque",
        "Reculer rapidement sous la remorque",
        "Reculer au-dessus de la remorque"
      ],
      en: [
        "Reverse slowly under the trailer",
        "Reverse quickly under the trailer",
        "Reverse over the trailer"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 40,
    category: "safety",
    license: "C",
    question: {
      ar: "عند فصل القاطرة عن المقطورة، على السائق أن يختار مكاناً:",
      fr: "Lors du dételage, le conducteur doit choisir un endroit :",
      en: "When uncoupling, the driver must choose a place:"
    },
    options: {
      ar: [
        "منحدراً وليناً",
        "منحدراً وصلباً",
        "مسطحاً وليناً"
      ],
      fr: [
        "En pente et mou",
        "En pente et dur",
        "Plat et mou"
      ],
      en: [
        "Sloped and soft",
        "Sloped and hard",
        "Flat and soft"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 41,
    category: "safety",
    license: "C",
    question: {
      ar: "عند فصل القاطرة عن المقطورة على السائق أن:",
      fr: "Lors du dételage, le conducteur doit :",
      en: "When uncoupling the trailer, the driver must:"
    },
    options: {
      ar: [
        "يشد فرامل المقطورة ولا ينزل أرجلها إلى أقصى حد",
        "لا يشد فرامل المقطورة وينزل أرجلها إلى أقصى حد",
        "يشد فرامل المقطورة وينزل أرجلها إلى أقصى حد"
      ],
      fr: [
        "Serrer les freins sans descendre complètement les supports",
        "Ne pas serrer les freins et descendre complètement les supports",
        "Serrer les freins et descendre complètement les supports"
      ],
      en: [
        "Apply brakes without lowering legs fully",
        "Do not apply brakes and lower legs fully",
        "Apply brakes and lower legs fully"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 42,
    category: "safety",
    license: "C",
    question: {
      ar: "لسائق المركبة الثقيلة بقع عمياء حول مركبته وعددها:",
      fr: "Un conducteur de véhicule lourd a des angles morts, leur nombre est :",
      en: "A heavy vehicle driver has blind spots around the vehicle, their number is:"
    },
    options: {
      ar: [
        "ثلاث بقع عمياء",
        "ثماني بقع عمياء على الأقل",
        "أربع بقع عمياء على الأقل"
      ],
      fr: [
        "Trois angles morts",
        "Huit angles morts au moins",
        "Quatre angles morts au moins"
      ],
      en: [
        "Three blind spots",
        "At least eight blind spots",
        "At least four blind spots"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 43,
    category: "safety",
    license: "C",
    question: {
      ar: "على سائق المركبة الثقيلة أن ينتبه إلى ارتفاع مركبته خاصة:",
      fr: "Le conducteur d’un véhicule lourd doit faire attention à la hauteur de son véhicule خاصة :",
      en: "A heavy vehicle driver must pay attention to vehicle height especially:"
    },
    options: {
      ar: [
        "عند مروره فوق جسر",
        "عند مروره تحت جسر أو دخوله في نفق",
        "عندما يقود على طرقات مفتوحة"
      ],
      fr: [
        "En passant sur un pont",
        "En passant sous un pont ou dans un tunnel",
        "Sur routes ouvertes"
      ],
      en: [
        "When passing over a bridge",
        "When passing under a bridge or in a tunnel",
        "On open roads"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 44,
    category: "safety",
    license: "C",
    question: {
      ar: "على كل سائق مركبة ثقيلة أن ينتبه إلى عرض مركبته خاصة:",
      fr: "Le conducteur d’un véhicule lourd doit faire attention à la largeur خاصة :",
      en: "A heavy vehicle driver must pay attention to vehicle width especially:"
    },
    options: {
      ar: [
        "عند أخذه قسطاً من الراحة",
        "عند قيادته في الطرق المفتوحة",
        "عند تجاوزه لمركبة أخرى"
      ],
      fr: [
        "Pendant le repos",
        "Sur routes ouvertes",
        "Lors du dépassement"
      ],
      en: [
        "While resting",
        "On open roads",
        "When overtaking another vehicle"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 45,
    category: "safety",
    license: "C",
    question: {
      ar: "على سائق المركبة الثقيلة أن:",
      fr: "Le conducteur d’un véhicule lourd doit :",
      en: "A heavy vehicle driver must:"
    },
    options: {
      ar: [
        "يتفادى الرجوع إلى الخلف في الأماكن المكتظة",
        "يرجع إلى الخلف بعد التقاطع مباشرة",
        "يرجع إلى الخلف في الأماكن المكتظة"
      ],
      fr: [
        "Éviter de reculer dans les zones encombrées",
        "Reculer après intersection",
        "Reculer dans les zones encombrées"
      ],
      en: [
        "Avoid reversing in crowded places",
        "Reverse after intersection",
        "Reverse in crowded places"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 46,
    category: "safety",
    license: "C",
    question: {
      ar: "على سائق المركبة الثقيلة أن:",
      fr: "Le conducteur d’un véhicule lourd doit :",
      en: "A heavy vehicle driver must:"
    },
    options: {
      ar: [
        "يتفادى الرجوع إلى الخلف في الأماكن المكتظة",
        "يرجع إلى الخلف بعد التقاطع مباشرة",
        "يرجع إلى الخلف في الأماكن المكتظة"
      ],
      fr: [
        "Éviter de reculer dans les zones encombrées",
        "Reculer après l’intersection",
        "Reculer dans les zones encombrées"
      ],
      en: [
        "Avoid reversing in crowded places",
        "Reverse after intersection",
        "Reverse in crowded places"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 47,
    category: "safety",
    license: "C",
    question: {
      ar: "التعامل مع المركبات الثقيلة يختلف عنه مع المركبات الصغيرة، فعند انعطاف سائق المركبة الثقيلة إلى اليمين:",
      fr: "Le comportement des poids lourds diffère. Lorsqu’un camion tourne à droite :",
      en: "Handling heavy vehicles differs. When a heavy vehicle turns right:"
    },
    options: {
      ar: [
        "يجب ترك مسافة كافية لجهة اليمين",
        "لا يجب ترك مسافة كافية لجهة اليمين",
        "يجب ترك مسافة كافية في الأمام"
      ],
      fr: [
        "Laisser un espace suffisant à droite",
        "Ne pas laisser d’espace à droite",
        "Laisser un espace à l’avant"
      ],
      en: [
        "Leave enough space on the right",
        "Do not leave space on the right",
        "Leave space in front"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 48,
    category: "safety",
    license: "C",
    question: {
      ar: "حين تقود مركبتك الثقيلة في منعطف يسار، ولكي تتفادى عبور عجلاتك اليسرى الخلفية لخط وسط الطريق، عليك أن:",
      fr: "Dans un virage à gauche avec un véhicule lourd, pour éviter que les roues arrière ne franchissent la ligne centrale :",
      en: "When driving a heavy vehicle in a left turn, to avoid rear wheels crossing the center line:"
    },
    options: {
      ar: [
        "تزيد سرعتك خلال المنعطف",
        "تأخذ يمينك قليلاً خلال المنعطف",
        "تأخذ أقصى يسارك خلال المنعطف"
      ],
      fr: [
        "Augmenter la vitesse",
        "Se décaler légèrement à droite",
        "Prendre le maximum à gauche"
      ],
      en: [
        "Increase speed",
        "Move slightly right",
        "Take the far left"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 49,
    category: "safety",
    license: "C",
    question: {
      ar: "حين تقود مركبتك الثقيلة في منعطف يمين، ولكي تتفادى نزول عجلاتك اليمنى الخلفية عن حافة الطريق، عليك أن:",
      fr: "Dans un virage à droite avec un véhicule lourd, pour éviter que les roues arrière sortent de la route :",
      en: "When driving a heavy vehicle in a right turn, to avoid rear wheels leaving the road:"
    },
    options: {
      ar: [
        "تقود مركبتك في وسط مسربك",
        "تزيد سرعتك خلال المنعطف",
        "تأخذ أقصى يمينك خلال المنعطف"
      ],
      fr: [
        "Conduire au centre de la voie",
        "Augmenter la vitesse",
        "Prendre le maximum à droite"
      ],
      en: [
        "Drive in lane center",
        "Increase speed",
        "Take far right"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 50,
    category: "safety",
    license: "C",
    question: {
      ar: "عند اقترابك من رأس مرتفع للطريق، عليك أن تتوقع خلف القمة:",
      fr: "En approchant du sommet d’une côte, vous devez prévoir derrière :",
      en: "When approaching the top of a hill, you must expect:"
    },
    options: {
      ar: [
        "طريق مستقيم",
        "عدم وجود عقبات",
        "وجود عقبات"
      ],
      fr: [
        "Route droite",
        "Aucun obstacle",
        "Présence d’obstacles"
      ],
      en: [
        "Straight road",
        "No obstacles",
        "Obstacles present"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 51,
    category: "safety",
    license: "G",
    question: {
      ar: "للسيطرة على مركبتك وأنت تقودها على المنحدرات، يجب عليك أن تعتمد بشكل أساسي على استعمال:",
      fr: "Pour contrôler le véhicule en descente, vous devez principalement utiliser :",
      en: "To control your vehicle on slopes, you should mainly use:"
    },
    options: {
      ar: [
        "ترس منخفض",
        "فرامل اليد",
        "الفرامل"
      ],
      fr: [
        "Vitesse basse",
        "Frein à main",
        "Freins"
      ],
      en: [
        "Low gear",
        "Handbrake",
        "Brakes"
      ]
    },
    correct: 0
  }
,
  {
    type: "normal",
    id: 52,
    category: "safety",
    license: "C",
    question: {
      ar: "إذا دخلت منحدراً طويلاً بمركبتك الثقيلة وتأخرت بالانتقال إلى ترس سرعة منخفض وأصبحت سرعتك عالية فسوف:",
      fr: "Si vous entrez dans une longue descente avec votre véhicule lourd et que vous tardez à passer à une vitesse basse, votre vitesse deviendra élevée et :",
      en: "If you enter a long downhill road with your heavy vehicle and delay shifting to a low gear, and your speed becomes high, then:"
    },
    options: {
      ar: [
        "يصبح بإمكانك تجاوز المركبات بالجملة وبشكل آمن",
        "يصبح من المستحيل الانتقال إلى ترس سرعة منخفض للسيطرة على المركبة",
        "يصبح من السهل عليك الانتقال إلى ترس سرعة منخفض"
      ],
      fr: [
        "Vous pourrez dépasser plusieurs véhicules en toute sécurité",
        "Il deviendra impossible de passer à une vitesse basse pour contrôler le véhicule",
        "Il deviendra facile de passer à une vitesse basse"
      ],
      en: [
        "You will be able to overtake many vehicles safely",
        "It will become impossible to shift to a low gear to control the vehicle",
        "It will become easy to shift to a low gear"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 53,
    category: "safety",
    license: "C",
    question: {
      ar: "عند قيادتك لمركبتك الثقيلة صعوداً متواصلاً يجب عليك:",
      fr: "Lorsque vous conduisez votre véhicule lourd dans une montée continue, vous devez :",
      en: "When driving your heavy vehicle on a continuous uphill road, you must:"
    },
    options: {
      ar: [
        "عدم السماح للمركبات الصغيرة بتجاوزك",
        "التزام الجهة اليسرى",
        "تجنب إجهاد المحرك"
      ],
      fr: [
        "Ne pas permettre aux petits véhicules de vous dépasser",
        "Rester du côté gauche",
        "Éviter de fatiguer le moteur"
      ],
      en: [
        "Not allow small vehicles to overtake you",
        "Keep to the left side",
        "Avoid straining the engine"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 54,
    category: "safety",
    license: "C",
    question: {
      ar: "عند قيادتك لمركبتك الثقيلة صعوداً متواصلاً عليك:",
      fr: "Lorsque vous conduisez votre véhicule lourd dans une montée continue, vous devez :",
      en: "When driving your heavy vehicle on a continuous uphill road, you should:"
    },
    options: {
      ar: [
        "التزام أقصى اليمين قدر المستطاع",
        "التزام أقصى اليسار قدر المستطاع",
        "التحقق من كمية الوقود بشكل مستمر"
      ],
      fr: [
        "Rester le plus à droite possible",
        "Rester le plus à gauche possible",
        "Vérifier la quantité de carburant constamment"
      ],
      en: [
        "Keep as far right as possible",
        "Keep as far left as possible",
        "Continuously check the fuel level"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 55,
    category: "safety",
    license: "C",
    question: {
      ar: "إذا كنت تريد أن تتجاوز بمركبتك الثقيلة مركبة أخرى صعوداً وكان ذلك سيستغرق وقتاً طويلاً فعليك أن:",
      fr: "Si vous voulez dépasser avec votre véhicule lourd un autre véhicule en montée et que cela prendra beaucoup de temps, vous devez :",
      en: "If you want to overtake another vehicle uphill with your heavy vehicle and it will take a long time, you must:"
    },
    options: {
      ar: [
        "تصرف النظر عن هذا التجاوز",
        "تزيد من سرعتك فوق الحد المسموح",
        "تصر على القيام بهذا التجاوز"
      ],
      fr: [
        "Renoncer à ce dépassement",
        "Augmenter votre vitesse au-dessus de la limite autorisée",
        "Insister pour effectuer ce dépassement"
      ],
      en: [
        "Give up this overtaking",
        "Increase your speed above the permitted limit",
        "Insist on doing this overtaking"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 56,
    category: "safety",
    license: "C",
    question: {
      ar: "قيادة المركبة الثقيلة على طريق وعرة تحتم عليك أن:",
      fr: "Conduire un véhicule lourd sur une route difficile vous oblige à :",
      en: "Driving a heavy vehicle on a rough road requires you to:"
    },
    options: {
      ar: [
        "تركز اهتمامك إلى الخلف",
        "تكون حذراً وأن تخطط للطريق مسبقاً",
        "تزيد من سرعتك قليلاً"
      ],
      fr: [
        "Concentrer votre attention vers l’arrière",
        "Être prudent et planifier la route à l’avance",
        "Augmenter légèrement votre vitesse"
      ],
      en: [
        "Focus your attention behind you",
        "Be careful and plan the road ahead",
        "Increase your speed slightly"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 57,
    category: "safety",
    license: "G",
    question: {
      ar: "التواصل عن طريق التقاء النظر بين السائقين عند التقاطع:",
      fr: "La communication par contact visuel entre les conducteurs à une intersection :",
      en: "Communication through eye contact between drivers at an intersection:"
    },
    options: {
      ar: [
        "هو أمر محظر على السائقين",
        "هو من نوع التنبيه",
        "يساعد على حل الالتباس المروري بين السائقين"
      ],
      fr: [
        "Est interdit aux conducteurs",
        "Est un type d’avertissement",
        "Aide à résoudre la confusion de circulation entre les conducteurs"
      ],
      en: [
        "Is prohibited for drivers",
        "Is a type of warning",
        "Helps resolve traffic confusion between drivers"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 58,
    category: "safety",
    license: "G",
    question: {
      ar: "لمنع الحوادث يقع على سائق المركبة أن يتفادى قدر استطاعته:",
      fr: "Pour éviter les accidents, le conducteur doit éviter autant que possible :",
      en: "To prevent accidents, the driver must avoid as much as possible:"
    },
    options: {
      ar: [
        "غسل مركبته على الطريق",
        "التوقف التدريجي",
        "الرجوع بمركبته إلى الخلف"
      ],
      fr: [
        "Laver son véhicule sur la route",
        "L’arrêt progressif",
        "Reculer avec son véhicule"
      ],
      en: [
        "Washing his vehicle on the road",
        "Gradual stopping",
        "Reversing his vehicle"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 59,
    category: "safety",
    license: "G",
    question: {
      ar: "يلزمك القانون بإعطاء الأفضلية:",
      fr: "La loi vous oblige à donner la priorité :",
      en: "The law requires you to give priority to:"
    },
    options: {
      ar: [
        "للمركبات المبطئة",
        "للحافلات المدرسية المستخدمة لأنوار التحذير.",
        "للمركبات المسرعة"
      ],
      fr: [
        "Aux véhicules lents",
        "Aux autobus scolaires utilisant les feux d’avertissement",
        "Aux véhicules rapides"
      ],
      en: [
        "Slow vehicles",
        "School buses using warning lights",
        "Speeding vehicles"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 60,
    category: "law",
    license: "G",
    question: {
      ar: "يلزم القانون مجمل السائقين بإعطاء الأفضلية للمركبات:",
      fr: "La loi oblige tous les conducteurs à céder la priorité aux véhicules :",
      en: "The law requires all drivers to give priority to vehicles:"
    },
    options: {
      ar: [
        "الموجودة إلى يمين المركبة",
        "الداخلة إلى المستديرة",
        "الموجودة داخل المستديرة"
      ],
      fr: [
        "À droite",
        "Entrant dans le rond-point",
        "Déjà dans le rond-point"
      ],
      en: [
        "On the right",
        "Entering the roundabout",
        "Already inside the roundabout"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 61,
    category: "law",
    license: "G",
    question: {
      ar: "القانون يسمح بترك المركبة (إيقافها وتركها) بشكل موازٍ للرصيف على طريق ذو مسلكين متعاكسين:",
      fr: "La loi permet de stationner parallèlement au trottoir sur une route à double sens :",
      en: "The law allows parking parallel to the curb on a two-way road:"
    },
    options: {
      ar: [
        "على يسار الطريق",
        "لا يهم الجهة طالما أنها لا تعيق حركة السير",
        "على يمين اتجاه سير المركبة"
      ],
      fr: [
        "À gauche",
        "N'importe quel côté si cela ne gêne pas",
        "À droite dans le sens de circulation"
      ],
      en: [
        "On the left side",
        "Either side if it doesn't obstruct traffic",
        "On the right in direction of travel"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 62,
    category: "safety",
    license: "G",
    question: {
      ar: "إسراف سائق المركبة في الطعام:",
      fr: "Manger excessivement pour un conducteur :",
      en: "Overeating for a driver:"
    },
    options: {
      ar: [
        "يمكنه من القيادة على سرعات عالية جداً",
        "يسبب له البلادة وصعوبة في اتخاذ القرارات الصائبة خلال القيادة",
        "يمكنه من القيادة بشكل أسلم"
      ],
      fr: [
        "Permet de conduire très vite",
        "Provoque lenteur et difficulté à prendre des décisions",
        "Permet une conduite plus sûre"
      ],
      en: [
        "Allows very high speed driving",
        "Causes sluggishness and poor decisions",
        "Allows safer driving"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 63,
    category: "safety",
    license: "G",
    question: {
      ar: "قلة النوم لسائق المركبة:",
      fr: "Le manque de sommeil pour un conducteur :",
      en: "Lack of sleep for a driver:"
    },
    options: {
      ar: [
        "تساعده على الانتباه",
        "تبطئ ردات فعله أثناء القيادة وتسبب له فقدان طفيف للذاكرة",
        "تساعده على تحسين ردة فعله"
      ],
      fr: [
        "Améliore l’attention",
        "Ralentit les réactions et affecte la mémoire",
        "Améliore les réflexes"
      ],
      en: [
        "Improves attention",
        "Slows reactions and affects memory",
        "Improves reaction time"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 64,
    category: "safety",
    license: "G",
    question: {
      ar: "خلال الرحلات الطويلة، على سائق المركبة أن يتوقف للراحة كل:",
      fr: "Lors des longs trajets, le conducteur doit s’arrêter pour se reposer toutes les :",
      en: "During long trips, a driver should stop to rest every:"
    },
    options: {
      ar: [
        "4 ساعات",
        "8 ساعات",
        "10 ساعات"
      ],
      fr: [
        "4 heures",
        "8 heures",
        "10 heures"
      ],
      en: [
        "4 hours",
        "8 hours",
        "10 hours"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 65,
    category: "safety",
    license: "G",
    question: {
      ar: "خلال الرحلات الطويلة، من الأفضل لسائق المركبة أن يتوقف للراحة كل:",
      fr: "Lors des longs trajets, il est préférable que le conducteur s’arrête pour se reposer tous les :",
      en: "During long trips, it is الأفضل for the driver to stop for rest every:"
    },
    options: {
      ar: [
        "900 كم",
        "750 كم",
        "250 كم"
      ],
      fr: [
        "900 km",
        "750 km",
        "250 km"
      ],
      en: [
        "900 km",
        "750 km",
        "250 km"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 66,
    category: "safety",
    license: "G",
    question: {
      ar: "تأثير الكحول على سائق المركبة أثناء القيادة:",
      fr: "L’effet de l’alcool sur le conducteur أثناء القيادة :",
      en: "The effect of alcohol on a driver while driving:"
    },
    options: {
      ar: [
        "يشكل خطراً على السائق",
        "يشكل خطراً على الآخرين فقط",
        "يمكن أن يكون قاتلاً للسائقين وللآخرين"
      ],
      fr: [
        "Danger pour le conducteur",
        "Danger seulement pour les autres",
        "Peut être mortel pour tous"
      ],
      en: [
        "Danger for the driver",
        "Danger only for others",
        "Can be fatal for driver and others"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 67,
    category: "safety",
    license: "G",
    question: {
      ar: "خلال الرحلات الطويلة، على سائق المركبة أن:",
      fr: "Lors des longs trajets, le conducteur doit :",
      en: "During long trips, the driver must:"
    },
    options: {
      ar: [
        "يتجنب عقاقير اليقظة كلياً",
        "يستمر بالقيادة دون التوقف للراحة",
        "يتناول عقاقير اليقظة باستمرار"
      ],
      fr: [
        "Éviter totalement les stimulants",
        "Continuer sans repos",
        "Prendre des stimulants en continu"
      ],
      en: [
        "Avoid stimulants completely",
        "Continue driving without rest",
        "Take stimulants continuously"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 68,
    category: "safety",
    license: "G",
    question: {
      ar: "أفضل وسيلة ليعرف السائق مدى تأثير الدواء الطبي على القيادة هي أن:",
      fr: "La meilleure façon de connaître l’effet d’un médicament est :",
      en: "The best way to know how a medicine affects driving is to:"
    },
    options: {
      ar: [
        "يجربه على سائق آخر",
        "يسأل الطبيب المعالج أو الصيدلي",
        "يسأل أحد السائقين المجربين"
      ],
      fr: [
        "Le tester sur un autre conducteur",
        "Demander au médecin ou pharmacien",
        "Demander à un conducteur expérimenté"
      ],
      en: [
        "Try it on another driver",
        "Ask a doctor or pharmacist",
        "Ask an experienced driver"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 69,
    category: "safety",
    license: "G",
    question: {
      ar: "تناول الكحول أو المخدرات أثناء القيادة يولد لدى السائق شعوراً زائفاً:",
      fr: "L’alcool ou la drogue donne un faux sentiment de :",
      en: "Alcohol or drugs create a false feeling of:"
    },
    options: {
      ar: [
        "بالغضب",
        "بالشجاعة والإقدام",
        "بالخوف"
      ],
      fr: [
        "Colère",
        "Courage et audace",
        "Peur"
      ],
      en: [
        "Anger",
        "Courage and boldness",
        "Fear"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 70,
    category: "safety",
    license: "G",
    question: {
      ar: "عندما تريد أن تتجاوز بمركبتك مركبة أخرى، عليك أن:",
      fr: "Lorsque vous voulez dépasser un véhicule, vous devez :",
      en: "When you want to overtake another vehicle, you must:"
    },
    options: {
      ar: [
        "تتبع إرشادات سائق المركبة التي خلفك مباشرة",
        "لا تعتمد أبداً على إرشادات سائق هذه المركبة",
        "تتبع إرشادات سائق هذه المركبة بواسطة إشارته الضوئية"
      ],
      fr: [
        "Suivre les indications du véhicule derrière",
        "Ne jamais dépendre des indications",
        "Suivre les संकेत lumineux du conducteur"
      ],
      en: [
        "Follow the driver behind you",
        "Never rely on that driver",
        "Follow that driver’s signal lights"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 71,
    category: "safety",
    license: "C",
    question: {
      ar: "على كل سائق مركبة ثقيلة أن ينتبه إلى عرض مركبته خاصة:",
      fr: "Un conducteur de véhicule lourd doit faire attention à la largeur خاصة :",
      en: "A heavy vehicle driver must pay attention to vehicle width especially:"
    },
    options: {
      ar: [
        "عند تحميل المركبة",
        "عند أخذه قسطاً من الراحة",
        "عند دخوله في مكان ضيق"
      ],
      fr: [
        "Lors du chargement",
        "Pendant le repos",
        "Dans un passage étroit"
      ],
      en: [
        "When loading",
        "While resting",
        "When entering a narrow space"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 72,
    category: "safety",
    license: "C",
    question: {
      ar: "إذا أراد سائق المركبة الثقيلة أن يرجع إلى الخلف، عليه أن:",
      fr: "Si un conducteur de véhicule lourd veut reculer, il doit :",
      en: "If a heavy vehicle driver wants to reverse, he must:"
    },
    options: {
      ar: [
        "يطلب المساعدة من شخص آخر",
        "يرجع داخل النفق",
        "يرجع في الأماكن المكتظة"
      ],
      fr: [
        "Demander l’aide d’une personne",
        "Reculer dans un tunnel",
        "Reculer dans les zones encombrées"
      ],
      en: [
        "Ask for help from another person",
        "Reverse in a tunnel",
        "Reverse in crowded areas"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 73,
    category: "safety",
    license: "C",
    question: {
      ar: "بعد ملء الصهريج بالحمولة، على سائقه أن يتأكد من أن:",
      fr: "Après avoir rempli la citerne, son conducteur doit s’assurer que :",
      en: "After filling the tanker, its driver must make sure that:"
    },
    options: {
      ar: [
        "صمامات الإفراغ مغلقة بإحكام",
        "أغطية الخزانات مغلقة بإحكام",
        "كل أغطية الخزانات وصمامات الإفراغ مغلقة بإحكام"
      ],
      fr: [
        "Les vannes de vidange sont bien fermées",
        "Les couvercles des citernes sont bien fermés",
        "Tous les couvercles des citernes et les vannes de vidange sont bien fermés"
      ],
      en: [
        "The discharge valves are tightly closed",
        "The tank covers are tightly closed",
        "All tank covers and discharge valves are tightly closed"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 74,
    category: "safety",
    license: "A",
    question: {
      ar: "تتأمن الحماية الحقيقية لسائق الدراجة النارية عن طريق:",
      fr: "La vraie protection du motocycliste est assurée par :",
      en: "The real protection of a motorcycle rider is ensured by:"
    },
    options: {
      ar: [
        "تأكد من وجود تأمين على الدراجة",
        "القيادة على الإطار الخلفي فقط",
        "ارتدائه للملابس الخاصة براكبي الدراجات النارية"
      ],
      fr: [
        "S’assurer que la moto est assurée",
        "Rouler uniquement sur la roue arrière",
        "Porter les vêtements spéciaux des motocyclistes"
      ],
      en: [
        "Making sure the motorcycle is insured",
        "Riding only on the rear wheel",
        "Wearing special motorcycle riding clothes"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 75,
    category: "safety",
    license: "A",
    question: {
      ar: "البدلات الواقية الجلدية الخاصة براكبي الدراجات النارية لها قدرة على مقاومة:",
      fr: "Les combinaisons de protection en cuir des motocyclistes résistent à :",
      en: "Leather protective suits for motorcycle riders can resist:"
    },
    options: {
      ar: [
        "الحريق",
        "الاحتكاك بالحصى والاسفلت عند السقوط",
        "القيادة السريعة بين المركبات"
      ],
      fr: [
        "Le feu",
        "Le frottement avec les graviers et l’asphalte lors d’une chute",
        "La conduite rapide entre les véhicules"
      ],
      en: [
        "Fire",
        "Friction with gravel and asphalt when falling",
        "Fast riding between vehicles"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 76,
    category: "safety",
    license: "A",
    question: {
      ar: "ارتداء سائق الدراجة النارية للقفازات الخاصة بالدراجات النارية يؤمن له:",
      fr: "Le port de gants spéciaux pour moto assure au conducteur :",
      en: "Wearing special motorcycle gloves provides the rider with:"
    },
    options: {
      ar: [
        "حماية القدمين عند السقوط",
        "حماية اليدين من الإصابة ومن البرد",
        "حماية الرأس عند السقوط"
      ],
      fr: [
        "La protection des pieds en cas de chute",
        "La protection des mains contre les blessures et le froid",
        "La protection de la tête en cas de chute"
      ],
      en: [
        "Protection of the feet when falling",
        "Protection of the hands from injury and cold",
        "Protection of the head when falling"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 77,
    category: "safety",
    license: "A",
    question: {
      ar: "انتعال راكب الدراجة النارية للحذاء الخاص براكبي الدراجات النارية يؤمن له حماية:",
      fr: "Le port de chaussures spéciales pour motocyclistes assure une protection :",
      en: "Wearing special motorcycle shoes provides protection for:"
    },
    options: {
      ar: [
        "القدمين والقصبة من الإصابة، ومن الماء والبرد",
        "الأرجل من الغبار",
        "الركبة والفخذ من الماء البرد"
      ],
      fr: [
        "Des pieds et du tibia contre les blessures, l’eau et le froid",
        "Des jambes contre la poussière",
        "Du genou et de la cuisse contre l’eau et le froid"
      ],
      en: [
        "The feet and shin from injury, water, and cold",
        "The legs from dust",
        "The knee and thigh from water and cold"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 78,
    category: "safety",
    license: "A",
    question: {
      ar: "ارتداء سائق الدراجة النارية لواقي العمود الفقري الخاص براكبي الدراجات النارية، يؤمن له حماية:",
      fr: "Le port d’une protection dorsale spéciale pour motocyclistes assure une protection :",
      en: "Wearing a special motorcycle spine protector provides protection for:"
    },
    options: {
      ar: [
        "العمود الفقري والنخاع الشوكي، من الإصابة",
        "العمود الفقري والنخاع الشوكي، من المطر",
        "الصدر والبطن، من الحر والبرد"
      ],
      fr: [
        "De la colonne vertébrale et de la moelle épinière contre les blessures",
        "De la colonne vertébrale et de la moelle épinière contre la pluie",
        "De la poitrine et du ventre contre la chaleur et le froid"
      ],
      en: [
        "The spine and spinal cord from injury",
        "The spine and spinal cord from rain",
        "The chest and abdomen from heat and cold"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 79,
    category: "safety",
    license: "A",
    question: {
      ar: "ارتداء سائق الدراجة النارية للنظارات الواقية الخاصة براكبي الدراجات النارية، يؤمن له حماية:",
      fr: "Le port de lunettes de protection pour motocycliste protège :",
      en: "Wearing protective motorcycle goggles protects:"
    },
    options: {
      ar: [
        "العينين من ذرف الدموع",
        "العينين من الريح والرمال والأمطار والحشرات",
        "الأذنين من البرد"
      ],
      fr: [
        "Les yeux contre les larmes",
        "Les yeux contre le vent, sable, pluie et insectes",
        "Les oreilles contre le froid"
      ],
      en: [
        "Eyes from tearing",
        "Eyes from wind, sand, rain, insects",
        "Ears from cold"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 80,
    category: "law",
    license: "A",
    question: {
      ar: "الخوذة الواقية الخاصة براكبي الدراجات النارية تؤمن للسائق حماية:",
      fr: "Le casque de moto protège :",
      en: "Motorcycle helmet protects:"
    },
    options: {
      ar: [
        "العمود الفقري",
        "الرأس من الإصابات القاتلة",
        "حاسة السمع من ضوضاء السير"
      ],
      fr: [
        "La colonne vertébrale",
        "La tête contre les blessures mortelles",
        "L’ouïe contre le bruit"
      ],
      en: [
        "Spine",
        "Head from fatal injuries",
        "Hearing from noise"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 81,
    category: "law",
    license: "A",
    question: {
      ar: "عدم ارتداء سائق الدراجة النارية للخوذة أثناء القيادة، أو ارتداؤه مع ربطها جزئياً أو عدم ربطها بالمطلق:",
      fr: "Ne pas porter le casque ou mal l’attacher :",
      en: "Not wearing or improperly fastening a helmet:"
    },
    options: {
      ar: [
        "يُعتبر عملاً طبيعياً",
        "يُعتبر تصرفاً قانونياً",
        "يُعتبر مخالفة قانونية"
      ],
      fr: [
        "Est normal",
        "Est légal",
        "Est une infraction"
      ],
      en: [
        "Is normal",
        "Is legal",
        "Is a violation"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 82,
    category: "law",
    license: "A",
    question: {
      ar: "مجرد حمل الخوذة الواقية الخاصة براكبي الدراجات النارية دون ارتدائها وربطها بشكل صحيح أثناء القيادة:",
      fr: "Porter le casque sans l’attacher correctement :",
      en: "Carrying a helmet without properly wearing and fastening it:"
    },
    options: {
      ar: [
        "هو تصرف منطقي من قبل السائق",
        "لا يعفي السائق من المساءلة القانونية",
        "يعفي السائق من المساءلة القانونية"
      ],
      fr: [
        "Est logique",
        "N’exonère pas de responsabilité légale",
        "Exonère de responsabilité"
      ],
      en: [
        "Is logical",
        "Does not exempt from legal responsibility",
        "Exempts from responsibility"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 83,
    category: "safety",
    license: "A",
    question: {
      ar: "أثناء القيادة الليلية، يجب على سائق الدراجة النارية ارتداء:",
      fr: "La nuit, le motocycliste doit porter :",
      en: "At night, a motorcyclist must wear:"
    },
    options: {
      ar: [
        "ملابس رياضية",
        "بدلة فوسفورية خاصة",
        "ملابس عادية داكنة اللون"
      ],
      fr: [
        "Vêtements sportifs",
        "Vêtement fluorescent",
        "Vêtements sombres"
      ],
      en: [
        "Sports clothes",
        "Reflective suit",
        "Dark clothes"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 84,
    category: "safety",
    license: "A",
    question: {
      ar: "ينصح سائق الدراجة النارية أثناء القيادة، من أجل تمكين الآخرين من رؤيته ليلاً، أن:",
      fr: "Pour être visible la nuit, le motocycliste doit :",
      en: "To be visible at night, a motorcyclist should:"
    },
    options: {
      ar: [
        "يعمل على جعل فرامله تصدر صوتاً",
        "يطفئ أنواره ويضع إشارات عاكسة للضوء",
        "يضع شرائط أو إشارات عاكسة للضوء"
      ],
      fr: [
        "Faire du bruit avec les freins",
        "Éteindre les lumières et utiliser des réflecteurs",
        "Utiliser des bandes réfléchissantes"
      ],
      en: [
        "Make brakes noisy",
        "Turn off lights and use reflectors",
        "Use reflective strips"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 85,
    category: "safety",
    license: "A",
    question: {
      ar: "إذا كانت الدراجة النارية مجهزة بنظام فرامل هيدروليكي، فيجب دورياً:",
      fr: "Si la moto a des freins hydrauliques, il faut :",
      en: "If the motorcycle has hydraulic brakes, you should:"
    },
    options: {
      ar: [
        "ضبط عيار سلك الفرامل",
        "التخفيف من استعمال الفرامل",
        "فحص مستوى زيت الفرامل"
      ],
      fr: [
        "Ajuster le câble",
        "Utiliser moins les freins",
        "Vérifier le niveau de liquide"
      ],
      en: [
        "Adjust brake cable",
        "Use brakes less",
        "Check brake fluid level"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 86,
    category: "safety",
    license: "A",
    question: {
      ar: "لا يجب أن يقل الحد الأدنى لعمق النقوشات على إطار الدراجة النارية عن:",
      fr: "La profondeur minimale des pneus moto est :",
      en: "Minimum tire tread depth for motorcycle is:"
    },
    options: {
      ar: [
        "6 ملمتر",
        "3 ملمتر",
        "5 ملمتر"
      ],
      fr: [
        "6 mm",
        "3 mm",
        "5 mm"
      ],
      en: [
        "6 mm",
        "3 mm",
        "5 mm"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 87,
    category: "safety",
    license: "A",
    question: {
      ar: "يجب على سائق الدراجة النارية، ولكي يستطيع توجيه المقود دون صعوبة، أن:",
      fr: "Pour diriger facilement le guidon, le motocycliste doit :",
      en: "To steer the handlebar easily, the motorcyclist must:"
    },
    options: {
      ar: [
        "يمسك المقود بيد واحدة",
        "يجلس قريباً من المقود",
        "يجلس بعيداً عن المقود"
      ],
      fr: [
        "Tenir le guidon d’une seule main",
        "S’asseoir près du guidon",
        "S’asseoir loin du guidon"
      ],
      en: [
        "Hold the handlebar with one hand",
        "Sit close to the handlebar",
        "Sit far from the handlebar"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 88,
    category: "safety",
    license: "A",
    question: {
      ar: "حتى لا تزيد السرعة عن طريق الخطأ أثناء القيادة، عليك أن تمسك قبضة مقود الدراجة النارية بحيث يكون معصم يدك:",
      fr: "Pour éviter d’accélérer involontairement, la position du poignet doit être :",
      en: "To avoid accidental acceleration, your wrist position should be:"
    },
    options: {
      ar: [
        "اليمنى إلى الأسفل",
        "اليسرى إلى الأعلى",
        "اليمنى إلى الأعلى"
      ],
      fr: [
        "Droite vers le bas",
        "Gauche vers le haut",
        "Droite vers le haut"
      ],
      en: [
        "Right downward",
        "Left upward",
        "Right upward"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 89,
    category: "safety",
    license: "A",
    question: {
      ar: "تكون الفرامل ذات فاعلية قصوى عندما يستخدم سائق الدراجة النارية:",
      fr: "Le freinage est le plus efficace lorsque le motocycliste utilise :",
      en: "Braking is most effective when the rider uses:"
    },
    options: {
      ar: [
        "قدمه بالضغط بها على الأسفل",
        "الفرامل الخلفية والأمامية",
        "الفرامل الخلفية فقط"
      ],
      fr: [
        "Le pied seulement",
        "Freins avant et arrière",
        "Frein arrière فقط"
      ],
      en: [
        "Foot only",
        "Front and rear brakes",
        "Rear brake only"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 90,
    category: "safety",
    license: "A",
    question: {
      ar: "لتجنب الانزلاق عند استخدام فرامل الدراجة النارية، يجب أن تكون هذه الدراجة منطلقة:",
      fr: "Pour éviter le dérapage lors du freinage, la moto doit être :",
      en: "To avoid skidding when braking, the motorcycle should be:"
    },
    options: {
      ar: [
        "باتجاه مستقيم",
        "بسرعة عالية",
        "في منعطف"
      ],
      fr: [
        "En ligne droite",
        "À grande vitesse",
        "Dans un virage"
      ],
      en: [
        "In a straight line",
        "At high speed",
        "In a curve"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 91,
    category: "safety",
    license: "A",
    question: {
      ar: "هناك سببان رئيسيان لانزلاق الدراجة النارية أثناء القيادة وهما:",
      fr: "Les deux causes principales de dérapage d’une moto sont :",
      en: "The two main causes of motorcycle skidding are:"
    },
    options: {
      ar: [
        "السرعة البطيئة وترس سرعة منخفض",
        "سطح الطريق الزلق وردة الفعل العصبية",
        "المحرك السريع والمقود المرتفع"
      ],
      fr: [
        "Vitesse lente et rapport bas",
        "Route glissante et réaction nerveuse",
        "Moteur rapide et guidon élevé"
      ],
      en: [
        "Low speed and low gear",
        "Slippery road and sudden reaction",
        "Fast engine and high handlebar"
      ]
    },
    correct: 1
  }
,
  {
    type: "normal",
    id: 92,
    category: "safety",
    license: "A",
    question: {
      ar: "عندما تقود دراجتك النارية ليلاً عليك أن:",
      fr: "Lorsque vous conduisez la nuit, vous devez :",
      en: "When riding at night, you must:"
    },
    options: {
      ar: [
        "تزيد سرعتك وتستعمل الضوء المنخفض",
        "تخفف سرعتك وتترك مسافة توقف أكبر",
        "تخفف سرعتك وتترك مسافة توقف أقل"
      ],
      fr: [
        "Augmenter la vitesse et utiliser feux bas",
        "Réduire vitesse et augmenter distance توقف",
        "Réduire vitesse et réduire distance"
      ],
      en: [
        "Increase speed and use low beam",
        "Reduce speed and increase stopping distance",
        "Reduce speed and reduce stopping distance"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 93,
    category: "safety",
    license: "A",
    question: {
      ar: "عادة ما يكون سبب الرشق بالدراجة النارية أثناء السير:",
      fr: "La cause principale de louvoiement d’une moto est :",
      en: "The usual cause of motorcycle wobbling is:"
    },
    options: {
      ar: [
        "توزيع سيء للحمولة",
        "دوران العجلتان على المحور نفسه",
        "التواء عجلة واحدة أو إطار واحد على الأقل"
      ],
      fr: [
        "Mauvaise répartition de charge",
        "Roues tournent sur même axe",
        "Déformation d’une roue ou pneu"
      ],
      en: [
        "Poor load distribution",
        "Wheels rotate on same axis",
        "One wheel or tire is bent"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 94,
    category: "safety",
    license: "A",
    question: {
      ar: "من الأسباب المؤدية إلى تدهور الدراجة النارية هي وجود:",
      fr: "Une cause de dégradation de la moto est :",
      en: "One cause of motorcycle deterioration is:"
    },
    options: {
      ar: [
        "شرطة وإشارات ضوئية على الطريق",
        "سيارات ومشاة على الطريق",
        "زيوت وحصى على سطح الطريق"
      ],
      fr: [
        "Police et feux",
        "Voitures et piétons",
        "Huile et gravier"
      ],
      en: [
        "Police and signals",
        "Cars and pedestrians",
        "Oil and gravel"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 95,
    category: "safety",
    license: "A",
    question: {
      ar: "لكي تتفادى الحادث بدراجتك النارية عند التقاطعات يجب عليك أن:",
      fr: "Pour éviter un accident à une intersection, vous devez :",
      en: "To avoid accidents at intersections, you must:"
    },
    options: {
      ar: [
        "تمر عن يمين المركبات المتوقفة على التقاطع",
        "تزيد سرعتك لتعبر بسرعة",
        "تخفف سرعتك وتتخذ المسرب الصحيح"
      ],
      fr: [
        "Passer à droite",
        "Augmenter vitesse",
        "Réduire vitesse et choisir bonne voie"
      ],
      en: [
        "Pass on the right",
        "Increase speed",
        "Reduce speed and take correct lane"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 96,
    category: "law",
    license: "A",
    question: {
      ar: "يحق لك كدراج أن تتجاوز المركبة التي أمامك:",
      fr: "Vous pouvez dépasser :",
      en: "As a rider, you may overtake:"
    },
    options: {
      ar: [
        "عن أي جهة كانت",
        "عن جهة يسارها",
        "عن جهة يمينها"
      ],
      fr: [
        "De n’importe quel côté",
        "Par la gauche",
        "Par la droite"
      ],
      en: [
        "From any side",
        "From the left",
        "From the right"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 97,
    category: "safety",
    license: "A",
    question: {
      ar: "عندما تتجاوز بدراجتك النارية عن يسار مركبة ما أمامك، عليك الانتباه أن هذه المركبة قد:",
      fr: "Lorsque vous dépassez à gauche, le véhicule peut :",
      en: "When overtaking from the left, the vehicle may:"
    },
    options: {
      ar: [
        "تشغل إشارات التحذير",
        "تنعطف يساراً فجأة",
        "تخفف سرعتها تدريجياً"
      ],
      fr: [
        "Allumer warning",
        "Tourner à gauche soudainement",
        "Ralentir progressivement"
      ],
      en: [
        "Turn on hazard lights",
        "Turn left suddenly",
        "Slow down gradually"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 98,
    category: "safety",
    license: "A",
    question: {
      ar: "عندما تقود دراجتك النارية بشكل مستقيم عليك الانتباه أن المركبة القادمة من الاتجاه المعاكس قد:",
      fr: "En ligne droite, le véhicule opposé peut :",
      en: "When riding straight, an oncoming vehicle may:"
    },
    options: {
      ar: [
        "تنعطف بعيداً عن مسارك",
        "تتوقف في مسارها فجأة",
        "تنعطف في مسارك فجأة"
      ],
      fr: [
        "Tourner loin",
        "S’arrêter فجأة",
        "Tourner vers votre voie"
      ],
      en: [
        "Turn away",
        "Stop suddenly",
        "Turn into your path"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 99,
    category: "safety",
    license: "A",
    question: {
      ar: "عندما تقود دراجتك النارية بشكل متعرج بين المركبات، فإن ذلك:",
      fr: "Conduire en zigzag entre les véhicules :",
      en: "Riding in zigzag between vehicles:"
    },
    options: {
      ar: [
        "يجعل منك سائقاً وقائياً",
        "يقلل من احتمال تورطك بحادث",
        "يزيد من احتمال تورطك بحادث"
      ],
      fr: [
        "Fait de vous un conducteur prudent",
        "Réduit le risque d’accident",
        "Augmente le risque d’accident"
      ],
      en: [
        "Makes you a defensive rider",
        "Reduces accident risk",
        "Increases accident risk"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 100,
    category: "law",
    license: "A",
    question: {
      ar: "عندما تقود دراجتك النارية ذات عادم (اشبمان) مُفرغ عمداً ويصدر صوتاً مرتفعاً جداً فإن ذلك:",
      fr: "Conduire une moto avec un échappement bruyant signifie :",
      en: "Riding a motorcycle with a deliberately loud exhaust means:"
    },
    options: {
      ar: [
        "مسموح قانوناً",
        "يُعتبر مخالفة قانونية صريحة",
        "يشهد بأنك ذات أفكار خلاقة"
      ],
      fr: [
        "Autorisé",
        "Infraction claire à la loi",
        "Preuve de créativité"
      ],
      en: [
        "Legally allowed",
        "A clear legal violation",
        "Shows creative thinking"
      ]
    },
    correct: 1
  },

{
  type: "normal",
  id: 92,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "عندما تقود دراجتك النارية ليلاً عليك أن:",
    fr: "Lorsque vous conduisez votre moto la nuit, vous devez :",
    en: "When riding your motorcycle at night, you must:"
  },
  options: {
    ar: [
      "تزيد سرعتك وتستعمل الضوء المنخفض",
      "تخفف سرعتك وتترك مسافة توقف أكبر",
      "تخفف سرعتك وتترك مسافة توقف أقل"
    ],
    fr: [
      "Augmenter votre vitesse et utiliser les feux de croisement",
      "Réduire votre vitesse et laisser une plus grande distance d'arrêt",
      "Réduire votre vitesse et laisser une distance d'arrêt plus courte"
    ],
    en: [
      "Increase your speed and use low beam",
      "Reduce your speed and leave a greater stopping distance",
      "Reduce your speed and leave a shorter stopping distance"
    ]
  },
  correct: 1
},

{
  type: "normal",
  id: 93,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "عادة ما يكون سبب الإنزلاق بالدراجة النارية أثناء السير:",
    fr: "La cause habituelle du dérapage d'une moto pendant la conduite est :",
    en: "The usual cause of a motorcycle skidding while riding is:"
  },
  options: {
    ar: [
      "توزيع غير متوازن للحمولة",
      "دوران العجلتين على المحور نفسه",
      "الفرامل تعمل بشكل جيد"
    ],
    fr: [
      "Une mauvaise répartition de la charge",
      "La rotation des deux roues sur le même axe",
      "Des freins fonctionnant correctement"
    ],
    en: [
      "Uneven load distribution",
      "Both wheels rotating on the same axis",
      "Brakes working properly"
    ]
  },
  correct: 0
},

{
  type: "normal",
  id: 94,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "من الأسباب المؤدية إلى تدهور الدراجة النارية هي وجود:",
    fr: "Parmi les causes de détérioration de la moto, on trouve :",
    en: "Among the causes of motorcycle deterioration is the presence of:"
  },
  options: {
    ar: [
      "شرطة وإشارات ضوئية على الطريق",
      "سيارات ومشاة على الطريق",
      "زيوت وحصى على سطح الطريق"
    ],
    fr: [
      "La présence de police et de feux de signalisation",
      "Des voitures et des piétons sur la route",
      "De l’huile et du gravier sur la chaussée"
    ],
    en: [
      "Police and traffic lights on the road",
      "Cars and pedestrians on the road",
      "Oil and gravel on the road surface"
    ]
  },
  correct: 2
},

{
  type: "normal",
  id: 95,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "لكي تتفادى الحادث بدراجتك النارية عند التقاطعات يجب عليك أن:",
    fr: "Pour éviter un accident à moto aux intersections, vous devez :",
    en: "To avoid an accident at intersections on a motorcycle, you must:"
  },
  options: {
    ar: [
      "تمر عن يمين المركبات المتوقفة على التقاطع",
      "تزيد سرعتك لتعبر بسرعة",
      "تخفف سرعتك وتتخذ المسرب الصحيح"
    ],
    fr: [
      "Passer à droite des véhicules arrêtés",
      "Augmenter votre vitesse pour traverser rapidement",
      "Réduire votre vitesse et choisir la bonne voie"
    ],
    en: [
      "Pass to the right of stopped vehicles",
      "Increase speed to cross quickly",
      "Reduce speed and take the correct lane"
    ]
  },
  correct: 2
},

{
  type: "normal",
  id: 96,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "يحق لك كدراج أن تتجاوز المركبة التي أمامك:",
    fr: "En tant que motocycliste, vous pouvez dépasser le véhicule devant vous :",
    en: "As a motorcyclist, you may overtake the vehicle in front of you:"
  },
  options: {
    ar: [
      "عن أي جهة كانت",
      "عن جهة يسارها",
      "عن جهة يمينها"
    ],
    fr: [
      "Par n’importe quel côté",
      "Par la gauche",
      "Par la droite"
    ],
    en: [
      "From any side",
      "From the left side",
      "From the right side"
    ]
  },
  correct: 1
},

{
  type: "normal",
  id: 97,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "عندما تتجاوز بدراجتك النارية عن يسار مركبة ما أمامك، عليك الانتباه أن هذه المركبة قد:",
    fr: "Lorsque vous dépassez à gauche, vous devez faire attention que le véhicule peut :",
    en: "When overtaking on the left, you must be aware that the vehicle may:"
  },
  options: {
    ar: [
      "تشغل إشارات التحذير",
      "تنعطف يساراً فجأة",
      "تخفف سرعتها تدريجياً"
    ],
    fr: [
      "Allumer les feux de détresse",
      "Tourner soudainement à gauche",
      "Ralentir progressivement"
    ],
    en: [
      "Turn on hazard lights",
      "Turn left suddenly",
      "Slow down gradually"
    ]
  },
  correct: 1
},

{
  type: "normal",
  id: 98,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "عندما تقود دراجتك النارية بشكل مستقيم عليك الانتباه أن المركبة القادمة من الاتجاه المعاكس قد:",
    fr: "En roulant en ligne droite, vous devez faire attention que le véhicule en face peut :",
    en: "When riding straight, you must be aware that oncoming vehicles may:"
  },
  options: {
    ar: [
      "تنعطف بعيداً عن مسارك",
      "تتوقف في مسارها فجأة",
      "تنعطف في مسارك فجأة"
    ],
    fr: [
      "S’écarter de votre trajectoire",
      "S’arrêter soudainement",
      "Tourner soudainement dans votre voie"
    ],
    en: [
      "Move away from your path",
      "Stop suddenly",
      "Turn suddenly into your lane"
    ]
  },
  correct: 2
},

{
  type: "normal",
  id: 99,
  category: "motorcycle",
  license: "A",
  question: {
    ar: "عندما تقود دراجتك النارية بشكل متعرج بين المركبات، فإن ذلك:",
    fr: "Conduire en zigzag entre les véhicules :",
    en: "Riding in a zigzag between vehicles:"
  },
  options: {
    ar: [
      "يجعلك سائقاً وقائياً",
      "يقلل من احتمال تورطك بحادث",
      "يزيد من احتمال تورطك بحادث"
    ],
    fr: [
      "Fait de vous un conducteur prudent",
      "Réduit le risque d’accident",
      "Augmente le risque d’accident"
    ],
    en: [
      "Makes you a defensive rider",
      "Reduces accident risk",
      "Increases accident risk"
    ]
  },
  correct: 2
},








  {
    type: "normal",
    id: 101,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي الفوائد البيئية للقيادة الصديقة للبيئة؟",
      fr: "Quels sont les avantages écologiques de la conduite écologique ?",
      en: "What are the environmental benefits of eco-driving?"
    },
    options: {
      ar: [
        "الحد من ازدحام السير",
        "زيادة انبعاثات الغازات الدفيئة خصوصاً ثاني أكسيد الكربون",
        "تخفيض انبعاث ملوثات الهواء المضرة"
      ],
      fr: [
        "Réduire les embouteillages",
        "Augmenter les émissions",
        "Réduire les polluants"
      ],
      en: [
        "Reduce traffic congestion",
        "Increase emissions",
        "Reduce air pollutants"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 102,
    category: "ed",
    license: "G",
    question: {
      ar: "كيف تحافظ القيادة الصديقة للبيئة على سلامة السائق؟",
      fr: "Comment l’éco-conduite améliore la sécurité ?",
      en: "How does eco-driving improve driver safety?"
    },
    options: {
      ar: [
        "كل ما ورد أعلاه",
        "تعزز مهارات القيادة",
        "تحافظ على سلامة الطرق"
      ],
      fr: [
        "Tout ce qui précède",
        "Améliore les compétences",
        "Améliore la sécurité routière"
      ],
      en: [
        "All of the above",
        "Improves driving skills",
        "Improves road safety"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 103,
    category: "ed",
    license: "G",
    question: {
      ar: "كيف تساهم القيادة الصديقة للبيئة في المسؤولية الاجتماعية؟",
      fr: "Comment l’éco-conduite aide la société ?",
      en: "How does eco-driving contribute to social responsibility?"
    },
    options: {
      ar: [
        "كل ما ورد أعلاه",
        "تؤمن راحة أكبر للسائق والركاب",
        "تخفف التوتر أثناء القيادة"
      ],
      fr: [
        "Tout ce qui précède",
        "Plus de confort",
        "Réduit le stress"
      ],
      en: [
        "All of the above",
        "More comfort",
        "Reduces stress"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 104,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي الأداة التي تستخدمها لمراقبة السرعة على الطريق السريع؟",
      fr: "Quel outil surveille la vitesse ?",
      en: "What tool is used to monitor speed on highways?"
    },
    options: {
      ar: [
        "الضغط المفاجئ على الفرامل",
        "الإقلاع والتوقف بانتظام",
        "مثبت السرعة"
      ],
      fr: [
        "Freinage brusque",
        "Démarrage/arrêt fréquent",
        "Régulateur de vitesse"
      ],
      en: [
        "Sudden braking",
        "Frequent start/stop",
        "Cruise control"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 105,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي السرعة المثلى للقيادة الصديقة للبيئة؟",
      fr: "Quelle est la vitesse optimale ?",
      en: "What is the optimal eco-driving speed?"
    },
    options: {
      ar: [
        "بين 40 كم/ساعة و50 كم/ساعة",
        "بين 50 كم/ساعة و80 كم/ساعة",
        "بين 80 كم/ساعة و100 كم/ساعة"
      ],
      fr: [
        "40–50 km/h",
        "50–80 km/h",
        "80–100 km/h"
      ],
      en: [
        "40–50 km/h",
        "50–80 km/h",
        "80–100 km/h"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 106,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هو الحد الأقصى لعدد دورات المحرك في الدقيقة الذي لا يجب تجاوزه؟",
      fr: "Quel est le régime maximal du moteur ?",
      en: "What is the maximum engine RPM that should not be exceeded?"
    },
    options: {
      ar: [
        "دورة في الدقيقة 2000",
        "دورة في الدقيقة 4000",
        "دورة في الدقيقة 3000"
      ],
      fr: [
        "2000 tr/min",
        "4000 tr/min",
        "3000 tr/min"
      ],
      en: [
        "2000 RPM",
        "4000 RPM",
        "3000 RPM"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 107,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي نتيجة تجاوز دورات المحرك معدل 2000 دورة في الدقيقة؟",
      fr: "Que se passe-t-il si le régime dépasse 2000 ?",
      en: "What happens if engine RPM exceeds 2000?"
    },
    options: {
      ar: [
        "ارتفاع في درجة حرارة المحرك",
        "انخفاض في استهلاك الوقود",
        "ارتفاع في استهلاك الوقود"
      ],
      fr: [
        "Augmentation température moteur",
        "Réduction consommation",
        "Augmentation consommation"
      ],
      en: [
        "Engine temperature increases",
        "Fuel consumption decreases",
        "Fuel consumption increases"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 108,
    category: "ed",
    license: "G",
    question: {
      ar: "الإقلاع بسرعة والضغط المفاجئ على الفرامل يؤدي إلى:",
      fr: "Accélérer brusquement et freiner soudainement cause :",
      en: "Sudden acceleration and braking causes:"
    },
    options: {
      ar: [
        "كل ما ورد أعلاه",
        "اهتراء سريع للفرامل والإطارات",
        "هدر الوقود"
      ],
      fr: [
        "Tout ce qui précède",
        "Usure rapide freins/pneus",
        "Gaspillage carburant"
      ],
      en: [
        "All of the above",
        "Fast wear of brakes/tires",
        "Fuel waste"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 109,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي نسبة الانخفاض في استهلاك الوقود عند تغيير فلتر الزيت والنفط بشكل منتظم؟",
      fr: "Quelle réduction de consommation ?",
      en: "What is the reduction in fuel consumption?"
    },
    options: {
      ar: [
        "% إلى 23",
        "% إلى 13",
        "% إلى 12"
      ],
      fr: [
        "2–3 %",
        "1–3 %",
        "1–2 %"
      ],
      en: [
        "2–3%",
        "1–3%",
        "1–2%"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 110,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هو زيت المحرك الأفضل للبيئة؟",
      fr: "Quel est le meilleur huile moteur écologique ?",
      en: "What is the best eco-friendly engine oil?"
    },
    options: {
      ar: [
        "الزيت الذي يحافظ على الطاقة ذو مصدر نباتي",
        "الزيت الذي يحافظ على الطاقة لاحتوائه على إضافات تحافظ على المحرك نظيفاً",
        "الزيت الذي يحافظ على الطاقة لاحتوائه على إضافات تخفف الاحتكاك ضمن المحرك"
      ],
      fr: [
        "Huile végétale",
        "Huile avec additifs nettoyants",
        "Huile réduisant friction"
      ],
      en: [
        "Plant-based oil",
        "Oil with cleaning additives",
        "Oil reducing friction"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 111,
    category: "ed",
    license: "G",
    question: {
      ar: "كيف يمكن إطالة مدة استخدام الإطارات؟",
      fr: "Comment prolonger la durée des pneus ?",
      en: "How to extend tire life?"
    },
    options: {
      ar: [
        "فحص ضغط الإطارات مرة في السنة على الأقل للحفاظ على مقاومة درجة منخفضة",
        "فحص ضغط الإطارات مرة في الشهر على الأقل للحفاظ على مقاومة درجة منخفضة",
        "تغيير الإطارات سنوياً"
      ],
      fr: [
        "Vérifier pression/an",
        "Vérifier pression/mois",
        "Changer pneus/an"
      ],
      en: [
        "Check yearly",
        "Check monthly",
        "Change yearly"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 112,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي الفائدة من تنظيف واستبدال فلتر الهواء بشكل دوري؟",
      fr: "Pourquoi nettoyer le filtre à air ?",
      en: "Why clean/replace air filter?"
    },
    options: {
      ar: [
        "كل ما سبق",
        "الحد من تلوث الهواء",
        "تحسين أداء المحرك بنسبة 6-11%"
      ],
      fr: [
        "Tout ce qui précède",
        "Réduction pollution",
        "Amélioration 6–11%"
      ],
      en: [
        "All of the above",
        "Reduce pollution",
        "Improve performance 6–11%"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 113,
    category: "ed",
    license: "G",
    question: {
      ar: "ماذا يجب أن تفعل عندما تتوقف السيارة عن التحرك لأكثر من دقيقة؟",
      fr: "Que faire si la voiture est arrêtée plus d’une minute ?",
      en: "What should you do if the car stops for more than one minute?"
    },
    options: {
      ar: [
        "لا شيء",
        "وضع ناقل السرعة (فيتيس) على (N)",
        "إطفاء المحرك"
      ],
      fr: [
        "Rien",
        "Mettre au point mort",
        "Éteindre moteur"
      ],
      en: [
        "Do nothing",
        "Shift to neutral",
        "Turn off engine"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 114,
    category: "ed",
    license: "G",
    question: {
      ar: "كيف يمكن تحسين أداء المحرك وتقليل مستوى الانبعاثات الضارة؟",
      fr: "Comment améliorer le moteur et réduire les émissions ?",
      en: "How to improve engine performance and reduce emissions?"
    },
    options: {
      ar: [
        "تبديل المحرك دورياً",
        "استخدام وقود نظيف يتوافق مع المعايير الدولية",
        "تغيير مياه المحرك بانتظام"
      ],
      fr: [
        "Changer moteur",
        "Utiliser carburant propre",
        "Changer eau moteur"
      ],
      en: [
        "Replace engine",
        "Use clean fuel",
        "Change engine coolant"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 115,
    category: "ed",
    license: "G",
    question: {
      ar: "ماذا يجب أن تفعله بعد ملء خزان السيارة بالوقود؟",
      fr: "Que faire après remplir le réservoir ?",
      en: "What should you do after refueling?"
    },
    options: {
      ar: [
        "التأكد من أن درجة حرارة المحرك مستقرة",
        "التأكد من أن غطاء خزان الوقود مفتوح وسليم من أي عيوب",
        "التأكد من أن غطاء خزان الوقود مغلق بإحكام"
      ],
      fr: [
        "Vérifier température",
        "Couvercle ouvert",
        "Couvercle bien fermé"
      ],
      en: [
        "Check engine temperature",
        "Check cap open",
        "Ensure cap is tightly closed"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 116,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي فائدة وقوف السيارة في الظل؟",
      fr: "Quel est l’avantage de stationner à l’ombre ?",
      en: "What is the benefit of parking in the shade?"
    },
    options: {
      ar: [
        "كل ما ورد أعلاه",
        "خفض استهلاك الوقود",
        "تخفيف الضغط على مكيفات الهواء عند الإقلاع"
      ],
      fr: [
        "Tout ce qui précède",
        "Réduire consommation",
        "Moins pression climatisation"
      ],
      en: [
        "All of the above",
        "Reduce fuel consumption",
        "Reduce AC load at start"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 117,
    category: "ed",
    license: "G",
    question: {
      ar: "ما هي نسبة زيادة استهلاك الوقود عند الاستعمال الدائم للمكيف؟",
      fr: "Augmentation de consommation avec climatisation ?",
      en: "Fuel increase when using AC constantly?"
    },
    options: {
      ar: [
        "0.3",
        "0.2",
        "0.1"
      ],
      fr: [
        "0.3",
        "0.2",
        "0.1"
      ],
      en: [
        "0.3",
        "0.2",
        "0.1"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 118,
    category: "ed",
    license: "G",
    question: {
      ar: "أي مما يلي يقلل من استهلاك الوقود؟",
      fr: "Qu’est-ce qui réduit la consommation ?",
      en: "What reduces fuel consumption?"
    },
    options: {
      ar: [
        "القيادة بسرعة متفاوتة وعشوائية",
        "تخفيف حمولة السيارة",
        "القيادة في وقت الذروة"
      ],
      fr: [
        "Conduite irrégulière",
        "Réduire charge",
        "Conduite heure de pointe"
      ],
      en: [
        "Irregular driving",
        "Reduce load",
        "Driving at peak time"
      ]
    },
    correct: 1
  },

  {
  type: "normal",
  id: 119,
  category: "ed",
  license: "G",
  question: {
    ar: "ما هي القيادة الصديقة للبيئة؟",
    fr: "Qu’est-ce que l’éco-conduite ?",
    en: "What is eco-driving?"
  },
  options: {
    ar: [
      "استخدام الإضاءة بكفاءة في قيادة المركبات من خلال اتباع طرق سهلة، ذكية في استهلاك المياه",
      "استخدام الوقود بكفاءة في قيادة المركبات من خلال اتباع طرق سهلة، ذكية، ومسؤولة تساهم في رفع مستوى الأمان خلال أقسام الطرق الصعبة",
      "القيادة الاقتصادية والصديقة للبيئة من خلال اتباع طرق قيادة سهلة، ذكية، ومسؤولة تساهم في خفض استهلاك الوقود وتحد من تلوث الهواء الناجم عن النقل البري"
    ],
    fr: [
      "Utilisation efficace de l’éclairage",
      "Utilisation efficace du carburant",
      "Conduite économique et écologique"
    ],
    en: [
      "Efficient use of lighting",
      "Efficient fuel usage",
      "Economic and eco-friendly driving reducing fuel and pollution"
    ]
  },
  correct: 2
},
  {
    type: "normal",
    id: 121,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كان الطريق مقسوماً إلى مسلكين محددين بخطوط متواصلة أو بفواصل، يجب على السائق:",
      fr: "Si la route est divisée en deux voies délimitées par des lignes continues ou des séparateurs, le conducteur doit :",
      en: "If the road is divided into two lanes marked by continuous lines or dividers, the driver must:"
    },
    options: {
      ar: [
        "عدم اجتياز هذه الخطوط أو الفواصل",
        "اجتياز هذه الخطوط والفواصل والسير عليها",
        "السير في الاتجاه المعاكس"
      ],
      fr: [
        "Ne pas franchir ces lignes ou séparateurs",
        "Franchir ces lignes ou séparateurs et circuler dessus",
        "Circuler en sens inverse"
      ],
      en: [
        "Not cross these lines or dividers",
        "Cross these lines or dividers and drive on them",
        "Drive in the opposite direction"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 122,
    category: "law",
    license: "G",
    question: {
      ar: "على سائق السيارة، في حالة السير العادي:",
      fr: "Le conducteur, en circulation normale, doit :",
      en: "The driver, in normal traffic, must:"
    },
    options: {
      ar: [
        "أن يلتزم الجانب الأيمن من الطريق دون تنبيه",
        "أن يتجاوز الخطوط بقصد التجاوز",
        "أن يلتزم الجانب الأيسر من الطريق"
      ],
      fr: [
        "Garder le côté droit de la route sans avertissement",
        "Franchir les lignes pour dépasser",
        "Garder le côté gauche de la route"
      ],
      en: [
        "Keep to the right side of the road without warning",
        "Cross the lines to overtake",
        "Keep to the left side of the road"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 123,
    category: "law",
    license: "G",
    question: {
      ar: "تخصص الأرصفة، عند وجودها:",
      fr: "Les trottoirs, lorsqu’ils existent, sont réservés :",
      en: "Sidewalks, when available, are reserved for:"
    },
    options: {
      ar: [
        "للمشاة وعربات الأولاد والمرضى والمقعدين المدفوعين بالأيدي",
        "لوضع أي شيء يعيق سير المنتفعين",
        "لإيقاف السيارة في حال السماح بذلك"
      ],
      fr: [
        "Aux piétons, poussettes, malades et personnes handicapées poussées à la main",
        "À placer tout objet gênant la circulation des usagers",
        "Au stationnement des voitures si cela est autorisé"
      ],
      en: [
        "Pedestrians, baby strollers, sick people, and hand-pushed disabled persons",
        "Placing anything that obstructs users’ movement",
        "Parking cars if allowed"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 124,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق الذي يتأهب لإدخال تغيير هام في سرعة مركبته أو اتجاهها:",
      fr: "Le conducteur qui s’apprête à effectuer un changement important de vitesse ou de direction doit :",
      en: "A driver preparing to make a major change in speed or direction must:"
    },
    options: {
      ar: [
        "أن يتأكد مسبقاً من إمكانية إجراء ذلك بدون خطر وأن ينبه غيره إلى ذلك",
        "أن يتجاوز الخطوط المتقطعة دون أي سابق إنذار",
        "أن يتجاوز الخطوط المتواصلة فيما إذا كانت إلى يساره مباشرة"
      ],
      fr: [
        "S’assurer à l’avance que cela peut être fait sans danger et avertir les autres",
        "Franchir les lignes discontinues sans avertissement préalable",
        "Franchir les lignes continues si elles sont directement à sa gauche"
      ],
      en: [
        "Make sure in advance it can be done safely and warn others",
        "Cross broken lines without any prior warning",
        "Cross continuous lines if they are directly on his left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 125,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق أن لا يستعمل المكابح في السير فجأة إلا:",
      fr: "Le conducteur ne doit pas freiner brusquement en circulation sauf :",
      en: "The driver must not brake suddenly while driving except:"
    },
    options: {
      ar: [
        "بداعي الخطر",
        "بداعي تجربتها",
        "بداعي التوقف"
      ],
      fr: [
        "En cas de danger imminent",
        "Pour les essayer",
        "Pour commencer à s’arrêter"
      ],
      en: [
        "In case of imminent danger",
        "To test them",
        "To start stopping"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 126,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق أن يلتزم جانب:",
      fr: "Le conducteur doit se tenir du côté :",
      en: "The driver must keep to the side:"
    },
    options: {
      ar: [
        "اليمين من الطريق عندما يقبل عليه سائق آخر من الجهة المعاكسة",
        "اليسار من الطريق عندما يقبل عليه سائق آخر من الجهة المعاكسة",
        "اليسار عندما يريد سائق آخر تجاوزه"
      ],
      fr: [
        "À droite de la route lorsqu’un conducteur arrive en sens inverse",
        "À gauche de la route lorsqu’un conducteur arrive en sens inverse",
        "À gauche lorsqu’un autre conducteur veut le dépasser"
      ],
      en: [
        "The right side of the road when another driver approaches from the opposite direction",
        "The left side of the road when another driver approaches from the opposite direction",
        "The left side when another driver wants to overtake"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 127,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر على السائق:",
      fr: "Il est interdit au conducteur :",
      en: "It is prohibited for the driver to:"
    },
    options: {
      ar: [
        "تجاوز الفرق العسكرية وقوى الأمن والمواكب على اختلاف أنواعها وهي في حالة السير",
        "السير على الجانب الأيمن، عندما يقبل عليه من الجهة المقابلة سائق آخر",
        "تجاوز سائق آخر من الجانب الأيسر عندما تكون الرؤية كافية"
      ],
      fr: [
        "Dépasser les convois militaires, forces de sécurité et cortèges en circulation",
        "Circuler à droite lorsqu’un conducteur arrive en sens inverse",
        "Dépasser par la gauche lorsque la visibilité est suffisante"
      ],
      en: [
        "Overtake military convoys, security forces, and official processions while they are moving",
        "Drive on the right side when another driver approaches from the opposite direction",
        "Overtake another driver from the left when visibility is sufficient"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 128,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر على سائقي المركبات:",
      fr: "Il est interdit aux conducteurs de véhicules :",
      en: "Drivers are prohibited from:"
    },
    options: {
      ar: [
        "أن يوقفوا محركات مركباتهم عن الدوران بقصد تسييرها في المنحدرات بقوة اندفاعها",
        "أن يسيروا بالاتجاه المحدد",
        "أن يتمهلوا بالسير على الجانب الأيسر"
      ],
      fr: [
        "Couper le moteur pour laisser le véhicule descendre par inertie",
        "Circuler dans la direction indiquée",
        "Rouler lentement sur le côté gauche"
      ],
      en: [
        "Turning off the engine to let the vehicle move downhill by inertia",
        "Driving in the specified direction",
        "Driving slowly on the left side"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 129,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur du véhicule :",
      en: "It is prohibited for the vehicle driver to:"
    },
    options: {
      ar: [
        "يجري مناورة عكس الاتجاه (Demi Tour) في وسط الطريق العام ضمن المناطق المأهولة",
        "أن يسير بالاتجاه المحدد",
        "أن يتأكد من إجراء مناورة التجاوز دون خطر"
      ],
      fr: [
        "Effectuer un demi-tour au milieu de la route dans les zones habitées",
        "Circuler dans la direction indiquée",
        "S’assurer que le dépassement se fait sans danger"
      ],
      en: [
        "Make a U-turn in the middle of the road within populated areas",
        "Drive in the specified direction",
        "Ensure that overtaking is done safely"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 231,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر على السائق أن:",
      fr: "Il est interdit au conducteur de :",
      en: "It is prohibited for the driver to:"
    },
    options: {
      ar: [
        "غسل المركبات على الطريق العام",
        "أن يتأكد من إجراء مناورة التجاوز دون خطر",
        "السير على الجانب الأيمن من الطريق"
      ],
      fr: [
        "Laver les véhicules sur la voie publique",
        "S’assurer que le dépassement se fait sans danger",
        "Circuler sur le côté droit de la route"
      ],
      en: [
        "Wash vehicles on the public road",
        "Ensure that overtaking is done safely",
        "Drive on the right side of the road"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 232,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق أن:",
      fr: "Le conducteur doit :",
      en: "The driver must:"
    },
    options: {
      ar: [
        "أن لا يأخذ بعين الاعتبار وضعية الطرق وحالتها وكثافة السير",
        "يزيد السرعة عندما تكون الرؤية سيئة",
        "يخفف السرعة أو أن يتوقف كلما أوجبت الظروف وخاصة عندما تكون الرؤية سيئة"
      ],
      fr: [
        "Ne pas tenir compte de l’état de la route ni de la circulation",
        "Augmenter la vitesse lorsque la visibilité est mauvaise",
        "Ralentir ou s’arrêter lorsque les conditions l’exigent surtout si la visibilité est mauvaise"
      ],
      en: [
        "Not take into account road conditions and traffic density",
        "Increase speed when visibility is poor",
        "Reduce speed or stop when conditions require, especially when visibility is poor"
      ]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 233,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق:",
      fr: "Le conducteur doit :",
      en: "The driver must:"
    },
    options: {
      ar: [
        "التجاوز على اليسار",
        "التجاوز على اليمين عندما تكون الطريق ذات مسرب واحد",
        "التلاقي على اليسار"
      ],
      fr: [
        "Dépasser par la gauche",
        "Dépasser par la droite sur une route à une seule voie",
        "Se croiser à gauche"
      ],
      en: [
        "Overtake on the left",
        "Overtake on the right on a single-lane road",
        "Pass on the left when meeting"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 234,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق في حال التلاقي:",
      fr: "En cas de croisement, le conducteur doit :",
      en: "When meeting another vehicle, the driver must:"
    },
    options: {
      ar: [
        "أن يلتزم الجهة اليمين من الطريق بقدر ما يسمح وجود سائقين آخرين عليها",
        "أن يلتزم الجهة اليسار من الطريق بقدر ما يسمح وجود سائقين آخرين عليها",
        "أن يسير في وسط الطريق"
      ],
      fr: [
        "Se tenir à droite autant que possible compte tenu des autres usagers",
        "Se tenir à gauche autant que possible",
        "Rouler au milieu de la route"
      ],
      en: [
        "Keep to the right as much as possible considering other road users",
        "Keep to the left as much as possible",
        "Drive in the middle of the road"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 235,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق قبل الشروع بالتجاوز:",
      fr: "Avant de dépasser, le conducteur doit :",
      en: "Before overtaking, the driver must:"
    },
    options: {
      ar: [
        "أن يتأكد من أن من يتبعه من السائقين لم يباشر بعد مناورة تجاوز مماثلة",
        "أن يقوم بالتجاوز حتى ولو باشر السائق الذي يتبعه بمناورة مماثلة",
        "عدم مراعاة تدابير السير الممكن اتخاذها ضمن المناطق المأهولة"
      ],
      fr: [
        "S’assurer qu’aucun conducteur derrière n’a déjà commencé à dépasser",
        "Dépasser même si le conducteur derrière a commencé à dépasser",
        "Ignorer les règles de circulation en agglomération"
      ],
      en: [
        "Make sure no driver behind has already started overtaking",
        "Overtake even if the driver behind has started overtaking",
        "Ignore traffic rules in populated areas"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 236,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق قبل الشروع بالتجاوز:",
      fr: "Avant de dépasser, le conducteur doit :",
      en: "Before overtaking, the driver must:"
    },
    options: {
      ar: [
        "أن ينبه السائق الذي يريد تجاوزه",
        "عدم تنبيه السائق الذي يريد تجاوزه",
        "له أفضلية التجاوز ولو باشر السائق الذي يتبعه عملية مماثلة"
      ],
      fr: [
        "Avertir le conducteur qu’il veut dépasser",
        "Ne pas avertir le conducteur qu’il veut dépasser",
        "Avoir la priorité de dépasser même si un conducteur derrière commence la même manœuvre"
      ],
      en: [
        "Warn the driver he wants to overtake",
        "Not warn the driver he wants to overtake",
        "Have priority to overtake even if a driver behind has started the same maneuver"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 237,
    category: "law",
    license: "G",
    question: {
      ar: "عند التجاوز، يجب على السائق أن:",
      fr: "Lors du dépassement, le conducteur doit :",
      en: "When overtaking, the driver must:"
    },
    options: {
      ar: [
        "يستعمل النصف الأيسر من الطريق، ولو كان ذلك يضايق السائرين في الاتجاه المعاكس",
        "يستعمل النصف الأيسر من الطريق، على أن لا يضايق ذلك السائرين في الاتجاه المعاكس",
        "لا يلتزم اليمين مباشرة بعد التجاوز"
      ],
      fr: [
        "Utiliser la moitié gauche même si cela gêne les véhicules en sens inverse",
        "Utiliser la moitié gauche sans gêner les véhicules en sens inverse",
        "Ne pas revenir à droite immédiatement après le dépassement"
      ],
      en: [
        "Use the left half even if it disturbs oncoming traffic",
        "Use the left half without disturbing oncoming traffic",
        "Not return to the right immediately after overtaking"
      ]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 238,
    category: "law",
    license: "G",
    question: {
      ar: "يسمح بالتجاوز على اليمين خلافاً للقاعدة:",
      fr: "Le dépassement par la droite est autorisé exceptionnellement :",
      en: "Overtaking on the right is exceptionally allowed:"
    },
    options: {
      ar: [
        "في المسالك والطرقات التي تحتوي أكثر من مسربين، شرط أن يتأكد السائق أن انتقاله من مسرب إلى آخر لا يسبب خطراً أو إزعاجاً للآخرين",
        "لا يسمح بالتجاوز على اليمين",
        "في حال أشار السائق بأنه ينوي التوجه إلى اليمين"
      ],
      fr: [
        "Sur routes à plusieurs voies si cela ne gêne pas les autres",
        "Le dépassement à droite est interdit",
        "Si le conducteur signale son intention de tourner à droite"
      ],
      en: [
        "On multi-lane roads if it does not cause danger or disturbance",
        "Overtaking on the right is not allowed",
        "If the driver signals turning right"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 239,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر التجاوز:",
      fr: "Le dépassement est interdit :",
      en: "Overtaking is prohibited:"
    },
    options: {
      ar: [
        "على المنعطفات",
        "إذا كان الطريق مقسم إلى عدة مسالك محددة بخطوط متقطعة",
        "على يسار المركبة إذا كانت الطريق محددة بخطوط متقطعة"
      ],
      fr: [
        "Dans les virages",
        "Si la route est divisée en plusieurs voies avec lignes discontinues",
        "À gauche d’un véhicule si la route a des lignes discontinues"
      ],
      en: [
        "On curves",
        "If the road is divided with dashed lanes",
        "On the left of a vehicle when dashed lines exist"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 240,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر التجاوز:",
      fr: "Le dépassement est interdit :",
      en: "Overtaking is prohibited:"
    },
    options: {
      ar: [
        "على الجسور وفي الأنفاق",
        "عن جهة اليمين في جميع الحالات",
        "على الطرقات التي لا تحتوي أكثر من مسرب واحد"
      ],
      fr: [
        "Sur les ponts et dans les tunnels",
        "Par la droite dans tous les cas",
        "Sur les routes à une seule voie"
      ],
      en: [
        "On bridges and in tunnels",
        "On the right in all cases",
        "On single-lane roads"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 241,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر التجاوز:",
      fr: "Le dépassement est interdit :",
      en: "Overtaking is prohibited:"
    },
    options: {
      ar: [
        "في حال توقف رتل من السيارات بسبب عرقلة السير أو بسبب وجود إشارة توقفها",
        "إذا كان المقصود تجاوزه يسير على المسلك اليمين للطريق",
        "في حال بقاء النصف الأيسر من الطريق حراً"
      ],
      fr: [
        "Lorsqu’une file de véhicules est arrêtée à cause d’un obstacle ou d’un signal",
        "Si le véhicule à dépasser circule à droite",
        "Si la moitié gauche de la route est libre"
      ],
      en: [
        "When a line of vehicles is stopped due to obstruction or a signal",
        "If the vehicle to overtake is on the right lane",
        "If the left half of the road is free"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 242,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر التجاوز:",
      fr: "Le dépassement est interdit :",
      en: "Overtaking is prohibited:"
    },
    options: {
      ar: [
        "عند رؤوس الطرقات المرتفعة إذا كانت الرؤية إلى الأمام غير كافية إلا بشرط بقاء النصف الأيسر من الطريق حراً",
        "إذا كان الطريق مقسم إلى عدة مسالك محددة بخطوط متقطعة",
        "في الحالات التي يسمح فيها شكل الطريق المجال الحرفي عرضه بالتجاوز بسهولة وسلامة تامة"
      ],
      fr: [
        "Au sommet des routes si la visibilité est insuffisante",
        "Si la route est divisée en plusieurs voies avec lignes discontinues",
        "Lorsque la route permet un dépassement facile et sûr"
      ],
      en: [
        "At hilltops when forward visibility is insufficient",
        "If the road is divided with dashed lanes",
        "When the road allows easy and safe overtaking"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 243,
    category: "law",
    license: "G",
    question: {
      ar: "إذا نبهت سيارة من سيارات قوى الأمن أو إطفائية أو الدفاع المدني أو الإسعاف إلى اقترابها بواسطة الإشارات، يجب على سائقي الطريق الآخرين أن:",
      fr: "Si un véhicule de secours signale son approche, les autres conducteurs doivent :",
      en: "If an emergency vehicle signals its approach, other drivers must:"
    },
    options: {
      ar: [
        "يخفضوا سرعتهم وإذا لزم الأمر أن يتوقفوا أو ينحرفوا جانباً لتسهيل مرور هذه السيارات",
        "زيادة سرعتهم لتسهيل مرور هذه السيارات",
        "التوقف فوراً حيثما وجدوا لتسهيل مرور هذه السيارات"
      ],
      fr: [
        "Ralentir et si nécessaire s’arrêter ou se décaler pour laisser passer",
        "Accélérer pour faciliter le passage",
        "S’arrêter immédiatement sur place"
      ],
      en: [
        "Slow down and if necessary stop or move aside to let them pass",
        "Increase speed to facilitate passage",
        "Stop immediately wherever they are"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 244,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر التجاوز:",
      fr: "Le dépassement est interdit :",
      en: "Overtaking is prohibited:"
    },
    options: {
      ar: [
        "في الطرقات الجبلية الضيقة أو الإنحدار الشديد",
        "إذا كان الطريق مقسم إلى عدة مسالك محددة بخطوط متقطعة",
        "في الطرقات الواسعة"
      ],
      fr: [
        "Sur les routes de montagne étroites ou les fortes descentes",
        "Si la route est divisée en plusieurs voies par des lignes discontinues",
        "Sur les routes larges"
      ],
      en: [
        "On narrow mountain roads or steep descents",
        "If the road is divided into several lanes by broken lines",
        "On wide roads"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 245,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق عند اقترابه من تقاطع طرق:",
      fr: "Lorsqu’il approche d’une intersection, le conducteur doit :",
      en: "When approaching an intersection, the driver must:"
    },
    options: {
      ar: [
        "أن يتأكد من أن الطريق الذي ينوي قطعه حر",
        "أن يلتزم الطرف اليمين من الطريق",
        "المرور دون التثبت من أن الطريق حر"
      ],
      fr: [
        "S’assurer que la route qu’il veut traverser est libre",
        "Se tenir du côté droit de la route",
        "Passer sans vérifier que la route est libre"
      ],
      en: [
        "Make sure the road he intends to cross is clear",
        "Keep to the right side of the road",
        "Pass without checking that the road is clear"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 246,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق الذي يتأهب لترك طريق من أجل سلوك طريق آخر واقع إلى يمينه:",
      fr: "Le conducteur qui s’apprête à quitter une route pour prendre une autre route située à sa droite doit :",
      en: "A driver preparing to leave a road to take another road on his right must:"
    },
    options: {
      ar: [
        "أن يلتزم الطرف اليمين من الطريق",
        "أن يلتزم الطرف الأيسر من الطريق",
        "أن يميل إلى اليسار دون أن يتعدى محور الطريق"
      ],
      fr: [
        "Se tenir du côté droit de la route",
        "Se tenir du côté gauche de la route",
        "Se déporter vers la gauche sans dépasser l’axe de la route"
      ],
      en: [
        "Keep to the right side of the road",
        "Keep to the left side of the road",
        "Move left without crossing the road axis"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 247,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق الذي يتأهب لترك طريق من أجل سلوك طريق آخر واقع على يساره أن:",
      fr: "Le conducteur qui s’apprête à quitter une route pour prendre une autre route située à sa gauche doit :",
      en: "A driver preparing to leave a road to take another road on his left must:"
    },
    options: {
      ar: [
        "يميل إلى اليسار دون أن يتعدى محور الطريق",
        "يميل إلى يمينه دون أن يتعدى محور الطريق",
        "يبقى في خط الوسط دون أن يميل لا يميناً ولا يساراً"
      ],
      fr: [
        "Se déporter vers la gauche sans dépasser l’axe de la route",
        "Se déporter vers la droite sans dépasser l’axe de la route",
        "Rester au milieu sans se déporter ni à droite ni à gauche"
      ],
      en: [
        "Move left without crossing the road axis",
        "Move right without crossing the road axis",
        "Stay in the middle without moving right or left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 248,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق الذي يتأهب لترك طريق من أجل سلوك طريق آخر أن:",
      fr: "Le conducteur qui s’apprête à quitter une route pour prendre une autre route doit :",
      en: "A driver preparing to leave a road to take another road must:"
    },
    options: {
      ar: [
        "يقوم بالإلتفاف اللازم بسرعة معتدلة بعد أن يتأكد من إمكان إجراء ذلك دون أي خطر أو إزعاج للآخرين",
        "يقوم بالإلتفاف اللازم بسرعة فائقة كي لا يسبب الإزعاج للآخرين",
        "يميل إلى اليمين ببطء"
      ],
      fr: [
        "Effectuer le virage nécessaire à vitesse modérée après s’être assuré que cela peut se faire sans danger ni gêne",
        "Effectuer le virage nécessaire à grande vitesse pour ne pas gêner les autres",
        "Se déporter lentement vers la droite"
      ],
      en: [
        "Make the required turn at moderate speed after ensuring it can be done without danger or disturbance",
        "Make the required turn at high speed so as not to disturb others",
        "Move slowly to the right"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 249,
    category: "law",
    license: "G",
    question: {
      ar: "من الأفضل المحافظة على مسافة أمان:",
      fr: "Il est préférable de garder une distance de sécurité :",
      en: "It is best to maintain a safety distance:"
    },
    options: {
      ar: [
        "على كل جوانب المركبة",
        "فقط من جهتي الأمام والخلف",
        "فقط من جهتي اليمين واليسار"
      ],
      fr: [
        "De tous les côtés du véhicule",
        "Seulement à l’avant et à l’arrière",
        "Seulement à droite et à gauche"
      ],
      en: [
        "On all sides of the vehicle",
        "Only in front and behind",
        "Only on the right and left sides"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 250,
    category: "law",
    license: "G",
    question: {
      ar: "السماح بوجود مسافة أمان مهم لأنه:",
      fr: "Garder une distance de sécurité est important car cela :",
      en: "Allowing a safety distance is important because it:"
    },
    options: {
      ar: [
        "يعطي وقت لردة الفعل والتفاعل مع مجريات السير",
        "يمنع الالتهاء بالمركبات الأخرى",
        "يعطي فسحة لدخول سيارة أخرى"
      ],
      fr: [
        "Donne le temps de réagir et d’interagir avec la circulation",
        "Empêche d’être distrait par les autres véhicules",
        "Donne de l’espace à une autre voiture pour entrer"
      ],
      en: [
        "Gives time to react and respond to traffic conditions",
        "Prevents distraction by other vehicles",
        "Gives space for another car to enter"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 251,
    category: "law",
    license: "G",
    question: {
      ar: "الضوء الأخضر المستمر على التقاطع يعني أنه:",
      fr: "Le feu vert continu à l’intersection signifie :",
      en: "A steady green light at an intersection means:"
    },
    options: {
      ar: [
        "يمكنك عبور التقاطع إذا كان ذلك ممكناً",
        "لا تستطيع المرور إلى اليمين",
        "يجب عليك التوقف والتأكد من السير المقابل قبل متابعة السير"
      ],
      fr: [
        "Vous pouvez traverser l’intersection si cela est possible",
        "Vous ne pouvez pas tourner à droite",
        "Vous devez vous arrêter et vérifier la circulation en face avant de continuer"
      ],
      en: [
        "You may cross the intersection if possible",
        "You cannot turn right",
        "You must stop and check opposing traffic before proceeding"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 252,
    category: "law",
    license: "G",
    question: {
      ar: "الضوء الأصفر المتقطع يعني:",
      fr: "Le feu jaune clignotant signifie :",
      en: "A flashing yellow light means:"
    },
    options: {
      ar: [
        "خفف السرعة وتابع السير بحذر",
        "توقف ثم تابع السير عند خلو الطريق",
        "تابع السير إذا كانت الطريق خالية"
      ],
      fr: [
        "Ralentissez et continuez avec prudence",
        "Arrêtez-vous puis continuez lorsque la route est libre",
        "Continuez si la route est libre"
      ],
      en: [
        "Slow down and proceed with caution",
        "Stop then proceed when the road is clear",
        "Proceed if the road is clear"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 253,
    category: "law",
    license: "G",
    question: {
      ar: "الضوء الأصفر على تقاطع يعني:",
      fr: "Le feu jaune à une intersection signifie :",
      en: "A yellow light at an intersection means:"
    },
    options: {
      ar: [
        "قف",
        "خفف السرعة واستعد للتوقف",
        "انطلق"
      ],
      fr: [
        "Arrêtez-vous",
        "Ralentissez et préparez-vous à vous arrêter",
        "Démarrez"
      ],
      en: [
        "Stop",
        "Slow down and prepare to stop",
        "Go"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 254,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا انفجر دولاب خلال السير:",
      fr: "Si un pneu éclate pendant la conduite :",
      en: "If a tire bursts while driving:"
    },
    options: {
      ar: [
        "اخفض سرعة السيارة باستعمال المكابح وأوقفها خارج الطريق",
        "اترك حرية الحركة للمقود",
        "احرر دواسة الوقود لتخفيف سرعة السيارة واقوم بتثبيت المقود وأوقفها خارج الطريق"
      ],
      fr: [
        "Réduisez la vitesse en utilisant les freins et arrêtez-vous hors de la route",
        "Laissez le volant libre",
        "Relâchez l’accélérateur, maintenez le volant fermement et arrêtez-vous hors de la route"
      ],
      en: [
        "Reduce speed using brakes and stop outside the road",
        "Let the steering wheel move freely",
        "Release the accelerator, hold the steering firmly and stop outside the road"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 255,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا أزعجتك أنوار السيارة القادمة من الجهة المقابلة عليك النظر إلى:",
      fr: "Si les phares d’un véhicule venant en sens inverse vous éblouissent, vous devez regarder :",
      en: "If headlights from an oncoming vehicle dazzle you, you should look at:"
    },
    options: {
      ar: [
        "الأسفل وإلى الجانب الأيمن من الطريق",
        "الجانب الأيسر من الطريق",
        "وسط الطريق"
      ],
      fr: [
        "Vers le bas et à droite de la route",
        "Le côté gauche de la route",
        "Le milieu de la route"
      ],
      en: [
        "Downwards and to the right side of the road",
        "The left side of the road",
        "The middle of the road"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 256,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا تعطلت مركبتك على الأوتوستراد:",
      fr: "Si votre véhicule tombe en panne sur l’autoroute :",
      en: "If your vehicle breaks down on the highway:"
    },
    options: {
      ar: [
        "وضع المثلث التحذيري وتشغيل أنوار الإشارات الأربعة لتحذير باقي السائقين",
        "وضع المثلث التحذيري وتشغيل الأنوار الرئيسية لتحذير باقي السائقين",
        "انتظر في المركبة لوصول المساعدة"
      ],
      fr: [
        "Placer le triangle de signalisation et allumer les feux de détresse pour avertir les autres conducteurs",
        "Placer le triangle et allumer les feux principaux",
        "Attendre dans le véhicule l’arrivée de l’aide"
      ],
      en: [
        "Place warning triangle and turn on hazard lights to warn other drivers",
        "Place triangle and turn on main lights",
        "Wait inside the vehicle for help"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 257,
    category: "law",
    license: "G",
    question: {
      ar: "إذا دخلت طريق سريع عليك:",
      fr: "Lorsque vous entrez sur une autoroute, vous devez :",
      en: "When entering a highway, you should:"
    },
    options: {
      ar: [
        "تقود بسرعة السير الذي على الطريق السريع",
        "أن تقود بسرعة أقل من السرعة المحددة",
        "تخفيف السرعة"
      ],
      fr: [
        "Rouler à la vitesse de la circulation sur l’autoroute",
        "Rouler à une vitesse inférieure à la limite",
        "Ralentir"
      ],
      en: [
        "Drive at the speed of highway traffic",
        "Drive below the speed limit",
        "Slow down"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 258,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كان المسلك محدد بخط متقطع محاذ لخط متواصل:",
      fr: "Si une voie est marquée par une ligne discontinue à côté d’une ligne continue :",
      en: "If a lane is marked with a broken line next to a solid line:"
    },
    options: {
      ar: [
        "يحظر على السائق: اجتياز الخط المتواصل فيما إذا كان إلى يساره مباشرة",
        "يحظر على السائق: اجتياز الخط المتواصل فيما إذا كان إلى يمينه مباشرة",
        "يسمح للسائق اجتياز الخط المتقطع إذا كان إلى يساره مباشرة"
      ],
      fr: [
        "Il est interdit de franchir la ligne continue si elle est à votre gauche",
        "Il est interdit de franchir la ligne continue si elle est à votre droite",
        "Il est permis de franchir la ligne discontinue si elle est à votre gauche"
      ],
      en: [
        "It is forbidden to cross the solid line if it is on your left",
        "It is forbidden to cross the solid line if it is on your right",
        "You may cross the broken line if it is on your left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 259,
    category: "law",
    license: "G",
    question: {
      ar: "إذا لاحقتك مركبة وأنت على الجهة اليسرى من الطريق السريع عليك:",
      fr: "Si un véhicule vous suit alors que vous êtes sur la voie de gauche de l’autoroute :",
      en: "If a vehicle is following you while you are in the left lane of the highway:"
    },
    options: {
      ar: [
        "الاتجاه بمركبتك إلى المسرب اليمين معدلاً سرعتك إلى السرعة على هذا المسرب",
        "ضرب قدمك بقطع على المكابح لجعلها تبتعد",
        "زيادة السرعة"
      ],
      fr: [
        "Se déplacer vers la voie de droite en adaptant votre vitesse",
        "Freiner brusquement pour l’éloigner",
        "Augmenter la vitesse"
      ],
      en: [
        "Move to the right lane and adjust your speed",
        "Brake suddenly to push it away",
        "Increase speed"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 260,
    category: "safety",
    license: "G",
    question: {
      ar: "إذا لم يعمل المكبح خلال السير عليك:",
      fr: "Si les freins ne fonctionnent pas pendant la conduite :",
      en: "If the brakes fail while driving:"
    },
    options: {
      ar: [
        "بسرعة ضرب المكابح بتردد عالي",
        "الاتجاه مباشرة إلى مرآب التصليح",
        "توقيف المحرك عن الدوران"
      ],
      fr: [
        "Pomper rapidement les freins",
        "Se diriger directement vers un garage",
        "Couper le moteur"
      ],
      en: [
        "Pump the brakes rapidly",
        "Head directly to a repair shop",
        "Turn off the engine"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 261,
    category: "safety",
    license: "G",
    question: {
      ar: "في حال سوء الأحوال الجوية:",
      fr: "En cas de mauvaises conditions météorologiques :",
      en: "In bad weather conditions:"
    },
    options: {
      ar: [
        "القيادة دون السرعة القصوى وبحسب ظروف الطريق",
        "القيادة بالسرعة القصوى",
        "التوقف بالسرعة القصوى وإضاءة المصابيح"
      ],
      fr: [
        "Conduire en dessous de la vitesse maximale selon les conditions",
        "Conduire à la vitesse maximale",
        "S’arrêter à la vitesse maximale avec les phares allumés"
      ],
      en: [
        "Drive below maximum speed according to conditions",
        "Drive at maximum speed",
        "Stop at maximum speed with lights on"
      ]
    },
    correct: 0
  },


  {
    type: "normal",
    id: 262,
    category: "safety",
    license: "G",
    question: {
      ar: "تحتاج مسافة توقف إضافية عند السير:",
      fr: "Vous avez besoin d’une distance d’arrêt supplémentaire en roulant :",
      en: "You need extra stopping distance when driving:"
    },
    options: {
      ar: [
        "على طرقات رطبة",
        "على طرقات جافة",
        "خلف سيارات أخرى"
      ],
      fr: [
        "Sur des routes mouillées",
        "Sur des routes sèches",
        "Derrière d'autres véhicules"
      ],
      en: [
        "On wet roads",
        "On dry roads",
        "Behind other vehicles"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 263,
    category: "law",
    license: "G",
    question: {
      ar: "تخصص الأرصفة، عند وجودها:",
      fr: "Les trottoirs sont réservés, lorsqu’ils existent :",
      en: "Sidewalks are reserved, when present:"
    },
    options: {
      ar: [
        "للمشاة وعربات الأولاد والمرضى والمقعدين المدفوعين بالأيدي",
        "لإيقاف السيارة في حال السماح بذلك",
        "لوضع أي شيء يعيق سير المنتفعين"
      ],
      fr: [
        "Aux piétons, poussettes, malades et personnes en fauteuil roulant",
        "Au stationnement si autorisé",
        "Pour placer des objets gênant la circulation"
      ],
      en: [
        "For pedestrians, strollers, patients and wheelchair users",
        "For parking if allowed",
        "To place objects blocking movement"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 264,
    category: "law",
    license: "G",
    question: {
      ar: "تشير أنوار المكابح الخلفية إلى باقي السائقين إلى أنك:",
      fr: "Les feux de freinage arrière indiquent aux autres conducteurs que vous :",
      en: "Rear brake lights indicate to other drivers that you:"
    },
    options: {
      ar: [
        "تخفف السرعة أو تتوقف",
        "تبدل المسرب",
        "تدخل في منعطف"
      ],
      fr: [
        "Ralentissez ou vous arrêtez",
        "Changez de voie",
        "Entrez dans un virage"
      ],
      en: [
        "Are slowing down or stopping",
        "Changing lane",
        "Entering a curve"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 265,
    category: "law",
    license: "G",
    question: {
      ar: "على تقاطع أربعة اتجاهات، المركبة التي تمر أولاً هي:",
      fr: "À une intersection à quatre directions, le véhicule qui passe en premier est :",
      en: "At a four-way intersection, the vehicle that goes first is:"
    },
    options: {
      ar: [
        "المركبة التي وصلت أولاً ودخلت التقاطع",
        "المركبة التي تتجه إلى اليمين",
        "المركبة التي تصل أولاً"
      ],
      fr: [
        "Le véhicule arrivé en premier et entré dans l’intersection",
        "Le véhicule tournant à droite",
        "Le véhicule qui arrive en premier"
      ],
      en: [
        "The vehicle that arrived first and entered the intersection",
        "The vehicle turning right",
        "The vehicle that arrives first"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 266,
    category: "law",
    license: "G",
    question: {
      ar: "عليك التوقف عند رؤية:",
      fr: "Vous devez vous arrêter lorsque vous voyez :",
      en: "You must stop when you see:"
    },
    options: {
      ar: [
        "ضوء أحمر متقطع",
        "ضوء أصفر متقطع",
        "ضوء أصفر مستمر"
      ],
      fr: [
        "Feu rouge clignotant",
        "Feu jaune clignotant",
        "Feu jaune fixe"
      ],
      en: [
        "Flashing red light",
        "Flashing yellow light",
        "Steady yellow light"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 267,
    category: "law",
    license: "G",
    question: {
      ar: "عند استعمال الطريق مع شاحنة من المفيد التذكر بأن الشاحنات:",
      fr: "Lorsque vous partagez la route avec un camion, il est utile de se rappeler que les camions :",
      en: "When sharing the road with a truck, remember that trucks:"
    },
    options: {
      ar: [
        "تأخذ مسافة أطول من السيارات للتوقف",
        "يلزمها وقت أقل للتجاوز على منحدر",
        "بحاجة لشعاع دائرة أقصر لتتمكن من الانعطاف"
      ],
      fr: [
        "Prennent plus de distance pour s’arrêter",
        "Ont besoin de moins de temps pour dépasser en descente",
        "Ont besoin d’un rayon de braquage plus petit"
      ],
      en: [
        "Take longer distance to stop",
        "Need less time to overtake downhill",
        "Require a smaller turning radius"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 268,
    category: "safety",
    license: "G",
    question: {
      ar: "عند الانعطاف إلى اليمين على الضوء الأخضر عليك:",
      fr: "En tournant à droite au feu vert, vous devez :",
      en: "When turning right on green light, you should:"
    },
    options: {
      ar: [
        "افساح الطريق للمشاة",
        "متابعة السير بالمسرب نفسه",
        "تخفيف السرعة بسبب الانعطاف"
      ],
      fr: [
        "Céder le passage aux piétons",
        "Continuer dans la même voie",
        "Ralentir à cause du virage"
      ],
      en: [
        "Give way to pedestrians",
        "Continue in same lane",
        "Slow down due to turn"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 269,
    category: "law",
    license: "G",
    question: {
      ar: "يمكن الامتناع عن الخضوع لفحص الكحول أو المخدرات:",
      fr: "On peut refuser de se soumettre à un test d’alcool ou de drogue :",
      en: "Refusing alcohol or drug testing is allowed:"
    },
    options: {
      ar: [
        "ولا في أي حال من الأحوال",
        "في حال كان السائق دون سن 21",
        "في الحالات الطارئة"
      ],
      fr: [
        "Dans aucun cas",
        "Si le conducteur a moins de 21 ans",
        "En cas d’urgence"
      ],
      en: [
        "Under no circumstances",
        "If the driver is under 21",
        "In emergencies"
      ]
    },
    correct: 0
  },


  {
    type: "normal",
    id: 270,
    category: "law",
    license: "G",
    question: {
      ar: "عند السير في الضباب عليك أن تستعمل:",
      fr: "En cas de brouillard, vous devez utiliser :",
      en: "When driving in fog, you should use:"
    },
    options: {
      ar: [
        "أنوار الضباب و/أو أنوار الطريق (الضوء العالي)",
        "أنوار الضباب و/أو أنوار التلاقي (الضوء الواطي)",
        "أنوار الطريق (الضوء العالي)"
      ],
      fr: [
        "Feux antibrouillard et/ou feux de route (plein phare)",
        "Feux antibrouillard et/ou feux de croisement",
        "Feux de route (plein phare)"
      ],
      en: [
        "Fog lights and/or high beam headlights",
        "Fog lights and/or low beam headlights",
        "High beam headlights"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 271,
    category: "law",
    license: "G",
    question: {
      ar: "عند القيام بمناورة التجاوز على طريق سريع متعدد المسارب:",
      fr: "Lors d’un dépassement sur une autoroute à plusieurs voies :",
      en: "When overtaking on a multi-lane highway:"
    },
    options: {
      ar: [
        "تأكد من وجود فسحة كافية على المسرب الذي ستتجاوز عليه",
        "راقب السير المقابل",
        "لا حاجة لتشغيل الإشارات"
      ],
      fr: [
        "S’assurer qu’il y a suffisamment d’espace dans la voie de dépassement",
        "Observer la circulation en sens inverse",
        "Pas besoin d’utiliser les clignotants"
      ],
      en: [
        "Make sure there is enough space in the lane you will overtake into",
        "Watch opposing traffic",
        "No need to use indicators"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 272,
    category: "law",
    license: "G",
    question: {
      ar: "عند دخول منعطف عليك أن:",
      fr: "En entrant dans un virage, vous devez :",
      en: "When entering a curve, you should:"
    },
    options: {
      ar: [
        "تخفض من سرعة مركبتك",
        "تزيد من سرعة مركبتك",
        "تحافظ على سرعة مركبتك"
      ],
      fr: [
        "Réduire la vitesse du véhicule",
        "Augmenter la vitesse",
        "Maintenir la vitesse"
      ],
      en: [
        "Reduce your vehicle speed",
        "Increase speed",
        "Maintain speed"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 273,
    category: "law",
    license: "G",
    question: {
      ar: "عند تعطل الإشارات الضوئية عليك:",
      fr: "Lorsque les feux de signalisation sont en panne :",
      en: "When traffic lights are not working:"
    },
    options: {
      ar: [
        "التصرف كأنك على تقاطع من دون إشارات ضوئية",
        "التوقف بانتظار وصول شرطة السير",
        "إعطاء الأفضلية للسائق على اليسار"
      ],
      fr: [
        "Agir comme à une intersection sans feux",
        "Attendre la police de circulation",
        "Donner priorité au conducteur à gauche"
      ],
      en: [
        "Act as at an intersection without traffic lights",
        "Wait for traffic police",
        "Give priority to the driver on the left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 274,
    category: "law",
    license: "G",
    question: {
      ar: "عندما تقوم شاحنة بمناورة التجاوز لمركبتك عليك:",
      fr: "Lorsqu’un camion dépasse votre véhicule, vous devez :",
      en: "When a truck is overtaking your vehicle:"
    },
    options: {
      ar: [
        "تثبيت أو تخفيف السرعة",
        "زيادة السرعة",
        "تغيير المسرب"
      ],
      fr: [
        "Maintenir ou réduire la vitesse",
        "Augmenter la vitesse",
        "Changer de voie"
      ],
      en: [
        "Maintain or reduce speed",
        "Increase speed",
        "Change lane"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 275,
    category: "law",
    license: "G",
    question: {
      ar: "في حال السير خلف دراجة نارية عليك:",
      fr: "Lorsque vous suivez une moto :",
      en: "When driving behind a motorcycle:"
    },
    options: {
      ar: [
        "السماح لها باستخدام المسرب كاملاً",
        "تجاوز الدراجة على ذات المسرب",
        "السماح للدراجة باستخدام نصف المسرب"
      ],
      fr: [
        "Lui laisser toute la voie",
        "La dépasser dans la même voie",
        "Lui laisser la moitié de la voie"
      ],
      en: [
        "Allow it to use the full lane",
        "Overtake in the same lane",
        "Allow half the lane"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 276,
    category: "law",
    license: "G",
    question: {
      ar: "في حال اقتراب سائقيْن إثنين من تقاطع طرقات وهما قادمان من طريقين مختلفين:",
      fr: "Si deux conducteurs arrivent à une intersection de routes différentes :",
      en: "If two drivers approach an intersection from different roads:"
    },
    options: {
      ar: [
        "وجب على السائق القادم من اليمين أن يفسح المجال لمرور السائق الآخر",
        "وجب على السائق القادم من اليسار أن يفسح المجال لمرور السائق الآخر",
        "يمر كل في طريقه دون إعطاء أولوية"
      ],
      fr: [
        "Le conducteur venant de droite doit céder le passage",
        "Le conducteur venant de gauche doit céder le passage",
        "Chacun passe sans priorité"
      ],
      en: [
        "Driver from the right must give way",
        "Driver from the left must give way",
        "Each goes without priority"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 277,
    category: "law",
    license: "G",
    question: {
      ar: "قبل تجاوز مركبة أخرى، دخول منعطف، أو التجاوز عليك:",
      fr: "Avant de dépasser, d’entrer dans un virage ou de changer de voie :",
      en: "Before overtaking, entering a curve, or changing lanes:"
    },
    options: {
      ar: [
        "تخفيف السرعة، تشغيل الإشارة قبل فترة زمنية كافية لتنبيه باقي مستعملي الطريق والتأكد من المرايا والالتفات إلى البقع العمياء",
        "تخفيف السرعة وتشغيل الإشارة عند بدء تغير المسرب",
        "تخفيف السرعة وتشغيل إشارات التنبيه لتحذير السائقين والتأكد من المرايا"
      ],
      fr: [
        "Ralentir, signaler à l’avance et vérifier les rétroviseurs et angles morts",
        "Ralentir et signaler au moment du changement",
        "Ralentir et utiliser les feux de détresse"
      ],
      en: [
        "Slow down, signal early, check mirrors and blind spots",
        "Slow down and signal when starting lane change",
        "Slow down and use hazard lights"
      ]
    },
    correct: 0
  },


  {
    type: "normal",
    id: 278,
    category: "law",
    license: "G",
    question: {
      ar: "لا يجوز للسائق في حال التجاوزات العادية:",
      fr: "Il est interdit au conducteur lors d’un dépassement normal :",
      en: "During a normal overtaking, the driver must not:"
    },
    options: {
      ar: [
        "أن يستعمل المسرب الأيسر من الطريق",
        "أن يستعمل المسرب الأيمن من الطريق",
        "أن يضايق السائقين إلى يمينه"
      ],
      fr: [
        "Utiliser la voie de gauche",
        "Utiliser la voie de droite",
        "Gêner les conducteurs à sa droite"
      ],
      en: [
        "Use the left lane",
        "Use the right lane",
        "Disturb drivers on his right"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 279,
    category: "law",
    license: "G",
    question: {
      ar: "لمن تعود أفضلية المرور في حال تقاطع المركبة ومرور أحد المشاة دون وجود إشارة ضوئية؟",
      fr: "Qui a la priorité lorsqu’un véhicule et un piéton se croisent sans feu de signalisation ?",
      en: "Who has the right of way when a vehicle and a pedestrian meet without traffic lights?"
    },
    options: {
      ar: [
        "المشاة",
        "السيارة",
        "الذي يمر بسرعة أكبر الذي وصل أولاً"
      ],
      fr: [
        "Le piéton",
        "Le véhicule",
        "Celui qui roule plus vite ou est arrivé en premier"
      ],
      en: [
        "The pedestrian",
        "The vehicle",
        "Whoever is faster or arrived first"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 280,
    category: "safety",
    license: "G",
    question: {
      ar: "يتكون الجليد بسرعة أكبر على الطرق:",
      fr: "La glace se forme plus rapidement sur les routes :",
      en: "Ice forms faster on roads that are:"
    },
    options: {
      ar: [
        "التي يقع عليها ظل",
        "التي سطحها متعرج وفيه تجاويف",
        "المسطحة"
      ],
      fr: [
        "À l’ombre",
        "À surface irrégulière",
        "Plates"
      ],
      en: [
        "Shaded",
        "Uneven",
        "Flat"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 281,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur :",
      en: "It is forbidden for the driver to:"
    },
    options: {
      ar: [
        "يتأكد من إجراء التجاوز دون خطر",
        "يبقى يسيطر على سيارته بشكل يمكنه من إجراء جميع العمليات والمناورات المتوجبة",
        "يسير بغير الاتجاه المحدد"
      ],
      fr: [
        "S’assurer que le dépassement est sans danger",
        "Garder le contrôle du véhicule pour effectuer toutes les manœuvres nécessaires",
        "Circuler dans le mauvais sens"
      ],
      en: [
        "Ensure overtaking is safe",
        "Maintain full control of the vehicle",
        "Drive in the wrong direction"
      ]
    },
    correct: 0
  },

  
  {
    type: "normal",
    id: 282,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur :",
      en: "It is forbidden for the driver to:"
    },
    options: {
      ar: [
        "أن يتأكد من إجراء مناورة التجاوز دون خطر",
        "غسل المركبات على الطريق العام",
        "السير على الجانب الأيمن من الطريق"
      ],
      fr: [
        "S’assurer que le dépassement est sans danger",
        "Laver les véhicules sur la voie publique",
        "Circuler à droite de la route"
      ],
      en: [
        "Ensure overtaking is safe",
        "Wash vehicles on public roads",
        "Drive on the right side of the road"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 283,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur :",
      en: "It is forbidden for the driver to:"
    },
    options: {
      ar: [
        "أن يتأكد من إجراء مناورة التجاوز دون خطر",
        "يجري المناورة عكس الاتجاه في وسط الطريق العام",
        "أن يسير بالاتجاه المحدد"
      ],
      fr: [
        "S’assurer que le dépassement est sans danger",
        "Effectuer une manœuvre en sens inverse au milieu de la route",
        "Circuler dans le sens indiqué"
      ],
      en: [
        "Ensure overtaking is safe",
        "Perform a maneuver in the opposite direction in the middle of the road",
        "Drive in the designated direction"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 284,
    category: "law",
    license: "G",
    question: {
      ar: "يفرض المنطق السليم أن:",
      fr: "La logique impose que :",
      en: "Common sense requires that:"
    },
    options: {
      ar: [
        "لا تتجاوز السرعة القصوى 80 كلم/ساعة",
        "لا تسرع أكثر من السرعة المحددة",
        "لا تسرع أكثر من السرعة الآمنة لحالة   الطريق"
      ],
      fr: [
        "Ne pas dépasser 80 km/h",
        "Ne pas dépasser la vitesse limitée",
        "Ne pas dépasser la vitesse sécuritaire de la route"
      ],
      en: [
        "Not exceed 80 km/h",
        "Not exceed the speed limit",
        "Not exceed the safe speed for the road"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 285,
    category: "law",
    license: "G",
    question: {
      ar: "يمكنك الخروج عن الطريق لتجاوز مركبة أخرى:",
      fr: "Vous pouvez quitter la route pour dépasser un véhicule :",
      en: "You may leave the road to overtake another vehicle:"
    },
    options: {
      ar: [
        "ولا في أي حال من الأحوال",
        "إذا كان الطريق أو ممر المشاة يسع سيارتك",
        "إذا كانت السيارة التي أمامك تتجه نحو اليسار"
      ],
      fr: [
        "Jamais",
        "Si la route ou le passage piéton le permet",
        "Si le véhicule devant vous tourne à gauche"
      ],
      en: [
        "Never",
        "If the road or pedestrian path allows",
        "If the car ahead is turning left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 286,
    category: "law",
    license: "G",
    question: {
      ar: "يمكنك متابعة السير بانتباه على الضوء الأصفر إذا كنت:",
      fr: "Vous pouvez continuer avec prudence au feu jaune si vous êtes :",
      en: "You may proceed cautiously on a yellow light if you are:"
    },
    options: {
      ar: [
        "دخلت التقاطع",
        "تتجه نحو اليسار",
        "خلف مركبة عندها الأفضلية (مثل إسعاف، دفاع مدني، إطفاء)"
      ],
      fr: [
        "Déjà engagé dans l’intersection",
        "En train de tourner à gauche",
        "Derrière un véhicule prioritaire (ambulance, etc.)"
      ],
      en: [
        "Already in the intersection",
        "Turning left",
        "Behind a priority vehicle"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 287,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur :",
      en: "It is forbidden for the driver to:"
    },
    options: {
      ar: [
        "أن يتأكد من إجراء مناورة التجاوز دون خطر",
        "إصلاح المركبات على الطريق العام إلا في الضرورات القصوى",
        "السير على الجانب الأيمن من الطريق"
      ],
      fr: [
        "S’assurer que le dépassement est sans danger",
        "Réparer les véhicules sur la route sauf en cas d’urgence",
        "Circuler à droite de la route"
      ],
      en: [
        "Ensure overtaking is safe",
        "Repair vehicles on the road except emergencies",
        "Drive on the right side"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 288,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق أن يلتزم أقصى الجانب الأيمن من الطريق:",
      fr: "Le conducteur doit rester à l’extrême droite de la route :",
      en: "The driver must keep to the far right side of the road:"
    },
    options: {
      ar: [
        "عندما تكون رؤية الطريق إلى الأمام كافية",
        "عندما يريد أن يتجاوز سائق آخر",
        "عندما تكون سرعته دون السرعة المعمول بها"
      ],
      fr: [
        "Quand la visibilité est bonne",
        "Lorsqu’il veut dépasser",
        "Lorsque sa vitesse est inférieure à la normale"
      ],
      en: [
        "When visibility is good",
        "When he wants to overtake",
        "When driving below normal speed"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 289,
    category: "law",
    license: "G",
    question: {
      ar: "يُحظر على سائقي المركبات، بعد ثلاث سنوات من حيازتهم دفتر السوق، القيادة تحت تأثير الكحول بنسبة تتعدى:",
      fr: "Après trois ans de permis, il est interdit de conduire avec un taux d’alcool supérieur à :",
      en: "After three years of license, it is forbidden to drive with alcohol level exceeding:"
    },
    options: {
      ar: [
        "0.5 غ/ل",
        "0.4 غ/ل",
        "0.3 غ/ل"
      ],
      fr: [
        "0.5 g/l",
        "0.4 g/l",
        "0.3 g/l"
      ],
      en: [
        "0.5 g/l",
        "0.4 g/l",
        "0.3 g/l"
      ]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 290,
    category: "law",
    license: "G",
    question: {
      ar: "خلال أول ثلاث سنوات من حيازتك على رخصة سوق، لا يجب أن تتجاوز معدل نسبة الكحول في الدم:",
      fr: "Durant les trois premières années du permis, le taux d’alcool ne doit pas dépasser :",
      en: "During the first three years of holding a license, blood alcohol must not exceed:"
    },
    options: {
      ar: ["0 غ/ل", "0.3 غ/ل", "0.5 غ/ل"],
      fr: ["0 g/l", "0.3 g/l", "0.5 g/l"],
      en: ["0 g/l", "0.3 g/l", "0.5 g/l"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 291,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائقي المركبات أثناء القيادة:",
      fr: "Il est interdit aux conducteurs pendant la conduite :",
      en: "Drivers are prohibited while driving from:"
    },
    options: {
      ar: [
        "استعمال اليدين للقيادة والرد على المكالمة بواسطة الـ Bluetooth",
        "استعمال يد واحدة للقيادة والرد على المكالمة باستعمال اليد الأخرى",
        "استعمال أي وسيلة من أجهزة الاتصالات"
      ],
      fr: [
        "Utiliser les mains pour conduire et répondre via Bluetooth",
        "Conduire d’une main et répondre avec l’autre",
        "Utiliser tout moyen de communication"
      ],
      en: [
        "Drive with both hands and answer via Bluetooth",
        "Drive with one hand and answer with the other",
        "Use any communication device"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 292,
    category: "law",
    license: "G",
    question: {
      ar: "في حال عدم وجود لوحات تحدد السرعة، تكون السرعة القصوى المسموح بها على الأوتوستراد:",
      fr: "En absence de panneaux, la vitesse maximale sur l’autoroute est :",
      en: "If no speed signs exist, max speed on highway is:"
    },
    options: {
      ar: ["80 كلم/س", "100 كلم/س", "120 كلم/س"],
      fr: ["80 km/h", "100 km/h", "120 km/h"],
      en: ["80 km/h", "100 km/h", "120 km/h"]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 293,
    category: "law",
    license: "G",
    question: {
      ar: "في حال عدم وجود لوحات تحدد السرعة، تكون السرعة القصوى المسموح بها خارج المناطق المأهولة:",
      fr: "En absence de panneaux, la vitesse maximale hors agglomération est :",
      en: "If no signs, max speed outside urban areas is:"
    },
    options: {
      ar: ["50 كلم/س", "60 كلم/س", "70 كلم/س"],
      fr: ["50 km/h", "60 km/h", "70 km/h"],
      en: ["50 km/h", "60 km/h", "70 km/h"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 294,
    category: "law",
    license: "G",
    question: {
      ar: "في حال عدم وجود لوحات تحدد السرعة، تكون السرعة القصوى المسموح بها داخل المناطق المأهولة:",
      fr: "En absence de panneaux, la vitesse maximale en agglomération est :",
      en: "If no speed signs exist, max speed inside urban areas is:"
    },
    options: {
      ar: ["40 كلم/س", "50 كلم/س", "60 كلم/س"],
      fr: ["40 km/h", "50 km/h", "60 km/h"],
      en: ["40 km/h", "50 km/h", "60 km/h"]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 295,
    category: "law",
    license: "G",
    question: {
      ar: "يمكنك الرجوع إلى الوراء على الأوتوستراد في حال كان المفرق قريب بمسافة:",
      fr: "Vous pouvez faire marche arrière sur l’autoroute si la sortie est proche à :",
      en: "You may reverse on highway if exit is within:"
    },
    options: {
      ar: ["لا يمكنك الرجوع إلى الوراء بتاتاً", "20 متر", "10 أمتار"],
      fr: ["Jamais", "20 m", "10 m"],
      en: ["Never allowed", "20 m", "10 m"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 296,
    category: "law",
    license: "G",
    question: {
      ar: "يوضع مثلث التحذير أمام أو خلف المركبة تبعاً لوجهة السير في الطرقات العادية على مسافة:",
      fr: "Le triangle de signalisation est placé à une distance de :",
      en: "Warning triangle is placed at distance:"
    },
    options: {
      ar: ["20 متر", "30 متر", "40 متر"],
      fr: ["20 m", "30 m", "40 m"],
      en: ["20 m", "30 m", "40 m"]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 297,
    category: "law",
    license: "G",
    question: {
      ar: "يوضع مثلث التحذير أمام أو خلف المركبة تبعاً لوجهة السير، على الأوتوستراد على مسافة:",
      fr: "Sur autoroute, le triangle est placé à :",
      en: "On highway, warning triangle distance is:"
    },
    options: {
      ar: ["50 متر", "60 متر", "70 متر"],
      fr: ["50 m", "60 m", "70 m"],
      en: ["50 m", "60 m", "70 m"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 298,
    category: "safety",
    license: "G",
    question: {
      ar: "على المشاة اعتماد الأرصفة أو الممرات أو الجسور المخصصة لهم ضمن مسافة:",
      fr: "Les piétons doivent utiliser les passages dédiés dans une distance de :",
      en: "Pedestrians must use crossings within distance:"
    },
    options: {
      ar: ["130 متر", "150 متر", "170 متر"],
      fr: ["130 m", "150 m", "170 m"],
      en: ["130 m", "150 m", "170 m"]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 299,
    category: "law",
    license: "G",
    question: {
      ar: "عندما تتسبب بحادث ولو مادي:",
      fr: "En cas d’accident même matériel :",
      en: "When causing even a minor accident:"
    },
    options: {
      ar: [
        "يجب على السائق أن يقف ويقوم بالإجراءات المناسبة",
        "متابعة السير",
        "يحق للسائق الهروب وعدم تحمل المسؤولية"
      ],
      fr: [
        "Le conducteur doit s’arrêter et agir",
        "Continuer",
        "Fuir sans responsabilité"
      ],
      en: [
        "Driver must stop and take proper action",
        "Continue driving",
        "Escape without responsibility"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 300,
    category: "law",
    license: "G",
    question: {
      ar: "في حال تعطل أضواء المكابح:",
      fr: "En cas de panne des feux de frein :",
      en: "If brake lights fail:"
    },
    options: {
      ar: [
        "كل ما ورد أعلاه",
        "تعتبر المخالفة من الفئة الثانية",
        "تحتجز السيارة"
      ],
      fr: [
        "Toutes les réponses",
        "Infraction de 2ème catégorie",
        "Véhicule immobilisé"
      ],
      en: [
        "All of the above",
        "Second category violation",
        "Vehicle detained"
      ]
    },
    correct: 0
  },

 
  {
    type: "normal",
    id: 301,
    category: "safety",
    license: "G",
    question: {
      ar: "يجب أن لا يتعدى عمر الإطارات:",
      fr: "L’âge des pneus ne doit pas dépasser :",
      en: "Tire age must not exceed:"
    },
    options: {
      ar: [
        "أربع سنوات من تاريخ صنعها أو 1.6 ملم سماكة النقوش أيهما قبل",
        "خمسة سنوات من تاريخ صنعها أو 1.6 ملم سماكة النقوش أيهما بعد",
        "ست سنوات من تاريخ صنعها أو 1.6 ملم سماكة النقوش أيهما قبل"
      ],
      fr: [
        "4 ans ou profondeur 1.6 mm (le premier atteint)",
        "5 ans ou 1.6 mm (le second)",
        "6 ans ou 1.6 mm (le premier atteint)"
      ],
      en: [
        "4 years or 1.6mm tread (whichever comes first)",
        "5 years or 1.6mm (whichever later)",
        "6 years or 1.6mm (whichever comes first)"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 302,
    category: "law",
    license: "G",
    question: {
      ar: "عندما تكون الإشارة الضوئية خضراء أثناء ازدحام السير على مستخدمي الطريق:",
      fr: "Lorsque le feu est vert en cas d’embouteillage :",
      en: "When light is green in traffic congestion:"
    },
    options: {
      ar: [
        "عدم تجاوز الإشارة الضوئية الخضراء لعدم عرقلة السير",
        "تجاوز الإشارة الضوئية الخضراء بسرعة",
        "السير ببطء لعدم عرقلة السير"
      ],
      fr: [
        "Ne pas franchir le feu vert pour ne pas bloquer",
        "Passer rapidement",
        "Rouler lentement"
      ],
      en: [
        "Do not pass green to avoid blocking",
        "Pass quickly",
        "Drive slowly"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 303,
    category: "law",
    license: "G",
    question: {
      ar: "يمكن استعمال وكالة بيع مركبة لمدة لا تتعدى:",
      fr: "La procuration de vente est valable pour :",
      en: "Vehicle sale authorization valid for:"
    },
    options: {
      ar: ["الشهر الواحد", "الثلاثة أشهر", "الشهرين"],
      fr: ["1 mois", "3 mois", "2 mois"],
      en: ["1 month", "3 months", "2 months"]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 304,
    category: "law",
    license: "G",
    question: {
      ar: "الخطوط المتقطعة في وسط الطريق:",
      fr: "Les lignes discontinues au milieu de la route :",
      en: "Broken lines in the middle of the road:"
    },
    options: {
      ar: ["يمكن اجتيازها", "لا يمكن اجتيازها", "يمكن السير عليها"],
      fr: ["Peuvent être franchies", "Ne peuvent pas être franchies", "Peuvent être suivies"],
      en: ["Can be crossed", "Cannot be crossed", "Can be driven on"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 305,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر تجهيز كافة أنواع المركبات في مقدمتها بأضواء:",
      fr: "Il est interdit d’équiper les véhicules avec des feux :",
      en: "It is forbidden to equip vehicles with lights:"
    },
    options: {
      ar: [
        "من غير اللونين الأبيض أو الأزرق",
        "من غير اللونين الأبيض أو الأصفر",
        "من غير اللونين الأزرق أو الأصفر"
      ],
      fr: [
        "Autres que blanc ou bleu",
        "Autres que blanc ou jaune",
        "Autres que bleu ou jaune"
      ],
      en: [
        "Other than white or blue",
        "Other than white or yellow",
        "Other than blue or yellow"
      ]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 306,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كان المعبد مقسوماً إلى مسلكين مفصولين بخطوط صفراء يجب على السائق في حالة السير العادي أن:",
      fr: "Si la route est divisée en deux voies séparées par des lignes jaunes :",
      en: "If road divided by yellow lines:"
    },
    options: {
      ar: [
        "يستعمل المسلك الأيمن",
        "يستعمل المسلك الأيسر",
        "يستعمل المسلك الأوسط"
      ],
      fr: [
        "Utiliser la voie droite",
        "Utiliser la voie gauche",
        "Utiliser la voie centrale"
      ],
      en: [
        "Use right lane",
        "Use left lane",
        "Use middle lane"
      ]
    },
    correct: 0
  },

 
  {
    type: "normal",
    id: 307,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كان المسلك محدداً بخط أصفر متقطع محاذٍ لخط أصفر متواصل:",
      fr: "Si la voie est marquée par une ligne jaune discontinue à côté d’une ligne continue :",
      en: "If a lane has a broken yellow line next to a solid yellow line:"
    },
    options: {
      ar: [
        "يمكن اجتياز الخطين من ناحية الخط المتقطع ويحظر الاجتياز من ناحية الخط المتواصل",
        "يحظر اجتياز الخطين من ناحية الخط المتقطع ويحظر الاجتياز من ناحية الخط المتواصل",
        "يمكن اجتياز الخطين من ناحية الخط المتواصل ويحظر الاجتياز من ناحية الخط المتقطع"
      ],
      fr: [
        "On peut franchir du côté discontinu mais interdit du côté continu",
        "Interdit des deux côtés",
        "Autorisé du côté continu et interdit du côté discontinu"
      ],
      en: [
        "Can cross from broken side, forbidden from solid side",
        "Forbidden from both sides",
        "Allowed from solid side, forbidden from broken side"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 308,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق أن يعطي أفضلية المرور:",
      fr: "Le conducteur doit céder le passage :",
      en: "Driver must give right of way:"
    },
    options: {
      ar: ["للمشاة", "للشاحنات", "للسيارات"],
      fr: ["Aux piétons", "Aux camions", "Aux voitures"],
      en: ["To pedestrians", "To trucks", "To cars"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 309,
    category: "law",
    license: "G",
    question: {
      ar: "في الطرقات ذات الانحدار القوي حيث التلاقي مستحيل تكون أفضلية المرور:",
      fr: "Sur routes à forte pente où le croisement est difficile :",
      en: "On steep roads where passing is difficult:"
    },
    options: {
      ar: ["للسيارات المتجهة نزولاً", "للسيارات المتجهة صعوداً", "وبحسب شكل الطريق"],
      fr: ["Pour les véhicules descendant", "Pour les véhicules montant", "Selon la route"],
      en: ["For descending vehicles", "For ascending vehicles", "Depends on road"]
    },
    correct: 1
  },
  {
    type: "normal",
    id: 310,
    category: "law",
    license: "G",
    question: {
      ar: "يجب المحافظة دائماً على مسافة أمان داخل المدن:",
      fr: "Il faut toujours garder une distance de sécurité en ville :",
      en: "Safety distance in city:"
    },
    options: {
      ar: ["ثانيتين", "ثانية", "مترين"],
      fr: ["2 secondes", "1 seconde", "2 mètres"],
      en: ["2 seconds", "1 second", "2 meters"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 311,
    category: "law",
    license: "G",
    question: {
      ar: "داخل المستديرة تكون دائماً الأفضلية:",
      fr: "Dans un rond-point la priorité est :",
      en: "In a roundabout priority is:"
    },
    options: {
      ar: [
        "للسيارة داخل المستديرة",
        "للسيارة الآتية من الجهة اليمنى",
        "للسيارة الآتية من جهة اليسار"
      ],
      fr: [
        "Au véhicule déjà dans le rond-point",
        "À droite",
        "À gauche"
      ],
      en: [
        "Vehicle inside roundabout",
        "From right",
        "From left"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 312,
    category: "law",
    license: "G",
    question: {
      ar: "يمنع التجاوز داخل الأنفاق ذات:",
      fr: "Le dépassement est interdit dans les tunnels à :",
      en: "Overtaking is prohibited in tunnels with:"
    },
    options: {
      ar: ["اتجاه واحد", "اتجاهين", "متعددة الاتجاهات"],
      fr: ["Sens unique", "Double sens", "Multi sens"],
      en: ["One direction", "Two directions", "Multiple directions"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 313,
    category: "law",
    license: "G",
    question: {
      ar: "عند وجود أشغال عامة يجب على السائق:",
      fr: "En cas de travaux publics :",
      en: "During road works:"
    },
    options: {
      ar: ["تخفيف سرعة مركبته", "السير بسرعة", "إضاءة أنوار السيارة"],
      fr: ["Ralentir", "Accélérer", "Allumer les feux"],
      en: ["Slow down", "Drive fast", "Turn lights on"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 314,
    category: "law",
    license: "G",
    question: {
      ar: "يجب جلوس الأطفال دون سن الخامسة على:",
      fr: "Les enfants de moins de 5 ans doivent s’asseoir :",
      en: "Children under 5 must sit:"
    },
    options: {
      ar: ["المقاعد المخصصة للأطفال", "المقاعد الخلفية", "حضن الأهل"],
      fr: ["Sièges enfants", "Sièges arrière", "Sur les genoux"],
      en: ["Child seat", "Back seat", "On lap"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 315,
    category: "law",
    license: "G",
    question: {
      ar: "في حال الاقتراب من تقاطع تكون الأفضلية دائماً للسائق القادم من جهة:",
      fr: "À un carrefour, priorité à :",
      en: "At intersection priority to:"
    },
    options: {
      ar: ["اليمين", "اليسار", "داخل التقاطع"],
      fr: ["Droite", "Gauche", "Dans l’intersection"],
      en: ["Right", "Left", "Inside intersection"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 316,
    category: "law",
    license: "G",
    question: {
      ar: "يجب على السائق خلال التجاوز عن دراجة هوائية أو آلية أن لا تقل المسافة الجانبية للتجاوز عن:",
      fr: "Distance latérale minimale lors du dépassement d’un deux-roues :",
      en: "Minimum side distance when overtaking motorcycle:"
    },
    options: {
      ar: ["65 Cm", "70 Cm", "75 Cm"],
      fr: ["65 cm", "70 cm", "75 cm"],
      en: ["65 cm", "70 cm", "75 cm"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 317,
    category: "law",
    license: "G",
    question: {
      ar: "يجب على السائق خلال التجاوز عن سيارة او مركبة أخرى، أن لا تقل المسافة الجانبية للتجاوز عن:",
      fr: "Lors d’un dépassement d’un véhicule, la distance latérale minimale doit être :",
      en: "When overtaking a vehicle, the minimum side distance must be:"
    },
    options: {
      ar: ["45 CM", "60 CM", "50 CM"],
      fr: ["45 cm", "60 cm", "50 cm"],
      en: ["45 cm", "60 cm", "50 cm"]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 318,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على السائقين عرقلة سير المركبات من خلال:",
      fr: "Il est interdit de gêner la circulation des véhicules par :",
      en: "Drivers are prohibited from obstructing traffic by:"
    },
    options: {
      ar: [
        "التوقف البطيء",
        "السير على الطريق دون السرعة المعمول بها",
        "التوقف المفاجئ بدون سبب مشروع على المعبد"
      ],
      fr: [
        "Arrêt lent",
        "Rouler en dessous de la vitesse autorisée",
        "Arrêt soudain sans raison valable"
      ],
      en: [
        "Slow stopping",
        "Driving below required speed",
        "Sudden stop without valid reason"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 319,
    category: "law",
    license: "G",
    question: {
      ar: "في حال التلاقي على طريق ذو اتجاهين يكون التراجع إلى الوراء:",
      fr: "En cas de croisement sur une route à double sens, le recul est pour :",
      en: "When two vehicles meet on a two-way road, reversing is for:"
    },
    options: {
      ar: [
        "للمركبة المنفردة مقابل مجموعة المركبات",
        "لمجموعة المركبات مقابل المركبة المنفردة",
        "للمركبات الثقيلة مقابل المركبات المنفردة"
      ],
      fr: [
        "Le véhicule seul face au groupe",
        "Le groupe face au véhicule seul",
        "Les poids lourds face aux véhicules légers"
      ],
      en: [
        "Single vehicle vs group",
        "Group vs single vehicle",
        "Heavy vehicles vs light vehicles"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 320,
    category: "law",
    license: "G",
    question: {
      ar: "في حال كان التقاطع مؤلفاً من ثلاثة تفرعات، تكون أفضلية المرور:",
      fr: "À une intersection en T, la priorité est donnée :",
      en: "At a T-intersection, priority is given to:"
    },
    options: {
      ar: [
        "للسائق المتجه على الطريق الذي يشكل اثنان منهما طريقاً مستقيماً",
        "للسائق الآتي من جهة اليمين",
        "للسير على الطريق بحذر وروية"
      ],
      fr: [
        "Au véhicule sur la route principale",
        "Au véhicule venant de droite",
        "Conduire prudemment"
      ],
      en: [
        "Vehicle on main straight road",
        "Vehicle from the right",
        "Drive carefully"
      ]
    },
    correct: 0
  },


  
  {
    type: "normal",
    id: 221,
    category: "law",
    license: "G",
    question: {
      ar: "عند وجود لافتة على أوتوستراد تشير إلى تحويلة أو إلى اتجاه نحو طريق آخر، على جميع السائقين الذين يريدون الخروج فور رؤيتهم هذه اللافتة القيام:",
      fr: "Lorsqu’un panneau sur autoroute indique une déviation ou une direction vers une autre route, les conducteurs souhaitant sortir doivent :",
      en: "When a highway sign indicates a diversion or direction to another road, drivers who want to exit must:"
    },
    options: {
      ar: [
        "بالانحراف التدريجي إلى اتجاه اليمين أو اليسار بحسب اتجاه التحويلة التي يرغب سلوكها",
        "بالانحراف الفوري إلى اتجاه اليمين أو اليسار بحسب اتجاه التحويلة التي يرغب سلوكها لعدم عرقلة السير",
        "بالانحراف السريع إلى الوسط بحسب اتجاه التحويلة التي يرغب سلوكها لعدم عرقلة السير"
      ],
      fr: [
        "Se déporter progressivement selon la direction",
        "Se déporter immédiatement pour ne pas gêner",
        "Se déporter rapidement vers le centre"
      ],
      en: [
        "Gradually move to the direction",
        "Immediately move to avoid blocking traffic",
        "Quickly move toward the center"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 222,
    category: "law",
    license: "G",
    question: {
      ar: "يتوجب استعمال حزام الأمان لمستعملي المقاعد:",
      fr: "Le port de la ceinture de sécurité est obligatoire pour :",
      en: "Seat belt use is required for:"
    },
    options: {
      ar: [
        "المقاعد الأمامية والخلفية في جميع أنواع المركبات على جميع الطرقات",
        "المقاعد الأمامية فقط في جميع أنواع المركبات",
        "المقاعد الأمامية والخلفية على الأوتوسترادات في جميع أنواع المركبات"
      ],
      fr: [
        "Sièges avant et arrière dans tous les véhicules",
        "Sièges avant seulement",
        "Sièges avant et arrière sur autoroutes"
      ],
      en: [
        "Front and rear seats in all vehicles",
        "Front seats only",
        "Front and rear seats on highways"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 223,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كانت يد رجل الأمن مرفوعة عمودياً:",
      fr: "Si le bras de l’agent est levé verticalement :",
      en: "If the officer’s arm is raised vertically:"
    },
    options: {
      ar: [
        "تعني هذه الإشارة (تحذير، قف) لكل مستخدمي الطريق",
        "تعني هذه الإشارة انتباه هناك سير متوقف",
        "تعني هذه الإشارة أبطئ، السرعة"
      ],
      fr: [
        "Signal d’arrêt pour tous",
        "Attention trafic arrêté",
        "Ralentir"
      ],
      en: [
        "Stop signal for all road users",
        "Attention traffic stopped",
        "Slow down"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 224,
    category: "law",
    license: "G",
    question: {
      ar: "إذا كانت يدا رجل الأمن ممدودتين أفقياً:",
      fr: "Si les bras de l’agent sont étendus horizontalement :",
      en: "If the officer’s arms are extended horizontally:"
    },
    options: {
      ar: [
        "تعني هذه الإشارة (التوقف) لكل مستخدمي الطريق القادمين من اتجاهات تتقاطع مع اتجاهات اليد أو اليدين الممدودتين",
        "تعني هذه الإشارة (افساح المجال) لكل مستخدمي الطريق القادمين من اتجاهات تتقاطع مع اتجاهات اليد أو اليدين الممدودتين",
        "تعني هذه الإشارة (تقدم) لكل مستخدمي الطريق القادمين من اتجاهات تتقاطع مع اتجاهات اليد أو اليدين الممدودتين"
      ],
      fr: [
        "Arrêt pour les directions croisées",
        "Laisser passer",
        "Avancer"
      ],
      en: [
        "Stop for crossing directions",
        "Give way",
        "Proceed"
      ]
    },
    correct: 0
  },


  {
    type: "normal",
    id: 225,
    category: "law",
    license: "G",
    question: {
      ar: "يجب أن تزود كل مركبة:",
      fr: "Chaque véhicule doit être équipé de :",
      en: "Every vehicle must be equipped with:"
    },
    options: {
      ar: [
        "بلوحتَي تسجيل تحملان رقم تسجيل المركبة في الأمام والخلف",
        "بلوحتَي تسجيل تحملان رقم تسجيل المركبة في الأمام أو الخلف",
        "بلوحة تسجيل من الخلف"
      ],
      fr: [
        "Deux plaques à l’avant et à l’arrière",
        "Deux plaques à l’avant ou à l’arrière",
        "Une plaque arrière"
      ],
      en: [
        "Two plates front and rear",
        "Two plates front or rear",
        "One rear plate"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 226,
    category: "law",
    license: "G",
    question: {
      ar: "على السائق تجديد رخصة السوق الخصوصية حتى سن الـ 50 كل:",
      fr: "Le renouvellement du permis privé jusqu’à 50 ans est tous les :",
      en: "Private driving license renewal up to age 50 is every:"
    },
    options: {
      ar: ["10 سنوات", "5 سنوات", "20 سنة"],
      fr: ["10 ans", "5 ans", "20 ans"],
      en: ["10 years", "5 years", "20 years"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 227,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر استعمال المنبهات الصوتية إلا في الحالات الآتية:",
      fr: "L’usage du klaxon est interdit sauf dans les cas suivants :",
      en: "Use of the horn is prohibited except in the following cases:"
    },
    options: {
      ar: [
        "إعطاء مستعملي الطريق الآخرين التنبيهات الضرورية لتفادي وقوع الحوادث",
        "لتفادي زحمة السير الخانقة",
        "لتنبيه السائقين الآخرين بوجوب التحرك بسرعة"
      ],
      fr: [
        "Avertir pour éviter un danger",
        "Éviter les embouteillages",
        "Presser les autres conducteurs"
      ],
      en: [
        "Warn others to avoid accidents",
        "Avoid traffic jams",
        "Make others move faster"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 228,
    category: "law",
    license: "G",
    question: {
      ar: "في حال عدم وجود لافتات أو علامات النزول من السيارة:",
      fr: "En absence de signalisation pour descendre du véhicule :",
      en: "If there are no signs indicating how to exit the vehicle:"
    },
    options: {
      ar: [
        "عليه النزول أو الصعود من الجهة التي يراها مناسبة وأسهل لحركته",
        "عليه النزول أو الصعود من الجهة اليسرى لوجهته",
        "عليه النزول أو الصعود من الجهة اليمنى لوجهته"
      ],
      fr: [
        "Descendre du côté le plus sûr",
        "Descendre du côté gauche",
        "Descendre du côté droit"
      ],
      en: [
        "Exit from the safest/easiest side",
        "Exit from the left side",
        "Exit from the right side"
      ]
    },
    correct: 2
  },

  



  {
    type: "normal",
    id: 229,
    category: "law",
    license: "G",
    question: {
      ar: "إذا قام السائق بإنزال الذراع وإصعادها إلى جانب المركبة تعني:",
      fr: "Si le conducteur baisse puis lève le bras le long du véhicule :",
      en: "If the driver lowers and raises the arm along the vehicle, it means:"
    },
    options: {
      ar: ["تخفيف السرعة والتوقف", "الاتجاه إلى اليسار", "السيارة معطلة"],
      fr: ["Ralentir et s’arrêter", "Tourner à gauche", "Véhicule en panne"],
      en: ["Slow down and stop", "Turn left", "Vehicle broken down"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 230,
    category: "law",
    license: "G",
    question: {
      ar: "إذا قام السائق بمد الذراع بشكل مستقيم أفقياً تعني:",
      fr: "Si le conducteur tend le bras horizontalement :",
      en: "If the driver extends the arm horizontally:"
    },
    options: {
      ar: ["الاتجاه لليسار", "إشارة للسيارات بأن السائق يخفف السرعة", "الاتجاه للوراء"],
      fr: ["Tourner à gauche", "Signal de ralentissement", "Reculer"],
      en: ["Turn left", "Signal slowing down", "Move backward"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 231,
    category: "law",
    license: "G",
    question: {
      ar: "إذا قام السائق برفع الذراع عمودياً تعني:",
      fr: "Si le conducteur lève le bras verticalement :",
      en: "If the driver raises the arm vertically:"
    },
    options: {
      ar: ["الاتجاه إلى اليمين", "الاتجاه إلى اليسار", "التوقف"],
      fr: ["Tourner à droite", "Tourner à gauche", "Arrêt"],
      en: ["Turn right", "Turn left", "Stop"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 232,
    category: "law",
    license: "G",
    question: {
      ar: "يسمح بعبور الإشارة الحمراء للمركبات المتجهة يميناً شريطة:",
      fr: "Il est permis de tourner à droite au feu rouge à condition :",
      en: "Right turn at red light is allowed provided that:"
    },
    options: {
      ar: [
        "السير بسرعة",
        "لا يسمح للسيارات المتجهة إلى اليمين بعبور الإشارة الحمراء",
        "التوقف عند الإشارة ومن ثم تأمين العبور دون تعريض المشاة وحركات السير الأخرى لأي خطر"
      ],
      fr: [
        "Rouler vite",
        "Interdit de tourner à droite",
        "S’arrêter puis assurer le passage sans danger"
      ],
      en: [
        "Drive fast",
        "Not allowed to turn right",
        "Stop then ensure safe passage"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 233,
    category: "law",
    license: "G",
    question: {
      ar: "عند وجود خطوط طولية متواصلة:",
      fr: "En présence de lignes continues :",
      en: "When there are continuous longitudinal lines:"
    },
    options: {
      ar: [
        "يسمح باجتيازها لكن شرط الانتقال بسرعة",
        "يسمح باجتيازها إلى المسلك أو المسرب المجاور بحذر بعد تأمين الطريق",
        "يمنع اجتيازها إلى المسلك أو المسرب المجاور"
      ],
      fr: [
        "Peut être franchie rapidement",
        "Peut être franchie avec prudence",
        "Interdit de franchir"
      ],
      en: [
        "Can cross quickly",
        "Can cross carefully",
        "Crossing prohibited"
      ]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 234,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر وضع الأطفال بالمقاعد الأمامية دون عمر:",
      fr: "Il est interdit de mettre les enfants à l’avant avant l’âge de :",
      en: "It is forbidden to place children in front seats under age:"
    },
    options: {
      ar: ["8 سنوات", "12 سنة", "10 سنوات"],
      fr: ["8 ans", "12 ans", "10 ans"],
      en: ["8 years", "12 years", "10 years"]
    },
    correct: 2
  },
  {
    type: "normal",
    id: 235,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على أي كان رمي أي شيء من السيارة لأنه:",
      fr: "Il est interdit de jeter quoi que ce soit depuis la voiture car :",
      en: "Throwing anything from a vehicle is prohibited because:"
    },
    options: {
      ar: [
        "تسبب الحوادث وتسد مسارب المياه",
        "تسبب بإزالة علامات سطح الطريق",
        "تسبب بعرقلة عمل رجال الأمن"
      ],
      fr: [
        "Cause accidents et bloque l’eau",
        "Efface les marquages routiers",
        "Gêne les agents de sécurité"
      ],
      en: [
        "Causes accidents and blocks drainage",
        "Removes road markings",
        "Obstructs security work"
      ]
    },
    correct: 0
  },

  // 👉 ADD MORE QUESTIONS HERE



  {
    type: "normal",
    id: 236,
    category: "law",
    license: "G",
    question: {
      ar: "ماهو الفرق بين الخطوط البيضاء والصفراء في منتصف الطريق؟",
      fr: "Quelle est la différence entre les lignes blanches et jaunes au milieu de la route ?",
      en: "What is the difference between white and yellow lines in the middle of the road?"
    },
    options: {
      ar: [
        "الخطوط البيضاء تفصل السيارات المتجهة بنفس الاتجاه في حين الصفراء تفصل السيارات التي تسير بجهتين متعاكستين",
        "الخطوط الصفراء تكون لوجهة سير واحدة والخطوط البيضاء لوجهتين متعاكستين",
        "الخطوط الصفراء توضع فقط على طرف الطريق في حين البيضاء هي للفصل بين السيارات"
      ],
      fr: [
        "Blanc = même sens, jaune = sens opposé",
        "Jaune = sens unique, blanc = double sens",
        "Jaune sur les bords seulement"
      ],
      en: [
        "White = same direction, Yellow = opposite directions",
        "Yellow = one direction, White = two directions",
        "Yellow only on road edges"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 237,
    category: "law",
    license: "G",
    question: {
      ar: "يمنع الوقوف والتوقف على رؤوس المرتفعات وعلى المنعطفات والتقاطعات والمستديرات والإشارات الضوئية حتى مسافة:",
      fr: "Le stationnement est interdit près des sommets, virages et intersections jusqu’à :",
      en: "Stopping/parking is prohibited near hills, curves, intersections up to:"
    },
    options: {
      ar: ["25 متر", "30 متر", "50 متر"],
      fr: ["25 m", "30 m", "50 m"],
      en: ["25 m", "30 m", "50 m"]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 238,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur de :",
      en: "It is prohibited for a driver to:"
    },
    options: {
      ar: [
        "نقل زجاجات أو عبوات كحول غير مقفلة من مصنعها داخل المركبة",
        "نقل زجاجات أو عبوات كحول مقفلة من مصنعها داخل المركبة",
        "نقل زجاجات أو عبوات كحول منتهية الصلاحية"
      ],
      fr: [
        "Transporter alcool ouvert",
        "Transporter alcool scellé",
        "Transporter alcool périmé"
      ],
      en: [
        "Transport unsealed alcohol",
        "Transport sealed alcohol",
        "Transport expired alcohol"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 239,
    category: "law",
    license: "G",
    question: {
      ar: "على المركبات التوقف أو الوقوف:",
      fr: "Les véhicules doivent s’arrêter :",
      en: "Vehicles must stop/park:"
    },
    options: {
      ar: [
        "قبل الخطوط البيضاء المخصصة لعبور المشاة",
        "بعد الخطوط البيضاء المخصصة لعبور المشاة",
        "على الخطوط البيضاء المخصصة لعبور المشاة"
      ],
      fr: [
        "Avant les passages piétons",
        "Après les passages piétons",
        "Sur les passages piétons"
      ],
      en: [
        "Before pedestrian crossing",
        "After pedestrian crossing",
        "On pedestrian crossing"
      ]
    },
    correct: 0
  },
  {
    type: "normal",
    id: 240,
    category: "law",
    license: "G",
    question: {
      ar: "يحظر على سائق المركبة:",
      fr: "Il est interdit au conducteur de :",
      en: "It is prohibited for a driver to:"
    },
    options: {
      ar: [
        "السير على الخطوط البيضاء",
        "السير بين الخطوط البيضاء",
        "تجاوز الخطوط المتقطعة البيضاء"
      ],
      fr: [
        "Rouler sur lignes blanches",
        "Rouler entre lignes blanches",
        "Dépasser lignes discontinues"
      ],
      en: [
        "Drive on white lines",
        "Drive between white lines",
        "Cross dashed white lines"
      ]
    },
    correct: 0
  },

  {
  type: "normal",
  id: 241, 
  category: "safety",
  license: "G",
  question: {
    ar: "استعمال المكابح الرئيسية بشكل متواصل عىل منحدرطويل يبطل مفعول المكابح بسبب:",
    fr: "L’utilisation continue des freins sur une longue descente réduit leur efficacité à cause de :",
    en: "Continuous use of brakes on a long downhill reduces braking efficiency because of:"
  },
  options: {
    ar: [
      "قوة المنحدر",
      "ضغط سائل الكبح",
      "إزدياد حرارتها"
    ],
    fr: [
      "La force de la pente",
      "La pression du liquide de frein",
      "L’augmentation de leur température"
    ],
    en: [
      "Slope force",
      "Brake fluid pressure",
      "Increase in temperature"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 230,
  category: "public_car",
  license: "G",
  question: {
    ar: "يُحظر على السائق أن:",
    fr: "Il est interdit au conducteur de :",
    en: "It is forbidden for the driver to:"
  },
  options: {
    ar: [
      "يسير بغير الاتجاه المحدد",
      "أن يسير بالاتجاه المحدد",
      "يتأكد من إجراء التجاوز دون خطر"
    ],
    fr: [
      "Rouler dans une direction non autorisée",
      "Rouler dans la direction autorisée",
      "S’assurer que le dépassement se fait sans danger"
    ],
    en: [
      "Drive in a non-designated direction",
      "Drive in the designated direction",
      "Make sure overtaking is done safely"
    ]
  },
  correct: 2
},
//add more questions here add 


{
  type: "normal",
  id: 1,
  category: "public_car",
  license: "B",
  question: {
    ar: "يمنع التوقف من أجل صعود أو نزول الركاب عند التقاطعات والمستد يرات ضمن مسافة :",
    fr: "Il est interdit de s'arrêter pour déposer/prendre des passagers aux intersections et aux ronds-points à une distance de moins de :",
    en: "It is prohibited to stop to pick up or drop off passengers at intersections and roundabouts within a distance of:"
  },
  options: {
    ar: [
      "10 أمتار من التقاطع أو المستديرة",
      "25 متراً من التقاطع أو المستديرة",
      "40 مترا من التقاطع أو المستديرة"
    ],
    fr: [
      "10 mètres de l'intersection ou du rond-point",
      "25 mètres de l'intersection ou du rond-point",
      "40 mètres de l'intersection ou du rond-point"
    ],
    en: [
      "10 meters from the intersection or roundabout",
      "25 meters from the intersection or roundabout",
      "40 meters from the intersection or roundabout"
    ]
  },
  correct: 1
},

{
  type: "normal",
  id: 2,
  category: "public_car",
  license: "B",
  question: {
    ar: "يمنع تخفيف السرعة أو التوقف لاستجالب الركاب:",
    fr: "Il est interdit de ralentir ou de s'arrêter pour prendre des passagers :",
    en: "It is prohibited to slow down or stop to pick up passengers:"
  },
  options: {
    ar: [
      "قرب التقاطعات والمستديرات",
      "على المنعطفات",
      "كل ما ورد أعاله"
    ],
    fr: [
      "À proximité des intersections et des ronds-points",
      "Dans les virages",
      "Toutes ces réponses"
    ],
    en: [
      "Near intersections and roundabouts",
      "On bends",
      "All of the above"
    ]
  },
  correct: 2
},

{
  type: "normal",
  id: 3,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائقين العموميين عند مصادفة مستخدمي طريق آخرين التقيد بقاعدة :",
    fr: "Lorsqu'ils rencontrent d'autres usagers de la route, les conducteurs de véhicules publics doivent respecter les règles suivantes :",
    en: "When encountering other road users, commercial drivers must adhere to the following rules:"
  },
  options: {
    ar: [
      "افساح المرور",
      "حق المرور",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Cédez le passage",
      "Priorité",
      "Toutes ces réponses"
    ],
    en: [
      "Giving way",
      "Right-of-Way",
      "All of the above"
    ]
  },
  correct: 0
},




{
  type: "normal",
  id: 6,
  category: "public_car",
  license: "B",
  question: {
    ar: "يعتبر \"افساح الطريق\" من القواعد :",
    fr: "« Cédez le passage » est une règle qui :",
    en: "\"Giving way\" is a rule that:"
  },
  options: {
    ar: [
      "المفروضة في اتفاقيات السير الدولية",
      "المتعارف عليها محليا",
      "التي تعكس كرم اخالق من السائق"
    ],
    fr: [
      "Est imposée par les accords internationaux sur la circulation",
      "Est reconnue localement",
      "Reflète les bonnes mœurs du conducteur"
    ],
    en: [
      "Is imposed by international traffic agreements",
      "Is recognized locally",
      "Reflects good moral character of the driver"
    ]
  },
  correct: 0
},

{
  type: "normal",
  id: 8,
  category: "public_car",
  license: "B",
  question: {
    ar: "يؤثر الحوار والتحدث مع الركاب على:",
    fr: "La conversation avec les passagers affecte :",
    en: "Conversation with passengers affects:"
  },
  options: {
    ar: [
      "التركيز الذهني",
      "القدرة على تعدد المهام",
      "كل ما ورد أعاله"
    ],
    fr: [
      "La concentration",
      "La capacité à effectuer plusieurs tâches",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Mental concentration",
      "Ability to multitask",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 9,
  category: "public_car",
  license: "B",
  question: {
    ar: "تقتضي قاعدة مضاعفة الانتباه عند التوقف والاقتراب من تقاطعات :",
    fr: "La double vérification à l’arrêt et à l’approche des intersections exige :",
    en: "The double-checking rule when stopping and approaching intersections requires:"
  },
  options: {
    ar: [
      "النظر مرتين على الاقل في جميع المرايا",
      "النظر مرة في جميع المرايا مع تشغيل الاشارات",
      "طلب المساعدة من الركاب"
    ],
    fr: [
      "Vérifier au moins deux fois dans tous les rétroviseurs",
      "Vérifier une fois avec les clignotants",
      "Demander de l’aide aux passagers"
    ],
    en: [
      "Check at least twice in all mirrors",
      "Check once with signals on",
      "Ask passengers for help"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 10,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند وجود مخاطر سير إضافية بسبب حالة الطريق أو الانارة أو الطقس يتوجب على السائق :",
    fr: "En cas de dangers supplémentaires liés à la route ou au temps, le conducteur doit :",
    en: "When additional hazards exist due to road or weather conditions, the driver must:"
  },
  options: {
    ar: [
      "التمهل في السير",
      "مضاعفة الانتباه",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Ralentir",
      "Redoubler d’attention",
      "Tout ce qui précède"
    ],
    en: [
      "Slow down",
      "Pay extra attention",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 11,
  category: "public_car",
  license: "B",
  question: {
    ar: "ينبغي على السائق العمومي القيام بصيانة السيارة بشكل :",
    fr: "Les chauffeurs de véhicules publics doivent entretenir leurs véhicules :",
    en: "Commercial drivers must maintain their vehicles:"
  },
  options: {
    ar: [
      "استباقي",
      "عند وقوع عطل",
      "دوري"
    ],
    fr: [
      "De manière proactive",
      "En cas de panne",
      "Périodiquement"
    ],
    en: [
      "Proactively",
      "Upon breakdown",
      "Periodically"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 12,
  category: "public_car",
  license: "B",
  question: {
    ar: "تعتبر نظافة السيارة الخارجية والداخلية للسيارات العمومية أمرا :",
    fr: "La propreté extérieure et intérieure des véhicules publics est :",
    en: "The cleanliness of public vehicles is:"
  },
  options: {
    ar: [
      "اختياريا لا يفرضه القانون",
      "الزاميا يفرضه القانون",
      "يتوافق مع القواعد العامة لسيارات الاجرة"
    ],
    fr: [
      "Facultative",
      "Obligatoire",
      "Conforme à la réglementation générale"
    ],
    en: [
      "Optional",
      "Mandatory",
      "Complies with general regulations"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 13,
  category: "public_car",
  license: "B",
  question: {
    ar: "من واجبات سائق السيارة العمومية حيازة:",
    fr: "Les chauffeurs de véhicules publics sont tenus d’avoir :",
    en: "Commercial vehicle drivers are required to have:"
  },
  options: {
    ar: [
      "علبة اسعاف اولية",
      "عدة نظافة للمحرك",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Une trousse de premiers secours",
      "Un kit de nettoyage moteur",
      "Tout ce qui précède"
    ],
    en: [
      "A first aid kit",
      "An engine cleaning kit",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 14,
  category: "public_car",
  license: "B",
  question: {
    ar: "يمكن للسائق العمومي أن يعمل مقابل إجرة :",
    fr: "Les chauffeurs de véhicules publics peuvent travailler contre rémunération :",
    en: "Commercial drivers may work for a fee:"
  },
  options: {
    ar: [
      "على سيارات تحمل لوحة عمومية",
      "على سيارات تحمل لوحة خصوصية",
      "على كافة السيارات"
    ],
    fr: [
      "Sur des véhicules immatriculés publics",
      "Sur des véhicules immatriculés privés",
      "Sur tous les véhicules"
    ],
    en: [
      "On vehicles with public plates",
      "On vehicles with private plates",
      "On all vehicles"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 15,
  category: "public_car",
  license: "B",
  question: {
    ar: "ترتبط سالامة الاطارات :",
    fr: "La sécurité des pneus est liée à :",
    en: "Tire safety is related to:"
  },
  options: {
    ar: [
      "بعمر الاطار",
      "بنوعية الاطار",
      "كل ما ورد أعاله"
    ],
    fr: [
      "L’âge des pneus",
      "La qualité des pneus",
      "Tout ce qui précède"
    ],
    en: [
      "Tire age",
      "Tire quality",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 16,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند وجود حمولة في المركبة باإلضافة الى الركاب يجب أن لا يتعدى وزنها:",
    fr: "Lorsqu’il y a une charge dans le véhicule en plus des passagers, son poids ne doit pas dépasser :",
    en: "When there is a load in the vehicle in addition to passengers, its weight must not exceed:"
  },
  options: {
    ar: [
      "وزن عدد الركاب",
      "الوزن الاجمالي المحدد في مواصفات المصنّع على ان لا تشكل الحمولة عبئاً على سير المركبة",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Le poids des passagers",
      "Le poids total spécifié dans les caractéristiques du constructeur à condition que la charge ne gêne pas la conduite du véhicule",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "The weight of the passengers",
      "The total weight specified by the manufacturer provided the load does not affect vehicle operation",
      "All of the above"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 17,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند تحميل بضاعة مختلفة األوزان في صندوق السيارة يت م وضعها بالترتيب التالي:",
    fr: "Lors du chargement de marchandises de poids différents dans le coffre du véhicule, elles doivent être placées dans l’ordre suivant :",
    en: "When loading goods of different weights into the vehicle trunk, they must be arranged as follows:"
  },
  options: {
    ar: [
      "الحمولة األثقل وزنًا في األسفل",
      "الحمولة األخف وزن ا في األسفل",
      "بأي شكل يال ئم ضبط البضاعة ضمن الصندوق"
    ],
    fr: [
      "La charge la plus lourde en bas",
      "La charge la plus légère en bas",
      "De toute manière permettant de fixer la marchandise dans le coffre"
    ],
    en: [
      "The heaviest load at the bottom",
      "The lightest load at the bottom",
      "Any arrangement that secures the goods inside the trunk"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 18,
  category: "public_car",
  license: "B",
  question: {
    ar: "على سائق األجرة لسيارة سياح ية تحمل لوحة عمومية االستحصال على ترخيص من \"وزارة األشغال العامة والنقل\" لتحديد :",
    fr: "Le chauffeur d’un taxi touristique portant une plaque publique doit obtenir une autorisation du « Ministère des Travaux Publics et des Transports » afin de déterminer :",
    en: "The driver of a tourist taxi carrying a public plate must obtain authorization from the “Ministry of Public Works and Transport” to determine:"
  },
  options: {
    ar: [
      "المناطق التي يعمل فيها محافظة، قضاء، الخ",
      "فئة الركاب سائح، طفل، الخ",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Les zones dans lesquelles il travaille (gouvernorat, district, etc.)",
      "La catégorie des passagers (touriste, enfant, etc.)",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "The areas in which he works (governorate, district, etc.)",
      "The category of passengers (tourist, child, etc.)",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 19,
  category: "public_car",
  license: "B",
  question: {
    ar: "ي لزم القانون سائق التاكسي بوجود تاكسيميتر في:",
    fr: "La loi oblige le chauffeur de taxi à disposer d’un taximètre dans :",
    en: "The law requires taxi drivers to have a taximeter in:"
  },
  options: {
    ar: [
      "سيارات األجرة التابعة لمكاتب",
      "سيارات األجرة المملوكة من أشخاص",
      "كافة سيارات األجرة"
    ],
    fr: [
      "Les taxis appartenant à des bureaux",
      "Les taxis appartenant à des particuliers",
      "Tous les taxis"
    ],
    en: [
      "Taxis belonging to agencies",
      "Taxis owned by individuals",
      "All taxis"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 20,
  category: "public_car",
  license: "B",
  question: {
    ar: "يتم تشغيل التاكسيميتر لضبط    :",
    fr: "Le taximètre sert à enregistrer :",
    en: "The taximeter records:"
  },
  options: {
    ar: [
      "المسافة والزمن مع التوقفات",
      "المسافة والزمن دون التوقفات",
      "المسافة والزمن والمنطقة"
    ],
    fr: [
      "La distance et la durée avec arrêts",
      "La distance et la durée sans arrêts",
      "La distance, la durée et la zone"
    ],
    en: [
      "Distance and time including stops",
      "Distance and time excluding stops",
      "Distance, time and zone"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 21,
  category: "public_car",
  license: "B",
  question: {
    ar: "على مالك أو سائق السيارة التي تحمل لوحة عمومية :",
    fr: "Le propriétaire ou le conducteur d’un véhicule immatriculé sous une plaque publique doit :",
    en: "The owner or driver of a vehicle bearing a commercial license plate must:"
  },
  options: {
    ar: [
      "دفع اشتراكات الضمان الاجتماعي بانتظام",
      "تحمل المسؤولية المدنية الناتجة عن حوادث السائق",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Payer régulièrement les cotisations de sécurité sociale",
      "Assumer la responsabilité civile en cas d’accident du conducteur",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Pay social security contributions regularly",
      "Bear civil liability for driver accidents",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 22,
  category: "public_car",
  license: "B",
  question: {
    ar: "على سائق السيارة العمومية الاتزام بالعمل :",
    fr: "Le conducteur d’un véhicule public doit travailler :",
    en: "The driver of a commercial vehicle must work:"
  },
  options: {
    ar: [
      "في المناطق التي يرخص له العمل فيها حصرا",
      "في المناطق التي يرخص له العمل فيها حصرا عدا أيام العطل الاسبوعية والرسمية",
      "في جميع المناطق لان الترخيص بالعمل غير محدد بمكان ومناطق"
    ],
    fr: [
      "Exclusivement dans les zones autorisées",
      "Dans les zones autorisées sauf les week-ends et jours fériés",
      "Dans toutes les zones"
    ],
    en: [
      "Only in licensed areas",
      "In licensed areas except holidays",
      "In all areas"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 23,
  category: "public_car",
  license: "B",
  question: {
    ar: "إن انتساب السائق العمومي إلى نقابات النقل:",
    fr: "L’adhésion d’un chauffeur à un syndicat est :",
    en: "Joining a transport union is:"
  },
  options: {
    ar: [
      "اختياري",
      "إلزامي لجميع المناطق",
      "إلزامي فقط بحسب المناطق"
    ],
    fr: [
      "Facultative",
      "Obligatoire pour toutes les zones",
      "Obligatoire selon la région"
    ],
    en: [
      "Optional",
      "Mandatory everywhere",
      "Mandatory by region"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 24,
  category: "public_car",
  license: "B",
  question: {
    ar: "إن العمل النقابي يهدف الى:",
    fr: "L’activité syndicale vise à :",
    en: "Union activity aims to:"
  },
  options: {
    ar: [
      "حماية حقوق ومكاسب المهنة",
      "دعم العمل السياسي والحزبي",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Protéger les droits de la profession",
      "Soutenir le travail politique",
      "Toutes les réponses"
    ],
    en: [
      "Protect professional rights",
      "Support political work",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 25,
  category: "public_car",
  license: "B",
  question: {
    ar: "تحدد التعرفة للنقل بواسطة :",
    fr: "Les tarifs de transport sont déterminés par :",
    en: "Transport fares are determined by:"
  },
  options: {
    ar: [
      "وزارة النقل",
      "النقابات المعنية",
      "صاحب المركبة"
    ],
    fr: [
      "Le ministère des Transports",
      "Les syndicats",
      "Le propriétaire"
    ],
    en: [
      "Ministry of Transport",
      "Unions",
      "Owner"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 26,
  category: "public_car",
  license: "B",
  question: {
    ar: "يؤدي وضع حمولة مرتفعة على سطح السيارة إلى :",
    fr: "Une charge élevée sur le toit entraîne :",
    en: "Placing high loads on roof leads to:"
  },
  options: {
    ar: [
      "زيادة مخاطر انقالبها وتدهورها",
      "زيادة مصروف الوقود بسبب مقاومة الهواء",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Risque de retournement",
      "Consommation accrue",
      "Toutes les réponses"
    ],
    en: [
      "Risk of rollover",
      "Increased fuel consumption",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 27,
  category: "public_car",
  license: "B",
  question: {
    ar: "إن السجل المروري للسائقين العموميين يخضع للمراقبة ويؤدي في حالة تعدي المخالفات مرحلة سحب كافة النقاط إلى :",
    fr: "Le dossier routier des chauffeurs publics est soumis à un contrôle et, en cas d’infractions entraînant le retrait de tous les points, cela mène à :",
    en: "The traffic record of public drivers is monitored, and if violations lead to the withdrawal of all points, this results in:"
  },
  options: {
    ar: [
      "سحب رخصة السوق بشكل مؤقت",
      "إلغاء رخصة السوق بشكل نهائي",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Suspension temporaire du permis de conduire",
      "Annulation définitive du permis de conduire",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Temporary suspension of the driving license",
      "Permanent cancellation of the driving license",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 28,
  category: "public_car",
  license: "B",
  question: {
    ar: "ان نظام النقاط على رخصة السوق اللبنانية يعني ان في الرخصة نقاط يتم سحبها في بعض المخالفات وعدد النقاط هو:",
    fr: "Le « système de points » sur le permis de conduire libanais signifie que le permis contient des points retirés pour certaines infractions, et le nombre de points est :",
    en: "The “point system” on the Lebanese driving license means that points are deducted for certain violations, and the total number of points is:"
  },
  options: {
    ar: [
      "10",
      "12",
      "20"
    ],
    fr: [
      "10",
      "12",
      "20"
    ],
    en: [
      "10",
      "12",
      "20"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 29,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائق العمومي في حال تعرض لاهانة من راكب أو ركاب :",
    fr: "En cas d’insulte d’un passager :",
    en: "If insulted by a passenger:"
  },
  options: {
    ar: [
      "المعاملة بالمثل",
      "المحافظة على هدوئه وتصرفه بحذر",
      "تبليغ قوى الأمن"
    ],
    fr: [
      "Répondre de la même manière",
      "Rester calme",
      "Informer la police"
    ],
    en: [
      "Respond similarly",
      "Stay calm",
      "Report to police"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 30,
  category: "public_car",
  license: "B",
  question: {
    ar: "لا يسمح للحمولة الاضافية :",
    fr: "Les charges supplémentaires ne doivent pas :",
    en: "Additional cargo must not:"
  },
  options: {
    ar: [
      "تجاوز طول المركبة",
      "تجاوز عرض المركبة",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Dépasser la longueur",
      "Dépasser la largeur",
      "Toutes les réponses"
    ],
    en: [
      "Exceed length",
      "Exceed width",
      "All of the above"
    ]
  },
  correct: 2
},

{
  type: "normal",
  id: 31,
  category: "public_car",
  license: "B",
  question: {
    ar: "ان الحد الاقصى للسرعة داخل المناطق السكنية عند عدم وجود الفتات هو:",
    fr: "La vitesse maximale autorisée dans les zones résidentielles sans signalisation est :",
    en: "The maximum speed in residential areas without signs is:"
  },
  options: {
    ar: ["50 كم/ساعة", "80 كم/ساعة", "100 كم/ساعة"],
    fr: ["50 km/h", "80 km/h", "100 km/h"],
    en: ["50 km/h", "80 km/h", "100 km/h"]
  },
  correct: 0
},
{
  type: "normal",
  id: 32,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند اقترابك من تقاطع بدون إشارات مرور، يجب أن:",
    fr: "À l’approche d’une intersection sans feux, vous devez :",
    en: "When approaching an intersection without signals, you must:"
  },
  options: {
    ar: [
      "تواصل السير بسرعة عادية",
      "تخفف السرعة وتفسح المرور للقادم من جهة اليمين",
      "تضيء الاضواء العالية باستمرار"
    ],
    fr: [
      "Continuer normalement",
      "Ralentir et céder le passage à droite",
      "Allumer les feux de route"
    ],
    en: [
      "Continue normally",
      "Slow down and yield to the right",
      "Use high beam"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 33,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند طلب راكب التوقف للنزول، عليك كسائق سيارة اجرة التوقف:",
    fr: "Lorsqu’un passager demande de s’arrêter, vous devez :",
    en: "When a passenger asks to stop, you must:"
  },
  options: {
    ar: [
      "فقط في الاماكن المسموح التوقف فيها",
      "في أي مكان يرغب به الراكب خارج المدن",
      "في الاماكن المحددة داخل المدن"
    ],
    fr: [
      "Uniquement aux endroits interdits",
      "Partout hors ville",
      "Aux endroits désignés en ville"
    ],
    en: [
      "Only forbidden places",
      "Anywhere outside city",
      "Designated places in city"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 34,
  category: "public_car",
  license: "B",
  question: {
    ar: "ما هو الغرض من حزام الامان؟",
    fr: "Quel est le but de la ceinture de sécurité ?",
    en: "What is the purpose of a seatbelt?"
  },
  options: {
    ar: [
      "تزيين السيارة فقط",
      "حماية السائق والركاب في حال وقوع حادث",
      "لا فائدة له عند السرعات البطيئة"
    ],
    fr: [
      "Décoration",
      "Protection en cas d’accident",
      "Inutile à basse vitesse"
    ],
    en: [
      "Decoration",
      "Protection in accidents",
      "Useless at low speed"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 35,
  category: "public_car",
  license: "B",
  question: {
    ar: "إذا أضاءت الاشارة الحمراء في إشارة المرور، ماذا تفعل؟",
    fr: "Si le feu est rouge, que faites-vous ?",
    en: "If the light is red, what do you do?"
  },
  options: {
    ar: [
      "تتابع السير بسرعة",
      "تقف قبل خط التوقف وممر المشاة وتنتظر الضوء الاخضر",
      "تقف قبل ممر المشاة مباشرة"
    ],
    fr: [
      "Continuer",
      "S’arrêter avant la ligne",
      "S’arrêter avant passage"
    ],
    en: [
      "Continue",
      "Stop before line and wait",
      "Stop before crossing"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 36,
  category: "public_car",
  license: "B",
  question: {
    ar: "متى يجب تشغيل أضواء الانتظار (الاشارات الرباعية)؟",
    fr: "Quand utiliser les feux de détresse ?",
    en: "When should hazard lights be used?"
  },
  options: {
    ar: [
      "عند التوقف االاضطراري أو وجود عطل",
      "عند القيادة داخل المدينة نهارا",
      "عند التجاوز على الطريق السريع  "
    ],
    fr: [
      "Arrêt d’urgence",
      "En ville",
      "Dépassement"
    ],
    en: [
      "Emergency stop",
      "In city",
      "Overtaking"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 37,
  category: "public_car",
  license: "B",
  question: {
    ar: "يتم تحميل حقائب الركاب:",
    fr: "Les bagages doivent être placés :",
    en: "Passenger luggage should be placed:"
  },
  options: {
    ar: [
      "حضن الراكب",
      "في صندوق السيارة",
      "في اي مكان  في مقصورة الركاب او الصندوق        "
    ],
    fr: [
      "Sur les genoux",
      "Dans le coffre",
      "N’importe où"
    ],
    en: [
      "On lap",
      "In trunk",
      "Anywhere"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 38,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند وقوفك لتحميل الركاب، يجب أن يكون التوقف:",
    fr: "Lorsque vous vous arrêtez pour prendre des passagers, l’arrêt doit être :",
    en: "When stopping to pick up passengers, the stop must be:"
  },
  options: {
    ar: [
      "في المواقف والاماكن المخصصة",
      "في أي مكان يطلبه الراكب ولو وسط الطريق",
      "عند المنعطفات والتقاطعات"
    ],
    fr: [
      "Dans les arrêts et endroits réservés",
      "À n’importe quel endroit demandé par le passager même au milieu de la route",
      "Dans les virages et intersections"
    ],
    en: [
      "At designated stops and places",
      "Anywhere requested by the passenger even in the middle of the road",
      "At curves and intersections"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 39,
  category: "public_car",
  license: "B",
  question: {
    ar: "في حال كان الراكب يحمل أمتعة كبيرة الحجم يجب :",
    fr: "Si le passager transporte des bagages volumineux, il faut :",
    en: "If the passenger carries large luggage, you must:"
  },
  options: {
    ar: [
      "تحميلها بطريقة لا تعيق حركة الابواب والرؤية",
      "وضعها فوق المقاعد المخصصة للركاب",
      "تحميلها حتى لو منعت إغالق الابواب"
    ],
    fr: [
      "Les charger d’une manière qui ne gêne pas les portes ni la visibilité",
      "Les placer sur les sièges réservés aux passagers",
      "Les charger même si elles empêchent la fermeture des portes"
    ],
    en: [
      "Load them in a way that does not obstruct doors or visibility",
      "Place them on passenger seats",
      "Load them even if they prevent the doors from closing"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 40,
  category: "public_car",
  license: "B",
  question: {
    ar: "ما هو السلوك الصحيح عند تلقي الا جرة من الراكب أثناء القيادة؟",
    fr: "Quel est le bon comportement lors de la réception du paiement du passager pendant la conduite ?",
    en: "What is the correct behavior when receiving the fare from a passenger while driving?"
  },
  options: {
    ar: [
      "التركيز على عد المال أثناء السير",
      "استالم الاجرة بعد التوقف بشكل آمن",
      "إعطاء الباقي وأنت تقود بسرعة"
    ],
    fr: [
      "Se concentrer sur le comptage de l’argent pendant la conduite",
      "Recevoir le paiement après un arrêt en toute sécurité",
      "Rendre la monnaie en conduisant rapidement"
    ],
    en: [
      "Focus on counting money while driving",
      "Receive the fare after stopping safely",
      "Give change while driving fast"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 41,
  category: "public_car",
  license: "B",
  question: {
    ar: "ما هو السلوك الصحيح من سائق اإلجرة تجاه الركاب عند نشوء خالف معهم؟",
    fr: "Quel est le bon comportement du chauffeur de taxi envers les passagers en cas de conflit ?",
    en: "What is the correct behavior of a taxi driver toward passengers when a conflict arises?"
  },
  options: {
    ar: [
      "الالتزام بالادب وحسن التعامل لخفض التوتر",
      "معاملتهم بحدة وصوت مرتفع لتأكيد موقفه",
      "تجاهل شكاوى الركاب الفساح المجال للحوار"
    ],
    fr: [
      "Faire preuve de politesse et de bon comportement pour réduire la tension",
      "Les traiter durement et parler d’une voix élevée pour imposer son point de vue",
      "Ignorer les plaintes des passagers pour laisser place au dialogue"
    ],
    en: [
      "Remain polite and behave properly to reduce tension",
      "Treat them harshly and speak loudly to assert his position",
      "Ignore passenger complaints to allow dialogue"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 42,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح بإشغال السيارة بعدد ركاب يفوق عددهم عدد المقاعد:",
    fr: "Il est permis d’occuper le véhicule avec un nombre de passagers dépassant le nombre de sièges :",
    en: "It is permitted to occupy the vehicle with passengers exceeding the number of seats:"
  },
  options: {
    ar: [
      "بحسب عدد المقاعد المسموح به فقط",
      "وقوف ا إذا لم توجد مقاعد كافية",
      "باعتبار كل مقعدين مخ صصي ن لثالث ركاب"
    ],
    fr: [
      "Selon le nombre de sièges autorisé uniquement",
      "Debout s’il n’y a pas assez de sièges",
      "En considérant deux sièges pour trois passagers"
    ],
    en: [
      "Only according to the permitted number of seats",
      "Standing if there are not enough seats",
      "Considering every two seats for three passengers"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 43,
  category: "public_car",
  license: "B",
  question: {
    ar: "يتم التوقف إلصعاد الركاب:",
    fr: "Arrêt pour passagers :",
    en: "Stop to pick passengers:"
  },
  options: {
    ar: [
      "في الا ماكن المخصصة",
      " في المكان الذي يطلبه الراكب",
      " في المكان الذي يناسب السيارة"
    ],
    fr: [
      "Endroits désignés",
      "Selon client",
      "Partout"
    ],
    en: [
      "Designated",
      "Requested place",
      "Anywhere"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 44,
  category: "public_car",
  license: "B",
  question: {
    ar: "تحميل أمتعة كبيرة الحجم ينقلها الراكب :",
    fr: "Le chargement de bagages volumineux transportés par le passager :",
    en: "Loading large luggage carried by the passenger:"
  },
  options: {
    ar: [
      "بطريقة ال تعيق حركة األبواب والرؤية",
      "ضمن 15 سم خارج األبواب",
      "ضمن 30 سم خارج األبواب"
    ],
    fr: [
      "D’une manière qui ne gêne pas les portes ni la visibilité",
      "Dans une limite de 15 cm à l’extérieur des portes",
      "Dans une limite de 30 cm à l’extérieur des portes"
    ],
    en: [
      "In a way that does not obstruct doors or visibility",
      "Within 15 cm outside the doors",
      "Within 30 cm outside the doors"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 45,
  category: "public_car",
  license: "B",
  question: {
    ar:  "يتم استالم الاجرة من الزبون  :",
    fr: "Le paiement de la course est reçu :",
    en: "Fare collection is done:"
  },
  options: {
    ar: [
      "أثناء القيادة مع العد",
      "بعد التوقف أو بشكل آمن",
      "تستلم وأنت تقود بسرعة"
    ],
    fr: [
      "Pendant la conduite avec le compteur",
      "Après l’arrêt ou de manière sécurisée",
      "En conduisant rapidement"
    ],
    en: [
      "While driving with the meter running",
      "After stopping or in a safe manner",
      "While driving fast"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 46,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند صعود راكب يحمل قارورة غاز صغيرة:",
    fr: "Lorsqu’un passager transporte une petite bouteille de gaz :",
    en: "When a passenger carries a small gas cylinder:"
  },
  options: {
    ar: [
      "يسمح بها إذا كانت محكمة اإلغالق",
      "يمنع نقلها منعاً باتاً",
      "يسمح بنقلها في حال وافق باقي الركاب"
    ],
    fr: [
      "Elle est autorisée si elle est bien fermée",
      "Son transport est totalement interdit",
      "Son transport est autorisé si les autres passagers sont d’accord"
    ],
    en: [
      "It is allowed if it is tightly sealed",
      "Transporting it is strictly forbidden",
      "It is allowed if the other passengers agree"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 47,
  category: "public_car",
  license: "B",
  question: {
    ar: "تصن ف الطرق في لبنان في:",
    fr: "Les routes au Liban sont classées en :",
    en: "Roads in Lebanon are classified into:"
  },
  options: {
    ar: [
      "ثالث فئات: دولية ورئيسية ومحلية",
      "اربع فئات: دولية، اوتوسترادات، رئيسية ومحلية",
      "خمس فئات: دولية، اوتوسترادات، رئيسية، محلية وشريانية"
    ],
    fr: [
      "Trois catégories : internationales, principales et locales",
      "Quatre catégories : internationales, autoroutes, principales et locales",
      "Cinq catégories : internationales, autoroutes, principales, locales et artérielles"
    ],
    en: [
      "Three categories: international, main and local",
      "Four categories: international, highways, main and local",
      "Five categories: international, highways, main, local and arterial"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 48,
  category: "public_car",
  license: "B",
  question: {
    ar: "يقسم تسجيل سائقي السيارات العمومية في الصندوق الوطني للضمان االجتماعي الى:",
    fr: "L’enregistrement des chauffeurs de véhicules publics à la Caisse Nationale de Sécurité Sociale est divisé en :",
    en: "Registration of public vehicle drivers in the National Social Security Fund is divided into:"
  },
  options: {
    ar: [
      "فئتين: سائق مالك وسائق غير مالك",
      "فئتين: سائق لبناني وسائق أجنبي",
      "فئتين: سائق خصوصي وسائق عمومي"
    ],
    fr: [
      "Deux catégories : conducteur propriétaire et conducteur non propriétaire",
      "Deux catégories : conducteur libanais et conducteur étranger",
      "Deux catégories : conducteur privé et conducteur public"
    ],
    en: [
      "Two categories: owner driver and non-owner driver",
      "Two categories: Lebanese driver and foreign driver",
      "Two categories: private driver and public driver"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 49,
  category: "public_car",
  license: "B",
  question: {
    ar: "تساهم الدولة في اشتراكات الصندوق الوطني للضمان االجتماعي :",
    fr: "L’État contribue aux cotisations de la Caisse Nationale de Sécurité Sociale :",
    en: "The state contributes to National Social Security Fund contributions:"
  },
  options: {
    ar: [
      "للسائق ال مقعد",
      "لسائق المالك",
      "للسائق غير المالك"
    ],
    fr: [
      "Pour le conducteur handicapé",
      "Pour le conducteur propriétaire",
      "Pour le conducteur non propriétaire"
    ],
    en: [
      "For the disabled driver",
      "For the owner driver",
      "For the non-owner driver"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 50,
  category: "public_car",
  license: "B",
  question: {
    ar: "يتم التسجيل في الصندوق الوطني للضمان االجتماعي:",
    fr: "L’inscription à la Caisse Nationale de Sécurité Sociale se fait :",
    en: "Registration in the National Social Security Fund is done:"
  },
  options: {
    ar: [
      "بعد تقديم طلب انتساب وقبوله",
      "فورا عند شراء لوحة ومن دون طلب",
      "فقط لغير المسجل في الضمان"
    ],
    fr: [
      "Après présentation et acceptation d’une demande d’adhésion",
      "Immédiatement lors de l’achat d’une plaque sans demande",
      "Uniquement pour les personnes non inscrites à la sécurité sociale"
    ],
    en: [
      "After submitting and accepting a membership request",
      "Immediately upon purchasing a plate without application",
      "Only for those not registered in social security"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 51,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائق بالاجرة لدى مؤسسة أو شركة التصريح عن ضريبة الدخل ودفع اشتراكات الصندوق الوطني للضمان الاجتماعي:",
    fr: "Le chauffeur travaillant pour une المؤسسة ou une entreprise doit déclarer l’impôt sur le revenu et payer les cotisations à la Caisse Nationale de Sécurité Sociale :",
    en: "A taxi driver working for an institution or company must declare income tax and pay National Social Security Fund contributions:"
  },
  options: {
    ar: [
      "بشكل مباشر",
      "عبر مستخدمه",
      "عبر مكتب محاسبة"
    ],
    fr: [
      "Directement",
      "Par son employeur",
      "Par un bureau comptable"
    ],
    en: [
      "Directly",
      "Through his employer",
      "Through an accounting office"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 52,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائق باألجرة بشكل مستقل التصريح عن ضريبة الدخل ودفع اشتراكات الصندوق الوطني للضمان اجتماعي:",
    fr: "Le chauffeur travaillant de manière indépendante doit déclarer l’impôt sur le revenu et payer les cotisations à la Caisse Nationale de Sécurité Sociale :",
    en: "An independently working taxi driver must declare income tax and pay National Social Security Fund contributions:"
  },
  options: {
    ar: [
      "بشكل مباشر",
      "عبر مستخدمه",
      "عبر مكتب محاسبة"
    ],
    fr: [
      "Directement",
      "Par son employeur",
      "Par un bureau comptable"
    ],
    en: [
      "Directly",
      "Through his employer",
      "Through an accounting office"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 53,
  category: "public_car",
  license: "B",
  question: {
    ar: "يؤدي التأخر عن دفع مستحقات الصندوق الوطني للضمان الاجتماعي:",
    fr: "Le retard dans le paiement des cotisations à la Caisse Nationale de Sécurité Sociale entraîne :",
    en: "Delay in paying National Social Security Fund contributions leads to:"
  },
  options: {
    ar: [ 
      "توقف الاستفادة من تقديمات الضمان",
      "دفع غرامة تأخير",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Suspension des prestations de sécurité sociale",
      "Paiement d’une amende de retard",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Suspension of social security benefits",
      "Payment of a late penalty",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 54,
  category: "public_car",
  license: "B",
  question: {
    ar: "يؤدي التأخر في تجديد صالحية رخصة السوق السائقين العموميين المستفيدين من الصندوق الوطني للضمان االجتماعي الى:",
    fr: "Le retard dans le renouvellement de la validité du permis de conduire des chauffeurs publics bénéficiant de la Caisse Nationale de Sécurité Sociale entraîne :",
    en: "Delay in renewing the validity of public drivers’ licenses benefiting from the National Social Security Fund leads to:"
  },
  options: {
    ar: [
      "توقف االستفادة من تقديمات الضمان",
      "دفع غرامة تأخير",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Suspension des prestations de sécurité sociale",
      "Paiement d’une amende de retard",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Suspension of social security benefits",
      "Payment of a late penalty",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 55,
  category: "public_car",
  license: "B",
  question: {
    ar: "ينقسم اشتراك الصندوق الوطني للضمان االجتماعي للسائقين العموميين بعد سن ال 64 الى فروع:",
    fr: "Les cotisations à la Caisse Nationale de Sécurité Sociale pour les chauffeurs publics après l’âge de 64 ans sont réparties en branches :",
    en: "National Social Security Fund contributions for public drivers after the age of 64 are divided into branches:"
  },
  options: {
    ar: [
      "المرض والامومة ونهاية الخدمة",
      "المرض والامومة و التعويضات العائلية",
      "نهاية الخدمة والتعويضات العائلية"
    ],
    fr: [
      "Maladie, maternité et indemnité de fin de service",
      "Maladie, maternité et allocations familiales",
      "Fin de service et allocations familiales"
    ],
    en: [
      "Sickness, maternity and end-of-service compensation",
      "Sickness, maternity and family allowances",
      "End-of-service compensation and family allowances"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 56,
  category: "public_car",
  license: "B",
  question: {
    ar: "يمكن الحصول على رخصة سوق عمومية بعد التأكد أن السجل العدلي خالٍ من:",
    fr: "Le casier judiciaire doit être vide de :",
    en: "Criminal record must be free of:"
  },
  options: {
    ar: [
      "احكام المخدرات",
      " احكام مانعة غير  المخدرات",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Infractions drogue",
      "Autres infractions",
      "Toutes les réponses"
    ],
    en: [
      "Drug crimes",
      "Other crimes",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 57,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائق العمومي حمل رخصة نقل:",
    fr: "Le conducteur public doit porter une « licence de transport » :",
    en: "A commercial driver must carry a transport license:"
  },
  options: {
    ar: [
      "لكافة انواع السيارات",
      "لسيارات الشحن الخصوصي التي تنقل بضائع",
      "للسيارات العمومية التي تنقل بضائع"
    ],
    fr: [
      "Pour tous les types de véhicules",
      "Pour les véhicules privés transportant des marchandises",
      "Pour les véhicules publics transportant des marchandises"
    ],
    en: [
      "For all types of vehicles",
      "For private freight vehicles transporting goods",
      "For public vehicles transporting goods"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 58,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسيارات العمومية بنقل الركاب من مطار رفيق الحريري الدولي:",
    fr: "Les véhicules publics sont autorisés à transporter des passagers depuis l’aéroport international Rafic Hariri :",
    en: "Public vehicles are allowed to transport passengers from Rafic Hariri International Airport:"
  },
  options: {
    ar: [
      "اذا كانت السيارة مرخصة لذلك",
      "اذا كان السائق يحمل رخصة سوق فئة \"باص 1\"",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Si le véhicule est autorisé à le faire",
      "Si le conducteur possède un permis catégorie \"Bus 1\"",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "If the vehicle is licensed for that",
      "If the driver holds a \"Bus 1\" license",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 59,
  category: "public_car",
  license: "B",
  question: {
    ar: "تجدد رخص النقل لسيارات نقل البضائع:",
    fr: "Les licences de transport pour les véhicules de transport de marchandises sont renouvelées :",
    en: "Transport licenses for goods transport vehicles are renewed:"
  },
  options: {
    ar: [
      "كل خمس سنوات",
      "سنوياً",
      "كل ستة اشهر"
    ],
    fr: [
      "Tous les cinq ans",
      "Annuellement",
      "Tous les six mois"
    ],
    en: [
      "Every five years",
      "Annually",
      "Every six months"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 60,
  category: "public_car",
  license: "B",
  question: {
    ar: "على سائق السيارة السياحية العمومية معرفة الطرق",
    fr: "Le conducteur d’un véhicule touristique public doit connaître les routes :",
    en: "The driver of a public tourist vehicle must know the roads:"
  },
  options: {
    ar: [
      "في جميع الاراضي اللبنانية",
      "في المناطق المرخص له بالعمل فيها",
      "في منطقة اقامته"
    ],
    fr: [
      "Dans tout le territoire libanais",
      "Dans les zones où il est autorisé à travailler",
      "Dans sa région de résidence"
    ],
    en: [
      "Throughout all Lebanese territories",
      "In the areas where he is licensed to work",
      "In his area of residence"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 61,
  category: "public_car",
  license: "B",
  question: {
    ar: "ان قانون العمل يسمح بمدة عمل اسبوعية ال تتجاوز:",
    fr: "La loi du travail autorise une durée hebdomadaire ne dépassant pas :",
    en: "Labor law allows a weekly work duration not exceeding:"
  },
  options: {
    ar: [
      "35 ساعة",
      "48 ساعة",
      "60 ساعة"
    ],
    fr: [
      "35 heures",
      "48 heures",
      "60 heures"
    ],
    en: [
      "35 hours",
      "48 hours",
      "60 hours"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 62,
  category: "public_car",
  license: "B",
  question: {
    ar: "يعتبر العمل في قيادة السيارات زيادة عن الوقت المحدد قانونا :",
    fr: "Le travail de conduite au-delà du temps légal est considéré comme :",
    en: "Driving beyond the legally specified time is considered:"
  },
  options: {
    ar: [
      "ممنوعا",
      "عمالً اضافياً بأجر زائد",
      "عمالً اضافيا بأجر عادي"
    ],
    fr: [
      "Interdit",
      "Des heures supplémentaires avec majoration",
      "Des heures supplémentaires au salaire normal"
    ],
    en: [
      "Prohibited",
      "Overtime with extra pay",
      "Overtime with normal pay"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 63,
  category: "public_car",
  license: "B",
  question: {
    ar: "ينبغي التوقف وافساح المرور الجتياز المشاة للطريق:",
    fr: "Il faut s’arrêter et céder le passage aux piétons pour traverser la route :",
    en: "You must stop and give way to pedestrians crossing the road:"
  },
  options: {
    ar: [
      "عند اقتراب المشاة من حافة الرصيف",
      "عند نزول المشاة من حافة الرصيف الى الطريق",
      "بعد نزول المشاة من حافة الرصيف الى الطريق"
    ],
    fr: [
      "Lorsque les piétons approchent du bord du trottoir",
      "Lorsque les piétons descendent du trottoir vers la route",
      "Après que les piétons soient descendus du trottoir vers la route"
    ],
    en: [
      "When pedestrians approach the sidewalk edge",
      "When pedestrians step from the sidewalk onto the road",
      "After pedestrians have stepped onto the road"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 64,
  category: "public_car",
  license: "B",
  question: {
    ar: "على سائق السيارة العمومية التأكد من وجود لوحة التعريف عن سيارة األجرة :",
    fr: "Le conducteur d’un taxi doit s’assurer de la présence de la plaque d’identification du taxi :",
    en: "The taxi driver must ensure the presence of the taxi identification plate:"
  },
  options: {
    ar: [
      "امام الراكب األمامي",
      "امام المقعد الخلفي",
      "كل ما ورد أعاله"
    ],
    fr: [
      "Devant le passager avant",
      "Devant le siège arrière",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "In front of the front passenger",
      "In front of the rear seat",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 65,
  category: "public_car",
  license: "B",
  question: {
    ar: "تجدد الرخصة بين 50 و65:",
    fr: "Renouvellement 50-65 :",
    en: "Renewal 50-65:"
  },
  options: {
    ar: [
      "كل سنتين",
      "كل ثلاث سنوات",
      "كل أربع سنوات"
    ],
    fr: [
      "2 ans",
      "3 ans",
      "4 ans"
    ],
    en: [
      "2 years",
      "3 years",
      "4 years"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 66,
  category: "public_car",
  license: "B",
  question: {
    ar: "تجدد الرخصة بعد 65:",
    fr: "Renouvellement après 65 :",
    en: "Renewal after 65:"
  },
  options: {
    ar: [
      "كل سنتين",
      "كل ثلاث سنوات",
      "كل أربع سنوات"
    ],
    fr: [
      "2 ans",
      "3 ans",
      "4 ans"
    ],
    en: [
      "2 years",
      "3 years",
      "4 years"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 67,
  category: "public_car",
  license: "B",
  question: {
    ar: "إذا أصيب سائق أو راكب بحرق كيميائي متل اسيد البطارية في اليد أو اي مكان من الجلد، يجب:",
    fr: "Si un conducteur ou un passager subit une brûlure chimique comme l’acide de batterie sur la main ou la peau, il faut :",
    en: "If a driver or passenger suffers a chemical burn such as battery acid on the hand or skin, you must:"
  },
  options: {
    ar: [
      "غسل الجلد جيداً بماء جاري إلزلة المواد",
      "وضع مرهم حريق مباشرة",
      "حماية الجلد بشاش جاف ريثما يتم اسعافه"
    ],
    fr: [
      "Laver soigneusement la peau avec de l’eau courante pour éliminer les substances",
      "Appliquer immédiatement une pommade pour brûlure",
      "Protéger la peau avec une compresse sèche jusqu’aux secours"
    ],
    en: [
      "Wash the skin thoroughly with running water to remove the substance",
      "Apply burn ointment immediately",
      "Protect the skin with dry gauze until medical help arrives"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 68,
  category: "public_car",
  license: "B",
  question: {
    ar: "إذا حاول راكب النزول من السيارة فجأة في منتصف الطريق، يجب على السائق:",
    fr: "Si un passager tente de descendre soudainement au milieu de la route, le conducteur doit :",
    en: "If a passenger suddenly tries to exit the vehicle in the middle of the road, the driver must:"
  },
  options: {
    ar: [
      "االستمرار الى الوجهة التي طلبها الراكب",
      "استمهاله والتوقف فو ًرا وبحذر الى جانب الطريق",
      "أن ينهر الراكب ويستخدم الزمور للتنبيه"
    ],
    fr: [
      "Continuer vers la destination demandée",
      "Lui demander d’attendre et s’arrêter immédiatement et prudemment sur le côté",
      "Réprimander le passager et utiliser le klaxon pour avertir"
    ],
    en: [
      "Continue toward the requested destination",
      "Ask the passenger to wait and stop immediately and safely at the roadside",
      "Scold the passenger and use the horn as a warning"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 69,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح استعمال الهاتف أثناء القيادة:",
    fr: "L’utilisation du téléphone pendant la conduite est autorisée :",
    en: "Phone use while driving is allowed:"
  },
  options: {
    ar: [
      "عند إرسال رسائل نصية",
      "باستخدام سماعة مكبر الصوت",
      "أثناء التوقف على اإلشارة الضوئية"
    ],
    fr: [
      "Lors de l’envoi de messages texte",
      "En utilisant le haut-parleur",
      "Lors de l’arrêt au feu rouge"
    ],
    en: [
      "When sending text messages",
      "Using speakerphone",
      "While stopped at a traffic light"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 70,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند نقل كبار السن أو من ذوي الاحتياجات الخاصة ، يجب :",
    fr: "Lors du transport de personnes âgées ou de personnes à besoins spéciaux, il faut :",
    en: "When transporting elderly people or people with special needs, you must:"
  },
  options: {
    ar: [
      "السماح لهم بالتحرك بحرية",
      "التأكد من ربط أحزمة الامان",
      "فقط تثبيت الاطفال"
    ],
    fr: [
      "Leur permettre de bouger librement",
      "S’assurer que les ceintures de sécurité sont attachées",
      "Attacher uniquement les enfants"
    ],
    en: [
      "Allow them to move freely",
      "Ensure seat belts are fastened",
      "Secure only children"
    ]
  },
  correct: 1
},

{
  type: "normal",
  id: 72,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسائق العمومي بقطر سيارة أخرى بواسطة سيارته شرط ان تكون:",
    fr: "Un chauffeur de taxi est autorisé à remorquer un autre véhicule avec son véhicule, à condition que celui-ci soit :",
    en: "A commercial driver is permitted to tow another vehicle using his vehicle, provided that it is:"
  },
  options: {
    ar: [
      "من فئة اصغر",
      "من ذات الوزن",
      "لا يسمح"
    ],
    fr: [
      "D'une catégorie inférieure",
      "De même poids",
      "Interdit et pas autorisé"
    ],
    en: [
      "Of a smaller class",
      "Of the same weight",
      "Not permitted"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 73,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسائق العمومي بقطر دراجة بواسطة سيارته:",
    fr: "Un chauffeur de taxi est autorisé à remorquer un vélo avec son véhicule :",
    en: "A commercial driver is permitted to tow a bicycle using his vehicle:"
  },
  options: {
    ar: [
      "في الطرقات الداخلية",
      "في الا ماكن غير السكنية",
      "لا يسمح"
    ],
    fr: [
      "Sur les voies publiques",
      "En zones non résidentielles",
      "Interdit et pas autorisé"
    ],
    en: [
      "On internal roads",
      "In non-residential areas",
      "Not permitted"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 74,
  category: "public_car",
  license: "B",
  question: {
    ar: "يصدر قرارات تصنيف الطرق العامة:",
    fr: "Les décisions de classification de la voie publique sont rendues par :",
    en: "Commercial road classification decisions are issued by:"
  },
  options: {
    ar: [
      "وزير الداخلية والبلديات",
      "وزير األشغال العامة والنقل",
      "رئيس الوزراء"
    ],
    fr: [
      "Le ministre de l'Intérieur et des Municipalités",
      "Le ministre des Travaux publics et des Transports",
      "Le Premier ministre"
    ],
    en: [
      "The Minister of Interior and Municipalities",
      "The Minister of Commercial Works and Transport",
      "Prime Minister"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 75,
  category: "public_car",
  license: "B",
  question: {
    ar: "عند وجود اشارة ضوئية وشرطي يتقيد مستخدم الطريق بـ :",
    fr: "Lorsqu'un feu de circulation est allumé et qu'un agent de police est présent, les usagers de la route doivent se conformer :",
    en: "When there is a traffic light and a police officer present, road users must comply with:"
  },
  options: {
    ar: [
      "االشارة الضوئية",
      "إشارة الشرطي اليدوية",
      "قواعد افساح المرور"
    ],
    fr: [
      "Au feu de circulation",
      "Au signal de la main de l'agent de police",
      "Aux règles de cession de passage"
    ],
    en: [
      "The traffic light",
      "The police officer's hand signal",
      "The rules for yielding traffic"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 76,
  category: "public_car",
  license: "B",
  question: {
    ar: "يتم افساح المرور في المستديرات لسائق المركبة التي:",
    fr: "Aux ronds-points, on cède le passage au conducteur d'un véhicule qui :",
    en: "Yields at roundabouts are granted to the driver of a vehicle that:"
  },
  options: {
    ar: [
      "تدخل المستديرة",
      "داخل المستديرة",
      "سرعتها اعلى من باقي السيارات المقتربة من المستديرة"
    ],
    fr: [
      "S'engage dans le rond-point",
      "À l'intérieur du rond-point",
      "Roule plus vite que les autres véhicules à l'approche du rond-point"
    ],
    en: [
      "Enters the roundabout",
      "Inside the roundabout",
      "Drives faster than other vehicles approaching the roundabout"
    ]
  },
  correct: 1
},
{
  type: "normal",
  id: 77,
  category: "public_car",
  license: "B",
  question: {
    ar: "يعاقب قانون السير  الوقوف المتمادي للمركبات التي الا تتحرك من مكان وقوفها لمدة تزيد عن:",
    fr: "Le Code de la route sanctionne le « stationnement prolongé » pour les véhicules qui ne quittent pas leur place de stationnement pendant une période supérieure à :",
    en: "The Traffic Law punishes \"prolonged parking\" for vehicles that do not move from their parking spot for a period exceeding:"
  },
  options: {
    ar: [
      "15 يوما",
      "20 يوما",
      "30 يوماً وما فوق"
    ],
    fr: [
      "15 jours",
      "20 jours",
      "30 jours ou plus"
    ],
    en: [
      "15 days",
      "20 days",
      "30 days or more"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 78,
  category: "public_car",
  license: "B",
  question: {
    ar: "عندما لا يلتزم راكب قاصر بوضع حزام الامان تعتبر المخالفة من مسؤولية:",
    fr: "Lorsqu'un passager mineur ne porte pas sa ceinture de sécurité, l'infraction est imputable à :",
    en: "When a minor passenger fails to wear a seatbelt, the violation is the responsibility of:"
  },
  options: {
    ar: [
      "صاحب العالقة",
      "والدي الراكب",
      "سائق المركبة"
    ],
    fr: [
      "La personne concernée",
      "Les parents du passager",
      "Le conducteur du véhicule"
    ],
    en: [
      "The party concerned",
      "The passenger's parents",
      "The driver of the vehicle"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 79,
  category: "public_car",
  license: "B",
  question: {
    ar: "يوضع الملصق التعريفي الدعائي للسيارة العمومية على:",
    fr: "L'autocollant d'identification promotionnel d'un véhicule public doit être apposé sur :",
    en: "The promotional identification sticker for a commercial vehicle must be placed on:"
  },
  options: {
    ar: [
      "غطاء المحرك وغطاء الصندوق",
      "قرب لوحات السير للمركبة",
      "على جانبي المركبة"
    ],
    fr: [
      "Le capot et le couvercle du coffre",
      "Près des plaques d'immatriculation du véhicule",
      "Des deux côtés du véhicule"
    ],
    en: [
      "The hood and trunk lid",
      "Near the vehicle's license plates",
      "On both sides of the vehicle"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 80,
  category: "public_car",
  license: "B",
  question: {
    ar: "تضاء لوحة \"إجرة\" أو “TAXI“ الموضوعة على سطح سيارة اإلجرة:",
    fr: "Le panneau « TAXI » sur le toit d'un taxi doit être éclairé :",
    en: "The \"TAXI\" sign on the roof of a taxi shall be illuminated:"
  },
  options: {
    ar: [
      "عند تجول السيارة",
      "فقط في الليل",
      "عند فراغها من الركّاب"
    ],
    fr: [
      "Lorsque le véhicule est en mouvement",
      "Uniquement la nuit",
      "Lorsque le véhicule est vide de passagers"
    ],
    en: [
      "When the vehicle is moving",
      "Only at night",
      "When the vehicle is empty of passengers"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 81,
  category: "public_car",
  license: "B",
  question: {
    ar: "على سائق سيارة  الا جرة ان يثبت لوحة تعريف عن السيارة والسائق:",
    fr: "Le chauffeur de taxi doit apposer une plaque d'identification pour le véhicule et le chauffeur :",
    en: "The taxi driver must affix an identification plate for the vehicle and the driver:"
  },
  options: {
    ar: [
      "مقابل المقعدين الا مامي والخلفي",
      "على الزجاجين الا مامي والخلفي باتجاه الخارج",
      "كل ما ورد أعاله"
    ],
    fr: [
      "En face des sièges avant et arrière",
      "Sur le pare-brise et les vitres arrière orientés vers l'extérieur",
      "Toutes les réponses ci-dessus"
    ],
    en: [
      "Opposite the front and rear seats",
      "On the outward-facing windshield and rear windows",
      "All of the above"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 82,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسائق العمومي بتلازم السير بموازاة سيارة أخرى:",
    fr: "Un chauffeur de taxi est autorisé à circuler à côté d'un autre véhicule :",
    en: "A commercial driver is permitted to drive alongside another vehicle:"
  },
  options: {
    ar: [
      "في الطرقات الداخلية",
      "في األماكن غير السكنية",
      " لا يسمح"
    ],
    fr: [
      "Sur les voies publiques",
      "Dans les zones non résidentielles",
      "Interdit et pas autorisé"
    ],
    en: [
      "On internal roads",
      "In non-residential areas",
      "Not permitted"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 83,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسائق العمومي نقل الركاب بواسطة سيارة خصوصية مقابل أجر:",
    fr: "Un chauffeur de taxi est autorisé à transporter des passagers dans un véhicule privé moyennant paiement :",
    en: "A commercial driver is permitted to transport passengers in a private vehicle for a fee:"
  },
  options: {
    ar: [
      "في البلدات النائية",
      "خارج مراكز االقضية والمحافظات",
      "لا يسمح"
    ],
    fr: [
      "Dans les villes isolées",
      "En dehors des chefs-lieux de district et de gouvernorat",
      "Interdit et pas autorisé"
    ],
    en: [
      "In remote towns",
      "Outside district and governorate centers",
      "Not permitted"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 84,
  category: "public_car",
  license: "B",
  question: {
    ar: "يسمح للسائق العمومي عند نقل الركاب بتشغيل إقفال األطفال لألبواب الخلفية :",
    fr: "Un chauffeur de taxi est autorisé, lors du transport de passagers, à actionner les serrures enfants des portes arrière :",
    en: "A commercial driver is permitted, when transporting passengers, to operate child locks on the rear doors:"
  },
  options: {
    ar: [
      "عند وجود اطفال بعد اذن الاهل",
      "عند وجود اطفال بدون اذن األهل",
      "في كل األوقات"
    ],
    fr: [
      "En présence d'enfants, avec l'autorisation des parents",
      "En présence d'enfants sans autorisation parentale",
      "En permanence"
    ],
    en: [
      "When children are present, with parental permission",
      "When children are present without parental permission",
      "At all times"
    ]
  },
  correct: 0
},
{
  type: "normal",
  id: 85,
  category: "public_car",
  license: "B",
  question: {
    ar: "يخضع نقل السالح الحربي او سالح الصيد:",
    fr: "Le transport d'armes militaires ou de chasse est soumis à :",
    en: "Transporting military or hunting weapons is subject to:"
  },
  options: {
    ar: [
      "للترخيص من البلديات",
      "للترخيص إذا تجاوز عدده قطعتين",
      "للترخيص من المراجع ألامنية المختصة"
    ],
    fr: [
      "Un permis délivré par les municipalités",
      "Un permis si le nombre dépasse deux armes",
      "Un permis délivré par les autorités de sécurité compétentes"
    ],
    en: [
      "License from the municipalities",
      "License if the number exceeds two pieces",
      "License from the competent security authorities"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 86,
  category: "public_car",
  license: "B",
  question: {
    ar: "يرتبط القيام بحديث شخصي بين السائقين العموميين والركاب:",
    fr: "Un entretien personnel entre les chauffeurs de transport public et les passagers est soumis à :",
    en: "A personal conversation between commercial drivers and passengers is subject to:"
  },
  options: {
    ar: [
      "برغبة الركاب",
      "برغبة السائق",
      "كل ما ورد أعاله"
    ],
    fr: [
      "À la demande des passagers",
      "À la demande du chauffeur",
      "Toutes les conditions ci-dessus"
    ],
    en: [
      "At the request of the passengers",
      "At the request of the driver",
      "All of the above"
    ]
  },
  correct: 2
},
{
  type: "normal",
  id: 87,
  category: "public_car",
  license: "B",
  question: {
    ar: "على السائق العمومي توضيح التعرفة للراكب:",
    fr: "Les chauffeurs de transport public doivent expliquer le tarif au passager :",
    en: "Commercial drivers must explain the fare to the passenger:"
  },
  options: {
    ar: [
      "قبل دخوله المركبة",
      "بعد دخوله المركبة",
      "فقط عند السؤال"
    ],
    fr: [
      "Avant de monter dans le véhicule",
      "Après être monté dans le véhicule",
      "Uniquement sur demande"
    ],
    en: [
      "Before entering the vehicle",
      "After entering the vehicle",
      "Only upon request"
    ]
  },
  correct: 0
},


];

