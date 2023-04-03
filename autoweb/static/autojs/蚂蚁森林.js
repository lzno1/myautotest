var window = floaty.window(
    <frame gravity="center">
        <vertical  bg="#ffeeeeee" padding="5" h="{{Math.floor(device.height*0.1)}}px" w="{{Math.floor(device.width*0.8)}}px">
            <button id="login" text="开始运行脚本"/>
        </vertical>
    </frame>
);

window.setPosition(device.width*0.1,device.height*0.9)


window.exitOnClose();
setInterval(()=>{}, 1000);

function toastf(msg){
    ui.run(() => window.login.setText(msg));
}


main();


function main(){
    // var begin = Date.parse(new Date());
    // delay(1.256);
    // var checkTime = Date.parse(new Date());
    // console.log(checkTime - begin);
    // delay(random(20,30));

    toastf("等待获取无障碍权限");
    auto.waitFor();
    toastf("申请截屏权限");
    requestScreenCapturePermision();
    toastf("权限验证完毕，开始执行脚本");
    

    delay(random(1,2));
    // 返回桌面
    home();
    delay(random(1,2));
    toastf("打开支付宝");
    launchApp("支付宝");


    var search;
    while (!(search = findViewByClassAndDesc("android.widget.RelativeLayout","搜索框")));

    toastf("打开蚂蚁森林");
    randomDelayClick(2,3,search);
    // while (!(search = findViewByClassAndId("android.widget.EditText","search_input_box")));
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

    toastf("准备收割能量");
    while (!(findViewByClassAndText("TextView","蚂蚁森林")));
    delay(random(1,2));
    doubleClickCard();
    delay(random(2,3));
    energyHarvester();
}

function doubleClickCard(){
    toastf("正在使用双击卡");
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
        toastf("未开启截屏功能，请允许截图权限后重试");
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
        toastf("森林好友能量收集完毕");
        break;
    }
    // 开启能量雨
    toastf("第一次能量雨");
    powerRain();
    toastf("第二次能量雨");
    twoPowerRain();

    if (findViewByClassAndText("android.view.View","立即开启"))
        rescueEnergy();

    while (!(findViewByClassAndText("TextView","扫一扫"))) {
        delayBack(1);
    }
    toastf("退出脚本，返回主界面");
    back();
    engines.execScriptFile("./主页面.js");
    window.close();
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
    toastf("开始拯救消失的绿色能量");
    randomClickBounds(findViewByClassAndText("android.view.View","立即开启"));
    delay(3);
    var image, point, time, offset = 0;
    var regionArray = [100, 800, 900, 150];
    var color = "#ff128900";
    do {
        image = captureScreen();
        point = findColor(image, color,{threshold: 4,region : regionArray});
    } while (!point);
    toastf("开始收取能量");
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
            console.log("拯救能量 : "+point + " " + time + " " + offset);
            continue;
        }
        errorCount++;
    }
    toastf("拯救能量结束");
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
    toastf("randomClickBounds view == null");
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
