const allQuestions = [

  {
    type: "normal",
    id: 1,
    category: "public_car",
    question: {
      ar: "يمنع التوقف من أجل صعود أو نزول الركاب عند التقاطعات والمستديرات ضمن مسافة:",
      fr: "Il est interdit de s'arrêter pour déposer/prendre des passagers aux intersections et aux ronds-points à une distance de moins de :",
      en: "It is prohibited to stop to pick up or drop off passengers at intersections and roundabouts within a distance of:"
    },
    options: {
      ar: ["10 أمتار من التقاطع أو المستديرة", "25 متراً من التقاطع أو المستديرة", "40 متراً من التقاطع أو المستديرة"],
      fr: ["10 mètres de l'intersection ou du rond-point", "25 mètres de l'intersection ou du rond-point", "40 mètres de l'intersection ou du rond-point"],
      en: ["10 meters from the intersection or roundabout", "25 meters from the intersection or roundabout", "40 meters from the intersection or roundabout"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 2,
    category: "public_car",
    question: {
      ar: "يمنع تخفيف السرعة أو التوقف لاستجلاب الركاب:",
      fr: "Il est interdit de ralentir ou de s'arrêter pour prendre des passagers :",
      en: "It is prohibited to slow down or stop to pick up passengers:"
    },
    options: {
      ar: ["قرب التقاطعات والمستديرات", "على المنعطفات", "كل ما ورد أعلاه"],
      fr: ["À proximité des intersections et des ronds-points", "Dans les virages", "Toutes ces réponses"],
      en: ["Near intersections and roundabouts", "On bends", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 3,
    category: "public_car",
    question: {
      ar: "على السائقين العموميين عند مصادفة مستخدمي طريق آخرين التقيد بقاعدة:",
      fr: "Lorsqu'ils rencontrent d'autres usagers de la route, les conducteurs de véhicules publics doivent respecter les règles suivantes :",
      en: "When encountering other road users, commercial drivers must adhere to the following rules:"
    },
    options: {
      ar: ["افساح المرور", "حق المرور", "كل ما ورد أعلاه"],
      fr: ["Cédez le passage", "Priorité", "Toutes ces réponses"],
      en: ["Giving way", "Right-of-Way", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 4,
    category: "public_car",
    question: {
      ar: "يعتبر \"حق المرور\" كونه من المسائل الخاصة:",
      fr: "La « droit de passage » est considérée comme une question relative aux :",
      en: "\"Right-of-Way\" is considered a matter related to:"
    },
    options: {
      ar: ["بالحقوق العقارية", "بحقوق السائقين", "بحقوق المشاة"],
      fr: ["Droits de propriété", "Droits des conducteurs", "Droits des piétons"],
      en: ["Property rights", "Drivers' rights", "Pedestrian rights"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 5,
    category: "public_car",
    question: {
      ar: "يعتبر \"حق الأفضلية\" كونه من المسائل الخاصة:",
      fr: "La « priorité de la route » est considérée comme une question relative :",
      en: "\"Priority-of-Road\" is considered a matter related to:"
    },
    options: {
      ar: ["بتصنيف الطريق من قبل وزارة الأشغال", "بحقوق السائقين المذكورة في قانون السير", "بحقوق القوى المسلحة"],
      fr: ["A la classification des routes par le Ministère des Travaux Publics et Transport", "Aux droits des conducteurs tels que stipulés dans le Code de la route", "Aux droits des forces armées"],
      en: ["Road classification by the Ministry of Public Works and Transportation", "Drivers' rights as stipulated in the Traffic Law", "Armed Forces Rights"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 6,
    category: "public_car",
    question: {
      ar: "يعتبر \"افساح الطريق\" من القواعد:",
      fr: "« Cédez le passage » est une règle qui :",
      en: "\"Giving way\" is a rule that:"
    },
    options: {
      ar: ["المفروضة في اتفاقيات السير الدولية", "المتعارف عليها محلياً", "التي تعكس كرم أخلاق من السائق"],
      fr: ["Est imposée par les accords internationaux sur la circulation", "Est reconnue localement", "Reflète les bonnes mœurs du conducteur"],
      en: ["Is imposed by international traffic agreements", "Is recognized locally", "Reflects good moral character on the part of the driver"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 7,
    category: "public_car",
    question: {
      ar: "ينبغي \"افساح المرور\" للسائقين الآخرين:",
      fr: "« Cédez le passage » doit être adressé aux autres conducteurs :",
      en: "\"Giving way\" should be made to other drivers:"
    },
    options: {
      ar: ["بعد تشغيلهم إشارة التنبيه (flasher)", "بعد تشغيلهم إشارة الاتجاه", "كل ما ورد أعلاه"],
      fr: ["Après avoir actionné les feux de détresse", "Après avoir actionné le clignotant", "Toutes les réponses ci-dessus"],
      en: ["After they activate hazard lights", "After they activate turn signal", "All of the above"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 8,
    category: "public_car",
    question: {
      ar: "يؤثر الحوار والتحدث مع الركاب على:",
      fr: "La conversation avec les passagers affecte :",
      en: "Conversation with passengers affects:"
    },
    options: {
      ar: ["التركيز الذهني", "القدرة على تعدد المهام", "كل ما ورد أعلاه"],
      fr: ["La concentration", "La capacité à effectuer plusieurs tâches à la fois", "Toutes les réponses ci-dessus"],
      en: ["Mental concentration", "The ability to multitask", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 9,
    category: "public_car",
    question: {
      ar: "تقتضي قاعدة مضاعفة الانتباه عند التوقف والاقتراب من تقاطعات:",
      fr: "La double vérification à l’arrêt et à l’approche des intersections exige :",
      en: "The double-checking rule when stopping and approaching intersections requires:"
    },
    options: {
      ar: ["النظر مرتين على الأقل في جميع المرايا", "النظر مرة في جميع المرايا مع تشغيل الإشارات", "طلب المساعدة من الركاب"],
      fr: ["De vérifier au moins deux fois dans tous les rétroviseurs", "De vérifier une fois dans tous les rétroviseurs, clignotants allumés", "De demander de l’aide aux passagers"],
      en: ["Checking at least twice in all mirrors", "Checking once in all mirrors with the signals on", "Asking for help from passengers"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 10,
    category: "public_car",
    question: {
      ar: "عند وجود مخاطر سير إضافية بسبب حالة الطريق أو الإنارة أو الطقس يتوجب على السائق:",
      fr: "En cas de dangers supplémentaires liés à l’état de la route, à l’éclairage ou aux conditions météorologiques, le conducteur doit :",
      en: "When additional traffic hazards exist due to road conditions, lighting, or weather, the driver must:"
    },
    options: {
      ar: ["التمهل في السير", "مضاعفة الانتباه", "كل ما ورد أعلاه"],
      fr: ["Ralentir", "Redoubler d’attention", "Tout ce qui précède"],
      en: ["Slow down", "Pay extra attention", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 11,
    category: "public_car",
    question: {
      ar: "ينبغي على السائق العمومي القيام بصيانة السيارة بشكل:",
      fr: "Les chauffeurs de véhicules publics doivent entretenir leurs véhicules :",
      en: "Commercial drivers must maintain their vehicles:"
    },
    options: {
      ar: ["استباقي", "عند وقوع عطل", "دوري"],
      fr: ["De manière proactive", "En cas de panne", "Périodiquement"],
      en: ["Proactively", "Upon a breakdown", "Periodically"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 12,
    category: "public_car",
    question: {
      ar: "تعتبر نظافة السيارة الخارجية والداخلية للسيارات العمومية أمراً:",
      fr: "La propreté extérieure et intérieure des véhicules publics est :",
      en: "The cleanliness of the exterior and interior of commercial vehicles is:"
    },
    options: {
      ar: ["اختيارياً لا يفرضه القانون", "إلزامياً يفرضه القانون", "يتوافق مع القواعد العامة لسيارات الأجرة"],
      fr: ["Facultative, non requise par la loi", "Obligatoire, requise par la loi", "Conforme à la réglementation générale des taxis"],
      en: ["Optional, not required by law", "Mandatory, required by law", "Compliant with general taxi regulations"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 13,
    category: "public_car",
    question: {
      ar: "من واجبات سائق السيارة العمومية حيازة:",
      fr: "Les chauffeurs de véhicules publics sont tenus d’avoir :",
      en: "Commercial vehicle drivers are required to have:"
    },
    options: {
      ar: ["علبة إسعاف أولية", "عدة نظافة للمحرك", "كل ما ورد أعلاه"],
      fr: ["Une trousse de premiers secours", "Un kit de nettoyage moteur", "Tout ce qui précède"],
      en: ["A first aid kit", "An engine cleaning kit", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 14,
    category: "public_car",
    question: {
      ar: "يمكن للسائق العمومي أن يعمل مقابل أجرة:",
      fr: "Les chauffeurs de véhicules publics peuvent travailler contre rémunération :",
      en: "Commercial drivers may work for a fee:"
    },
    options: {
      ar: ["على سيارات تحمل لوحة عمومية", "على سيارات تحمل لوحة خصوصية", "على كافة السيارات"],
      fr: ["Sur les véhicules immatriculés dans des véhicules publics", "Sur les véhicules immatriculés dans des véhicules privés", "Sur tous les véhicules"],
      en: ["On commercial vehicles with commercial license plates", "On private vehicles with private license plates", "On all vehicles"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 15,
    category: "public_car",
    question: {
      ar: "ترتبط سلامة الإطارات:",
      fr: "La sécurité des pneus est liée à :",
      en: "Tire safety is related to:"
    },
    options: {
      ar: ["بعمر الإطار", "بنوعية الإطار", "كل ما ورد أعلاه"],
      fr: ["L’âge des pneus", "La qualité des pneus", "Tout ce qui précède"],
      en: ["Tire age", "Tire quality", "All of the above"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 16,
    category: "public_car",
    question: {
      ar: "عند وجود حمولة في المركبة بالإضافة إلى الركاب يجب أن لا يتعدى وزنها:",
      fr: "Lorsque le véhicule contient des marchandises en plus des passagers, son poids ne doit pas dépasser :",
      en: "When the vehicle contains cargo in addition to passengers, its weight must not exceed:"
    },
    options: {
      ar: ["وزن عدد الركاب", "الوزن الإجمالي المحدد في مواصفات المصنع على أن لا تشكل الحمولة عبئاً على سير المركبة", "كل ما ورد أعلاه"],
      fr: ["Le poids des passagers", "Le poids total spécifié dans les spécifications du constructeur, à condition que la cargaison ne constitue pas une charge pour le véhicule", "Tout ce qui précède"],
      en: ["The weight of the passengers", "The total weight specified in the manufacturer's specifications, provided that the cargo does not constitute a burden on the vehicle's movement", "All of the above"]
    },
    correct: 1
  },

  {
    type: "normal",
    id: 17,
    category: "public_car",
    question: {
      ar: "عند تحميل بضاعة مختلفة الأوزان في صندوق السيارة يتم وضعها بالترتيب التالي:",
      fr: "Lors du chargement de marchandises de poids différents dans le coffre du véhicule, celles-ci doivent être placées dans l'ordre suivant :",
      en: "When loading goods of varying weights into the trunk of the vehicle, they shall be placed in the following order:"
    },
    options: {
      ar: ["الحمولة الأثقل وزناً في الأسفل", "الحمولة الأخف وزناً في الأسفل", "بأي شكل يلائم ضبط البضاعة ضمن الصندوق"],
      fr: ["Charge la plus lourde en bas", "Charge la plus légère en bas", "De toute manière permettant de loger le chargement dans le coffre"],
      en: ["The heaviest load at the bottom", "The lightest load at the bottom", "In any manner that accommodates the cargo within the trunk"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 18,
    category: "public_car",
    question: {
      ar: "على سائق الأجرة لسيارة سياحية تحمل لوحة عمومية الاستحصال على ترخيص من وزارة الأشغال العامة والنقل لتحديد:",
      fr: "Le chauffeur de taxi d'un véhicule de tourisme immatriculé publiquement doit obtenir une licence auprès du ministère des Travaux publics et des Transports précisant :",
      en: "A taxi driver of a tourist vehicle bearing a commercial license plate must obtain a license from the Ministry of Public Works and Transport to specify:"
    },
    options: {
      ar: ["المناطق التي يعمل فيها", "فئة الركاب", "كل ما ورد أعلاه"],
      fr: ["La zone d'activité", "La catégorie de passager", "Tout ce qui précède"],
      en: ["The areas in which he operates", "The passenger category", "All of the above"]
    },
    correct: 0
  },

  {
    type: "normal",
    id: 19,
    category: "public_car",
    question: {
      ar: "يلزم القانون سائق التاكسي بوجود تاكسيميتر في:",
      fr: "La loi exige que les chauffeurs de taxi soient équipés d'un taximètre dans :",
      en: "The law requires taxi drivers to have a taximeter in:"
    },
    options: {
      ar: ["سيارات الأجرة التابعة لمكاتب", "سيارات الأجرة المملوكة من أشخاص", "كافة سيارات الأجرة"],
      fr: ["Les taxis appartenant à des agences", "Les taxis privés", "Tous les taxis"],
      en: ["Taxi cabs belonging to offices", "Privately owned taxis", "All taxis"]
    },
    correct: 2
  },

  {
    type: "normal",
    id: 20,
    category: "public_car",
    question: {
      ar: "يتم تشغيل التاكسيميتر لضبط:",
      fr: "Le taximètre sert à enregistrer :",
      en: "The taximeter is operated to record:"
    },
    options: {
      ar: ["المسافة والوقت المستغرقين للرحلة بما في ذلك أوقات التوقف", "المسافة والوقت المستغرقين للرحلة من دون أوقات التوقف", "المسافة والوقت والمنطقة التي تتم فيها الرحلة"],
      fr: ["La distance et la durée du trajet, arrêts compris", "La distance et la durée du trajet, arrêts exclus", "La distance, la durée et la zone dans laquelle le trajet a lieu"],
      en: ["The distance and time taken for the trip, including stops", "The distance and time taken for the trip, excluding stops", "The distance, time, and area in which the trip takes place"]
    },
    correct: 0
  }

  // 👉 continue here with 21+
];