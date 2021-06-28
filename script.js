*{
    box-sizing: border-box;
}

body{
    background-color: #3b3b98;
    color: #fff;
    display: flex;
    font-family: 'Muli', sans-serif;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    min-height: 100vh;
}

p{
    margin: 5px 0;

}

h2{
    margin: 10px 0 20px;
    text-align: center;
}

input[type=checkbox] {
    margin-right: 0;
}

.container {
    background-color: #23235b;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
    padding:  20px;
    width:  350px;
    max-width: 100%;
}

.result-container {
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 12px 10px;
    height: 50px;
    width: 100%;
}

.result-container #result {
    word-wrap: break-word;
    max-width: calc(100% - 40px);
}

.result-container .btn {
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
    height: 40px;
    width: 40px;
}

.btn {
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 12px;
    background-color: #3b3b98;
}

.btn-large {
    display: block;
    width: 100%;
}

.setting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}