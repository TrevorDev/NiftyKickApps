declare class Button {
    onHover(): void;
    onPress(): void;
    onRelease(): void;
}
declare class App {
    libs: {
        THREE: typeof THREE_CLASSIC;
        $: typeof jQuery;
        UI: {
            createButton: (mesh: THREE_CLASSIC.Mesh) => Button;
        };
    };
    onClose(): void;
    onFrame(delta: number, time: number): void;
    stage: {
        add: (obj: THREE_CLASSIC.Object3D) => void;
        remove: (obj: THREE_CLASSIC.Object3D) => void;
    };
    input: {
        body: {
            head: {
                position: () => THREE_CLASSIC.Vector3;
                rotation: () => THREE_CLASSIC.Quaternion;
            };
            leftHand: {
                position: () => THREE_CLASSIC.Vector3;
                positionChange: () => THREE_CLASSIC.Vector3;
                rotation: () => THREE_CLASSIC.Quaternion;
                rotationChange: () => THREE_CLASSIC.Quaternion;
            };
            rightHand: {
                position: () => THREE_CLASSIC.Vector3;
                rotation: () => THREE_CLASSIC.Quaternion;
            };
        };
    };
}
declare class NiftyOS {
    launchApp: (url: string) => Promise<void>;
    createApp(): App;
}

interface Window {
  niftyOS: NiftyOS;
}