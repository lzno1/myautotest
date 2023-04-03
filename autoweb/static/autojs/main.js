"ui";
/* 主页面 */
ui.layout(
    <frame  gravity="center" >
        <vertical bg="#eeeeeeee" padding="5">
            <text id="title" textColor="#000000" gravity="center" margin="30" text="用户激活码验证" textSize="20sp" />
            <input id="name" margin="10" text="" hint="请输入激活码" textSize="20sp"/>
            <button id="login" text="登录" style="Widget.AppCompat.Button.Colored" />
            <button id="exit" text="退出" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>
);
const ViewGroup = activity.getWindow().getDecorView().findViewById(android.R.id.content).getChildAt(0)/* 主页面根视图 */



ui.login.click(function() {
    mcode = ui.name.getText().toString();
    if (mcode == "test"){
        engines.execScriptFile("./主页面.js");
        exit();
    }
        
});

ui.exit.click(function() {
    exit();
});


