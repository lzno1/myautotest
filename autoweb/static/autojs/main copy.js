"ui";
/* 主页面 */
ui.layout(
    <frame >
        <vertical >
            <text id="testtext" textColor="#000000" gravity="left|top" margin="30" text="主页面" textSize="30sp" />
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
                <input id="login_name" margin="20" text="text"/>
            </horizontal>
            <horizontal>
                <text textColor="#000000" margin="20" text="密码：" textSize="20sp" />
                <input id="login_password" margin="20" text="text"/>
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
                <input id="name" margin="20" inputType="none"/> 
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
    ui.setContentView(homePage)
})

ui.music.on("click", () => {
    threads.start(function(){
        var res = http.get('https://www.baidu.com',{},function(res){
            console.log(res.body)
        })
    })
})

registerPage.addUser.on("click", () => {
    ui.setContentView(homePage);
})

registerPage.login.on("click", () => {
    ui.setContentView(loginPage);
    loginPage.login_name.setText('name')
    loginPage.login_password.setText('name')
    // delay(random(0.5,1))
})

registerPage.getPassword.on("click", () => {
    ui.setContentView(passwordPage)
})

loginPage.login.on("click", () => {
    ui.setContentView(homePage)
    homePage.name.setText('no input')
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
    // engines.execAutoFile("蚂蚁深林.js")
    var onethread = threads.start(function(){
        for (let i = 0; i < 100; i++) {
            if (textExists("立即开始")) {
                click("立即开始");
                threads.currentThread().interrupt();
            }
        }
    });
    var thread = threads.start(function(){
        main();
    })
    console.log('开始执行脚本')
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

function toastAt0(msg) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, device.width/2, device.height/2);
    toast.show();
  }

  function toastAt(msg, x, y) {
    ui.run(() => toastAt0(msg, x, y));
  }


function main(){
    // var begin = Date.parse(new Date());
    // delay(1.256);
    // var checkTime = Date.parse(new Date());
    // console.log(checkTime - begin);
    // delay(random(20,30));

    toastAt("开始执行蚂蚁森林脚本");
    delay(random(1,2));
    toastAt("等待获取无障碍权限");
    auto.waitFor();
    toastAt("申请截屏权限");
    requestScreenCapturePermision();
    

    delay(random(1,2));
    // 返回桌面
    home();
    delay(random(1,2));
    toastAt("打开支付宝");
    launchApp("支付宝");


    var search;
    while (!(search = findViewByClassAndDesc("android.widget.RelativeLayout","搜索框")));

    toast("打开蚂蚁森林");
    randomDelayClick(2,3,search);
    // while (!(search = findViewByClassAndId("android.widget.EditText","search_input_box")));
    toast('开始输入蚂蚁森林')
    // randomDelayClick(1,2,search);
    delay(random(1,2));
    setText("蚂蚁森林");
    // while (!(search = findViewByClassAndText("TextView","蚂蚁森林，为你在荒漠种下一棵真树")));
    // randomDelayClick(1,2,search);




    // while (!(search = findViewByClassAndDesc("TextView","清空")));
    // randomDelayClick(1,2,search);
    // while (!(search = findViewByClassAndText("TextView","搜索")));
    // delay(random(1,2));
    // search.parent().parent().child(1).child(2).setText("蚂蚁森林");
    // randomDelayClick(1,2,search);
    while (!(search = findViewByClassAndText("TextView","蚂蚁森林，为你在荒漠种下一棵真树")));
    randomDelayClick(1,2,search);

    toast("能量收割机");
    while (!(findViewByClassAndText("TextView","蚂蚁森林")));
    delay(random(1,2));
    doubleClickCard();
    delay(random(2,3));
    energyHarvester();
}

