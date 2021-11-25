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
            type="text"
            class="form-control"
            placeholder="Enter string"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <a href="#" class="btn btn-primary mb-2">Add to list</a>

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
          <li class="list-group-item">
            <div class="chip">
              firststring
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none'"
                >&times;</span
              >
            </div>
          </li>

          <li class="list-group-item">
            <div class="chip">
              string 2
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none'"
                >&times;</span
              >
            </div>
          </li>

          <li class="list-group-item">
            <div class="chip">
              string 3
              <span
                class="closebtn"
                onclick="this.parentElement.style.display='none'"
                >&times;</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
    data() {
        return {
            listStrings: []
        }
    }
};
</script>

