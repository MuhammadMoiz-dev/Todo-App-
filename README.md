# Todo-App-

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <style>
            li{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size:larger;
                font-weight: 400;
                margin-bottom: 3px;
            }
        </style>
</head>

<body class="container m-3">
    <h1>Todo App</h1>
    <input class="form-control" type="text" placeholder="Enter Todo" name="" id="todo">
    <br>
    <center>

        <button class="btn btn-success" onclick="addtodo()">Add Todo</button>
        <button class="btn btn-danger" onclick="del()">Delete All</button>
    </center>
    <br>
    <ul id="list">
        <br>
    </ul>


    <script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>
