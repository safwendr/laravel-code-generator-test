<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    


    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

        .main-navbar {
            background-color: #0064b7;
            box-shadow: 0 4px 2px -2px gray;
        }

        .closebtn {
            padding-left: 10px;
            color: #888;
            font-weight: bold;
            float: right;
            font-size: 20px;
            cursor: pointer;
        }

        .closebtn:hover {
            color: #000;
        }
    </style>
</head>

<body>
    <nav class="navbar main-navbar">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 text-light">QR Code Generator</span>
        </div>
    </nav>

    <div class="card m-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Enter you strings:</h5>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter string" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>
            <a href="#" class="btn btn-primary mb-2">Add to list</a>

            <p class="card-text">Note: Your strings will be converted to QR Codes as png images.</p>
        </div>
    </div>

    <!-- List of added strings  -->

    <div class="card m-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">List of strings to convert to QR Codes:</h5>

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="chip">
                        string 1
                        <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                    </div>
                </li>

                <li class="list-group-item">
                    <div class="chip">
                        string 2
                        <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                    </div>
                </li>

                <li class="list-group-item">
                    <div class="chip">
                        string 3
                        <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>





    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</body>

</html>
