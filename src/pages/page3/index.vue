<!-- <template>
  <header style="display: flex; justify-content: center; align-items: center; height: 50px">
    <button @click="btnClick">{{ text }}</button>
  </header>
  <draggable
    class="container"
    :list="myArr"
    animation="300"
    draggable=".drag"
    :disabled="text === 'edit'"
    group="group1"
    item-key="id"
    @choose="onChoose"
    @end="onEnd"
  >
    <template #item="{ element }">
      <div :class="element.className">
        {{ element.name }}
      </div>
    </template>
  </draggable>
  <draggable
    class="container"
    style="margin-top: 10px"
    :list="myArr2"
    animation="300"
    draggable=".drag"
    :disabled="text === 'edit'"
    group="group1"
    item-key="id"
    @choose="onChoose"
    @end="onEnd"
  >
    <template #item="{ element }">
      <div :class="element.className">
        {{ element.name }}
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
const text = ref('edit');
const myArr = ref([
  {
    name: 'icon1',
    className: 'item'
  },
  {
    name: 'icon2',
    className: 'item'
  },
  {
    name: 'icon3',
    className: 'item drag'
  },
  {
    name: 'icon4',
    className: 'item drag'
  },
  {
    name: 'icon5',
    className: 'item drag'
  },
  {
    name: 'icon6',
    className: 'item drag'
  },
  {
    name: 'icon7',
    className: 'item drag'
  },
  {
    name: 'icon8',
    className: 'item drag'
  },
  {
    name: 'icon9',
    className: 'item drag'
  },
  {
    name: 'icon10',
    className: 'item drag'
  }
]);
const myArr2 = ref([
  {
    name: 'icon1',
    className: 'item'
  },
  {
    name: 'icon2',
    className: 'item'
  },
  {
    name: 'icon3',
    className: 'item drag'
  },
  {
    name: 'icon4',
    className: 'item drag'
  },
  {
    name: 'icon5',
    className: 'item drag'
  },
  {
    name: 'icon6',
    className: 'item drag'
  },
  {
    name: 'icon7',
    className: 'item drag'
  },
  {
    name: 'icon8',
    className: 'item drag'
  },
  {
    name: 'icon9',
    className: 'item drag'
  },
  {
    name: 'icon10',
    className: 'item drag'
  }
]);

function btnClick() {
  text.value = text.value === 'edit' ? 'done' : 'edit';
  if (text.value === 'done') {
    const elements = document.getElementsByClassName('drag');
    Array.from(elements).forEach((v) => {
      v.className += ' swing';
    });
  } else {
    const elements = document.getElementsByClassName('drag');
    Array.from(elements).forEach((v) => {
      v.className = 'item drag';
    });
  }
}
function onEnd() {
  const elements = document.getElementsByClassName('drag');
  Array.from(elements).forEach((v) => {
    if (v.className.indexOf('swing') === -1) {
      v.className += ' swing';
    }
  });
}

function onChoose(e: any) {
  e.item.className = 'item drag';
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #666;
  .item {
    margin: 5px;
    border: 1px solid #eee;
    border-radius: 3px;
    width: 20%;
    height: 50px;
    background-color: yellow;
  }
}

@keyframes swing {
  20% {
    transform: rotate3d(0, 0, 1, 3deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 3deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.swing {
  transform-origin: center;
  animation-name: swing;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
}
</style> -->
