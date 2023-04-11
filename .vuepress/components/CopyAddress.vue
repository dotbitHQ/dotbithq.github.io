<style lang="scss">
.navbar {
  display: none;
}
.page-meta {
  display: none;
}
h1 {
  margin-top: 0;
  padding-top: 0!important;
}

.theme-default-content {
  font-size: 20px;
}

.copy-address {
  text-align: center;

  button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
  }
}
.address {
  font-size: 14px;
}
.tooltip {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.tooltip .tooltipText {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltipText::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltipText {
  visibility: visible;
  opacity: 1;
}
</style>

<template>
  <div class="copy-address">
    <span class="address">{{ to }}</span>
    <br style="height: 0">
    <span class="tooltip">
      <button @click="onClick">
        <span class="tooltipText" id="myTooltip">Copy to clipboard</span>
        Copy Above Address
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CopyAddress',
  props: {
    to: {
      type: String,
      required: true,
      default: "0x75Bd3C2fB66212205D3Dd9a653cEE6980adDE3eD",
    }
  },
  methods: {
    onClick() {
      navigator.clipboard.writeText(this.to);

      let tooltip = document.getElementById("myTooltip")
      tooltip.innerHTML = "Copied! Go to paste and try .bit Alias!"
    }
  },
}
</script>