* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #080909;
    color: #d8d8d8;
    font-family: Arial, sans-serif;
    min-height: 100vh;
}

header {
    height: 70px;
    border-bottom: 1px solid #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
}

.logo {
    font-size: 22px;
    letter-spacing: 6px;
    font-weight: bold;
}

nav {
    display: flex;
    gap: 25px;
}

nav button {
    background: none;
    border: none;
    color: #777;
    cursor: pointer;
    font-size: 12px;
    letter-spacing: 2px;
}

nav button:hover {
    color: white;
}

main {
    max-width: 1100px;
    margin: auto;
    padding: 100px 40px;
}

.page {
    display: none;
}

.page.active {
    display: block;
}

.hero {
    max-width: 650px;
}

.label {
    color: #555;
    font-size: 12px;
    letter-spacing: 4px;
    margin-bottom: 25px;
}

h1 {
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 25px;
}

.description {
    color: #888;
    line-height: 1.7;
    max-width: 500px;
}

.status {
    margin-top: 50px;
    color: #777;
    font-size: 11px;
    letter-spacing: 2px;
}

.status span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #75b879;
    border-radius: 50%;
    margin-right: 8px;
}

h2 {
    font-size: 30px;
    letter-spacing: 5px;
    margin-bottom: 40px;
}

.file {
    border: 1px solid #222;
    padding: 25px;
    margin-bottom: 12px;
    transition: 0.2s;
}

.file:hover {
    border-color: #444;
}

.file span {
    font-size: 11px;
    letter-spacing: 3px;
    color: #666;
}

.file p {
    margin-top: 10px;
    color: #aaa;
}

.system-info {
    border-left: 1px solid #333;
    padding-left: 25px;
    line-height: 2;
    color: #777;
}

.system-info strong {
    color: #aaa;
}
