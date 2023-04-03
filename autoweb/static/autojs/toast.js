var window = floaty.window(
    <frame gravity="center">
        <vertical  bg="#ffeeeeee" padding="5" h="{{Math.floor(device.height*0.1)}}px" w="{{Math.floor(device.width*0.8)}}px">
            <button id="login" text="用户登录"/>
        </vertical>
    </frame>
    
);

window.setPosition(device.width*0.1,device.height*0.9)


window.exitOnClose();
setInterval(()=>{}, 1000);