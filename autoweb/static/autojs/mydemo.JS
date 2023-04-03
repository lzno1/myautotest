"ui";
/* 主页面 */
ui.layout(
    <frame >
        <vertical >
            <text textColor="#000000" gravity="left|top" margin="30" text="主页面" textSize="30sp" />
            <button id="zifubao" text="支付宝助手" style="Widget.AppCompat.Button.Colored" />
            <button id="music" text="团奏工具" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>
);
const ViewGroup = activity.getWindow().getDecorView().findViewById(android.R.id.content).getChildAt(0)/* 主页面根视图 */

let registerPage = ui.inflate(/* 支付宝助手注册页面 */
    <frame >
        <vertical >
            <text textColor="#000000" gravity="left|top" margin="30" text="支付宝助手--用户注册" textSize="30sp" />
            <horizontal>
                <text textColor="#000000" margin="20" text="用户名" textSize="20sp" />
                <input id="name" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="密码：" textSize="20sp" />
                <input id="password" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="邮箱：" textSize="20sp" />
                <input id="email" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="激活码" textSize="20sp" />
                <input id="code" margin="20"/>
            </horizontal>
            <button id="addUser" text="用户注册" style="Widget.AppCompat.Button.Colored" />
            <button id="login" text="用户登录" style="Widget.AppCompat.Button.Colored" />
            <button id="getPassword" text="密码找回" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>, ViewGroup);

let loginPage = ui.inflate(/* 支付宝登录页面 */
    <frame >
        <vertical gravity="center" >
            <text textColor="#000000" gravity="left|top" margin="30" text="支付宝助手--用户登录" textSize="30sp" />
            <horizontal>
                <text textColor="#000000" margin="20" text="用户名" textSize="20sp" />
                <input id="name" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="密码：" textSize="20sp" />
                <input id="password" margin="20"/>
            </horizontal>
            <button id="login" text="用户登录" style="Widget.AppCompat.Button.Colored" />
            <button id="addUser" text="用户注册" style="Widget.AppCompat.Button.Colored" />
            <button id="getPassword" text="密码找回" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>, ViewGroup);

let passwordPage = ui.inflate(/* 支付宝密码找回页面 */
    <frame >
        <vertical gravity="center" >
            <text textColor="#000000" gravity="left|top" margin="30" text="支付宝助手--密码找回" textSize="30sp" />
            <horizontal>
                <text textColor="#000000" margin="20" text="邮箱：" textSize="20sp" />
                <input id="email" margin="20"/>
            </horizontal>
            <button id="getPassword" text="密码找回" style="Widget.AppCompat.Button.Colored" />
            <button id="login" text="用户登录" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>, ViewGroup);

let homePage = ui.inflate(/* 支付宝助手页面 */
    <frame >
        <vertical gravity="center" >
            <text textColor="#000000" gravity="left|top" margin="30" text="支付宝助手" textSize="30sp" />
            <horizontal>
                <text textColor="#000000" margin="20" text="      用户名" textSize="20sp" />
                <input id="name" margin="20"/> 
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="      密码：" textSize="20sp" />
                <input id="password" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="剩余使用时长" textSize="20sp" />
                <input id="email" margin="20"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="已经使用时长" textSize="20sp" />
                <input id="code" margin="20"/>
            </horizontal>
            <horizontal>
                <Switch id="isUserDoubleCard" margin="20" textSize="20sp" text="是否使用双击卡" checked="true"/>
            </horizontal>
            <button id="startRun" text="开始运行" style="Widget.AppCompat.Button.Colored" />
            <button id="mcode" text="延长激活码使用时间" style="Widget.AppCompat.Button.Colored" />
            <button id="seeLogging" text="查看日志" style="Widget.AppCompat.Button.Colored" />
            <button id="logout" text="退出" style="Widget.AppCompat.Button.Colored" />
        </vertical>
    </frame>, ViewGroup);


ui.zifubao.on("click", () => {
    ui.setContentView(registerPage)
})

ui.music.on("click", () => {
    ui.setContentView(homePage)
})

registerPage.addUser.on("click", () => {
    ui.setContentView(homePage);
})

registerPage.login.on("click", () => {
    loginPage.name.attr("text", "test");
    loginPage.password.attr("text", "test");
    ui.setContentView(loginPage);
    // delay(random(0.5,1))
    loginPage.name.attr("text", "test");
    loginPage.password.attr("text", "test");
})

registerPage.getPassword.on("click", () => {
    ui.setContentView(passwordPage)
})

loginPage.login.on("click", () => {
    ui.setContentView(homePage)
})

loginPage.addUser.on("click", () => {
    ui.setContentView(registerPage)
})

passwordPage.getPassword.on("click", () => {
    ui.setContentView(passwordPage)
})

passwordPage.login.on("click", () => {
    ui.setContentView(loginPage)
})

homePage.startRun.on("click", () => {
    engines.execAutoFile("蚂蚁深林.js")
    // var thread = threads.start(function(){
    //     main();
    // })
    // console.log('开始执行脚本')
    // thread.join();
})

homePage.mcode.on("click", () => {
    ui.setContentView(loginPage)
    //机器码
})

homePage.seeLogging.on("click", () => {
    ui.setContentView(loginPage)
    // 日志
})

homePage.logout.on("click", () => {
    exit();
})

// layout1.y1.on("click", () => {
//     ui.setContentView(layout2)
// })

// layout2.y2.on("click", () => {
//     ui.setContentView(ViewGroup)
// })






