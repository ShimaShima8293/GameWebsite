var head = `
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="images/icon.png" />
`

var header = `
<header>
<img src="images/icon.png" height="150px" class="pixel" />
<h1 class="title">ゲーム開発部 ホームページ</h1>
</header>
<div class="nav-bar">
<ul class="nav-list">
    <li class="nav-list-item"><a href="index.html">トップ</a></li>
    <li class="nav-list-item"><a href="zukan.html">図鑑</a></li>
</ul>
</div>
`

var footer = `

<footer>
<h2>ゲーム開発部 ホームページ</h2>
<table>
    <tr>
        <th>ページ一覧</th>
        <th>その他</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li><a href="index.html">トップ</a></li>
                <li><a href="zukan.html">図鑑</a></li>
                <li><a href="versions.html">更新履歴</a></li>
                <li><a href="installer_versions.html">インストーラの更新履歴</a></li>
            </ul>
        </td>
        <td>
            <ul>
                <li><a onclick="changeTheme()">色を変更</a></li>
            </ul>
        </td>
    </tr>

</table>

<p class="copyright" id="lastModifiedTime">最終更新: ロード中...</p>

</footer>`;

function createCommonElements(title)
{
    document.getElementsByTagName("head")[0].innerHTML += head;
    document.getElementsByTagName("head")[0].innerHTML += "<title>" + title + " - ゲーム開発部 ホームページ</title>";

    document.getElementsByTagName("body")[0].innerHTML = header + document.getElementsByTagName("body")[0].innerHTML;
    document.getElementById("main_content").innerHTML = 
    "<h1>" + title + "</h1>" + document.getElementById("main_content").innerHTML;
    document.getElementsByTagName("body")[0].innerHTML += footer;
    document.getElementById("lastModifiedTime").innerHTML = "最終更新: " + document.lastModified;
}
