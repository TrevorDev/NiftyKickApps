declare class Button {
    onHover(): void;
    onPress(): void;
    onRelease(): void;
}
declare class App {
    onClose(): void;
    onFrame(delta: number, time: number): void;
    stage: {
        add: (obj: THREE.Object3D) => void;
        remove: (obj: THREE.Object3D) => void;
    };
    input: {
        body: {
            head: {
                position: () => THREE.Vector3;
                rotation: () => THREE.Quaternion;
            };
            leftHand: {
                position: () => THREE.Vector3;
                positionChange: () => THREE.Vector3;
                rotation: () => THREE.Quaternion;
                rotationChange: () => THREE.Quaternion;
            };
            rightHand: {
                position: () => THREE.Vector3;
                rotation: () => THREE.Quaternion;
            };
        };
        UI: {
            createButton: (mesh: THREE.Mesh) => Button;
            removeButton: (btn: Button) => boolean;
        };
    };
}
declare class NiftyOS {
    libs: {
        THREE: typeof THREE;
        $: typeof jQuery;
    };
    launchApp: (url: string) => Promise<void>;
    createApp(): App;
}

interface Window {
  niftyOS: NiftyOS;
}