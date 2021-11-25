//
<template>
  <div>
    <nav class="navbar main-navbar">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-light">QR Code Generator</span>
      </div>
    </nav>

    <div class="card m-4" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Enter you strings:</h5>

        <div class="input-group mb-3">
          <input
            id="str"
            type="text"
            class="form-control"
            placeholder="Enter string"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <a href="#" v-on:click="addToListString()" class="btn btn-primary mb-2"
          >Add to list</a
        >

        <p class="card-text">
          Note: Your strings will be converted to QR Codes as png images.
        </p>
      </div>
    </div>

    <!-- List of added strings  -->

    <div class="card m-4" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">List of strings to convert to QR Codes:</h5>

        <ul class="list-group">
          <li v-for="item in listStrings" :key="item" class="list-group-item">
            <div class="chip">
              {{ item }}
              <span class="closebtn" v-on:click="removeFromListString($event)"
                >&times;</span
              >
            </div>
          </li>
        </ul>

        <a href="#" v-on:click="convertToQRCodes()" class="btn btn-primary mb-2"
          >Convert all strings to QR Codes</a
        >
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      listStrings: [],
    };
  },
  methods: {
    addToListString() {
      let str = document.getElementById("str").value;
      console.log("str value", str);
      str = str.trim();
      this.listStrings.push(str);
      console.log("list string value", this.listStrings);
      document.getElementById("str").value = "";
      localStorage["mylist"] = JSON.stringify(this.listStrings);
    },
    removeFromListString(event) {
        console.log("element to remove", event.target.parentElement.innerText);
      let elValue = event.target.parentElement.innerText;
      elValue = elValue.trim();
      const valueExist = (element) => element == elValue;
      console.log("value to remove:", elValue, "type of:", typeof elValue);
    //   let filteredArr = this.listStrings.filter(function (str) {
    //     console.log("elvalue here:", elValue);
    //     return str === elValue;
    //   });
    let index = this.listStrings.findIndex(valueExist);
    console.log('index found',  index);
    //   console.log("filtered Arr", filteredArr);
    //   this.listStrings = filteredArr;
      localStorage["mylist"] = JSON.stringify(this.listStrings);
    },

    convertToQRCodes() {
      //
    },
  },
};
</script>