function doubleClickCard(){
    var region = [0, device.height*0.5, device.width, device.height*0.4]
    delay(random(1,2));
    clickPoint("#8C4C08", region, "打开背包: ")
    delay(random(1.5,2.5));
    image = captureScreen();
    point = findColor(image, "#FBD224", {threshold: 8,region : region});
    if (point) {
        // click(point.x,point.y);
        var newregion = [point.x, point.y+80, 150,200]
        clickPoint("#18B86F", newregion, "使用双击卡: ")
        delay(random(2,2.5));
        var region = [device.width*0.5, device.height*0.5, device.width*0.3, device.height*0.4]
        clickPoint("#2EBE79", region, "立即使用双击卡: ")
        delay(random(4,5));
        point = point = findColor(image, "#2EBE79", {threshold: 8,region : region});
        if(point){
            click(point.x, point.y)
        }
        delay(random(4,5));
        click(device.width*0.5, device.height*0.3)
    }
    delay(random(4,5));
    click(device.width*0.5, device.height*0.3)
    delay(random(2,3));
}

/**
 * 申请截屏权限 个别系统需要每次都申请截图权限 子线程自动允许
 */
function requestScreenCapturePermision(){
    threads.start(function(){
        for (let i = 0; i < 100; i++) {
            if (textExists("立即开始")) {
                click("立即开始");
                threads.currentThread().interrupt();
            }
        }
    });
    if(!requestScreenCapture()){
        toast("请允许截图权限后重试");
        console.log('未开启截屏功能')
        exit();
    }
    captureScreen();
}

/**
 * 循环获取能量 随机延迟是为了看起来更像人。。。
 * 也许大家会有 为什么没有点击找能量代码的疑惑
 * 是因为经过我的测试 #ffc2ff01 这个颜色 不仅在能量球上面有 而且找能量按钮也有这个颜色！
 * 于是我只需要用一个找色循环就可以实现收取能量球与进入下一页面两个操作 是不是很牛呢？ 嘻嘻嘻
 */
function energyHarvester(){
    var regionArray1 = [device.width * 0.14, 300, device.width * 0.74, 600], regionArray2 = [device.width * 0.75, 1300];
    delay(random(0.2,0.5));
    // if (clickPoint("#fffdd55b", regionArray1, "收集被好友复活能量 : ")) {
    //     var view;
    //     while (!(view = findViewByClassAndText("Button","立即收取"))) {
    //         console.log("view : " + view);
    //         randomDelayClick(1, 2, view);
    //     }
    //     delay(random(0.2,0.5));
    // }
    while (true) {
        while (true) {
            delay(random(0.2,0.5));
            if (clickPoint("#ffc2ff01", regionArray1, "收集能量 : ")) continue;
            else break;
        }
        delay(1);
        if (clickPoint("#ff8429", regionArray2, "点击找能量，进入下个好友的蚂蚁森林 : ")) {
            delay(2);
            continue;
        }
        console.info("森林好友能量收集完毕");
        break;
    }
    // 开启能量雨
    powerRain();
    twoPowerRain();

    if (findViewByClassAndText("android.view.View","立即开启"))
        rescueEnergy();

    toast("退出支付宝");
    while (!(findViewByClassAndText("TextView","扫一扫"))) {
        delayBack(1);
    }
    toast("退出");
    back();
}

function powerRain(){
    delay(random(2,3));
    var newregion = [device.width * 0.6, device.height*0.25, device.width * 0.4, device.height*0.2];
    clickPoint("#51C44D", newregion, "开启能量雨");
    delay(random(3,4));
    var newregion = [device.width * 0.3, device.height*0.6, device.width * 0.4, device.height*0.4];
    clickPoint("#2EBE79", newregion, "开启能量雨点击: ");
    delay(random(2,3));
    var rainbegin = Date.parse(new Date());
    var clickTime = 100;
    while(true){
        var newregion = [0, device.height*0.3, device.width, device.height*0.2];
        clickTime = clickPointRain("#ffc2ff01", newregion, "能量雨点击", clickTime);
        rainNowTime = Date.parse(new Date());
        if (rainNowTime - rainbegin >= 20000){
            break;
        }
    }
}

