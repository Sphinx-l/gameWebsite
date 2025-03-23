const gamesNewConfig = {
  categories: {
    music: {
      name: "music game",
      icon: "🎵",
      description: "music rhythm game",
    },
    action: {
      name: "action game",
      icon: "🎮",
      description: "stimulating action game, make your adrenaline surge",
    },
    adventure: {
      name: "adventure game",
      icon: "🗺️",
      description: "explore the vast world, embark on an epic adventure",
    },
    // casual: {
    //   name: "休闲游戏",
    //   icon: "🎯",
    //   description: "简单易上手，适合所有人的休闲游戏",
    // },
    puzzle: {
      name: "puzzle game",
      icon: "🧩",
      description: "challenge your thinking ability, exercise your brain",
    },
    // strategy: {
    //   name: "策略游戏",
    //   icon: "⚔️",
    //   description: "测试你的战术技能，体验战略性游戏玩法",
    // },
    // sports: {
    //   name: "体育游戏",
    //   icon: "⚽",
    //   description: "体验各种精彩的体育项目游戏",
    // },
    racing: {
      name: "racing game",
      icon: "🏎️",
      description: "feel the speed and passion of racing",
    },
    shooting: {
      name: "shooting game",
      icon: "🔫",
      description: "intense shooting action and combat game",
    },
    // simulation: {
    //   name: "模拟游戏",
    //   icon: "🏢",
    //   description: "体验现实生活和商业模拟",
    // },
    // rpg: {
    //   name: "角色扮演游戏",
    //   icon: "🧙",
    //   description: "角色扮演冒险与人物成长",
    // },
    arcade: {
      name: "arcade game",
      icon: "👾",
      description: "classic arcade game experience",
    },
    card: {
      name: "card game",
      icon: "🃏",
      description: "various card games and card games",
    },
    // educational: {
    //   name: "教育游戏",
    //   icon: "📚",
    //   description: "寓教于乐的教育类游戏",
    // },

    // multiplayer: {
    //   name: "多人游戏",
    //   icon: "👥",
    //   description: "与朋友一起玩的多人游戏",
    // },
    // platform: {
    //   name: "平台游戏",
    //   icon: "🏃",
    //   description: "跳跃奔跑的平台动作游戏",
    // },
    // "tower-defense": {
    //   name: "塔防游戏",
    //   icon: "🗼",
    //   description: "策略性塔防游戏",
    // },
  },
  games: {
    // 动作游戏
    "monster-survivors": {
      title: "monster survivors",
      description:
        "in this intense survival game, defend against waves of monsters",
      url: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
      category: "action",
      tags: ["survival", "action", "monster"],
      thumbnail: "https://example.com/monster-survivors-thumb.jpg",
      features: [
        "wave attack gameplay",
        "character progression",
        "multiple weapons",
        "strategic upgrades",
        "monster variety",
      ],
      popularity: 95,
    },
    tetris: {
      title: "tetris",
      description: "typical arcade game",
      url: "https://tetris.com/play-tetris",
      category: "arcade",
      tags: ["arcade", "tetris", "classic"],
      thumbnail: "https://example.com/tetris-thumb.jpg",
      features: [
        "arcade",
        "score system",
        "difficulty increase",
        "multiple modes",
      ],
      popularity: 95,
    },
    bemuse: {
      title: "bemuse",
      description: "bemuse",
      url: "https://bemuse.ninja/",
      category: "music",
      tags: ["music", "rhythm", "action"],
      thumbnail:
        "https://github.com/bemusic/bemuse/blob/master/website/static/img/screenshots/music-selection.jpg?raw=true",
      features: [
        "online songs ",
        " over 5,000 songs",
        "online internet ranking system",
        "Multiple difficulties",
        "Adjustable speed",
        "Early/Late indicator",
      ],
      popularity: 99,
    },
    alienInvasionDefense: {
      title: "alien invasion defense",
      description:
        "Join the action and see if you have what it takes to protect our planet!",
      url: "https://alienid.netlify.app/",
      category: "shooting",
      features: [
        "fast-paced space shooting game",
        "Defend your base from waves of alien invaders and become the ultimate space defender",
        "With simple controls, sleek graphics, and exciting gameplay, get ready for an epic battle.",
        "Use your weapons to destroy alien ships, survive multiple waves, and protect your base with 3 lives",
      ],
      tags: ["space", "shooting", "alien"],
      popularity: 95,
    },
    sandspiel: {
      title: "phaser",
      description:
        "to produce an cellular automata environment that's interesting to play with and supports the sharing and forking of fun creations with other players",
      url: "https://sandspiel.club/",
      category: "puzzle",
      tags: ["puzzle", "cellular automata", "fun"],
      thumbnail: "https://example.com/phaser-thumb.jpg",
      features: ["puzzle", "cellular automata", "fun"],
      popularity: 95,
    },
    "second-sight-dead-reckoning": {
      title: "second sight dead reckoning",
      description:
        "You’re an urban legend in a county full of them.  When you were thirteen, you were found passed out in the road by one of the local cops. No missing persons report. No fingerprints on file. No memories. Just a name.",
      url: "https://itch.io/embed/2500042",
      category: "adventure",
      tags: ["adventure", "horror", "mystery"],
      thumbnail: "https://example.com/phaser-thumb.jpg",
      features: ["adventure", "horror", "mystery"],
      popularity: 95,
    },
    fireAndIce: {
      title: "A Dance of Fire and Ice",
      description:
        "A Dance of Fire and Ice is a strict one-button rhythm game. You control two orbiting planets as they travel down a winding path.",
      url: "https://itch.io/embed/10812",
      category: "music",
      tags: ["rhythm", "rhythm"],
      thumbnail: "https://example.com/phaser-thumb.jpg",
      features: ["music", "rhythm"],
      popularity: 95,
    },
    "die-in-the-dungeon-classic": {
      title: "Die in the Dungeon CLASSIC",
      description:
        "Try to find the best combination to conquer the 2X-floor dungeon, but be careful, a frog like you can only get so far before encountering a prey too big to swallow",
      url: "https://itch.io/embed/928508",
      category: "card",
      tags: ["card", "turn-based roguelite", "deck-building"],
      thumbnail: "https://example.com/phaser-thumb.jpg",
      features: ["adventure", "dungeon", "classic"],
      popularity: 95,
    },
    "Narrow One": {
      title: "Narrow One",
      description:
        "Battle players around the world with your bow and arrow. Defend your castle against invading foes. Steal the flag with the help of your teammates and win the battle",
      url: "https://itch.io/embed/1050580",
      category: "shooting",
      tags: ["shooting", "multiplayer", "Touchscreen & gamepad support"],
      thumbnail: "https://example.com/phaser-thumb.jpg",
      features: [
        "6 different bows. with customisable skins",
        "50+ different melee weapons",
        "17 unique maps ",
      ],
      popularity: 95,
    },
    PolyTrack: {
      title: "PolyTrack",
      description:
        "PolyTrack is a low-poly racing game with loops, jumps and high speeds, where every millisecond counts. ",
      url: "https://itch.io/embed/1829893",
      category: "racing",
      tags: ["racing", "3D", "physics"],
    },
  },

  // 辅助函数
  getGamesByCategory: function (category) {
    return Object.values(this.games).filter(
      (game) => game.category === category
    );
  },
  getPopularGames: function (limit = 5) {
    return Object.values(this.games)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, limit);
  },
  searchGames: function (query) {
    query = query.toLowerCase();
    return Object.values(this.games).filter(
      (game) =>
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  },
};

// 导出配置以供使用
if (typeof module !== "undefined" && module.exports) {
  module.exports = gamesNewConfig;
}
