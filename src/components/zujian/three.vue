<template>
    <div id="webGL-output" :style="{width:width+'px',height:height+'px'}"></div>
</template>
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 控制器
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader' // obj文件加载
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader' // 材质mtl文件导入
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader' // 材质mtl文件导入
export default {
    name:'',
    data(){
        return{
            scene:null,
            camera:null,
            renderer:null,
            cube:null,
            sphere:null,
            step:null,
            stats:null,
            group:null,
        }
    },
    props:{
        width:{type:Number},
        height:{type:Number},
        modelUrl:{
            type:String,default:''
        }
    },
    methods:{
        init(){
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color(0xa0a0a0);
            this.camera = new THREE.PerspectiveCamera(
                45,
                this.width/this.height,
                0.1,
                1000
            );
            this.camera.position.set(0,0,100);
            this.renderer = new THREE.WebGLRenderer({antialias : true});
            this.renderer.setSize(this.width,this.height);
            this.renderer.setPixlRatio(window.devicePixelRatio);
            this.renderer.shadMapEnabled = true;
            document.getElementById("webGL-output").appendChild(this.renderer.domElement);
            let orbitcontrols = new OrbitControls(
                this.camera,
                this.renderer.domElement
            );

            let light = new THREE.HemisphereLight(0xffffff,0x444444);
            light.position.set(0,200,0);
            this.scene.add(light);

            light =new THREE.DirectionalLight(0xffffff);
            light.position.set(0,200,100);
            light.castShadow  = true;
            light.shadow.camera.top = 180;
            light.shadow.camera.bottom = -100;
            light.shadow.camera.left = -120;
            light.shadow.camera.right = 120;
            this.scene.add(light);
        },
        loadModel(){
            let self = this;
            loader = new FBXLoader();

            loader.add("/static/three/"+this.modelUrl,function(object){
                object.scale.multiplyScalar(0.01);
                object.traverse(function(child){
                    if(child.isMesh){
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                })
                self.scene.add(object)
            })
        },
        animate(){
            requestAnimationFrame(this.animate);
            this.renderer.render(this.scene,this.castShadow);
        },
    },
    mounted(){
        window.ob = this;
        this.init();
        this.animate();
        this.loadModel();
    }
}
</script>