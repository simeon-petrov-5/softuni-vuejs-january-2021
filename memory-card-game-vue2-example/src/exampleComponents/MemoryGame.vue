<template>
  <div id="app">
    <h1 class="heading">VueJS-Memory-Card-Game-Lab Multiple Components</h1>
    <Controls
      :counter="counter"
      :isGameStarted="isGameStarted"
      @onGameStart="onGameStart"
      @handleGameReset="handleGameReset"
    >
      <span class="counter"> TIME LEFT: {{ counter }}s</span>
    </Controls>

    <Message :stopGame="stopGame" :areAllFound="areAllFound" />

    <ul class="memory-game">
      <Card
        v-for="(card, i) in shuffledCards"
        :key="i"
        :card="card"
        :index="i"
        @onCardClick="onCardClick"
      />
    </ul>
  </div>
</template>

<script>
import Message from "./components/Message.vue";
import Controls from "./components/Controls.vue";
import Card from "./components/Card.vue";

const timerSeconds = 60;
let interval;

export default {
  name: "App",
  components: {
    Message,
    Controls,
    Card,
  },
  data() {
    return {
      isGameStarted: false,
      stopGame: false,
      counter: timerSeconds,
      correctPairNumber: 0,
      selected: [],
      shuffledCards: [],
      cards: [
        {
          name: "react",
          image: require("@/assets/img/react.svg"),
          visible: false,
          matched: false,
        },
        {
          name: "angular",
          image: require("@/assets/img/angular.svg"),
          visible: false,
          matched: false,
        },
        {
          name: "aurelia",
          image: require("@/assets/img/aurelia.svg"),
          visible: false,
          matched: false,
        },
        {
          name: "backbone",
          image: require("@/assets/img/backbone.svg"),
          visible: false,
          matched: false,
        },
        {
          name: "ember",
          image: require("@/assets/img/ember.svg"),
          visible: false,
          matched: false,
        },
        {
          name: "vue",
          image: require("@/assets/img/vue.svg"),
          visible: false,
          matched: false,
        },
      ],
    };
  },
  watch: {
    selected(newVal) {
      if (newVal.length === 2) {
        const [fIndex, sIndex] = newVal;
        const first = this.shuffledCards[fIndex];
        const second = this.shuffledCards[sIndex];
        if (first.name === second.name) {
          first.matched = true;
          second.matched = true;
          this.correctPairNumber += 1;
        } else {
          setTimeout(() => {
            first.visible = false;
            second.visible = false;
          }, 2000);
        }
        this.selected = [];
      }
    },
    counter(newVal) {
      if (newVal === 0) {
        this.clearTimer();
        this.handleGameEnd();
      }
    },
    areAllFound(newVal, oldVal) {
      if (newVal !== oldVal && newVal) {
        this.handleFinishedGame();
      }
    },
  },
  computed: {
    areAllFound() {
      return this.cards.length === this.correctPairNumber;
    },
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    },
    generateShuffledCards() {
      const cards = [
        ...JSON.parse(JSON.stringify(this.cards)),
        ...JSON.parse(JSON.stringify(this.cards)),
      ];
      this.shuffle(cards);
      this.shuffledCards = cards;
    },
    onCardClick(card, index) {
      card.visible = !card.visible;
      this.selected.push(index);
    },
    startCounter() {
      interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);
    },
    onGameStart() {
      this.isGameStarted = true;
      this.resetState();
      this.generateShuffledCards();
      this.startCounter();
    },
    clearTimer() {
      clearInterval(interval);
    },
    handleGameEnd() {
      this.stopGame = true;
      this.isGameStarted = false;
      if (!this.areAllFound) {
        this.shuffledCards.forEach((card) => (card.matched = true));
      }
    },
    resetState() {
      this.counter = timerSeconds;
      this.correctPairNumber = 0;
      this.shuffledCards = [];
      this.stopGame = false;
    },
    handleGameReset() {
      this.clearTimer();
      this.resetState();
      this.isGameStarted = false;
    },
    handleFinishedGame() {
      this.clearTimer();
      this.handleGameEnd();
    },
  },
  created() {
    console.log("created for App.vue");
  },
  mounted() {
    console.log("mounted for App.vue");
  },
};
</script>

<style>
.heading {
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}

body {
  height: 100vh;
  display: flex;
  background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}

#app {
  width: 100%;
  padding: 7%;
}

.results {
  width: 640px;
  margin: 0 auto 30px auto;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #1d1d35;
}

.results .win,
.results .fail {
  padding: 12px 0;
  border-radius: 12px;
}

.results .win {
  background-color: #4fa4ff;
}
.results .fail {
  background-color: #ff7c5f;
}

.memory-game {
  width: 640px;
  height: 640px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
}

.memory-card {
  width: calc(25% - 10px);
  height: calc(33.333% - 10px);
  margin: 5px;
  position: relative;
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.disable-card {
  pointer-events: none;
}

.memory-card:active {
  transform: scale(0.97);
  transition: transform 0.2s;
}

.memory-card.flip {
  transform: rotateY(180deg);
}

.front-face,
.back-face {
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  background: #fff29e;
  backface-visibility: hidden;
}

.front-face {
  transform: rotateY(180deg);
}
</style>