function twoPowerRain(){
    delay(random(4,5));
    var newregion = [device.width * 0.6, device.height*0.25, device.width * 0.4, device.height*0.2];
    clickPoint("#51C44D", newregion, "去赠送");
    delay(random(3,4));
    var newregion = [device.width * 0.1, device.height*0.4, device.width * 0.8, device.height*0.3];
    clickPoint("#2EBE79", newregion, "赠送");
    delay(random(3,4));
    var newregion = [device.width * 0.3, device.height*0.6, device.width * 0.4, device.height*0.4];
    clickPoint("#2EBE79", newregion, "开启能量雨点击: ");
    delay(random(2,3));
    var rainbegin = Date.parse(new Date());
    var clickTime = 100;
    while(true){
        var newregion = [0, device.height*0.3, device.width, device.height*0.2];
        clickTime = clickPointRain("#ffc2ff01", newregion, "能量雨点击", clickTime);
        rainNowTime = Date.parse(new Date());
        if (rainNowTime - rainbegin >= 20000){
            break;
        }
    }
}

function clickPoint(color, regionArray, logString) {
    image = captureScreen();
    point = findColor(image, color, {threshold: 4,region : regionArray});
    if (point) {
        click(point.x,point.y);
        console.log(logString+point);
        return true;
    }
    return false;
}

function clickPointRain(color, regionArray, logString, ylong) {
    image = captureScreen();
    point = findColor(image, color, {threshold: 4,region : regionArray});
    if (point) {
        click(point.x,point.y + ylong);
        console.log(logString+point);
        return ylong + 0.5;
    }
    return ylong;
}

/**
 * 拯救消失的能量球
 * 观察能量球下落过程  发现大致有五条下落轨道
 * 首先截图能量拯救页面  测量能量球直径150px(不知道别的手机会不会不一样)
 * 截图测量发现  能量球1s大约下落678px(1513-835)  就是1ms -> 0.67px  
 * 在五条轨道的范围内进行区域找色
 */
function rescueEnergy(){
    console.info("开始拯救消失的绿色能量");
    randomClickBounds(findViewByClassAndText("android.view.View","立即开启"));
    delay(3);
    var image, point, time, offset = 0;
    var regionArray = [100, 800, 900, 150];
    var color = "#ff128900";
    do {
        image = captureScreen();
        point = findColor(image, color,{threshold: 4,region : regionArray});
    } while (!point);
    console.info("开始收取能量");
    var errorCount = 0;
    while (errorCount < 30) {
        time = Date.now();
        image = captureScreen();
        point = findColor(image, color,{region : regionArray});
        if (point && !className("View").text("送TA机会").findOnce()) {
            offset += 0.5;
            errorCount = 0;
            time = Date.now() - time;
            click(point.x, (point.y + time + 70 + offset));
            toast("拯救能量 : "+point + " " + time + " " + offset);
            continue;
        }
        errorCount++;
    }
    toast("拯救能量结束");
}


//↓↓↓ 下面是一些工具人方法 用来获取控件、点击、延时之类的
function findViewByClassAndId(name,viewId){
    return className(name).id(viewId).findOne(1000);
}

function findViewByClassName(name){
    return className(name).findOne(1000);
}

function findViewByClassAndDesc(name,descStr){
    return className(name).desc(descStr).findOne(1000);
}

function findViewByClassAndText(name,s){
    return className(name).text(s).findOne(1000);
}


function randomDelayClick(t1,t2,view){
    delay(random(t1,t2));
    randomClickBounds(view);
}

function randomClickBounds(view){
    if (view) {
        bounds = view.bounds();
        return click(random(bounds.left,bounds.right),random(bounds.top,bounds.bottom));
    }
    toast("randomClickBounds view == null");
    return false;
}

function delay(seconds) {
    sleep(1000 * seconds);
}

function delayBack(seconds){
    delay(seconds);
    back();
}

function textExists(str){
    return textContains(str).exists();
}



