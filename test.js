(function() {

    var scene;
    var box;
    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
  
    // ステージの作成
    scene = new THREE.Scene();
  
    // 物体の作成
    box = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 }),
    );
    box.position.set(0, 40, 0);
    scene.add(box);
  
  
    // ライトの設定
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
  
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);
  
  
    // カメラの設定
    camera = new THREE.PerspectiveCamera(45, width/ height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);
  
  
    // ヘルパーの設定
    gridHelper = new THREE.GridHelper(300, 10);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);
  
  
    // レンダラーの設定
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);
  
    // 描画する
    renderer.render(scene, camera);
  
  })();