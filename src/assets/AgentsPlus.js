const agentsPlus = [
  {
    id: "jett",
    key: "1",
    name: "Jett",
    tags: ["DUELIST"],
    stats: {
      P: "DRIFT",
      Q: "UPDRAFT",
      E: "TAILWIND",
      C: "CLOUDBURST",
      X: "BLADE STORM",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce7928301a67a33a/5eaf861103f6e72ff388cc20/TX_Jett_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta0beeaa4a7e1ed78/5eaf8611b8a6356e4ddc1013/TX_Jett_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf137993847c71770/5eaf8611d4b10d15d3e8db4e/TX_Jett_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb3e956f9fb96318e/5eaf86112b79652f27c32a06/TX_Jett_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc: "INSTANTLY propel Jett high into the air.",
      e_desc:
        "INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.",
      c_desc:
        "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.",
      x_desc:
        "EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.",
    },
    costs: {
      q_cost: "150",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "3",
      x_charges: "1",
    },
    biography: {
      story:
        "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
      agent_about:
        "Jett is the fastest of the agents, and only one that can levitate from boosted places without making any noise. She has 3 powerful smokes called Cloudburst, that can be instantly thrown in front of her.",
      saying:
        "Think you can keep up? Who am I kidding... You know you can't keep up.",
      gender: "Female",
      region: ["South Korea", "Republic of Korea"],
    },
  },
  {
    id: "raze",
    key: "2",
    name: "Raze",
    tags: ["DUELIST"],
    stats: {
      P: "NONE",
      Q: "BLAST PACK",
      E: "PAINT SHELLS",
      C: "BOOM BOT",
      X: "SHOWSTOPPER",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/9/9c/Raze_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdb74f287eee9fe76/5eaf862a248a28605479c91f/TX_Raze_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb0eb89e122c1f4ea/5eaf862ad238e314f259fa8b/TX_Raze_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44acc030d4d60182/5eaf862aa20afe612d82fb4e/TX_Raze_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60023b671f330740/5eaf862ae6f6795e530a2717/TX_Raze_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
      e_desc:
        "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
      c_desc:
        "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
      x_desc:
        "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.",
    },
    costs: {
      q_cost: "200",
      e_cost: "FREE",
      c_cost: "400",
      x_cost: "8 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
      agent_about:
        "Raze's all four abilities explode causing massive damage to her enemies. Raze can clear corners with her Boom Bot, or kill a whole enemy team with her ultimate. You never know where you should aim when Raze is jumping with her Blast Packs.",
      saying: "Just me, my squadzinho and a few tons of dynamite!",
      gender: "Female",
      region: ["Brazil", "Federative Republic of Brazil"],
    },
  },
  {
    id: "breach",
    key: "3",
    name: "Breach",
    tags: ["INITIATOR"],
    stats: {
      P: "NONE",
      Q: "FLASHPOINT",
      E: "FAULT LINE",
      C: "AFTERSHOCK",
      X: "ROLLING THUNDER",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/5/53/Breach_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf7b0c621601e5577/5eaf863af66b2515dea76b40/TX_Breach_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt40b144165bebbb57/5eaf863aa20afe612d82fb54/TX_Breach_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd59235294cc21d88/5eaf863acf88d36e47cf02b1/TX_Breach_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb39bc3e8df9012dc/5eaf863ad238e314f259fa93/TX_Breach_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.",
      e_desc:
        "EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.",
      c_desc:
        "EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.",
      x_desc:
        "EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.",
    },
    costs: {
      q_cost: "250",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "3",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Breach, the biographynic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
      agent_about:
        "Breach as an Initiator has a bunch of abilities that can flash and stun his opponents, and if not used carefully, also his teammates. All his abilities can be casted through the walls.",
      saying:
        "Been pulling jobs like this for years. Risky? Sure! But never boring.",
      gender: "Male",
      region: ["Sweden", "Kingdom of Sweden"],
    },
  },
  {
    id: "omen",
    key: "4",
    name: "Omen",
    tags: ["CONTROLLER"],
    stats: {
      P: "NONE",
      Q: "PARANOIA",
      E: "DARK COVER",
      C: "SHROUDED STEP",
      X: "FROM THE SHADOWS",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt323e0178def67d36/5eaf85f4cf88d36e47cf02a5/TX_Omen_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta95e6968cb32f519/5eaf85f44398082ffe24019b/TX_Omen_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7016fed86331500b/5eaf85f41b51e36d7c1b6ad6/TX_Omen_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd7b44696b74076d4/5eaf85f4f66b2515dea76b2c/TX_Omen_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.",
      e_desc:
        "EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the market closer.",
      c_desc:
        "EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.",
      x_desc:
        "EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.",
    },
    costs: {
      q_cost: "300",
      e_cost: "1 + 1 (NOT FREE)",
      c_cost: "150",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "1",
      e_charges: "2",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
      agent_about:
        "Omen has one of the best smokes in the game, that can be placed almost anywhere on the map. He can teleport short and long distances, and blind his opponents.",
      saying: "They fear death. They should fear so much more than that.",
      gender: "Male",
      region: ["Unknown", "Unknown Origin"],
    },
  },
  {
    id: "brimstone",
    key: "5",
    name: "Brimstone",
    tags: ["CONTROLLER"],
    stats: {
      P: "NONE",
      Q: "INCENDIARY",
      E: "SKY SMOKE",
      C: "STIM BEACON",
      X: "ORBITAL STRIKE",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/4/4d/Brimstone_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29aa6cc80f1caa7b/5eaf8607af7e315106b47daa/TX_Brimstone_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7c9f45408b1bf6e8/5eaf8607d4b10d15d3e8db48/TX_Brimstone_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt71797e5088fa6920/5eaf8606b8a6356e4ddc100d/TX_Brimstone_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt68102861930b231f/5eaf8606f66b2515dea76b38/TX_Brimstone_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
      e_desc:
        "EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
      c_desc:
        "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
      x_desc:
        "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
    },
    costs: {
      q_cost: "250",
      e_cost: "100",
      c_cost: "100",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "1",
      e_charges: "1 + 2 (NOT FREE)",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
      agent_about:
        "Brimstone's tactical map allows casting Orbital Strike and 3 smokes behind walls. Combined with deadly Incendiary grenade, made him an often pick for professional players. He is excellent agent to protect or take a Spike Site.",
      saying:
        "They think I'm an old dog? Haha, I'll show them how many tricks I know.",
      gender: "Male",
      region: ["United States", "United States of America"],
    },
  },
  {
    id: "phoenix",
    key: "6",
    name: "Phoenix",
    tags: ["DUELIST"],
    stats: {
      P: "NONE",
      Q: "CURVEBALL",
      E: "HOT HANDS",
      C: "BLAZE",
      X: "RUN IT BACK",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/1/14/Phoenix_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb125dfdcd673a9a8/5eaf85e95751b2150e57a803/TX_Pheonix_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb239d633e68d9b65/5eaf85e94398082ffe240195/TX_Pheonix_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt40cafc8e39b4fcbd/5eaf85e903f6e72ff388cc1a/TX_Pheonix_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26ed15b080ee68b1/5eaf85e91b51e36d7c1b6ad0/TX_Pheonix_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.",
      e_desc:
        "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.",
      c_desc:
        "EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.",
      x_desc:
        "INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
    },
    costs: {
      q_cost: "250",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
      agent_about:
        "Phoenix is a universal and a self-sufficient duelist. He can flash enemies with his Curveballs, or just respawn after a death when using his Run it Back ultimate. Phoenix can burn enemies with Blaze or Hot Hands, but in the same time heal himself in his own fire.",
      saying:
        "This is crazy, it feels like we've been doing this forever. Anyone else feel like that? Just me? OK!",
      gender: "Male",
      region: [
        "United Kingdom",
        "United Kingdom of Great Britain and Northern Ireland",
      ],
    },
  },
  {
    id: "sage",
    key: "7",
    name: "Sage",
    tags: ["SENTINEL"],
    stats: {
      P: "NONE",
      Q: "SLOW ORB",
      E: "HEALING ORB",
      C: "BARRIER ORB",
      X: "RESURRECTION",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt295acba83a83496d/5eaf85beb8a6356e4ddc1007/TX_Sage_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc6355bb295e64ba1/5efa55c138fa326e2aaf5c3f/TX_Sage_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt368b2f4136858aed/5eaf85becf88d36e47cf029f/TX_Sage_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt39a8fe8deb6389f8/5efa55d38732f51d8514604f/TX_Sage_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.",
      e_desc:
        "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.",
      c_desc:
        "EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.",
      x_desc:
        "EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.",
    },
    costs: {
      q_cost: "200",
      e_cost: "FREE",
      c_cost: "400",
      x_cost: "8 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
      agent_about:
        "Sage is the only agent that was picked by teams in the Closed Beta almost 100% of the time. She is an excellent healer for a team, and her Slow Orbs and Ice Wall has a potential to hold enemies while waiting her team to rotate. Sage can resurrect her teammates with one of the most powerful ultimates in the Valorant.",
      saying: "My power does not end. Ask for aid and you shall receive it.",
      gender: "Female",
      region: ["China", "People's Republic of China"],
    },
  },
  {
    id: "sova",
    key: "8",
    name: "Sova",
    tags: ["INITIATOR"],
    stats: {
      P: "NONE",
      Q: "SHOCK BOLT",
      E: "RECON BOLT",
      C: "OWL DRONE",
      X: "HUNTER’S FURY",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/4/49/Sova_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltebf4f748f87b2222/5eaf85dc4398082ffe24018f/TX_Sova_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5084114604f20525/5eaf85b108d37e6d82ef74ef/TX_Sova_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt74a6f56b5c37edb5/5eaf85b1f66b2515dea76b26/TX_Sova_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5515bdb07fabe98/5eaf85b1b8a6356e4ddc1001/TX_Sova_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      e_desc:
        "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.",
      c_desc:
        "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
      x_desc:
        "EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.",
    },
    costs: {
      q_cost: "150",
      e_cost: "FREE",
      c_cost: "400",
      x_cost: "8 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
      agent_about:
        "Sova is a hunter who has to abilities to reveal enemies before they even see him. Equipped with powerful Shock Bolts and the Hunter's Fury, he can clear places that are behind walls and corners.",
      saying:
        "If you're not a good shot today, don't worry. There are other ways to be useful.",
      gender: "Male",
      region: ["Russia", "Russian Federation"],
    },
  },
  {
    id: "viper",
    key: "9",
    name: "Viper",
    tags: ["CONTROLLER"],
    stats: {
      P: "NONE",
      Q: "POISON CLOUD",
      E: "TOXIC SCREEN",
      C: "SNAKE BITE",
      X: "VIPER’S PIT",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab09d009a46f6c08/5eaf85a2cf88d36e47cf0299/TX_Viper_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3c4a5fda3e7e8f16/5eaf85a226a7212f2db1beb6/TX_Viper_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt93b26c70173b0875/5eaf85a3b8a6356e4ddc0ffb/TX_Viper_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8698a8684bb39593/5eaf85a2f66b2515dea76b20/TX_Viper_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.",
      e_desc:
        "EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.",
      c_desc:
        "EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.",
      x_desc:
        "EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.",
    },
    costs: {
      q_cost: "200",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "1",
      e_charges: "1",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
      agent_about:
        "Viper is an excellent agent to make your enemies blind. Equipped with poisons and toxins, she can cast poison clouds and toxic walls from any place in the map. Viper's ultimate is a nightmare for enemies who wants to take or protect a spike site.",
      saying:
        "Only five of them? Pity, I brought enough poison for fifty. You can't say I'm not prepared.",
      gender: "Female",
      region: ["United States", "United States of America"],
    },
  },
  {
    id: "cypher",
    key: "10",
    name: "Cypher",
    tags: ["SENTINEL"],
    stats: {
      P: "NONE",
      Q: "CYBER CAGE",
      E: "SPYCAM",
      C: "TRAPWIRE",
      X: "NEURAL THEFT",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta39b791956ecb79a/5eaf85fecf88d36e47cf02ab/TX_Cypher_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt834a6ba8d533a3b7/5eaf85feaf7e315106b47da4/TX_Cypher_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6397bce97bdb0ecd/5eaf85fef66b2515dea76b32/TX_Cypher_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf313af5404f8f80/5eaf85fee6f6795e530a2711/TX_Cypher_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.",
      e_desc:
        "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
      c_desc:
        "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
      x_desc:
        "INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.",
    },
    costs: {
      q_cost: "100",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
      agent_about:
        "Cypher is the only agent that can hold a bombsite alone, without even being there. No one can pass his Cameras and Trapwires undetected. His Cyber Cages that acts like 'smokes', and can be activated remotely. Cypher's ultimate reveals the locations of enemies.",
      saying: "Nothing stays hidden from me... nothing.",
      gender: "Male",
      region: ["Morocco", "Kingdom of Morocco"],
    },
  },
  {
    id: "reyna",
    key: "11",
    name: "Reyna",
    tags: ["DUELIST"],
    stats: {
      P: "NONE",
      Q: "DEVOUR",
      E: "DISMISS",
      C: "LEER",
      X: "EMPRESS",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/b/b0/Reyna_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf10078de1865cc3a/5eb7cf1e241e5e628430676c/TX_Reyna_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f61a763092dca17/5eb7cf1e7e251a2d4a46fdb3/TX_Reyna_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1df6153d75480d43/5eb7cf1e8682422a765fc997/TX_Reyna_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte8a8889d3b17a9b9/5eb7cf1e1ea0c32e33b95fa6/TX_Reyna_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
      e_desc:
        "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
      c_desc:
        "EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.",
      x_desc:
        "INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.",
    },
    costs: {
      q_cost: "100",
      e_cost: "100",
      c_cost: "250",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "2 (shared with Dismiss)",
      e_charges: "2 (shared with Devour)",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
      agent_about:
        "Raze's all four abilities explode causing massive damage to her enemies. Raze can clear corners with her Boom Bot, or kill a whole enemy team with her ultimate. You never know where you should aim when Raze is jumping with her Blast Packs.",
      saying: "Just me, my squadzinho and a few tons of dynamite!",
      gender: "Female",
      region: ["Mexico", "United Mexican States"],
    },
  },
  {
    id: "killjoy",
    key: "12",
    name: "Killjoy",
    tags: ["SENTINEL"],
    stats: {
      P: "NONE",
      Q: "ALARMBOT",
      E: "TURRET",
      C: "NANOSWARM",
      X: "LOCKDOWN",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/1/15/Killjoy_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt143467a7379d4211/5f21feb94d73a00a2e1428d3/Copy_of_TX_KJ_Alarm.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a4926627b38cc1a/5f2201490e38240638cd81d2/Copy_of_tx_kj_turret.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4e53712407193852/5f22010d8ff50d070ad2d172/Copy_of_TX_KJ_Bees.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1e4113a934e67fa3/5f22018d71ec397ef9bf089e/Copy_of_TX_KJ_Lockdown.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt72ffc2e48d4a7a58/5eaa06852b79652f27c31ff6/Sentinel.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
      e_desc:
        "EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.",
      c_desc:
        "EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.",
      x_desc:
        "EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.",
    },
    costs: {
      q_cost: "200",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "1",
      e_charges: "1",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
      agent_about:
        "Killjoy is a wunderkind. She was added in Act 2 of the Ignition Series, and her robots help your team to hold an angle from the cover. Her controversial turret guards an area, and shots to any enemy passing by. Killjoy ultimate ability can disarm enemy players if they are not fast enough.",
      saying: "Don't worry, they only kill when I say so.",
      gender: "Female",
      region: ["Germany", "Federal Republic of Germany"],
    },
  },
  {
    id: "skye",
    key: "13",
    name: "Skye",
    tags: ["INITIATOR"],
    stats: {
      P: "NONE",
      Q: "TRAILBLAZER",
      E: "GUIDING LIGHT",
      C: "REGROWTH",
      X: "SEEKERS",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/3/33/Skye_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta3c0de454b776542/5f7fa772e69fa40ef3183bda/SKye-abilities-_0000s_0003_ICONS_0000_Layer-1.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7243683c6daf467d/5f7fa7729d46c20f09177ab7/SKye-abilities-_0000s_0002_ICONS_0001_Layer-2.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaa1ff9d900a13d3a/5f7fa772f98ad40e91dc75e4/SKye-abilities-_0000s_0001_ICONS_0002_Layer-3.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce2ce64e31a00348/5f7fa77202e6b80ebf902384/SKye-abilities-_0000s_0000_ICONS_0003_Layer-4.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.",
      e_desc:
        "EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.",
      c_desc:
        "EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.",
      x_desc:
        "EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.",
    },
    costs: {
      q_cost: "250",
      e_cost: "250",
      c_cost: "200",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "1",
      e_charges: "2",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
      agent_about:
        "Skye is a multipurpose agent. She has flash abilities that can be activated with a key press, and you can hear a feedback when enemies get flashed. She also can heal a whole team.",
      saying: "I have to protect these lands. It's my home.",
      gender: "Female",
      region: ["Australia", "Commonwealth of Australia"],
    },
  },
  {
    id: "yoru",
    key: "14",
    name: "Yoru",
    tags: ["DUELIST"],
    stats: {
      P: "NONE",
      Q: "BLINDSIDE",
      E: "GATECRASH",
      C: "FAKEOUT",
      X: "DIMENSIONAL DRIFT",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/d/d4/Yoru_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt54759b7874fbd40c/5ff5681bb47cdf7fc7d6c3e6/Yoru_Anility_Icons_512x512_Q.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5427236bf8a82b05/5ff5685e1166ce7d2ed1bd5d/yoru_ability_icons_52x512_E.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3ffa0e1858916cb8/5ff5689602fd0c7d345f45df/Yoru_Anility_Icons_512x512_C.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceb6f71853fa7be7/5ff568b3396e65084a9e8c7c/Yoru_Anility_Icons_512x512_X.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/5ff77b51b529867fcec28402/Yoru_Abilities_Teleport_1_1.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/5ff77bc5b47cdf7fc7d6cd31/Yoru_Abilities_Footsteps_1.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/5ff77c0e6aab641cd100f638/Yoru_Abilities_ULT_3_1.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in world.",
      e_desc:
        "EQUIP to harness a rift tether. FIRE to send the tether out moving forward. ALT FIRE to place a tether in place. ACTIVATE to teleport to the tether's location.",
      c_desc:
        "EQUIP an echo that mimics footsteps when activated. FIRE to activate and send the echo forward. ALT FIRE to place an echo in place. USE the inactive echo to send it forward.",
      x_desc:
        "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside.",
    },
    costs: {
      q_cost: "250",
      e_cost: "FREE",
      c_cost: "100",
      x_cost: "6 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
      agent_about:
        "Yoru is a stealthy agent who can turn invisible or hop through dimensions. He is an infiltrating duelist who can teleport across short distances. With his flashes, he blind his opponents. Yoru is the 5th duelist making it possible to play a whole duelist team.",
      saying:
        "Don't stop fighting, you must keep going, even if you're the only one.",
      gender: "Male",
      region: ["Japan", "Sea of Japan"],
    },
  },
  {
    id: "astra",
    key: "15",
    name: "Astra",
    tags: ["CONTROLLER"],
    stats: {
      P: "NONE",
      Q: "NOVA PULSE",
      E: "NEBULA / DISSIPATE",
      C: "GRAVITY WELL",
      X: "ASTRAL FORM | COSMIC DIVIDE",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/0/08/Astra_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8205d4a5a6cf1fca/6039aa950efbd9779b028acd/Astra_Ability_Icons_Q_NovaPulsev2.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60eb8df261fc5d0b/6039aaa62eee966ee2e3d52e/Astra_Ability_Icons_E_Nebulav2.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9cb14de8632bd26e/6039aab70efbd9779b028ad1/Astra_Ability_Icons_C_GravityWellv2.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5b7c62ae295bac95/6039aac8946aa93dbe59a693/Astra_Ability_Icons_X_CosmicDividev2.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63e21ca9443dce8e/5eb270f43b09c042ddca1353/Controller.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "Place Stars in Astral Form (X) ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
      e_desc:
        "Place Stars in Astral Form (X) ACTIVATE a Star to transform it into a Nebula (smoke). Use (F) on a Star to Dissipate it, returning the star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star’s location before returning.",
      c_desc:
        "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside fragile.",
      x_desc:
        "ACTIVATE (X) to enter Astral Form where you can place Stars with PRIMARY FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use SECONDARY FIRE in Astral Form to begin aiming it, then PRIMARY FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
    },
    costs: {
      q_cost: "FREE",
      e_cost: "FREE",
      c_cost: "FREE",
      x_cost: "7 Ulti Point or 1 '150' + 1 (FREE)",
    },
    charges: {
      q_charges: "1",
      e_charges: "2",
      c_charges: "1",
      x_charges: "1 or 2 (with other skill)",
    },
    biography: {
      story:
        "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
      agent_about:
        "Astra is an energetic and joyful agent who doesn't hold back what she wants to say. She is fairly straightforward when it comes to expressing herself and friendly banter is definitely her go-to style.",
      saying: "I am on a higher plane chale, literally!",
      gender: "Female",
      region: ["Ghana", "Republic of Ghana"],
    },
  },
  {
    id: "kayo",
    key: "16",
    name: "KAY/O",
    tags: ["INITIATOR"],
    stats: {
      P: "NONE",
      Q: "FLASH/DRIVE",
      E: "ZERO/POINT",
      C: "FRAG/MENT",
      X: "NULL/CMD",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/f/f0/KAYO_icon.png",
      q_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt83e92ae578e66b8e/60d204231e0505677a882f38/Q_FlashDrive.png",
      e_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt496288e7ab899b47/60d2018db930a53616fa4882/E_ZeroPoint.png",
      c_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte671cefaedb07d26/60d2046483f9fe49a6fef713/C_FragMent.png",
      x_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltead1f4cb9ad32e19/60d20208bcec595109d831c2/X_NullCmd.png",
      tag_icon:
        "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
      e_desc:
        "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
      c_desc:
        "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
      x_desc:
        "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.",
    },
    costs: {
      q_cost: "250",
      e_cost: "FREE",
      c_cost: "200",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
      agent_about:
        "His body, arms, and head are made of metal. His legs are made out of what appears to be a combination of metal and leather. Parts of his body have electricity and energy visible, these parts include his forearms, the middle of his chest, and the sides of his legs.",
      saying: "We have one job; save this Earth. No excuses.",
      gender: "Male",
      region: ["Alternate Timeline Earth", "Future"],
    },
  },
  {
    id: "chamber",
    key: "17",
    name: "Chamber",
    tags: ["SENTINEL"],
    stats: {
      P: "NONE",
      Q: "HEADHUNTER",
      E: "RENDEZVOUS",
      C: "TRADEMARK",
      X: "TOUR DE FORCE",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/0/09/Chamber_icon.png",
      q_icon:
        "https://static.wikia.nocookie.net/valorant/images/0/06/Headhunter.png",
      e_icon:
        "https://static.wikia.nocookie.net/valorant/images/8/83/Rendezvous.png",
      c_icon:
        "https://static.wikia.nocookie.net/valorant/images/3/3b/Trademark.png",
      x_icon:
        "https://static.wikia.nocookie.net/valorant/images/e/eb/Tour_De_Force.png",
      tag_icon:
        "https://static.wikia.nocookie.net/valorant/images/4/43/SentinelClassSymbol.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
      e_desc:
        "PLACE two teleport anchors. While on the ground and in range of an anchor, REACTIVATE to quickly teleport to the other anchor. Anchors can be picked up to be REDEPLOYED.",
      c_desc:
        "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it.",
      x_desc:
        "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.",
    },
    costs: {
      q_cost: "100",
      e_cost: "FREE",
      c_cost: "150",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "8",
      e_charges: "1",
      c_charges: "2",
      x_charges: "1",
    },
    biography: {
      story:
        "Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
      agent_about:
        "Chamber sports a combover hairstyle and wears a pair of glasses with a thick, rectangular frame. He is seen wearing a blue suit vest over a white long-sleeved shirt, along with a geometrical colorful midnight tie.",
      saying:
        "None of this 'a win is a win' nonsense. We should win big and look good doing it",
      gender: "Male",
      region: ["France"],
    },
  },
  {
    id: "neon",
    key: "18",
    name: "Neon",
    tags: ["DUELIST"],
    stats: {
      P: "NONE",
      Q: "RELAY BOLT",
      E: "HIGH GEAR",
      C: "FAST LANE",
      X: "OVERDRIVE",
    },
    photos: {
      icon: "https://static.wikia.nocookie.net/valorant/images/d/d0/Neon_icon.png",
      q_icon:
        "https://static.wikia.nocookie.net/valorant/images/a/ac/Relay_Bolt.png",
      e_icon:
        "https://static.wikia.nocookie.net/valorant/images/7/7f/High_Gear.png",
      c_icon:
        "https://static.wikia.nocookie.net/valorant/images/e/e7/Fast_Lane.png",
      x_icon:
        "https://static.wikia.nocookie.net/valorant/images/a/ab/Overdrive.png",
      tag_icon:
        "https://static.wikia.nocookie.net/valorant/images/f/fd/DuelistClassSymbol.png",
    },
    videos: [
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4",
      },
      {
        id: Math.random() * 100000000,
        video:
          "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4",
      },
    ],
    descriptions: {
      q_desc:
        "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
      e_desc:
        "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
      c_desc:
        "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.",
      x_desc:
        "Unleash Neon’s full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.",
    },
    costs: {
      q_cost: "200",
      e_cost: "FREE",
      c_cost: "300",
      x_cost: "7 Ulti Point",
    },
    charges: {
      q_charges: "2",
      e_charges: "1",
      c_charges: "1",
      x_charges: "1",
    },
    biography: {
      story:
        "Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
      agent_about:
        "Neon is a young Filipino woman with olive skin and a short stature. She sports an athletic attire with black and blue running leggings along with a pair of sneakers.",
      saying: "You made me care. Big mistake",
      gender: "Female",
      region: ["Philippines"],
    },
  },
]

export default agentsPlus
