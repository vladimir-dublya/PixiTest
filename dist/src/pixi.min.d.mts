declare var At: any;
declare class qs extends Me {
    constructor(t: any, e: any);
    items: {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    }[];
    itemDirtyIds: number[];
    length: any;
    _load: any;
    baseTexture: any;
    initFromArray(t: any, e: any): void;
    addResourceAt(t: any, e: any): qs;
    load(): any;
}
declare class Vr {
    constructor(t: any);
    debug: boolean;
    _isActive: boolean;
    _isMobileAccessibility: boolean;
    pool: any[];
    renderId: number;
    children: any[];
    androidUpdateCount: number;
    androidUpdateFrequency: number;
    _hookDiv: HTMLButtonElement | null;
    div: HTMLDivElement;
    renderer: any;
    _onKeyDown(t: any): void;
    _onMouseMove(t: any): void;
    get isActive(): boolean;
    get isMobileAccessibility(): boolean;
    createTouchHook(): void;
    destroyTouchHook(): void;
    activate(): void;
    deactivate(): void;
    updateAccessibleObjects(t: any): void;
    update(): void;
    updateDebugHTML(t: any): void;
    capHitArea(t: any): void;
    addChild(t: any): void;
    _dispatchEvent(t: any, e: any): void;
    _onClick(t: any): void;
    _onFocus(t: any): void;
    _onFocusOut(t: any): void;
    destroy(): void;
}
declare namespace Vr {
    namespace extension {
        const name: string;
        const type: any[];
    }
}
declare class bs extends he {
    static fromFrames(t: any): bs;
    static fromImages(t: any): bs;
    constructor(t: any, e?: boolean);
    _textures: any;
    _durations: any[] | null;
    _autoUpdate: boolean;
    _isConnectedToTicker: boolean;
    animationSpeed: number;
    loop: boolean;
    updateAnchor: boolean;
    onComplete: any;
    onFrameChange: any;
    onLoop: any;
    _currentTime: number;
    _playing: boolean;
    _previousFrame: any;
    set textures(arg: any);
    get textures(): any;
    stop(): void;
    play(): void;
    gotoAndStop(t: any): void;
    set currentFrame(arg: number);
    get currentFrame(): number;
    gotoAndPlay(t: any): void;
    update(t: any): void;
    updateTexture(): void;
    get totalFrames(): any;
    get playing(): boolean;
    set autoUpdate(arg: boolean);
    get autoUpdate(): boolean;
}
declare let Wr: {
    new (i: any): {
        stage: wt;
        renderer: any;
        render(): void;
        readonly view: any;
        readonly screen: any;
        destroy(i: any, t: any): void;
    };
};
declare class oo extends qs {
    addBaseTextureAt(t: any, e: any): oo;
    upload(t: any, e: any, s: any): boolean;
}
declare const ai: Zo;
declare class Zo {
    _detections: any[];
    _initialized: boolean;
    resolver: xf;
    loader: gf;
    cache: _f;
    _backgroundLoader: mf;
    init(t?: {}): Promise<void>;
    add(t: any, e: any, s: any): void;
    load(t: any, e: any): Promise<any>;
    addBundle(t: any, e: any): void;
    loadBundle(t: any, e: any): Promise<any>;
    backgroundLoad(t: any): Promise<void>;
    backgroundLoadBundle(t: any): Promise<void>;
    reset(): void;
    get(t: any): any;
    _mapLoadToResolve(t: any, e: any): Promise<{}>;
    unload(t: any): Promise<void>;
    unloadBundle(t: any): Promise<void>;
    _unloadFromResolved(t: any): Promise<void>;
    get detections(): any[];
}
declare class xi {
    static from(t: any, e: any, s: any, r: any, n: any): xi;
    constructor(t: any, e: number | undefined, s: boolean | undefined, r: any, n: any, o: any, a: any);
    buffer: any;
    size: number;
    normalized: boolean;
    type: any;
    stride: any;
    start: any;
    instance: any;
    destroy(): void;
}
declare var k: any;
declare var Ti: any;
declare var Dt: any;
declare class Cr {
    clearBeforeRender: boolean;
    _backgroundColor: number;
    _backgroundColorRgba: number[];
    _backgroundColorString: string;
    set color(arg: number);
    get color(): number;
    set alpha(arg: number);
    get alpha(): number;
    init(t: any): void;
    get colorRgba(): number[];
    get colorString(): string;
    destroy(): void;
}
declare namespace Cr {
    export namespace extension_1 {
        const type_1: any[];
        export { type_1 as type };
        const name_1: string;
        export { name_1 as name };
    }
    export { extension_1 as extension };
}
declare class Zt extends Me {
    static crossOrigin(t: any, e: any, s: any): void;
    constructor(t: any);
    source: any;
    noSubImage: boolean;
    upload(t: any, e: any, s: any, r: any): boolean;
}
declare class Xa {
    constructor(t: any);
    limiter: Ha;
    renderer: any;
    uploadHookHelper: any;
    queue: any[];
    addHooks: any[];
    uploadHooks: any[];
    completes: any[];
    ticking: boolean;
    delayedTick: () => void;
    upload(t: any): Promise<any>;
    tick(): void;
    prepareItems(): void;
    registerFindHook(t: any): Xa;
    registerUploadHook(t: any): Xa;
    add(t: any): Xa;
    destroy(): void;
}
declare const Js_base: {
    new (i?: null, t?: null): {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    };
    [x: string]: any;
    from(i: any, t: any, e?: any): any;
    fromBuffer(i: any, t: any, e: any, s: any): {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    };
    addToCache(i: any, t: any): void;
    removeFromCache(i: any): any;
};
declare class Js extends Js_base {
    constructor(t?: {}, ...args: any[]);
    clearColor: number[];
    framebuffer: ki;
    maskStack: any[];
    filterStack: {}[];
    resize(t: any, e: any): void;
}
declare let W: {
    new (i?: null, t?: null): {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    };
    [x: string]: any;
    from(i: any, t: any, e?: any): any;
    fromBuffer(i: any, t: any, e: any, s: any): {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    };
    addToCache(i: any, t: any): void;
    removeFromCache(i: any): any;
};
declare class qi {
    texArray: any;
    blend: number;
    type: any;
    start: number;
    size: number;
    data: any;
}
declare class Fr extends se {
    constructor(t?: boolean);
    _buffer: rt;
    _indexBuffer: rt;
}
declare let ei: {
    new (i: any): {
        geometryClass: typeof Fr;
        vertexSize: number;
        state: Yt;
        size: number;
        _vertexCount: number;
        _indexCount: number;
        _bufferedElements: any[];
        _bufferedTextures: any[];
        _bufferSize: number;
        _shader: kt | null;
        _packedGeometries: any[];
        _packedGeometryPoolSize: number;
        _flushId: number;
        _aBuffers: {};
        _iBuffers: {};
        MAX_TEXTURES: number;
        _dcIndex: number;
        _aIndex: number;
        _iIndex: number;
        _attributeBuffer: any;
        _indexBuffer: any;
        _tempBoundTextures: any[];
        setShaderGenerator({ vertex: i, fragment: t }?: {
            vertex?: string | undefined;
            fragment?: string | undefined;
        }): void;
        shaderGenerator: Ho | undefined;
        contextChange(): void;
        initFlushBuffers(): void;
        onPrerender(): void;
        render(i: any): void;
        buildTexturesAndDrawCalls(): void;
        buildDrawCalls(i: any, t: any, e: any): void;
        bindAndClearTexArray(i: any): void;
        updateGeometry(): void;
        drawBatches(): void;
        flush(): void;
        start(): void;
        stop(): void;
        destroy(): void;
        getAttributeBuffer(i: any): any;
        getIndexBuffer(i: any): any;
        packInterleavedGeometry(i: any, t: any, e: any, s: any, r: any): void;
        renderer: any;
    };
    readonly defaultVertexSrc: string;
    readonly defaultFragmentTemplate: string;
};
declare class Ho {
    constructor(t: any, e: any);
    vertexSrc: any;
    fragTemplate: any;
    programCache: {};
    defaultGroupCache: {};
    generateShader(t: any): kt;
    generateSampleSrc(t: any): string;
}
declare class nr {
    constructor(t: any);
    renderer: any;
    emptyRenderer: Qe;
    currentRenderer: Qe;
    setObjectRenderer(t: any): void;
    flush(): void;
    reset(): void;
    copyBoundTextures(t: any, e: any): void;
    boundArray(t: any, e: any, s: any, r: any): void;
    destroy(): void;
}
declare namespace nr {
    export namespace extension_2 {
        const type_2: any;
        export { type_2 as type };
        const name_2: string;
        export { name_2 as name };
    }
    export { extension_2 as extension };
}
declare class Ki {
    elements: any[];
    ids: any[];
    count: number;
    clear(): void;
}
declare let xt: {
    new (i: any, t: any, e: any): {
        _ownsTextures: any;
        font: any;
        size: any;
        lineHeight: number;
        chars: {};
        pageTextures: {};
        distanceFieldRange: any;
        distanceFieldType: any;
        destroy(): void;
    };
    install(i: any, t: any, e: any): {
        _ownsTextures: any;
        font: any;
        size: any;
        lineHeight: number;
        chars: {};
        pageTextures: {};
        distanceFieldRange: any;
        distanceFieldType: any;
        destroy(): void;
    };
    uninstall(i: any): void;
    from(i: any, t: any, e: any): {
        _ownsTextures: any;
        font: any;
        size: any;
        lineHeight: number;
        chars: {};
        pageTextures: {};
        distanceFieldRange: any;
        distanceFieldType: any;
        destroy(): void;
    };
};
declare class _i {
    info: any[];
    common: any[];
    page: any[];
    char: any[];
    kerning: any[];
    distanceField: any[];
}
declare let Ja: any;
declare class da extends Be {
    constructor(t: any, e?: {
        width: number;
        height: number;
        autoLoad: boolean;
    });
    origin: string | null;
    buffer: Zi | null;
    loaded: boolean | undefined;
    onBlobLoaded(t: any): void;
    load(): Promise<da>;
}
declare class ii {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    rect: any;
    updateID: number;
    isEmpty(): boolean;
    clear(): void;
    getRectangle(t: any): any;
    addPoint(t: any): void;
    addPointMatrix(t: any, e: any): void;
    addQuad(t: any): void;
    addFrame(t: any, e: any, s: any, r: any, n: any): void;
    addFrameMatrix(t: any, e: any, s: any, r: any, n: any): void;
    addVertexData(t: any, e: any, s: any): void;
    addVertices(t: any, e: any, s: any, r: any): void;
    addVerticesMatrix(t: any, e: any, s: any, r: any, n?: number, o?: number): void;
    addBounds(t: any): void;
    addBoundsMask(t: any, e: any): void;
    addBoundsMatrix(t: any, e: any): void;
    addBoundsArea(t: any, e: any): void;
    pad(t?: number, e?: number): void;
    addFramePad(t: any, e: any, s: any, r: any, n: any, o: any): void;
}
declare namespace Tn {
    function createCanvas(i: any, t: any): HTMLCanvasElement;
    function getWebGLRenderingContext(): {
        new (): WebGLRenderingContext;
        prototype: WebGLRenderingContext;
        readonly ACTIVE_ATTRIBUTES: number;
        readonly ACTIVE_TEXTURE: number;
        readonly ACTIVE_UNIFORMS: number;
        readonly ALIASED_LINE_WIDTH_RANGE: number;
        readonly ALIASED_POINT_SIZE_RANGE: number;
        readonly ALPHA: number;
        readonly ALPHA_BITS: number;
        readonly ALWAYS: number;
        readonly ARRAY_BUFFER: number;
        readonly ARRAY_BUFFER_BINDING: number;
        readonly ATTACHED_SHADERS: number;
        readonly BACK: number;
        readonly BLEND: number;
        readonly BLEND_COLOR: number;
        readonly BLEND_DST_ALPHA: number;
        readonly BLEND_DST_RGB: number;
        readonly BLEND_EQUATION: number;
        readonly BLEND_EQUATION_ALPHA: number;
        readonly BLEND_EQUATION_RGB: number;
        readonly BLEND_SRC_ALPHA: number;
        readonly BLEND_SRC_RGB: number;
        readonly BLUE_BITS: number;
        readonly BOOL: number;
        readonly BOOL_VEC2: number;
        readonly BOOL_VEC3: number;
        readonly BOOL_VEC4: number;
        readonly BROWSER_DEFAULT_WEBGL: number;
        readonly BUFFER_SIZE: number;
        readonly BUFFER_USAGE: number;
        readonly BYTE: number;
        readonly CCW: number;
        readonly CLAMP_TO_EDGE: number;
        readonly COLOR_ATTACHMENT0: number;
        readonly COLOR_BUFFER_BIT: number;
        readonly COLOR_CLEAR_VALUE: number;
        readonly COLOR_WRITEMASK: number;
        readonly COMPILE_STATUS: number;
        readonly COMPRESSED_TEXTURE_FORMATS: number;
        readonly CONSTANT_ALPHA: number;
        readonly CONSTANT_COLOR: number;
        readonly CONTEXT_LOST_WEBGL: number;
        readonly CULL_FACE: number;
        readonly CULL_FACE_MODE: number;
        readonly CURRENT_PROGRAM: number;
        readonly CURRENT_VERTEX_ATTRIB: number;
        readonly CW: number;
        readonly DECR: number;
        readonly DECR_WRAP: number;
        readonly DELETE_STATUS: number;
        readonly DEPTH_ATTACHMENT: number;
        readonly DEPTH_BITS: number;
        readonly DEPTH_BUFFER_BIT: number;
        readonly DEPTH_CLEAR_VALUE: number;
        readonly DEPTH_COMPONENT: number;
        readonly DEPTH_COMPONENT16: number;
        readonly DEPTH_FUNC: number;
        readonly DEPTH_RANGE: number;
        readonly DEPTH_STENCIL: number;
        readonly DEPTH_STENCIL_ATTACHMENT: number;
        readonly DEPTH_TEST: number;
        readonly DEPTH_WRITEMASK: number;
        readonly DITHER: number;
        readonly DONT_CARE: number;
        readonly DST_ALPHA: number;
        readonly DST_COLOR: number;
        readonly DYNAMIC_DRAW: number;
        readonly ELEMENT_ARRAY_BUFFER: number;
        readonly ELEMENT_ARRAY_BUFFER_BINDING: number;
        readonly EQUAL: number;
        readonly FASTEST: number;
        readonly FLOAT: number;
        readonly FLOAT_MAT2: number;
        readonly FLOAT_MAT3: number;
        readonly FLOAT_MAT4: number;
        readonly FLOAT_VEC2: number;
        readonly FLOAT_VEC3: number;
        readonly FLOAT_VEC4: number;
        readonly FRAGMENT_SHADER: number;
        readonly FRAMEBUFFER: number;
        readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
        readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
        readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
        readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
        readonly FRAMEBUFFER_BINDING: number;
        readonly FRAMEBUFFER_COMPLETE: number;
        readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
        readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        readonly FRAMEBUFFER_UNSUPPORTED: number;
        readonly FRONT: number;
        readonly FRONT_AND_BACK: number;
        readonly FRONT_FACE: number;
        readonly FUNC_ADD: number;
        readonly FUNC_REVERSE_SUBTRACT: number;
        readonly FUNC_SUBTRACT: number;
        readonly GENERATE_MIPMAP_HINT: number;
        readonly GEQUAL: number;
        readonly GREATER: number;
        readonly GREEN_BITS: number;
        readonly HIGH_FLOAT: number;
        readonly HIGH_INT: number;
        readonly IMPLEMENTATION_COLOR_READ_FORMAT: number;
        readonly IMPLEMENTATION_COLOR_READ_TYPE: number;
        readonly INCR: number;
        readonly INCR_WRAP: number;
        readonly INT: number;
        readonly INT_VEC2: number;
        readonly INT_VEC3: number;
        readonly INT_VEC4: number;
        readonly INVALID_ENUM: number;
        readonly INVALID_FRAMEBUFFER_OPERATION: number;
        readonly INVALID_OPERATION: number;
        readonly INVALID_VALUE: number;
        readonly INVERT: number;
        readonly KEEP: number;
        readonly LEQUAL: number;
        readonly LESS: number;
        readonly LINEAR: number;
        readonly LINEAR_MIPMAP_LINEAR: number;
        readonly LINEAR_MIPMAP_NEAREST: number;
        readonly LINES: number;
        readonly LINE_LOOP: number;
        readonly LINE_STRIP: number;
        readonly LINE_WIDTH: number;
        readonly LINK_STATUS: number;
        readonly LOW_FLOAT: number;
        readonly LOW_INT: number;
        readonly LUMINANCE: number;
        readonly LUMINANCE_ALPHA: number;
        readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
        readonly MAX_CUBE_MAP_TEXTURE_SIZE: number;
        readonly MAX_FRAGMENT_UNIFORM_VECTORS: number;
        readonly MAX_RENDERBUFFER_SIZE: number;
        readonly MAX_TEXTURE_IMAGE_UNITS: number;
        readonly MAX_TEXTURE_SIZE: number;
        readonly MAX_VARYING_VECTORS: number;
        readonly MAX_VERTEX_ATTRIBS: number;
        readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
        readonly MAX_VERTEX_UNIFORM_VECTORS: number;
        readonly MAX_VIEWPORT_DIMS: number;
        readonly MEDIUM_FLOAT: number;
        readonly MEDIUM_INT: number;
        readonly MIRRORED_REPEAT: number;
        readonly NEAREST: number;
        readonly NEAREST_MIPMAP_LINEAR: number;
        readonly NEAREST_MIPMAP_NEAREST: number;
        readonly NEVER: number;
        readonly NICEST: number;
        readonly NONE: number;
        readonly NOTEQUAL: number;
        readonly NO_ERROR: number;
        readonly ONE: number;
        readonly ONE_MINUS_CONSTANT_ALPHA: number;
        readonly ONE_MINUS_CONSTANT_COLOR: number;
        readonly ONE_MINUS_DST_ALPHA: number;
        readonly ONE_MINUS_DST_COLOR: number;
        readonly ONE_MINUS_SRC_ALPHA: number;
        readonly ONE_MINUS_SRC_COLOR: number;
        readonly OUT_OF_MEMORY: number;
        readonly PACK_ALIGNMENT: number;
        readonly POINTS: number;
        readonly POLYGON_OFFSET_FACTOR: number;
        readonly POLYGON_OFFSET_FILL: number;
        readonly POLYGON_OFFSET_UNITS: number;
        readonly RED_BITS: number;
        readonly RENDERBUFFER: number;
        readonly RENDERBUFFER_ALPHA_SIZE: number;
        readonly RENDERBUFFER_BINDING: number;
        readonly RENDERBUFFER_BLUE_SIZE: number;
        readonly RENDERBUFFER_DEPTH_SIZE: number;
        readonly RENDERBUFFER_GREEN_SIZE: number;
        readonly RENDERBUFFER_HEIGHT: number;
        readonly RENDERBUFFER_INTERNAL_FORMAT: number;
        readonly RENDERBUFFER_RED_SIZE: number;
        readonly RENDERBUFFER_STENCIL_SIZE: number;
        readonly RENDERBUFFER_WIDTH: number;
        readonly RENDERER: number;
        readonly REPEAT: number;
        readonly REPLACE: number;
        readonly RGB: number;
        readonly RGB565: number;
        readonly RGB5_A1: number;
        readonly RGBA: number;
        readonly RGBA4: number;
        readonly SAMPLER_2D: number;
        readonly SAMPLER_CUBE: number;
        readonly SAMPLES: number;
        readonly SAMPLE_ALPHA_TO_COVERAGE: number;
        readonly SAMPLE_BUFFERS: number;
        readonly SAMPLE_COVERAGE: number;
        readonly SAMPLE_COVERAGE_INVERT: number;
        readonly SAMPLE_COVERAGE_VALUE: number;
        readonly SCISSOR_BOX: number;
        readonly SCISSOR_TEST: number;
        readonly SHADER_TYPE: number;
        readonly SHADING_LANGUAGE_VERSION: number;
        readonly SHORT: number;
        readonly SRC_ALPHA: number;
        readonly SRC_ALPHA_SATURATE: number;
        readonly SRC_COLOR: number;
        readonly STATIC_DRAW: number;
        readonly STENCIL_ATTACHMENT: number;
        readonly STENCIL_BACK_FAIL: number;
        readonly STENCIL_BACK_FUNC: number;
        readonly STENCIL_BACK_PASS_DEPTH_FAIL: number;
        readonly STENCIL_BACK_PASS_DEPTH_PASS: number;
        readonly STENCIL_BACK_REF: number;
        readonly STENCIL_BACK_VALUE_MASK: number;
        readonly STENCIL_BACK_WRITEMASK: number;
        readonly STENCIL_BITS: number;
        readonly STENCIL_BUFFER_BIT: number;
        readonly STENCIL_CLEAR_VALUE: number;
        readonly STENCIL_FAIL: number;
        readonly STENCIL_FUNC: number;
        readonly STENCIL_INDEX8: number;
        readonly STENCIL_PASS_DEPTH_FAIL: number;
        readonly STENCIL_PASS_DEPTH_PASS: number;
        readonly STENCIL_REF: number;
        readonly STENCIL_TEST: number;
        readonly STENCIL_VALUE_MASK: number;
        readonly STENCIL_WRITEMASK: number;
        readonly STREAM_DRAW: number;
        readonly SUBPIXEL_BITS: number;
        readonly TEXTURE: number;
        readonly TEXTURE0: number;
        readonly TEXTURE1: number;
        readonly TEXTURE10: number;
        readonly TEXTURE11: number;
        readonly TEXTURE12: number;
        readonly TEXTURE13: number;
        readonly TEXTURE14: number;
        readonly TEXTURE15: number;
        readonly TEXTURE16: number;
        readonly TEXTURE17: number;
        readonly TEXTURE18: number;
        readonly TEXTURE19: number;
        readonly TEXTURE2: number;
        readonly TEXTURE20: number;
        readonly TEXTURE21: number;
        readonly TEXTURE22: number;
        readonly TEXTURE23: number;
        readonly TEXTURE24: number;
        readonly TEXTURE25: number;
        readonly TEXTURE26: number;
        readonly TEXTURE27: number;
        readonly TEXTURE28: number;
        readonly TEXTURE29: number;
        readonly TEXTURE3: number;
        readonly TEXTURE30: number;
        readonly TEXTURE31: number;
        readonly TEXTURE4: number;
        readonly TEXTURE5: number;
        readonly TEXTURE6: number;
        readonly TEXTURE7: number;
        readonly TEXTURE8: number;
        readonly TEXTURE9: number;
        readonly TEXTURE_2D: number;
        readonly TEXTURE_BINDING_2D: number;
        readonly TEXTURE_BINDING_CUBE_MAP: number;
        readonly TEXTURE_CUBE_MAP: number;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_X: number;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
        readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
        readonly TEXTURE_CUBE_MAP_POSITIVE_X: number;
        readonly TEXTURE_CUBE_MAP_POSITIVE_Y: number;
        readonly TEXTURE_CUBE_MAP_POSITIVE_Z: number;
        readonly TEXTURE_MAG_FILTER: number;
        readonly TEXTURE_MIN_FILTER: number;
        readonly TEXTURE_WRAP_S: number;
        readonly TEXTURE_WRAP_T: number;
        readonly TRIANGLES: number;
        readonly TRIANGLE_FAN: number;
        readonly TRIANGLE_STRIP: number;
        readonly UNPACK_ALIGNMENT: number;
        readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
        readonly UNPACK_FLIP_Y_WEBGL: number;
        readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
        readonly UNSIGNED_BYTE: number;
        readonly UNSIGNED_INT: number;
        readonly UNSIGNED_SHORT: number;
        readonly UNSIGNED_SHORT_4_4_4_4: number;
        readonly UNSIGNED_SHORT_5_5_5_1: number;
        readonly UNSIGNED_SHORT_5_6_5: number;
        readonly VALIDATE_STATUS: number;
        readonly VENDOR: number;
        readonly VERSION: number;
        readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
        readonly VERTEX_ATTRIB_ARRAY_ENABLED: number;
        readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
        readonly VERTEX_ATTRIB_ARRAY_POINTER: number;
        readonly VERTEX_ATTRIB_ARRAY_SIZE: number;
        readonly VERTEX_ATTRIB_ARRAY_STRIDE: number;
        readonly VERTEX_ATTRIB_ARRAY_TYPE: number;
        readonly VERTEX_SHADER: number;
        readonly VIEWPORT: number;
        readonly ZERO: number;
    };
    function getNavigator(): Navigator;
    function getBaseUrl(): string;
    function getFontFaceSet(): FontFaceSet;
    function fetch(i: any, t: any): Promise<Response>;
    function parseXML(i: any): Document;
}
declare class rt {
    static from(t: any): rt;
    constructor(t: any, e?: boolean, s?: boolean);
    data: any;
    _glBuffers: {};
    _updateID: number;
    set index(arg: boolean);
    get index(): boolean;
    static: boolean;
    id: number;
    disposeRunner: Tt;
    update(t: any): void;
    dispose(): void;
    destroy(): void;
    type: any;
}
declare class Be extends Me {
    static test(t: any): boolean;
    constructor(t: any, e: any);
    data: any;
    upload(t: any, e: any, s: any): boolean;
}
declare class Lr {
    constructor(t: any);
    renderer: any;
    managedBuffers: {};
    boundBufferBases: {};
    destroy(): void;
    contextChange(): void;
    gl: any;
    CONTEXT_UID: any;
    bind(t: any): void;
    unbind(t: any): void;
    bindBufferBase(t: any, e: any): void;
    bindBufferRange(t: any, e: any, s: any): void;
    update(t: any): void;
    dispose(t: any, e: any): void;
    disposeAll(t: any): void;
    createGLBuffer(t: any): any;
}
declare namespace Lr {
    export namespace extension_3 {
        const type_3: any;
        export { type_3 as type };
        const name_3: string;
        export { name_3 as name };
    }
    export { extension_3 as extension };
}
declare var Bt: any;
declare var bn: any;
declare const Fe: _f;
declare class ao extends Zt {
    static test(t: any): boolean;
}
declare class ms {
    constructor(t?: number, e?: number, s?: number);
    x: number;
    y: number;
    radius: number;
    type: any;
    clone(): ms;
    contains(t: any, e: any): boolean;
    getBounds(): V;
    toString(): string;
}
declare class le extends da {
    static _formatToExtension(t: any): "s3tc" | "etc" | "pvrtc" | "etc1" | "atc";
    static _createLevelBuffers(t: any, e: any, s: any, r: any, n: any, o: any, a: any): any[];
    constructor(t: any, e: any);
    format: any;
    levels: any;
    _width: any;
    _height: any;
    _extension: string;
    _levelBuffers: any;
    onBlobLoaded(): void;
}
declare class wt extends et {
    children: any[];
    sortableChildren: any;
    sortDirty: boolean;
    onChildrenChange(t: any): void;
    addChild(...t: any[]): any;
    addChildAt(t: any, e: any): any;
    swapChildren(t: any, e: any): void;
    getChildIndex(t: any): number;
    setChildIndex(t: any, e: any): void;
    getChildAt(t: any): any;
    removeChild(...t: any[]): any;
    removeChildAt(t: any): any;
    removeChildren(t?: number, e?: number): any[];
    sortChildren(): void;
    calculateBounds(): void;
    getLocalBounds(t: any, e?: boolean): any;
    _calculateBounds(): void;
    _renderWithCulling(t: any): void;
    render(t: any): void;
    renderAdvanced(t: any): void;
    _render(t: any): void;
    set width(arg: number);
    get width(): number;
    _width: number | undefined;
    set height(arg: number);
    get height(): number;
    _height: number | undefined;
    containerUpdateTransform: () => void;
    getChildByName(t: any, e: any): any;
}
declare class or {
    constructor(t: any);
    renderer: any;
    webGLVersion: number;
    extensions: {};
    supports: {
        uint32Indices: boolean;
    };
    handleContextLost(t: any): void;
    handleContextRestored(): void;
    get isLost(): any;
    contextChange(t: any): void;
    gl: any;
    init(t: any): void;
    preserveDrawingBuffer: any;
    useContextAlpha: any;
    powerPreference: any;
    initFromContext(t: any): void;
    initFromOptions(t: any): void;
    createContext(t: any, e: any): any;
    getExtensions(): void;
    destroy(): void;
    postrender(): void;
    validateContext(t: any): void;
}
declare namespace or {
    export namespace extension_4 {
        const type_4: any;
        export { type_4 as type };
        const name_4: string;
        export { name_4 as name };
    }
    export { extension_4 as extension };
}
declare class Ha {
    constructor(t: any);
    maxItemsPerFrame: any;
    itemsLeft: number;
    beginFrame(): void;
    allowedToUpload(): boolean;
}
declare let Ks: any;
declare const Ln: number;
declare var Pt: any;
declare const et_base: any;
declare class et extends et_base {
    [x: string]: any;
    static mixin(t: any): void;
    tempDisplayObjectParent: Xo | null;
    transform: {
        worldTransform: Z;
        localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        _rotation: number;
        _cx: number;
        _sx: number;
        _cy: number;
        _sy: number;
        _localID: number;
        _currentLocalID: number;
        _worldID: number;
        _parentID: number;
        onChange(): void;
        updateSkew(): void;
        toString(): string;
        updateLocalTransform(): void;
        updateTransform(i: any): void;
        setFromMatrix(i: any): void;
        rotation: number;
    };
    alpha: number;
    visible: boolean;
    renderable: boolean;
    cullable: boolean;
    cullArea: any;
    parent: any;
    worldAlpha: number;
    _lastSortedIndex: number;
    _zIndex: number;
    filterArea: any;
    filters: any;
    _enabledFilters: any;
    _bounds: ii;
    _localBounds: ii | null;
    _boundsID: number;
    _boundsRect: V | null;
    _localBoundsRect: V | null;
    _mask: any;
    _maskRefCount: number;
    _destroyed: boolean;
    isSprite: boolean;
    isMask: boolean;
    get destroyed(): boolean;
    _recursivePostUpdateTransform(): void;
    updateTransform: () => void;
    getBounds(t: any, e: any): any;
    getLocalBounds: (t: any) => any;
    toGlobal(t: any, e: any, s?: boolean): any;
    toLocal(t: any, e: any, s: any, r: any): any;
    setParent(t: any): any;
    removeFromParent(): void;
    setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): et;
    set rotation(arg: number);
    get rotation(): number;
    destroy(t: any): void;
    set mask(arg: any);
    get mask(): any;
    hitArea: any;
    interactive: boolean | undefined;
    interactiveChildren: boolean | undefined;
    get _tempDisplayObjectParent(): Xo;
    enableTempParent(): any;
    disableTempParent(t: any): void;
    set x(arg: number);
    get x(): number;
    set y(arg: number);
    get y(): number;
    get worldTransform(): Z;
    get localTransform(): Z;
    set position(arg: te);
    get position(): te;
    set scale(arg: te);
    get scale(): te;
    set pivot(arg: te);
    get pivot(): te;
    set skew(arg: te);
    get skew(): te;
    set angle(arg: number);
    get angle(): number;
    set zIndex(arg: number);
    get zIndex(): number;
    get worldVisible(): boolean;
    displayObjectUpdateTransform: () => void;
    _cacheAsBitmap: boolean;
    _cacheData: any;
    _cacheAsBitmapResolution: any;
    _cacheAsBitmapMultisample: any;
    _renderCached(t: any): void;
    _initCachedDisplayObject(t: any): void;
    render: any;
    calculateBounds: (() => void) | undefined;
    containsPoint: any;
    _renderCachedCanvas(t: any): void;
    _initCachedDisplayObjectCanvas(t: any): void;
    renderCanvas: any;
    _calculateCachedBounds(): void;
    _getCachedLocalBounds(): any;
    _destroyCachedDisplayObject(): void;
    _cacheAsBitmapDestroy(t: any): void;
    cacheAsBitmap: boolean | undefined;
    name: any;
    getGlobalPosition(t?: j, e?: boolean): j;
}
declare var re: any;
declare class _s {
    constructor(t?: number, e?: number, s?: number, r?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    type: any;
    clone(): _s;
    contains(t: any, e: any): boolean;
    getBounds(): V;
    toString(): string;
}
declare class Wo {
    constructor(t: any);
    dispatch: any;
    moveOnAll: boolean;
    mappingState: {
        trackingData: {};
    };
    eventPool: Map<any, any>;
    rootTarget: any;
    hitPruneFn(t: any, e: any): boolean;
    hitTestFn(t: any, e: any): any;
    mapPointerDown(t: any): void;
    mapPointerMove(t: any): void;
    mapPointerOut(t: any): void;
    mapPointerOver(t: any): void;
    mapPointerUp(t: any): void;
    mapPointerUpOutside(t: any): void;
    mapWheel(t: any): void;
    mappingTable: {};
    addEventMapping(t: any, e: any): void;
    dispatchEvent(t: any, e: any): void;
    mapEvent(t: any): void;
    hitTest(t: any, e: any): any;
    propagate(t: any, e: any): void;
    all(t: any, e: any, s?: any): void;
    propagationPath(t: any): any[];
    hitTestRecursive(t: any, e: any, s: any, r: any, n: any): any;
    notifyTarget(t: any, e: any): void;
    cursor: any;
    findMountedTarget(t: any): any;
    createPointerEvent(t: any, e: any, s: any): any;
    createWheelEvent(t: any): any;
    clonePointerEvent(t: any, e: any): any;
    copyWheelData(t: any, e: any): void;
    copyPointerData(t: any, e: any): void;
    copyMouseData(t: any, e: any): void;
    copyData(t: any, e: any): void;
    trackingData(t: any): any;
    allocateEvent(t: any): any;
    freeEvent(t: any): void;
    notifyListeners(t: any, e: any): void;
}
declare class Xr {
    constructor(t: any);
    supportsTouchEvents: boolean;
    supportsPointerEvents: boolean;
    domElement: any;
    resolution: number;
    renderer: any;
    rootBoundary: Wo;
    autoPreventDefault: boolean;
    eventsAdded: boolean;
    rootPointerEvent: Rt;
    rootWheelEvent: Qi;
    cursorStyles: {
        default: string;
        pointer: string;
    };
    onPointerDown(t: any): void;
    onPointerMove(t: any): void;
    onPointerUp(t: any): void;
    onPointerOverOut(t: any): void;
    onWheel(t: any): void;
    init(): void;
    resolutionChange(t: any): void;
    destroy(): void;
    setCursor(t: any): void;
    currentCursor: any;
    setTargetElement(t: any): void;
    addEvents(): void;
    removeEvents(): void;
    mapPositionToPoint(t: any, e: any, s: any): void;
    normalizeToPointerData(t: any): any[];
    normalizeWheelEvent(t: any): Qi;
    bootstrapEvent(t: any, e: any): any;
    transferMouseData(t: any, e: any): void;
}
declare namespace Xr {
    export namespace extension_5 {
        const name_5: string;
        export { name_5 as name };
        const type_5: any[];
        export { type_5 as type };
    }
    export { extension_5 as extension };
}
declare var P: any;
declare let tn: {
    new (i: any): {
        renderer: any;
        image(i: any, t: any, e: any): Promise<HTMLImageElement>;
        base64(i: any, t: any, e: any): Promise<any>;
        canvas(i: any, t: any): HTMLCanvasElement;
        pixels(i: any, t: any): Uint8Array;
        destroy(): void;
    };
    arrayPostDivide(i: any, t: any): void;
};
declare var C: any;
declare const xa: {
    [x: number]: number;
};
declare namespace jo {
    const interactive: boolean;
    const interactiveChildren: boolean;
    const hitArea: null;
    function addEventListener(i: any, t: any, e: any): void;
    function removeEventListener(i: any, t: any, e: any): void;
    function dispatchEvent(i: any): boolean;
}
declare class Ge {
    constructor(t: any);
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    composed: boolean;
    defaultPrevented: boolean;
    eventPhase: any;
    propagationStopped: boolean;
    propagationImmediatelyStopped: boolean;
    layer: j;
    page: j;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    CAPTURING_PHASE: number;
    NONE: number;
    manager: any;
    get layerX(): number;
    get layerY(): number;
    get pageX(): number;
    get pageY(): number;
    get data(): Ge;
    composedPath(): any;
    path: any;
    initEvent(t: any, e: any, s: any): void;
    initUIEvent(t: any, e: any, s: any, r: any, n: any): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
}
declare class ri extends Ge {
    constructor(...args: any[]);
    client: j;
    movement: j;
    offset: j;
    global: j;
    screen: j;
    get clientX(): number;
    get clientY(): number;
    get x(): number;
    get y(): number;
    get movementX(): number;
    get movementY(): number;
    get offsetX(): number;
    get offsetY(): number;
    get globalX(): number;
    get globalY(): number;
    get screenX(): number;
    get screenY(): number;
    getModifierState(t: any): any;
    initMouseEvent(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any, l: any, c: any, u: any, d: any, f: any, p: any, m: any): void;
}
declare class Rt extends ri {
    width: number;
    height: number;
    isPrimary: boolean;
    getCoalescedEvents(): Rt[];
    getPredictedEvents(): void;
}
declare class Qi extends ri {
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
    DOM_DELTA_PIXEL: number;
}
declare class vi {
    color: number;
    alpha: number;
    texture: any;
    matrix: any;
    visible: boolean;
    clone(): vi;
    reset(): void;
    destroy(): void;
}
declare class Ct extends kt {
    static get defaultVertexSrc(): string;
    static get defaultFragmentSrc(): string;
    constructor(t: any, e: any, s: any);
    padding: number;
    set resolution(arg: any);
    get resolution(): any;
    multisample: any;
    enabled: boolean;
    autoFit: boolean;
    state: Yt;
    apply(t: any, e: any, s: any, r: any, n: any): void;
    set blendMode(arg: any);
    get blendMode(): any;
    _resolution: any;
}
declare class uo {
    renderTexture: any;
    target: any;
    legacy: boolean;
    resolution: number;
    multisample: any;
    sourceFrame: V;
    destinationFrame: V;
    bindingSourceFrame: V;
    bindingDestinationFrame: V;
    filters: any[];
    transform: any;
    clear(): void;
}
declare class rr {
    constructor(t: any);
    renderer: any;
    defaultFilterStack: {}[];
    texturePool: er;
    statePool: any[];
    quad: co;
    quadUv: ir;
    tempRect: V;
    activeState: {};
    globalUniforms: It;
    forceClear: boolean;
    useMaxPadding: boolean;
    init(): void;
    push(t: any, e: any): void;
    pop(): void;
    bindAndClear(t: any, e?: any): void;
    applyFilter(t: any, e: any, s: any, r: any): void;
    calculateSpriteMatrix(t: any, e: any): any;
    destroy(): void;
    getOptimalFilterTexture(t: any, e: any, s?: number, r?: any): any;
    getFilterTexture(t: any, e: any, s: any): any;
    returnFilterTexture(t: any): void;
    emptyPool(): void;
    resize(): void;
    transformAABB(t: any, e: any): void;
    roundFrame(t: any, e: any, s: any, r: any, n: any): void;
}
declare namespace rr {
    export namespace extension_6 {
        const type_6: any;
        export { type_6 as type };
        const name_6: string;
        export { name_6 as name };
    }
    export { extension_6 as extension };
}
declare class ki {
    constructor(t: any, e: any);
    width: number;
    height: number;
    stencil: boolean;
    depth: boolean;
    dirtyId: number;
    dirtyFormat: number;
    dirtySize: number;
    depthTexture: any;
    colorTextures: any[];
    glFramebuffers: {};
    disposeRunner: Tt;
    multisample: any;
    get colorTexture(): any;
    addColorTexture(t: number | undefined, e: any): ki;
    addDepthTexture(t: any): ki;
    enableDepth(): ki;
    enableStencil(): ki;
    resize(t: any, e: any): void;
    dispose(): void;
    destroyDepthTexture(): void;
}
declare class ar {
    constructor(t: any);
    renderer: any;
    managedFramebuffers: any[];
    unknownFramebuffer: ki;
    msaaSamples: any;
    contextChange(): void;
    gl: any;
    CONTEXT_UID: any;
    current: any;
    viewport: V | undefined;
    hasMRT: boolean | undefined;
    writeDepthTexture: boolean | undefined;
    bind(t: any, e: any, s?: number): void;
    setViewport(t: any, e: any, s: any, r: any): void;
    get size(): {
        x: number;
        y: number;
        width: any;
        height: any;
    };
    clear(t: any, e: any, s: any, r: any, n?: number): void;
    initFramebuffer(t: any): po;
    resizeFramebuffer(t: any): void;
    updateFramebuffer(t: any, e: any): void;
    canMultisampleFramebuffer(t: any): boolean;
    detectSamples(t: any): any;
    blit(t: any, e: any, s: any): void;
    disposeFramebuffer(t: any, e: any): void;
    disposeAll(t: any): void;
    forceStencil(): void;
    reset(): void;
    destroy(): void;
}
declare namespace ar {
    export namespace extension_7 {
        const type_7: any;
        export { type_7 as type };
        const name_7: string;
        export { name_7 as name };
    }
    export { extension_7 as extension };
}
declare var wi: any;
declare class po {
    constructor(t: any);
    framebuffer: any;
    stencil: any;
    dirtyId: number;
    dirtyFormat: number;
    dirtySize: number;
    multisample: any;
    msaaBuffer: any;
    blitFramebuffer: any;
    mipLevel: number;
}
declare class Fo {
    constructor(t: any, e: any);
    program: any;
    uniformData: any;
    uniformGroups: {};
    uniformDirtyGroups: {};
    uniformBufferBindings: {};
    destroy(): void;
}
declare class $i {
    constructor(t: any);
    texture: any;
    width: number;
    height: number;
    dirtyId: number;
    dirtyStyleId: number;
    mipmap: boolean;
    wrapMode: number;
    type: any;
    internalFormat: any;
    samplerType: number;
}
declare namespace Ue {
    const adaptive: boolean;
    const maxLength: number;
    const minSegments: number;
    const maxSegments: number;
    const epsilon: number;
    function _segmentsCount(i: any, t?: number): number;
}
declare class Rr {
    constructor(t: any);
    renderer: any;
    _tempMatrix: Z;
    generateTexture(t: any, e: any): ee;
    destroy(): void;
}
declare namespace Rr {
    export namespace extension_8 {
        const type_8: any[];
        export { type_8 as type };
        const name_8: string;
        export { name_8 as name };
    }
    export { extension_8 as extension };
}
declare class se {
    static merge(t: any): se;
    constructor(t?: any[], e?: {});
    buffers: any[];
    indexBuffer: any;
    attributes: {};
    glVertexArrayObjects: {};
    id: number;
    instanced: boolean;
    instanceCount: number;
    disposeRunner: Tt;
    refCount: number;
    addAttribute(t: any, e: any, s: number | undefined, r: boolean | undefined, n: any, o: any, a: any, h?: boolean): se;
    getAttribute(t: any): any;
    getBuffer(t: any): any;
    addIndex(t: any): se;
    getIndex(): any;
    interleave(): se;
    getSize(): number;
    dispose(): void;
    destroy(): void;
    clone(): se;
}
declare class lr {
    constructor(t: any);
    renderer: any;
    _activeGeometry: any;
    _activeVao: any;
    hasVao: boolean;
    hasInstance: boolean;
    canUseUInt32ElementIndex: boolean;
    managedGeometries: {};
    contextChange(): void;
    gl: any;
    CONTEXT_UID: any;
    bind(t: any, e: any): void;
    reset(): void;
    updateBuffers(): void;
    checkCompatibility(t: any, e: any): void;
    getSignature(t: any, e: any): string;
    initGeometryVao(t: any, e: any, s?: boolean): any;
    disposeGeometry(t: any, e: any): void;
    disposeAll(t: any): void;
    activateVao(t: any, e: any): void;
    draw(t: any, e: any, s: any, r: any): lr;
    unbind(): void;
    destroy(): void;
}
declare namespace lr {
    export namespace extension_9 {
        const type_9: any;
        export { type_9 as type };
        const name_9: string;
        export { name_9 as name };
    }
    export { extension_9 as extension };
}
declare let os: {
    new (i?: null): {
        [x: string]: any;
        shader: any;
        pluginName: string;
        currentPath: Ae | null;
        batches: any[];
        batchTint: number;
        batchDirty: number;
        vertexData: Float32Array | null;
        _fillStyle: vi;
        _lineStyle: ys;
        _matrix: any;
        _holeMode: boolean;
        state: Yt;
        _geometry: {
            closePointEps: number;
            boundsPadding: number;
            uvsFloat32: Float32Array | null;
            indicesUint16: any;
            batchable: boolean;
            points: any[];
            colors: any[];
            uvs: any[];
            indices: any[];
            textureIds: any[];
            graphicsData: any[];
            drawCalls: any[];
            batchDirty: number;
            batches: any[];
            dirty: number;
            cacheDirty: number;
            clearDirty: number;
            shapeIndex: number;
            _bounds: ii;
            boundsDirty: number;
            readonly bounds: ii;
            invalidate(): void;
            clear(): any;
            drawShape(i: any, t?: null, e?: null, s?: null): any;
            drawHole(i: any, t?: null): any | null;
            destroy(): void;
            indexBuffer: any;
            containsPoint(i: any): boolean;
            updateBatches(): void;
            _compareStyles(i: any, t: any): boolean;
            validateBatching(): boolean;
            packBatches(): void;
            isBatchable(): boolean;
            buildDrawCalls(): void;
            packAttributes(): void;
            processFill(i: any): void;
            processLine(i: any): void;
            processHoles(i: any): void;
            calculateBounds(): void;
            transformPoints(i: any, t: any): void;
            addColors(i: any, t: any, e: any, s: any, r?: number): void;
            addTextureIds(i: any, t: any, e: any, s?: number): void;
            addUvs(i: any, t: any, e: any, s: any, r: any, n?: null): void;
            adjustUvs(i: any, t: any, e: any, s: any): void;
            _buffer: rt;
            _indexBuffer: rt;
            buffers: any[];
            attributes: {};
            glVertexArrayObjects: {};
            id: number;
            instanced: boolean;
            instanceCount: number;
            disposeRunner: Tt;
            refCount: number;
            addAttribute(t: any, e: any, s: number | undefined, r: boolean | undefined, n: any, o: any, a: any, h?: boolean): any;
            getAttribute(t: any): any;
            getBuffer(t: any): any;
            addIndex(t: any): any;
            getIndex(): any;
            interleave(): any;
            getSize(): number;
            dispose(): void;
            clone(): se;
        };
        _transformID: number;
        tint: any;
        blendMode: any;
        readonly geometry: {
            closePointEps: number;
            boundsPadding: number;
            uvsFloat32: Float32Array | null;
            indicesUint16: any;
            batchable: boolean;
            points: any[];
            colors: any[];
            uvs: any[];
            indices: any[];
            textureIds: any[];
            graphicsData: any[];
            drawCalls: any[];
            batchDirty: number;
            batches: any[];
            dirty: number;
            cacheDirty: number;
            clearDirty: number;
            shapeIndex: number;
            _bounds: ii;
            boundsDirty: number;
            readonly bounds: ii;
            invalidate(): void;
            clear(): any;
            drawShape(i: any, t?: null, e?: null, s?: null): any;
            drawHole(i: any, t?: null): any | null;
            destroy(): void;
            indexBuffer: any;
            containsPoint(i: any): boolean;
            updateBatches(): void;
            _compareStyles(i: any, t: any): boolean;
            validateBatching(): boolean;
            packBatches(): void;
            isBatchable(): boolean;
            buildDrawCalls(): void;
            packAttributes(): void;
            processFill(i: any): void;
            processLine(i: any): void;
            processHoles(i: any): void;
            calculateBounds(): void;
            transformPoints(i: any, t: any): void;
            addColors(i: any, t: any, e: any, s: any, r?: number): void;
            addTextureIds(i: any, t: any, e: any, s?: number): void;
            addUvs(i: any, t: any, e: any, s: any, r: any, n?: null): void;
            adjustUvs(i: any, t: any, e: any, s: any): void;
            _buffer: rt;
            _indexBuffer: rt;
            buffers: any[];
            attributes: {};
            glVertexArrayObjects: {};
            id: number;
            instanced: boolean;
            instanceCount: number;
            disposeRunner: Tt;
            refCount: number;
            addAttribute(t: any, e: any, s: number | undefined, r: boolean | undefined, n: any, o: any, a: any, h?: boolean): any;
            getAttribute(t: any): any;
            getBuffer(t: any): any;
            addIndex(t: any): any;
            getIndex(): any;
            interleave(): any;
            getSize(): number;
            dispose(): void;
            clone(): se;
        };
        clone(): any;
        _tint: any;
        readonly fill: vi;
        readonly line: ys;
        lineStyle(i?: null, t?: number, e?: number, s?: number, r?: boolean): any;
        lineTextureStyle(i: any): any;
        startPoly(): void;
        finishPoly(): void;
        moveTo(i: any, t: any): any;
        lineTo(i: any, t: any): any;
        _initCurve(i?: number, t?: number): void;
        quadraticCurveTo(i: any, t: any, e: any, s: any): any;
        bezierCurveTo(i: any, t: any, e: any, s: any, r: any, n: any): any;
        arcTo(i: any, t: any, e: any, s: any, r: any): any;
        arc(i: any, t: any, e: any, s: any, r: any, n?: boolean): any;
        beginFill(i?: number, t?: number): any;
        beginTextureFill(i: any): any;
        endFill(): any;
        drawRect(i: any, t: any, e: any, s: any): any;
        drawRoundedRect(i: any, t: any, e: any, s: any, r: any): any;
        drawCircle(i: any, t: any, e: any): any;
        drawEllipse(i: any, t: any, e: any, s: any): any;
        drawPolygon(...i: any[]): any;
        drawShape(i: any): any;
        clear(): any;
        isFastRect(): boolean;
        _render(i: any): void;
        _populateBatches(): void;
        _renderBatched(i: any): void;
        _renderDirect(i: any): void;
        _renderDrawCallDirect(i: any, t: any): void;
        _resolveDirectShader(i: any): any;
        _calculateBounds(): void;
        containsPoint(i: any): boolean;
        calculateTints(): void;
        calculateVertices(): void;
        closePath(): any;
        setMatrix(i: any): any;
        beginHole(): any;
        endHole(): any;
        destroy(i: any): void;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        updateTransform(): void;
        worldAlpha: number;
        calculateBounds(): void;
        getLocalBounds(t: any, e?: boolean): any;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        width: number;
        _width: number | undefined;
        height: number;
        _height: number | undefined;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _localBounds: ii | null;
        _boundsID: number;
        _boundsRect: V | null;
        _localBoundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isSprite: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        getBounds(t: any, e: any): any;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    mixin(t: any): void;
};
declare class yi {
    constructor(t: any, e?: null, s?: null, r?: null);
    points: any[];
    holes: any[];
    shape: any;
    lineStyle: any;
    fillStyle: any;
    matrix: any;
    type: any;
    clone(): yi;
    destroy(): void;
}
declare let on: {
    new (): {
        closePointEps: number;
        boundsPadding: number;
        uvsFloat32: Float32Array | null;
        indicesUint16: any;
        batchable: boolean;
        points: any[];
        colors: any[];
        uvs: any[];
        indices: any[];
        textureIds: any[];
        graphicsData: any[];
        drawCalls: any[];
        batchDirty: number;
        batches: any[];
        dirty: number;
        cacheDirty: number;
        clearDirty: number;
        shapeIndex: number;
        _bounds: ii;
        boundsDirty: number;
        readonly bounds: ii;
        invalidate(): void;
        clear(): any;
        drawShape(i: any, t?: null, e?: null, s?: null): any;
        drawHole(i: any, t?: null): any | null;
        destroy(): void;
        indexBuffer: any;
        containsPoint(i: any): boolean;
        updateBatches(): void;
        _compareStyles(i: any, t: any): boolean;
        validateBatching(): boolean;
        packBatches(): void;
        isBatchable(): boolean;
        buildDrawCalls(): void;
        packAttributes(): void;
        processFill(i: any): void;
        processLine(i: any): void;
        processHoles(i: any): void;
        calculateBounds(): void;
        transformPoints(i: any, t: any): void;
        addColors(i: any, t: any, e: any, s: any, r?: number): void;
        addTextureIds(i: any, t: any, e: any, s?: number): void;
        addUvs(i: any, t: any, e: any, s: any, r: any, n?: null): void;
        adjustUvs(i: any, t: any, e: any, s: any): void;
        _buffer: rt;
        _indexBuffer: rt;
        buffers: any[];
        attributes: {};
        glVertexArrayObjects: {};
        id: number;
        instanced: boolean;
        instanceCount: number;
        disposeRunner: Tt;
        refCount: number;
        addAttribute(t: any, e: any, s: number | undefined, r: boolean | undefined, n: any, o: any, a: any, h?: boolean): any;
        getAttribute(t: any): any;
        getBuffer(t: any): any;
        addIndex(t: any): any;
        getIndex(): any;
        interleave(): any;
        getSize(): number;
        dispose(): void;
        clone(): se;
    };
    merge(t: any): se;
};
declare class gd {
}
declare const Li: any[];
declare var yt: any;
declare const li: {
    33776: number;
    33777: number;
    33778: number;
    33779: number;
    35916: number;
    35917: number;
    35918: number;
    35919: number;
    37488: number;
    37489: number;
    37490: number;
    37491: number;
    37492: number;
    37496: number;
    37493: number;
    37497: number;
    37494: number;
    37495: number;
    35840: number;
    35842: number;
    35841: number;
    35843: number;
    36196: number;
    35986: number;
    34798: number;
    37808: number;
};
declare class Se extends Zt {
    static test(t: any): boolean;
    static get EMPTY(): any;
    constructor(t: any, e: any);
    url: string | null;
    crossOrigin: any;
    alphaMode: any;
    _load: Promise<any> | null;
    load(): Promise<any>;
    upload(t: any, e: any, s: any): boolean;
}
declare class Zs extends Zt {
    static test(t: any): boolean;
    constructor(t: any, e: any);
    url: any;
    _process: any;
    preserveBitmap: boolean;
    createBitmap: any;
    alphaMode: any;
    bitmap: ImageBitmap | null;
    _load: any;
    load(t: any): any;
    process(): any;
    upload(t: any, e: any, s: any): boolean;
}
declare var ae: any;
declare var Jt: any;
declare class ys extends vi {
    constructor(...args: any[]);
    width: number;
    alignment: number;
    native: boolean;
    cap: any;
    join: any;
    miterLimit: number;
    clone(): ys;
}
declare var Lt: any;
declare var ht: any;
declare var Mt: any;
declare var nt: any;
declare class mo {
    constructor(t?: null);
    type: any;
    autoDetect: boolean;
    maskObject: any;
    pooled: boolean;
    isMaskData: boolean;
    resolution: any;
    multisample: any;
    enabled: boolean;
    colorMask: number;
    _filters: any;
    _stencilCounter: number;
    _scissorCounter: number;
    _scissorRect: any;
    _scissorRectLocal: any;
    _colorMask: number;
    _target: any;
    set filter(arg: any);
    get filter(): any;
    reset(): void;
    copyCountersOrReset(t: any): void;
}
declare class gr {
    constructor(t: any);
    renderer: any;
    enableScissor: boolean;
    alphaMaskPool: any[];
    maskDataPool: any[];
    maskStack: any[];
    alphaMaskIndex: number;
    setMaskStack(t: any): void;
    push(t: any, e: any): void;
    pop(t: any): void;
    detect(t: any): void;
    pushSpriteMask(t: any): void;
    popSpriteMask(t: any): void;
    pushColorMask(t: any): void;
    popColorMask(t: any): void;
    destroy(): void;
}
declare namespace gr {
    export namespace extension_10 {
        const type_10: any;
        export { type_10 as type };
        const name_10: string;
        export { name_10 as name };
    }
    export { extension_10 as extension };
}
declare class Z {
    static get IDENTITY(): Z;
    static get TEMP_MATRIX(): Z;
    constructor(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number);
    array: Float32Array | null;
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    fromArray(t: any): void;
    set(t: any, e: any, s: any, r: any, n: any, o: any): Z;
    toArray(t: any, e: any): any;
    apply(t: any, e: any): any;
    applyInverse(t: any, e: any): any;
    translate(t: any, e: any): Z;
    scale(t: any, e: any): Z;
    rotate(t: any): Z;
    append(t: any): Z;
    setTransform(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any, l: any): Z;
    prepend(t: any): Z;
    decompose(t: any): any;
    invert(): Z;
    identity(): Z;
    clone(): Z;
    copyTo(t: any): any;
    copyFrom(t: any): Z;
    toString(): string;
}
declare let we: {
    new (i: any, t: any, e: any, s?: any): {
        [x: string]: any;
        geometry: any;
        shader: any;
        state: any;
        drawMode: any;
        start: number;
        size: number;
        uvs: any;
        indices: any;
        vertexData: Float32Array;
        vertexDirty: number;
        _transformID: number;
        _roundPixels: boolean;
        batchUvs: Ba | null;
        _geometry: any;
        readonly uvBuffer: any;
        readonly verticesBuffer: any;
        material: any;
        blendMode: any;
        roundPixels: boolean;
        tint: any;
        texture: any;
        _render(i: any): void;
        _renderDefault(i: any): void;
        _renderToBatch(i: any): void;
        _tintRGB: any;
        _texture: any;
        calculateVertices(): void;
        calculateUvs(): void;
        _calculateBounds(): void;
        containsPoint(i: any): boolean;
        destroy(i: any): void;
        _cachedTexture: any;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        updateTransform(): void;
        worldAlpha: number;
        calculateBounds(): void;
        getLocalBounds(t: any, e?: boolean): any;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        width: number;
        _width: number | undefined;
        height: number;
        _height: number | undefined;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _localBounds: ii | null;
        _boundsID: number;
        _boundsRect: V | null;
        _localBoundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isSprite: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        getBounds(t: any, e: any): any;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    mixin(t: any): void;
};
declare class Ba {
    constructor(t: any, e: any);
    uvBuffer: any;
    uvMatrix: any;
    data: Float32Array | null;
    _bufferUpdateId: number;
    _textureUpdateId: number;
    _updateID: number;
    update(t: any): void;
}
declare class di extends se {
    constructor(t: any, e: any, s: any);
    _updateId: number;
    get vertexDirtyId(): any;
}
declare class ke extends kt {
    _colorDirty: boolean;
    uvMatrix: Wi;
    batchable: boolean;
    pluginName: any;
    set tint(arg: any);
    get tint(): any;
    set alpha(arg: any);
    get alpha(): any;
    set texture(arg: any);
    get texture(): any;
    _alpha: any;
    _tint: any;
    _tintRGB: number | undefined;
    update(): void;
}
declare class Ur {
    constructor(t: any);
    renderer: any;
    contextChange(t: any): void;
    multisample: any;
    destroy(): void;
}
declare namespace Ur {
    export namespace extension_11 {
        const type_11: any;
        export { type_11 as type };
        const name_11: string;
        export { name_11 as name };
    }
    export { extension_11 as extension };
}
declare class np extends Ua {
    constructor(t: any, e?: number, s?: number, r?: number, n?: number);
    _origWidth: any;
    _origHeight: any;
    _width: any;
    _height: any;
    _leftWidth: number;
    _rightWidth: number;
    _topHeight: number;
    _bottomHeight: number;
    set vertices(arg: any);
    get vertices(): any;
    updateHorizontalVertices(): void;
    updateVerticalVertices(): void;
    _getMinScale(): number;
    set width(arg: any);
    get width(): any;
    set height(arg: any);
    get height(): any;
    set leftWidth(arg: number);
    get leftWidth(): number;
    set rightWidth(arg: number);
    get rightWidth(): number;
    set topHeight(arg: number);
    get topHeight(): number;
    set bottomHeight(arg: number);
    get bottomHeight(): number;
    _refresh(): void;
}
declare class Qe {
    constructor(t: any);
    renderer: any;
    flush(): void;
    destroy(): void;
    start(): void;
    stop(): void;
    render(t: any): void;
}
declare class Or {
    constructor(t: any);
    renderer: any;
    render(t: any, e: any): void;
    renderingToScreen: boolean | undefined;
    lastObjectRendered: any;
    destroy(): void;
}
declare namespace Or {
    export namespace extension_12 {
        const type_12: any;
        export { type_12 as type };
        const name_12: string;
        export { name_12 as name };
    }
    export { extension_12 as extension };
}
declare class te {
    constructor(t: any, e: any, s?: number, r?: number);
    _x: number;
    _y: number;
    cb: any;
    scope: any;
    clone(t?: any, e?: any): te;
    set(t?: number, e?: number): te;
    copyFrom(t: any): te;
    copyTo(t: any): any;
    equals(t: any): boolean;
    toString(): string;
    set x(arg: number);
    get x(): number;
    set y(arg: number);
    get y(): number;
}
declare const Xe: number;
declare var bt: any;
declare class op extends wt {
    constructor(t: number | undefined, e: any, s?: number, r?: boolean);
    _properties: boolean[];
    _maxSize: number;
    _batchSize: number;
    _buffers: any;
    _bufferUpdateIDs: any[];
    _updateID: number;
    interactiveChildren: boolean;
    blendMode: any;
    autoResize: boolean;
    roundPixels: boolean;
    baseTexture: any;
    _tint: number;
    tintRgb: Float32Array;
    set tint(arg: number);
    get tint(): number;
    setProperties(t: any): void;
    dispose(): void;
}
declare class ln extends Qe {
    shader: kt;
    properties: ({
        attributeName: string;
        size: number;
        uploadFunction: (t: any, e: any, s: any, r: any, n: any, o: any) => void;
        offset: number;
        type?: undefined;
    } | {
        attributeName: string;
        size: number;
        type: any;
        uploadFunction: (t: any, e: any, s: any, r: any, n: any, o: any) => void;
        offset: number;
    })[];
    tempMatrix: Z;
    state: Yt;
    generateBuffers(t: any): Oa[];
    _generateOneMoreBuffer(t: any): Oa;
    uploadVertices(t: any, e: any, s: any, r: any, n: any, o: any): void;
    uploadPosition(t: any, e: any, s: any, r: any, n: any, o: any): void;
    uploadRotation(t: any, e: any, s: any, r: any, n: any, o: any): void;
    uploadUvs(t: any, e: any, s: any, r: any, n: any, o: any): void;
    uploadTint(t: any, e: any, s: any, r: any, n: any, o: any): void;
}
declare namespace ln {
    export namespace extension_13 {
        const name_13: string;
        export { name_13 as name };
        const type_13: any;
        export { type_13 as type };
    }
    export { extension_13 as extension };
}
declare class Fa extends di {
    constructor(t?: number, e?: number, s?: number, r?: number);
    segWidth: number;
    segHeight: number;
    width: number;
    height: number;
    build(): void;
}
declare class Pr {
    constructor(t: any);
    renderer: any;
    plugins: {};
    init(t: any): void;
    destroy(): void;
}
declare namespace Pr {
    export namespace extension_14 {
        const type_14: any[];
        export { type_14 as type };
        const name_14: string;
        export { name_14 as name };
    }
    export { extension_14 as extension };
}
declare class j {
    constructor(t?: number, e?: number);
    x: number;
    y: number;
    clone(): j;
    copyFrom(t: any): j;
    copyTo(t: any): any;
    equals(t: any): boolean;
    set(t?: number, e?: number): j;
    toString(): string;
}
declare class Ae {
    constructor(...t: any[]);
    points: any[];
    type: any;
    closeStroke: boolean;
    clone(): Ae;
    contains(t: any, e: any): boolean;
    toString(): string;
}
declare class fn extends Xa {
}
declare namespace fn {
    export namespace extension_15 {
        const name_15: string;
        export { name_15 as name };
        const type_15: any;
        export { type_15 as type };
    }
    export { extension_15 as extension };
}
declare class $t {
    static get defaultVertexSrc(): string;
    static get defaultFragmentSrc(): string;
    static from(t: any, e: any, s: any): any;
    constructor(t: any, e: any, s?: string, r?: {});
    extra: {};
    id: number;
    vertexSrc: any;
    fragmentSrc: any;
    glPrograms: {};
    syncUniforms: any;
}
declare class yr {
    constructor(t: any);
    renderer: any;
    destinationFrame: any;
    sourceFrame: any;
    defaultFrame: any;
    projectionMatrix: Z;
    transform: any;
    update(t: any, e: any, s: any, r: any): void;
    calculateProjection(t: any, e: any, s: any, r: any): void;
    setTransform(t: any): void;
    destroy(): void;
}
declare namespace yr {
    export namespace extension_16 {
        const type_16: any;
        export { type_16 as type };
        const name_16: string;
        export { name_16 as name };
    }
    export { extension_16 as extension };
}
declare class co extends se {
    constructor();
}
declare class ir extends se {
    constructor();
    vertices: Float32Array;
    uvs: Float32Array;
    vertexBuffer: rt;
    uvBuffer: rt;
    map(t: any, e: any): ir;
    invalidate(): ir;
}
declare const Fn: number;
declare var yn: any;
declare class V {
    static get EMPTY(): V;
    constructor(t?: number, e?: number, s?: number, r?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    type: any;
    get left(): number;
    get right(): number;
    get top(): number;
    get bottom(): number;
    clone(): V;
    copyFrom(t: any): V;
    copyTo(t: any): any;
    contains(t: any, e: any): boolean;
    intersects(t: any, e: any): boolean;
    pad(t?: number, e?: number): V;
    fit(t: any): V;
    ceil(t?: number, e?: number): V;
    enlarge(t: any): V;
    toString(): string;
}
declare class ee extends B {
    static create(t: any): ee;
    constructor(t: any, e: any);
    filterFrame: any;
    filterPoolKey: any;
    get framebuffer(): any;
    set multisample(arg: any);
    get multisample(): any;
    resize(t: any, e: any, s?: boolean): void;
    setResolution(t: any): void;
}
declare class er {
    constructor(t: any);
    texturePool: {};
    textureOptions: any;
    enableFullScreen: boolean;
    _pixelsWidth: number;
    _pixelsHeight: number;
    createTexture(t: any, e: any, s?: any): ee;
    getOptimalTexture(t: any, e: any, s?: number, r?: any): any;
    getFilterTexture(t: any, e: any, s: any): any;
    returnTexture(t: any): void;
    returnFilterTexture(t: any): void;
    clear(t: any): void;
    setScreenSize(t: any): void;
}
declare namespace er {
    const SCREEN_KEY: number;
}
declare class br {
    constructor(t: any);
    renderer: any;
    defaultMaskStack: any[];
    current: any;
    sourceFrame: V;
    destinationFrame: V;
    viewportFrame: V;
    bind(t: null | undefined, e: any, s: any): void;
    clear(t: any, e: any): void;
    resize(): void;
    reset(): void;
    destroy(): void;
}
declare namespace br {
    export namespace extension_17 {
        const type_17: any;
        export { type_17 as type };
        const name_17: string;
        export { name_17 as name };
    }
    export { extension_17 as extension };
}
declare let be: {
    new (i: any): {
        [x: string]: any;
        gl: any;
        CONTEXT_UID: number;
        globalUniforms: It;
        render(i: any, t: any): void;
        resize(i: any, t: any): void;
        reset(): any;
        clear(): void;
        destroy(i?: boolean): void;
        readonly plugins: any;
        readonly multisample: any;
        readonly width: any;
        readonly height: any;
        resolution: any;
        readonly autoDensity: any;
        readonly view: any;
        readonly screen: any;
        readonly lastObjectRendered: any;
        readonly renderingToScreen: any;
        readonly rendererLogId: string;
        readonly clearBeforeRender: any;
        readonly useContextAlpha: any;
        readonly preserveDrawingBuffer: any;
        backgroundColor: any;
        backgroundAlpha: any;
        readonly powerPreference: any;
        generateTexture(i: any, t: any): any;
        runners: {};
        _systemsHash: {};
        setup(t: any): void;
        addRunners(...t: any[]): void;
        addSystem(t: any, e: any): any;
        emitWithCustomOptions(t: any, e: any): void;
    };
    test(i: any): any;
};
declare class jr {
    static init(t: any): void;
    static destroy(): void;
}
declare namespace jr {
    export const queueResize: (() => void) | null | undefined;
    export const _resizeId: number | null | undefined;
    export const cancelResize: (() => void) | null | undefined;
    export const resize: (() => void) | null | undefined;
    export const _resizeTo: any;
    export const resizeTo: any;
    const extension_18: any;
    export { extension_18 as extension };
}
declare class Me {
    static test(t: any, e: any): boolean;
    constructor(t?: number, e?: number);
    _width: number;
    _height: number;
    destroyed: boolean;
    internal: boolean;
    onResize: Tt;
    onUpdate: Tt;
    onError: Tt;
    bind(t: any): void;
    unbind(t: any): void;
    resize(t: any, e: any): void;
    get valid(): boolean;
    update(): void;
    load(): Promise<Me>;
    get width(): number;
    get height(): number;
    style(t: any, e: any, s: any): boolean;
    dispose(): void;
    destroy(): void;
}
declare class La extends di {
    constructor(t: number | undefined, e: any, s?: number);
    points: any;
    _width: number;
    textureScale: number;
    get width(): number;
    build(): void;
    updateVertices(): void;
    update(): void;
}
declare class gs {
    constructor(t?: number, e?: number, s?: number, r?: number, n?: number);
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number;
    type: any;
    clone(): gs;
    contains(t: any, e: any): boolean;
    toString(): string;
}
declare class Tt {
    constructor(t: any);
    items: any[];
    _name: any;
    _aliasCount: number;
    emit(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any, ...args: any[]): Tt;
    ensureNonAliasedItems(): void;
    add(t: any): Tt;
    remove(t: any): Tt;
    contains(t: any): boolean;
    removeAll(): Tt;
    destroy(): void;
    get empty(): boolean;
    get name(): any;
}
declare var Ei: any;
declare var Vt: any;
declare var dt: any;
declare let De: any;
declare let xr: {
    new (i: any): {
        glConst: number;
        getStackLength(): any;
        calcScissorRect(i: any): void;
        testScissor(i: any): boolean;
        roundFrameToPixels(i: any, t: any, e: any, s: any, r: any): void;
        push(i: any): void;
        pop(i: any): void;
        _useCurrent(): void;
        renderer: any;
        maskStack: any[];
        setMaskStack(t: any): void;
        destroy(): void;
    };
    isMatrixRotated(i: any): boolean;
};
declare class kt {
    static from(t: any, e: any, s: any): kt;
    constructor(t: any, e: any);
    uniformBindCount: number;
    program: any;
    uniformGroup: It;
    disposeRunner: Tt;
    checkUniformExists(t: any, e: any): boolean;
    destroy(): void;
    get uniforms(): any;
}
declare class Tr {
    constructor(t: any);
    destroyed: boolean;
    renderer: any;
    gl: any;
    shader: any;
    program: any;
    cache: {};
    _uboCache: {};
    id: number;
    systemCheck(): void;
    contextChange(t: any): void;
    bind(t: any, e: any): any;
    setUniforms(t: any): void;
    syncUniformGroup(t: any, e: any): void;
    syncUniforms(t: any, e: any, s: any): void;
    createSyncGroups(t: any): any;
    syncUniformBufferGroup(t: any, e: any): void;
    createSyncBufferGroup(t: any, e: any, s: any): any;
    getSignature(t: any, e: any, s: any): string;
    getGlProgram(): any;
    generateProgram(t: any): Fo;
    reset(): void;
    disposeShader(t: any): void;
    destroy(): void;
}
declare namespace Tr {
    export namespace extension_19 {
        const type_18: any;
        export { type_18 as type };
        const name_18: string;
        export { name_18 as name };
    }
    export { extension_19 as extension };
}
declare const rp_base: {
    new (i: any, t: any, e: any, s?: any): {
        [x: string]: any;
        geometry: any;
        shader: any;
        state: any;
        drawMode: any;
        start: number;
        size: number;
        uvs: any;
        indices: any;
        vertexData: Float32Array;
        vertexDirty: number;
        _transformID: number;
        _roundPixels: boolean;
        batchUvs: Ba | null;
        _geometry: any;
        readonly uvBuffer: any;
        readonly verticesBuffer: any;
        material: any;
        blendMode: any;
        roundPixels: boolean;
        tint: any;
        texture: any;
        _render(i: any): void;
        _renderDefault(i: any): void;
        _renderToBatch(i: any): void;
        _tintRGB: any;
        _texture: any;
        calculateVertices(): void;
        calculateUvs(): void;
        _calculateBounds(): void;
        containsPoint(i: any): boolean;
        destroy(i: any): void;
        _cachedTexture: any;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        updateTransform(): void;
        worldAlpha: number;
        calculateBounds(): void;
        getLocalBounds(t: any, e?: boolean): any;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        width: number;
        _width: number | undefined;
        height: number;
        _height: number | undefined;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _localBounds: ii | null;
        _boundsID: number;
        _boundsRect: V | null;
        _localBoundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isSprite: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        getBounds(t: any, e: any): any;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    mixin(t: any): void;
};
declare class rp extends rp_base {
    constructor(t: any, e: any, s: any, r: any, n: any);
    autoUpdate: boolean;
    set vertices(arg: any);
    get vertices(): any;
}
declare const Ua_base: {
    new (i: any, t: any, e: any, s?: any): {
        [x: string]: any;
        geometry: any;
        shader: any;
        state: any;
        drawMode: any;
        start: number;
        size: number;
        uvs: any;
        indices: any;
        vertexData: Float32Array;
        vertexDirty: number;
        _transformID: number;
        _roundPixels: boolean;
        batchUvs: Ba | null;
        _geometry: any;
        readonly uvBuffer: any;
        readonly verticesBuffer: any;
        material: any;
        blendMode: any;
        roundPixels: boolean;
        tint: any;
        texture: any;
        _render(i: any): void;
        _renderDefault(i: any): void;
        _renderToBatch(i: any): void;
        _tintRGB: any;
        _texture: any;
        calculateVertices(): void;
        calculateUvs(): void;
        _calculateBounds(): void;
        containsPoint(i: any): boolean;
        destroy(i: any): void;
        _cachedTexture: any;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        updateTransform(): void;
        worldAlpha: number;
        calculateBounds(): void;
        getLocalBounds(t: any, e?: boolean): any;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        width: number;
        _width: number | undefined;
        height: number;
        _height: number | undefined;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _localBounds: ii | null;
        _boundsID: number;
        _boundsRect: V | null;
        _localBoundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isSprite: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        getBounds(t: any, e: any): any;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    mixin(t: any): void;
};
declare class Ua extends Ua_base {
    constructor(t: any, e: any, s: any);
    autoResize: boolean;
    textureUpdated(): void;
    _textureID: any;
}
declare const sp_base: {
    new (i: any, t: any, e: any, s?: any): {
        [x: string]: any;
        geometry: any;
        shader: any;
        state: any;
        drawMode: any;
        start: number;
        size: number;
        uvs: any;
        indices: any;
        vertexData: Float32Array;
        vertexDirty: number;
        _transformID: number;
        _roundPixels: boolean;
        batchUvs: Ba | null;
        _geometry: any;
        readonly uvBuffer: any;
        readonly verticesBuffer: any;
        material: any;
        blendMode: any;
        roundPixels: boolean;
        tint: any;
        texture: any;
        _render(i: any): void;
        _renderDefault(i: any): void;
        _renderToBatch(i: any): void;
        _tintRGB: any;
        _texture: any;
        calculateVertices(): void;
        calculateUvs(): void;
        _calculateBounds(): void;
        containsPoint(i: any): boolean;
        destroy(i: any): void;
        _cachedTexture: any;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        updateTransform(): void;
        worldAlpha: number;
        calculateBounds(): void;
        getLocalBounds(t: any, e?: boolean): any;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        width: number;
        _width: number | undefined;
        height: number;
        _height: number | undefined;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _localBounds: ii | null;
        _boundsID: number;
        _boundsRect: V | null;
        _localBoundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isSprite: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        getBounds(t: any, e: any): any;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    mixin(t: any): void;
};
declare class sp extends sp_base {
    constructor(t: any, e: any, s?: number);
    autoUpdate: boolean;
}
declare class he extends wt {
    static from(t: any, e: any): he;
    constructor(t: any);
    _anchor: te;
    _texture: any;
    _width: number;
    _height: number;
    _tint: any;
    _tintRGB: number | null;
    set tint(arg: any);
    get tint(): any;
    blendMode: any;
    _cachedTint: number;
    uvs: any;
    set texture(arg: any);
    get texture(): any;
    vertexData: Float32Array;
    vertexTrimmedData: Float32Array | null;
    _transformID: number;
    _textureID: number;
    _transformTrimmedID: number;
    _textureTrimmedID: number;
    indices: Uint16Array;
    pluginName: string;
    _roundPixels: boolean;
    _onTextureUpdate(): void;
    _onAnchorUpdate(): void;
    calculateVertices(): void;
    calculateTrimmedVertices(): void;
    getLocalBounds(t: any): any;
    containsPoint(t: any): boolean;
    set roundPixels(arg: boolean);
    get roundPixels(): boolean;
    set anchor(arg: te);
    get anchor(): te;
}
declare class Ro extends Ct {
    set maskSprite(arg: any);
    get maskSprite(): any;
    maskMatrix: Z;
    _maskSprite: any;
    apply(t: any, e: any, s: any, r: any): void;
}
declare let cs: {
    new (i: any, t: any, e?: null): {
        linkedSheets: any[];
        _texture: B | null;
        baseTexture: any;
        textures: {};
        animations: {};
        data: any;
        resolution: number;
        _frames: any;
        _frameKeys: string[];
        _batchIndex: number;
        _callback: ((value: any) => void) | null;
        _updateResolution(i?: null): number;
        parse(): Promise<any>;
        _processFrames(i: any): void;
        _processAnimations(): void;
        _parseComplete(): void;
        _nextBatch(): void;
        destroy(i?: boolean): void;
    };
};
declare class Mr {
    constructor(t: any);
    renderer: any;
    run(t: any): void;
    destroy(): void;
}
declare namespace Mr {
    export namespace extension_20 {
        const type_19: any[];
        export { type_19 as type };
        const name_19: string;
        export { name_19 as name };
    }
    export { extension_20 as extension };
}
declare class Yt {
    static for2d(): Yt;
    data: number;
    set blendMode(arg: any);
    get blendMode(): any;
    set polygonOffset(arg: any);
    get polygonOffset(): any;
    set blend(arg: boolean);
    get blend(): boolean;
    set depthMask(arg: boolean);
    get depthMask(): boolean;
    set offsets(arg: boolean);
    get offsets(): boolean;
    set culling(arg: boolean);
    get culling(): boolean;
    set depthTest(arg: boolean);
    get depthTest(): boolean;
    set clockwiseFrontFace(arg: boolean);
    get clockwiseFrontFace(): boolean;
    _blendMode: any;
    _polygonOffset: any;
    toString(): string;
}
declare let wr: {
    new (): {
        gl: any;
        stateId: number;
        polygonOffset: number;
        blendMode: any;
        _blendEq: boolean;
        map: ((i: any) => void)[];
        checks: any[];
        defaultState: Yt;
        contextChange(i: any): void;
        blendModes: any[] | undefined;
        set(i: any): void;
        forceState(i: any): void;
        setBlend(i: any): void;
        setOffset(i: any): void;
        setDepthTest(i: any): void;
        setDepthMask(i: any): void;
        setCullFace(i: any): void;
        setFrontFace(i: any): void;
        setBlendMode(i: any): void;
        setPolygonOffset(i: any, t: any): void;
        reset(): void;
        updateCheck(i: any, t: any): void;
        destroy(): void;
    };
    checkBlendMode(i: any, t: any): void;
    checkPolygonOffset(i: any, t: any): void;
};
declare class vr extends Co {
    getStackLength(): any;
    push(t: any): void;
    pop(t: any): void;
}
declare namespace vr {
    export namespace extension_21 {
        const type_20: any;
        export { type_20 as type };
        const name_20: string;
        export { name_20 as name };
    }
    export { extension_21 as extension };
}
declare const Uo_base: any;
declare class Uo extends Uo_base {
    [x: string]: any;
    constructor(...args: any[]);
    runners: {};
    _systemsHash: {};
    setup(t: any): void;
    addRunners(...t: any[]): void;
    addSystem(t: any, e: any): Uo;
    emitWithCustomOptions(t: any, e: any): void;
    destroy(): void;
}
declare var ce: any;
declare var fi: any;
declare var O: any;
declare const Qr: {
    [x: number]: number;
};
declare const va: {
    [x: number]: number;
};
declare class Xo extends et {
    constructor(...args: any[]);
    sortDirty: any;
}
declare let ls: {
    new (i: any, t: any, e: any): {
        [x: string]: any;
        _ownCanvas: boolean;
        canvas: any;
        context: any;
        _resolution: number;
        _autoResolution: boolean;
        _text: any;
        _style: any;
        _styleListener: any;
        _font: string;
        text: any;
        style: any;
        localStyleID: number;
        updateText(i: any): void;
        dirty: boolean | undefined;
        drawLetterSpacing(i: any, t: any, e: any, s?: boolean): void;
        updateTexture(): void;
        _render(i: any): void;
        updateTransform(): void;
        getBounds(i: any, t: any): any;
        getLocalBounds(i: any): any;
        _calculateBounds(): void;
        _generateFillStyle(i: any, t: any, e: any): any;
        destroy(i: any): void;
        width: number;
        _width: number;
        height: number;
        _height: number;
        resolution: number;
        _anchor: te;
        _texture: any;
        _tint: any;
        _tintRGB: number | null;
        tint: any;
        blendMode: any;
        _cachedTint: number;
        uvs: any;
        texture: any;
        vertexData: Float32Array;
        vertexTrimmedData: Float32Array | null;
        _transformID: number;
        _textureID: number;
        _transformTrimmedID: number;
        _textureTrimmedID: number;
        indices: Uint16Array;
        pluginName: string;
        isSprite: boolean;
        _roundPixels: boolean;
        _onTextureUpdate(): void;
        _onAnchorUpdate(): void;
        calculateVertices(): void;
        calculateTrimmedVertices(): void;
        _localBounds: ii | null;
        _localBoundsRect: V | null;
        containsPoint(t: any): boolean;
        roundPixels: boolean;
        anchor: te;
        children: any[];
        sortableChildren: any;
        sortDirty: boolean;
        onChildrenChange(t: any): void;
        addChild(...t: any[]): any;
        addChildAt(t: any, e: any): any;
        swapChildren(t: any, e: any): void;
        getChildIndex(t: any): number;
        setChildIndex(t: any, e: any): void;
        getChildAt(t: any): any;
        removeChild(...t: any[]): any;
        removeChildAt(t: any): any;
        removeChildren(t?: number, e?: number): any[];
        sortChildren(): void;
        worldAlpha: number;
        calculateBounds(): void;
        _renderWithCulling(t: any): void;
        render(t: any): void;
        renderAdvanced(t: any): void;
        _enabledFilters: any;
        containerUpdateTransform: () => void;
        getChildByName(t: any, e: any): any;
        tempDisplayObjectParent: Xo | null;
        transform: {
            worldTransform: Z;
            localTransform: Z;
            position: te;
            scale: te;
            pivot: te;
            skew: te;
            _rotation: number;
            _cx: number;
            _sx: number;
            _cy: number;
            _sy: number;
            _localID: number;
            _currentLocalID: number;
            _worldID: number;
            _parentID: number;
            onChange(): void;
            updateSkew(): void;
            toString(): string;
            updateLocalTransform(): void;
            updateTransform(i: any): void;
            setFromMatrix(i: any): void;
            rotation: number;
        };
        alpha: number;
        visible: boolean;
        renderable: boolean;
        cullable: boolean;
        cullArea: any;
        parent: any;
        _lastSortedIndex: number;
        _zIndex: number;
        filterArea: any;
        filters: any;
        _bounds: ii;
        _boundsID: number;
        _boundsRect: V | null;
        _mask: any;
        _maskRefCount: number;
        _destroyed: boolean;
        isMask: boolean;
        readonly destroyed: boolean;
        _recursivePostUpdateTransform(): void;
        toGlobal(t: any, e: any, s?: boolean): any;
        toLocal(t: any, e: any, s: any, r: any): any;
        setParent(t: any): any;
        removeFromParent(): void;
        setTransform(t?: number, e?: number, s?: number, r?: number, n?: number, o?: number, a?: number, h?: number, l?: number): any;
        rotation: number;
        mask: any;
        hitArea: any;
        interactive: boolean | undefined;
        interactiveChildren: boolean | undefined;
        readonly _tempDisplayObjectParent: Xo;
        enableTempParent(): any;
        disableTempParent(t: any): void;
        x: number;
        y: number;
        readonly worldTransform: Z;
        readonly localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        angle: number;
        zIndex: number;
        readonly worldVisible: boolean;
        displayObjectUpdateTransform: () => void;
        _cacheAsBitmap: boolean;
        _cacheData: any;
        _cacheAsBitmapResolution: any;
        _cacheAsBitmapMultisample: any;
        _renderCached(t: any): void;
        _initCachedDisplayObject(t: any): void;
        _renderCachedCanvas(t: any): void;
        _initCachedDisplayObjectCanvas(t: any): void;
        renderCanvas: any;
        _calculateCachedBounds(): void;
        _getCachedLocalBounds(): any;
        _destroyCachedDisplayObject(): void;
        _cacheAsBitmapDestroy(t: any): void;
        cacheAsBitmap: boolean | undefined;
        name: any;
        getGlobalPosition(t?: j, e?: boolean): j;
    };
    from(t: any, e: any): he;
    mixin(t: any): void;
};
declare class gi {
    static test(t: any): boolean;
    static parse(t: any): _i;
}
declare class F {
    static measureText(t: any, e: any, s: any, r?: any): F;
    static wordWrap(t: any, e: any, s?: any): string;
    static addLine(t: any, e?: boolean): any;
    static getFromCache(t: any, e: any, s: any, r: any): any;
    static collapseSpaces(t: any): boolean;
    static collapseNewlines(t: any): boolean;
    static trimRight(t: any): any;
    static isNewline(t: any): boolean;
    static isBreakingSpace(t: any, e: any): boolean;
    static tokenize(t: any): any[];
    static canBreakWords(t: any, e: any): any;
    static canBreakChars(t: any, e: any, s: any, r: any, n: any): boolean;
    static wordWrapSplit(t: any): any;
    static measureFont(t: any): any;
    static clearMetrics(t?: string): void;
    static get _canvas(): any;
    static get _context(): any;
    constructor(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any, l: any);
    text: any;
    style: any;
    width: any;
    height: any;
    lines: any;
    lineWidths: any;
    lineHeight: any;
    maxLineWidth: any;
    fontProperties: any;
}
declare namespace F {
    const _fonts: {};
    const METRICS_STRING: string;
    const BASELINE_SYMBOL: string;
    const BASELINE_MULTIPLIER: number;
    const HEIGHT_MULTIPLIER: number;
    const _newlines: number[];
    const _breakingSpaces: number[];
}
declare class ie {
    constructor(t: any);
    styleID: number;
    clone(): ie;
    reset(): void;
    set align(arg: any);
    get align(): any;
    _align: any;
    set breakWords(arg: any);
    get breakWords(): any;
    _breakWords: any;
    set dropShadow(arg: any);
    get dropShadow(): any;
    _dropShadow: any;
    set dropShadowAlpha(arg: any);
    get dropShadowAlpha(): any;
    _dropShadowAlpha: any;
    set dropShadowAngle(arg: any);
    get dropShadowAngle(): any;
    _dropShadowAngle: any;
    set dropShadowBlur(arg: any);
    get dropShadowBlur(): any;
    _dropShadowBlur: any;
    set dropShadowColor(arg: any);
    get dropShadowColor(): any;
    _dropShadowColor: any;
    set dropShadowDistance(arg: any);
    get dropShadowDistance(): any;
    _dropShadowDistance: any;
    set fill(arg: any);
    get fill(): any;
    _fill: any;
    set fillGradientType(arg: any);
    get fillGradientType(): any;
    _fillGradientType: any;
    set fillGradientStops(arg: any);
    get fillGradientStops(): any;
    _fillGradientStops: any;
    set fontFamily(arg: any);
    get fontFamily(): any;
    _fontFamily: any;
    set fontSize(arg: any);
    get fontSize(): any;
    _fontSize: any;
    set fontStyle(arg: any);
    get fontStyle(): any;
    _fontStyle: any;
    set fontVariant(arg: any);
    get fontVariant(): any;
    _fontVariant: any;
    set fontWeight(arg: any);
    get fontWeight(): any;
    _fontWeight: any;
    set letterSpacing(arg: any);
    get letterSpacing(): any;
    _letterSpacing: any;
    set lineHeight(arg: any);
    get lineHeight(): any;
    _lineHeight: any;
    set leading(arg: any);
    get leading(): any;
    _leading: any;
    set lineJoin(arg: any);
    get lineJoin(): any;
    _lineJoin: any;
    set miterLimit(arg: any);
    get miterLimit(): any;
    _miterLimit: any;
    set padding(arg: any);
    get padding(): any;
    _padding: any;
    set stroke(arg: any);
    get stroke(): any;
    _stroke: any;
    set strokeThickness(arg: any);
    get strokeThickness(): any;
    _strokeThickness: any;
    set textBaseline(arg: any);
    get textBaseline(): any;
    _textBaseline: any;
    set trim(arg: any);
    get trim(): any;
    _trim: any;
    set whiteSpace(arg: any);
    get whiteSpace(): any;
    _whiteSpace: any;
    set wordWrap(arg: any);
    get wordWrap(): any;
    _wordWrap: any;
    set wordWrapWidth(arg: any);
    get wordWrapWidth(): any;
    _wordWrapWidth: any;
    toFontString(): string;
}
declare const B_base: any;
declare class B extends B_base {
    [x: string]: any;
    static from(t: any, e?: {}, s?: any): any;
    static fromURL(t: any, e: any): any;
    static fromBuffer(t: any, e: any, s: any, r: any): B;
    static fromLoader(t: any, e: any, s: any, r: any): Promise<any>;
    static addToCache(t: any, e: any): void;
    static removeFromCache(t: any): any;
    static get EMPTY(): any;
    static get WHITE(): any;
    constructor(t: any, e: any, s: any, r: any, n: any, o: any);
    noFrame: boolean;
    baseTexture: any;
    _frame: any;
    trim: any;
    valid: boolean;
    _uvs: tr;
    uvMatrix: any;
    orig: any;
    _rotate: number;
    defaultAnchor: j;
    _updateID: number;
    textureCacheIds: any[];
    set frame(arg: any);
    get frame(): any;
    update(): void;
    onBaseTextureUpdated(t: any): void;
    destroy(t: any): void;
    clone(): B;
    updateUvs(): void;
    get resolution(): any;
    set rotate(arg: number);
    get rotate(): number;
    get width(): any;
    get height(): any;
    castToBaseTexture(): any;
}
declare class Ar {
    constructor(t: any);
    renderer: any;
    count: number;
    checkCount: number;
    maxIdle: number;
    checkCountMax: number;
    mode: any;
    postrender(): void;
    run(): void;
    unload(t: any): void;
    destroy(): void;
}
declare namespace Ar {
    export namespace extension_22 {
        const type_21: any;
        export { type_21 as type };
        const name_21: string;
        export { name_21 as name };
    }
    export { extension_22 as extension };
}
declare class Wi {
    constructor(t: any, e: any);
    _texture: any;
    mapCoord: Z;
    uClampFrame: Float32Array;
    uClampOffset: Float32Array;
    _textureID: number;
    _updateID: number;
    clampOffset: number;
    clampMargin: any;
    isSimple: boolean;
    set texture(arg: any);
    get texture(): any;
    multiplyUvs(t: any, e: any): any;
    update(t: any): boolean;
}
declare class Sr {
    constructor(t: any);
    renderer: any;
    boundTextures: any[];
    currentLocation: number;
    managedTextures: any[];
    _unknownBoundTextures: boolean;
    unknownTexture: {
        [x: string]: any;
        resolution: any;
        width: number;
        height: number;
        _mipmap: any;
        anisotropicLevel: any;
        _wrapMode: any;
        _scaleMode: any;
        format: any;
        type: any;
        target: any;
        alphaMode: any;
        uid: number;
        touched: number;
        isPowerOfTwo: boolean;
        _glTextures: {};
        dirtyId: number;
        dirtyStyleId: number;
        cacheId: any;
        valid: boolean;
        textureCacheIds: any[];
        destroyed: boolean;
        resource: any;
        _batchEnabled: number;
        _batchLocation: number;
        parentTextureArray: any;
        readonly realWidth: number;
        readonly realHeight: number;
        mipmap: any;
        scaleMode: any;
        wrapMode: any;
        setStyle(i: any, t: any): any;
        setSize(i: any, t: any, e: any): any;
        setRealSize(i: any, t: any, e: any): any;
        _refreshPOT(): void;
        setResolution(i: any): any;
        setResource(i: any): any;
        update(): void;
        onError(i: any): void;
        destroy(): void;
        dispose(): void;
        castToBaseTexture(): any;
    };
    hasIntegerTextures: boolean;
    contextChange(): void;
    gl: any;
    CONTEXT_UID: any;
    webGLVersion: any;
    internalFormats: {
        [x: number]: {
            [x: number]: any;
        };
    } | undefined;
    emptyTextures: {} | undefined;
    bind(t: any, e?: number): void;
    reset(): void;
    unbind(t: any): void;
    ensureSamplerType(t: any): void;
    initTexture(t: any): $i;
    initTextureType(t: any, e: any): void;
    updateTexture(t: any): void;
    destroyTexture(t: any, e: any): void;
    updateTextureStyle(t: any): void;
    setStyle(t: any, e: any): void;
    destroy(): void;
}
declare namespace Sr {
    export namespace extension_23 {
        const type_22: any;
        export { type_22 as type };
        const name_22: string;
        export { name_22 as name };
    }
    export { extension_23 as extension };
}
declare class tr {
    x0: number;
    y0: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3: number;
    y3: number;
    uvsFloat32: Float32Array;
    set(t: any, e: any, s: any): void;
    toString(): string;
}
declare class Q {
    static get shared(): any;
    static get system(): any;
    autoStart: boolean;
    deltaTime: number;
    lastTime: number;
    speed: number;
    started: boolean;
    _requestId: number | null;
    _maxElapsedMS: number;
    _minElapsedMS: number;
    _protected: boolean;
    _lastFrame: number;
    _head: Cs;
    deltaMS: number;
    elapsedMS: number;
    _tick: (t: any) => void;
    _requestIfNeeded(): void;
    _cancelIfNeeded(): void;
    _startIfPossible(): void;
    add(t: any, e: any, s?: any): Q;
    addOnce(t: any, e: any, s?: any): Q;
    _addListener(t: any): Q;
    remove(t: any, e: any): Q;
    get count(): number;
    start(): void;
    stop(): void;
    destroy(): void;
    update(t?: number): void;
    get FPS(): number;
    set minFPS(arg: number);
    get minFPS(): number;
    set maxFPS(arg: number);
    get maxFPS(): number;
}
declare class Is {
    static init(t: any): void;
    static destroy(): void;
}
declare namespace Is {
    export const stop: (() => void) | undefined;
    export const start: (() => void) | undefined;
    export const _ticker: any;
    export const ticker: any;
    const extension_24: any;
    export { extension_24 as extension };
}
declare class _n extends he {
    static from(t: any, e: any): _n;
    constructor(t: any, e?: number, s?: number);
    tileTransform: {
        worldTransform: Z;
        localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        _rotation: number;
        _cx: number;
        _sx: number;
        _cy: number;
        _sy: number;
        _localID: number;
        _currentLocalID: number;
        _worldID: number;
        _parentID: number;
        onChange(): void;
        updateSkew(): void;
        toString(): string;
        updateLocalTransform(): void;
        updateTransform(i: any): void;
        setFromMatrix(i: any): void;
        rotation: number;
    };
    uvMatrix: any;
    uvRespectAnchor: boolean;
    set clampMargin(arg: any);
    get clampMargin(): any;
    set tileScale(arg: te);
    get tileScale(): te;
    set tilePosition(arg: te);
    get tilePosition(): te;
}
declare class pn extends Qe {
    quad: ir;
    state: Yt;
    contextChange(): void;
    simpleShader: kt | undefined;
    shader: kt | undefined;
}
declare namespace pn {
    export namespace extension_25 {
        const name_23: string;
        export { name_23 as name };
        const type_23: any;
        export { type_23 as type };
    }
    export { extension_25 as extension };
}
declare class bp {
    constructor(t: any);
    maxMilliseconds: any;
    frameStart: number;
    beginFrame(): void;
    allowedToUpload(): boolean;
}
declare let Ve: {
    new (): {
        worldTransform: Z;
        localTransform: Z;
        position: te;
        scale: te;
        pivot: te;
        skew: te;
        _rotation: number;
        _cx: number;
        _sx: number;
        _cy: number;
        _sy: number;
        _localID: number;
        _currentLocalID: number;
        _worldID: number;
        _parentID: number;
        onChange(): void;
        updateSkew(): void;
        toString(): string;
        updateLocalTransform(): void;
        updateTransform(i: any): void;
        setFromMatrix(i: any): void;
        rotation: number;
    };
};
declare class Nd {
    _glTransformFeedbacks: {};
    buffers: any[];
    disposeRunner: Tt;
    bindBuffer(t: any, e: any): void;
    destroy(): void;
}
declare class Br {
    constructor(t: any);
    renderer: any;
    contextChange(): void;
    gl: any;
    CONTEXT_UID: any;
    bind(t: any): void;
    unbind(): void;
    beginTransformFeedback(t: any, e: any): void;
    endTransformFeedback(): void;
    createGLTransformFeedback(t: any): any;
    disposeTransformFeedback(t: any, e: any): void;
    destroy(): void;
}
declare namespace Br {
    export namespace extension_26 {
        const type_24: any;
        export { type_24 as type };
        const name_24: string;
        export { name_24 as name };
    }
    export { extension_26 as extension };
}
declare var ne: any;
declare class It {
    static from(t: any, e: any, s: any): It;
    static uboFrom(t: any, e: any): It;
    constructor(t: any, e: any, s: any);
    group: boolean;
    syncUniforms: {};
    dirtyId: number;
    id: number;
    static: boolean;
    ubo: boolean;
    buffer: rt | undefined;
    autoManage: boolean | undefined;
    uniforms: any;
    update(): void;
    add(t: any, e: any, s: any): void;
}
declare const Ld: "7.0.5";
declare let Oi: any;
declare class Ir {
    constructor(t: any);
    renderer: any;
    init(t: any): void;
    screen: V | null | undefined;
    element: any;
    resolution: any;
    autoDensity: boolean | undefined;
    resizeView(t: any, e: any): void;
    destroy(t: any): void;
}
declare namespace Ir {
    export namespace extension_27 {
        const type_25: any[];
        export { type_25 as type };
        const name_25: string;
        export { name_25 as name };
    }
    export { extension_27 as extension };
}
declare class Zi {
    static sizeOf(t: any): 1 | 2 | 4;
    constructor(t: any);
    rawBinaryData: any;
    uint32View: Uint32Array;
    float32View: Float32Array;
    get int8View(): Int8Array;
    _int8View: Int8Array | null | undefined;
    get uint8View(): Uint8Array;
    _uint8View: Uint8Array | null | undefined;
    get int16View(): Int16Array;
    _int16View: Int16Array | null | undefined;
    get uint16View(): Uint16Array;
    _uint16View: Uint16Array | null | undefined;
    get int32View(): Int32Array;
    _int32View: Int32Array | null | undefined;
    view(t: any): any;
    destroy(): void;
}
declare var zt: any;
declare class ds {
    static test(t: any): any;
    static parse(t: any): _i;
}
declare class fs {
    static test(t: any): any;
    static parse(t: any): _i;
}
declare namespace zo {
    const accessible: boolean;
    const accessibleTitle: null;
    const accessibleHint: null;
    const tabIndex: number;
    const _accessibleActive: boolean;
    const _accessibleDiv: null;
    const accessibleType: string;
    const accessiblePointerEvents: string;
    const accessibleChildren: boolean;
    const renderId: number;
}
declare function Ya(i: any): typeof ds | null;
declare function ko(i: any): any;
declare function $s(i: any, t: any): any;
declare namespace Jo {
    const extension_28: any;
    export { extension_28 as extension };
    export function test(i: any): boolean;
    export function getCacheableAssets(i: any, t: any): {};
}
declare function Yr(i: any, t: any): any;
declare function ni(i: any, t: any): boolean;
declare function Ao(i: any, t: any): any;
declare function jt(i: any, t: any): any;
declare function Ko(i: any): any[];
declare function hi(i: any, t: any, e: any): B;
declare function Bo(i: any): {
    uboElements: any;
    size: number;
};
declare const Dr: string;
declare const Go: string;
declare namespace ha {
    export namespace extension_29 {
        const type_26: any;
        export { type_26 as type };
        export const priority: number;
    }
    export { extension_29 as extension };
    export function test_1(): Promise<boolean>;
    export { test_1 as test };
    export function add(i: any): Promise<any[]>;
    export function remove(i: any): Promise<any>;
}
declare namespace pa {
    export namespace extension_30 {
        const type_27: any;
        export { type_27 as type };
        const priority_1: number;
        export { priority_1 as priority };
    }
    export { extension_30 as extension };
    export function test_2(): Promise<boolean>;
    export { test_2 as test };
    export function add_1(i: any): Promise<any[]>;
    export { add_1 as add };
    export function remove_1(i: any): Promise<any>;
    export { remove_1 as remove };
}
declare namespace ua {
    export namespace extension_31 {
        const type_28: any;
        export { type_28 as type };
        const priority_2: number;
        export { priority_2 as priority };
    }
    export { extension_31 as extension };
    export function test_3(): Promise<boolean>;
    export { test_3 as test };
    export function add_2(i: any): Promise<any[]>;
    export { add_2 as add };
    export function remove_2(i: any): Promise<any>;
    export { remove_2 as remove };
}
declare namespace la {
    export namespace extension_32 {
        const type_29: any;
        export { type_29 as type };
        const priority_3: number;
        export { priority_3 as priority };
    }
    export { extension_32 as extension };
    export function test_4(): Promise<boolean>;
    export { test_4 as test };
    export function add_3(i: any): Promise<any[]>;
    export { add_3 as add };
    export function remove_3(i: any): Promise<any>;
    export { remove_3 as remove };
}
declare namespace U {
    const _addHandlers: {};
    const _removeHandlers: {};
    const _queue: {};
    function remove(...i: any[]): {
        _addHandlers: {};
        _removeHandlers: {};
        _queue: {};
        remove(...i: any[]): any;
        add(...i: any[]): any;
        handle(i: any, t: any, e: any): any;
        handleByMap(i: any, t: any): any;
        handleByList(i: any, t: any, e?: number): any;
    };
    function add(...i: any[]): {
        _addHandlers: {};
        _removeHandlers: {};
        _queue: {};
        remove(...i: any[]): any;
        add(...i: any[]): any;
        handle(i: any, t: any, e: any): any;
        handleByMap(i: any, t: any): any;
        handleByList(i: any, t: any, e?: number): any;
    };
    function handle(i: any, t: any, e: any): {
        _addHandlers: {};
        _removeHandlers: {};
        _queue: {};
        remove(...i: any[]): any;
        add(...i: any[]): any;
        handle(i: any, t: any, e: any): any;
        handleByMap(i: any, t: any): any;
        handleByList(i: any, t: any, e?: number): any;
    };
    function handleByMap(i: any, t: any): {
        _addHandlers: {};
        _removeHandlers: {};
        _queue: {};
        remove(...i: any[]): any;
        add(...i: any[]): any;
        handle(i: any, t: any, e: any): any;
        handleByMap(i: any, t: any): any;
        handleByList(i: any, t: any, e?: number): any;
    };
    function handleByList(i: any, t: any, e?: number): {
        _addHandlers: {};
        _removeHandlers: {};
        _queue: {};
        remove(...i: any[]): any;
        add(...i: any[]): any;
        handle(i: any, t: any, e: any): any;
        handleByMap(i: any, t: any): any;
        handleByList(i: any, t: any, e?: number): any;
    };
}
declare namespace Dp {
    export { Od as AlphaFilter };
    export { zd as BlurFilter };
    export { kr as BlurFilterPass };
    export { Gr as ColorMatrixFilter };
    export { $d as DisplacementFilter };
    export { Zd as FXAAFilter };
    export { Jd as NoiseFilter };
}
declare function Lo(i: any, t: any): Fo;
declare function No(i: any, t: any): {
    size: number;
    syncFunc: Function;
};
declare function ia(i: any): any;
declare function yo(): {};
declare function Do(i: any, t: any): any[];
declare namespace tp {
    export { en as buildPoly };
    export { ci as buildCircle };
    export { Ra as buildRectangle };
    export { Ca as buildRoundedRectangle };
    export { sn as buildLine };
    export { rn as ArcUtils };
    export { xs as BezierUtils };
    export { vs as QuadraticUtils };
    export { Pa as BatchPart };
    export { rs as FILL_COMMANDS };
    export { nn as BATCH_POOL };
    export { ui as DRAW_CALL_POOL };
}
declare namespace tt {
    export const E: number;
    export const SE: number;
    export const S: number;
    export const SW: number;
    export const W: number;
    export const NW: number;
    export const N: number;
    export const NE: number;
    export const MIRROR_VERTICAL: number;
    export const MAIN_DIAGONAL: number;
    export const MIRROR_HORIZONTAL: number;
    export const REVERSE_DIAGONAL: number;
    export function uX(i: any): number;
    export function uY(i: any): number;
    export function vX(i: any): number;
    export function vY(i: any): number;
    export function inv(i: any): number;
    export function add_4(i: any, t: any): any;
    export { add_4 as add };
    export function sub(i: any, t: any): any;
    export function rotate180(i: any): number;
    export function isVertical(i: any): boolean;
    export function byDirection(i: any, t: any): number;
    export function matrixAppendRotationInv(i: any, t: any, e?: number, s?: number): void;
}
declare namespace Nt {
    export namespace apple {
        const phone: any;
        const ipod: any;
        const tablet: any;
        const universal: any;
        const device: any;
    }
    export namespace amazon {
        const phone_1: any;
        export { phone_1 as phone };
        const tablet_1: any;
        export { tablet_1 as tablet };
        const device_1: any;
        export { device_1 as device };
    }
    export namespace android {
        const phone_2: any;
        export { phone_2 as phone };
        const tablet_2: any;
        export { tablet_2 as tablet };
        const device_2: any;
        export { device_2 as device };
    }
    export namespace windows {
        const phone_3: any;
        export { phone_3 as phone };
        const tablet_3: any;
        export { tablet_3 as tablet };
        const device_3: any;
        export { device_3 as device };
    }
    export namespace other {
        export const blackberry: any;
        export const blackberry10: any;
        export const opera: any;
        export const firefox: any;
        export const chrome: any;
        const device_4: any;
        export { device_4 as device };
    }
    export const any: boolean;
    const phone_4: boolean;
    export { phone_4 as phone };
    const tablet_4: boolean;
    export { tablet_4 as tablet };
}
declare function oi(i: any): boolean;
declare namespace th {
    export namespace extension_33 {
        const type_30: any;
        export { type_30 as type };
        const priority_4: any;
        export { priority_4 as priority };
    }
    export { extension_33 as extension };
    export function test(i: any): boolean;
    export function testParse(i: any): Promise<any>;
    export function parse(i: any, t: any, e: any): Promise<{
        _ownsTextures: any;
        font: any;
        size: any;
        lineHeight: number;
        chars: {};
        pageTextures: {};
        distanceFieldRange: any;
        distanceFieldType: any;
        destroy(): void;
    }>;
    export function load(i: any, t: any): Promise<string>;
    export function unload(i: any): void;
}
declare namespace ba {
    export namespace extension_34 {
        const type_31: any;
        export { type_31 as type };
        const priority_5: any;
        export { priority_5 as priority };
    }
    export { extension_34 as extension };
    export function test(i: any): boolean;
    export function load(i: any, t: any, e: any): Promise<B | B[]>;
    export function unload(i: any): void;
}
declare function oa(i: any): Promise<ImageBitmap>;
declare namespace ta {
    export namespace extension_35 {
        const type_32: any;
        export { type_32 as type };
        const priority_6: any;
        export { priority_6 as priority };
    }
    export { extension_35 as extension };
    export function test(i: any): any;
    export function load(i: any): Promise<any>;
}
declare namespace Ta {
    export namespace extension_36 {
        const type_33: any;
        export { type_33 as type };
        const priority_7: any;
        export { priority_7 as priority };
    }
    export { extension_36 as extension };
    export function test(i: any): boolean;
    export function load(i: any, t: any, e: any): Promise<any>;
    export function unload(i: any): void;
}
declare namespace Cf {
    export namespace extension_37 {
        const type_34: any;
        export { type_34 as type };
        const priority_8: any;
        export { priority_8 as priority };
    }
    export { extension_37 as extension };
    export function test(i: any): any;
    export function testParse(i: any): Promise<any>;
    export function parse(i: any, t: any, e: any): Promise<B>;
    export function load(i: any, t: any): Promise<string>;
    import unload = ts.unload;
    export { unload };
}
declare namespace ts {
    export namespace extension_38 {
        const type_35: any;
        export { type_35 as type };
        const priority_9: any;
        export { priority_9 as priority };
    }
    export { extension_38 as extension };
    export namespace config {
        const preferWorkers: boolean;
    }
    export function test(i: any): any;
    export function load(i: any, t: any, e: any): Promise<B>;
    export function unload(i: any): void;
}
declare namespace ea {
    export namespace extension_39 {
        const type_36: any;
        export { type_36 as type };
        const priority_10: any;
        export { priority_10 as priority };
    }
    export { extension_39 as extension };
    export function test(i: any): any;
    export function load(i: any): Promise<string>;
}
declare namespace sa {
    export namespace extension_40 {
        const type_37: any;
        export { type_37 as type };
        const priority_11: any;
        export { priority_11 as priority };
    }
    export { extension_40 as extension };
    export function test(i: any): any;
    export function load(i: any, t: any): Promise<FontFace | FontFace[] | null>;
    export function unload(i: any): void;
}
declare function _a(i: any): le[];
declare function ya(i: any, t: any, e?: boolean): {
    uncompressed: {
        resource: Be;
        type: number;
        format: any;
    }[];
    kvData: Map<any, any> | null;
    compressed?: undefined;
} | {
    compressed: le[];
    kvData: Map<any, any> | null;
    uncompressed?: undefined;
} | null;
declare namespace Ea {
    const extension_41: any;
    export { extension_41 as extension };
    export function test_5(i: any): boolean;
    export { test_5 as test };
    export function parse(i: any): {
        resolution: number;
        format: any;
        src: any;
    };
}
declare namespace aa {
    const extension_42: any;
    export { extension_42 as extension };
    import test_6 = ts.test;
    export { test_6 as test };
    export function parse_1(i: any): {
        resolution: number;
        format: any;
        src: any;
    };
    export { parse_1 as parse };
}
declare namespace w {
    const PREFER_ENV: any;
    const STRICT_TEXTURE_CACHE: boolean;
    const TARGET_FPMS: number;
    const RETINA_PREFIX: RegExp;
    const FAIL_IF_MAJOR_PERFORMANCE_CAVEAT: boolean;
    const SORTABLE_CHILDREN: boolean;
    const UPLOADS_PER_FRAME: number;
}
declare namespace Wa {
    const extension_43: any;
    export { extension_43 as extension };
    export namespace cache {
        export function test_7(i: any): boolean;
        export { test_7 as test };
        export function getCacheableAssets_1(i: any, t: any): {};
        export { getCacheableAssets_1 as getCacheableAssets };
    }
    export namespace resolver {
        export function test_8(i: any): boolean;
        export { test_8 as test };
        export function parse_2(i: any): {
            resolution: number;
            format: any;
            src: any;
        };
        export { parse_2 as parse };
    }
    export namespace loader {
        export namespace extension_44 {
            const type_38: any;
            export { type_38 as type };
            const priority_12: any;
            export { priority_12 as priority };
        }
        export { extension_44 as extension };
        export function testParse(i: any, t: any): Promise<any>;
        export function parse(i: any, t: any, e: any): Promise<{
            linkedSheets: any[];
            _texture: B | null;
            baseTexture: any;
            textures: {};
            animations: {};
            data: any;
            resolution: number;
            _frames: any;
            _frameKeys: string[];
            _batchIndex: number;
            _callback: ((value: any) => void) | null;
            _updateResolution(i?: null): number;
            parse(): Promise<any>;
            _processFrames(i: any): void;
            _processAnimations(): void;
            _parseComplete(): void;
            _nextBatch(): void;
            destroy(i?: boolean): void;
        }>;
        export function unload(i: any): void;
    }
}
declare const ve: ({
    test: (i: any, t: any) => boolean;
    code: (i: any) => string;
    codeUbo?: undefined;
} | {
    test: (i: any, t: any) => boolean;
    code: (i: any) => string;
    codeUbo: (i: any) => string;
})[];
declare namespace Vu {
    export const __proto__: null;
    export { Nt as isMobile };
    export { Ce as EventEmitter };
    export { Bs as earcut };
    export { qn as url };
    export { ft as path };
    export { Yh as sayHello };
    export { jh as skipHello };
    export { Qn as isWebGLSupported };
    export { _e as hex2rgb };
    export { Gs as hex2string };
    export { Fu as rgb2hex };
    export { Bi as string2hex };
    export { Xs as correctBlendMode };
    export { Hs as premultiplyBlendMode };
    export { Jn as premultiplyRgba };
    export { Di as premultiplyTint };
    export { Vs as premultiplyTintToRgba };
    export { to as createIndicesForQuads };
    export { Ni as getBufferType };
    export { Ou as interleaveTypedArrays };
    export { zs as isPow2 };
    export { Ws as log2 };
    export { qe as nextPow2 };
    export { ge as removeItems };
    export { xe as sign };
    export { oe as uid };
    export { _t as deprecation };
    export { Et as BaseTextureCache };
    export { js as ProgramCache };
    export { gt as TextureCache };
    export { Hu as clearTextureCache };
    export { Gu as destroyTextureCache };
    export { Ys as CanvasRenderTarget };
    export { so as trimCanvas };
    export { Xu as decomposeDataUri };
    export { no as determineCrossOrigin };
    export { Kt as getResolutionOfUrl };
    export { ro as DATA_URI };
}
declare class xf {
    _assetMap: {};
    _preferredOrder: any[];
    _parsers: any[];
    _resolverHash: {};
    _bundles: {};
    prefer(...t: any[]): void;
    set basePath(arg: any);
    get basePath(): any;
    _basePath: any;
    set rootPath(arg: any);
    get rootPath(): any;
    _rootPath: any;
    get parsers(): any[];
    reset(): void;
    _manifest: any;
    addManifest(t: any): void;
    addBundle(t: any, e: any): void;
    add(t: any, e: any, s: any): void;
    resolveBundle(t: any): any;
    resolveUrl(t: any): any;
    resolve(t: any): any;
    _getPreferredOrder(t: any): any;
}
declare class gf {
    _parsers: any[];
    promiseCache: {};
    reset(): void;
    _getLoadPromiseAndParser(t: any, e: any): {
        promise: null;
        parser: null;
    };
    load(t: any, e: any): Promise<any>;
    unload(t: any): Promise<void>;
    get parsers(): any[];
}
declare class _f {
    _parsers: any[];
    _cache: Map<any, any>;
    _cacheMap: Map<any, any>;
    reset(): void;
    has(t: any): boolean;
    get(t: any): any;
    set(t: any, e: any): void;
    remove(t: any): void;
    get parsers(): any[];
}
declare class mf {
    constructor(t: any, e?: boolean);
    _loader: any;
    _assetList: any[];
    _isLoading: boolean;
    _maxConcurrent: number;
    verbose: boolean;
    add(t: any): void;
    _next(): Promise<void>;
    set active(arg: any);
    get active(): any;
    _isActive: any;
}
declare class Oa {
    constructor(t: any, e: any, s: any);
    geometry: se;
    indexBuffer: rt | null;
    size: any;
    dynamicProperties: any[];
    staticProperties: any[];
    staticStride: number;
    staticBuffer: rt | null;
    staticData: Float32Array | null;
    staticDataUint32: Uint32Array | null;
    dynamicStride: number;
    dynamicBuffer: rt | null;
    dynamicData: Float32Array | null;
    dynamicDataUint32: Uint32Array | null;
    _updateID: number;
    initBuffers(): void;
    uploadDynamic(t: any, e: any, s: any): void;
    uploadStatic(t: any, e: any, s: any): void;
    destroy(): void;
}
declare class Co {
    constructor(t: any);
    renderer: any;
    maskStack: any[];
    glConst: number;
    getStackLength(): number;
    setMaskStack(t: any): void;
    _useCurrent(): void;
    destroy(): void;
}
declare class Cs {
    constructor(t: any, e?: null, s?: number, r?: boolean);
    next: any;
    previous: any;
    _destroyed: boolean;
    fn: any;
    context: any;
    priority: number;
    once: boolean;
    match(t: any, e?: null): boolean;
    emit(t: any): any;
    connect(t: any): void;
    destroy(t?: boolean): any;
}
declare class Od extends Ct {
    constructor(t?: number);
    set alpha(arg: any);
    get alpha(): any;
}
declare class zd extends Ct {
    constructor(t?: number, e?: number, s?: number, r?: number);
    blurXFilter: kr;
    blurYFilter: kr;
    resolution: number;
    set quality(arg: number);
    get quality(): number;
    set blur(arg: any);
    get blur(): any;
    set repeatEdgePixels(arg: any);
    get repeatEdgePixels(): any;
    apply(t: any, e: any, s: any, r: any): void;
    updatePadding(): void;
    set blurX(arg: any);
    get blurX(): any;
    set blurY(arg: any);
    get blurY(): any;
    _repeatEdgePixels: any;
}
declare class kr extends Ct {
    constructor(t: any, e?: number, s?: number, r?: number, n?: number);
    horizontal: any;
    resolution: number;
    _quality: number;
    set quality(arg: number);
    get quality(): number;
    set blur(arg: any);
    get blur(): any;
    apply(t: any, e: any, s: any, r: any): void;
    strength: any;
    passes: number | undefined;
}
declare class Gr extends Ct {
    constructor();
    set alpha(arg: any);
    get alpha(): any;
    _loadMatrix(t: any, e?: boolean): void;
    _multiply(t: any, e: any, s: any): any;
    _colorMatrix(t: any): Float32Array;
    brightness(t: any, e: any): void;
    tint(t: any, e: any): void;
    greyscale(t: any, e: any): void;
    blackAndWhite(t: any): void;
    hue(t: any, e: any): void;
    contrast(t: any, e: any): void;
    saturate(t: number | undefined, e: any): void;
    desaturate(): void;
    negative(t: any): void;
    sepia(t: any): void;
    technicolor(t: any): void;
    polaroid(t: any): void;
    toBGR(t: any): void;
    kodachrome(t: any): void;
    browni(t: any): void;
    vintage(t: any): void;
    colorTone(t: any, e: any, s: any, r: any, n: any): void;
    night(t: any, e: any): void;
    predator(t: any, e: any): void;
    lsd(t: any): void;
    reset(): void;
    set matrix(arg: any);
    get matrix(): any;
    grayscale: (t: any, e: any) => void;
}
declare class $d extends Ct {
    constructor(t: any, e: any);
    maskSprite: any;
    maskMatrix: Z;
    scale: j;
    apply(t: any, e: any, s: any, r: any): void;
    set map(arg: any);
    get map(): any;
}
declare class Zd extends Ct {
    constructor();
}
declare class Jd extends Ct {
    constructor(t?: number, e?: number);
    set noise(arg: any);
    get noise(): any;
    set seed(arg: any);
    get seed(): any;
}
declare namespace en {
    function build(i: any): void;
    function triangulate(i: any, t: any): void;
}
declare namespace ci {
    function build(i: any): void;
    function triangulate(i: any, t: any): void;
}
declare namespace Ra {
    function build(i: any): void;
    function triangulate(i: any, t: any): void;
}
declare namespace Ca {
    function build(i: any): void;
    function triangulate(i: any, t: any): void;
}
declare function sn(i: any, t: any): void;
declare class rn {
    static curveTo(t: any, e: any, s: any, r: any, n: any, o: any): {
        cx: any;
        cy: any;
        radius: any;
        startAngle: number;
        endAngle: number;
        anticlockwise: boolean;
    } | null;
    static arc(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any, l: any): void;
}
declare class xs {
    static curveLength(t: any, e: any, s: any, r: any, n: any, o: any, a: any, h: any): number;
    static curveTo(t: any, e: any, s: any, r: any, n: any, o: any, a: any): void;
}
declare class vs {
    static curveLength(t: any, e: any, s: any, r: any, n: any, o: any): number;
    static curveTo(t: any, e: any, s: any, r: any, n: any): void;
}
declare class Pa {
    begin(t: any, e: any, s: any): void;
    style: any;
    start: any;
    attribStart: any;
    end(t: any, e: any): void;
    attribSize: number | undefined;
    size: number | undefined;
    reset(): void;
}
declare const rs: {
    [x: number]: {
        build(i: any): void;
        triangulate(i: any, t: any): void;
    };
};
declare const nn: any[];
declare const ui: any[];
declare var Ce: any;
declare function Bs(i: any, t: any, e: any): any[];
declare namespace Bs {
    export { ch as default };
}
declare namespace qn {
    export { Vn as parse };
    export { Wn as format };
    export { zn as resolve };
}
declare namespace ft {
    function toPosix(i: any): any;
    function isUrl(i: any): boolean;
    function isDataUrl(i: any): boolean;
    function hasProtocol(i: any): boolean;
    function getProtocol(i: any): string;
    function toAbsolute(i: any, t: any, e: any): any;
    function normalize(i: any): string;
    function isAbsolute(i: any): any;
    function join(...i: any[]): string;
    function dirname(i: any): string;
    function rootname(i: any): string;
    function basename(i: any, t: any): any;
    function extname(i: any): any;
    function parse(i: any): {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    };
    const sep: string;
    const delimiter: string;
}
declare function Yh(): void;
declare function jh(): void;
declare function Qn(): any;
declare function _e(i: any, t?: any[]): any[];
declare function Gs(i: any): string;
declare function Fu(i: any): number;
declare function Bi(i: any): number;
declare function Xs(i: any, t: any): any;
declare const Hs: any[][];
declare function Jn(i: any, t: any, e: any, s: any): any;
declare function Di(i: any, t: any): any;
declare function Vs(i: any, t: any, e: any, s: any): any;
declare function to(i: any, t?: null): null;
declare function Ni(i: any): "Uint8Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "Float32Array" | null;
declare function Ou(i: any, t: any): Float32Array;
declare function zs(i: any): boolean;
declare function Ws(i: any): number;
declare function qe(i: any): any;
declare function ge(i: any, t: any, e: any): void;
declare function xe(i: any): 0 | 1 | -1;
declare function oe(): number;
declare function _t(i: any, t: any, e?: number): void;
declare const Et: any;
declare const js: {};
declare const gt: any;
declare function Hu(): void;
declare function Gu(): void;
declare class Ys {
    constructor(t: any, e: any, s: any);
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | null;
    resolution: any;
    clear(): void;
    resize(t: any, e: any): void;
    destroy(): void;
    set width(arg: number);
    get width(): number;
    set height(arg: number);
    get height(): number;
}
declare function so(i: any): {
    width: any;
    height: any;
    data: any;
};
declare function Xu(i: any): {
    mediaType: string | undefined;
    subType: string | undefined;
    charset: string | undefined;
    encoding: string | undefined;
    data: string;
} | undefined;
declare function no(i: any, t?: Location): "" | "anonymous";
declare function Kt(i: any, t?: number): number;
declare const ro: RegExp;
declare function ch(i: any, t: any, e: any): any[];
declare namespace ch {
    function deviation(i: any, t: any, e: any, s: any): number;
    function flatten(i: any): {
        vertices: never[];
        holes: never[];
        dimensions: any;
    };
}
declare function Vn(i: any, t: any, e: any): St;
declare function Wn(i: any): any;
declare function zn(i: any, t: any): any;
declare function St(): void;
declare class St {
    protocol: any;
    slashes: boolean | null;
    auth: string | null;
    host: any;
    port: any;
    hostname: any;
    hash: any;
    search: any;
    query: any;
    pathname: any;
    path: any;
    href: any;
    parse(i: any, t: any, e: any): St;
    format(): any;
    resolve(i: any): any;
    resolveObject(i: any): St;
    parseHost(): void;
}
export { At as ALPHA_MODES, qs as AbstractMultiResource, Vr as AccessibilityManager, bs as AnimatedSprite, Wr as Application, oo as ArrayResource, ai as Assets, Zo as AssetsClass, xi as Attribute, k as BLEND_MODES, Ti as BUFFER_BITS, Dt as BUFFER_TYPE, Cr as BackgroundSystem, Zt as BaseImageResource, Xa as BasePrepare, Js as BaseRenderTexture, W as BaseTexture, qi as BatchDrawCall, Fr as BatchGeometry, ei as BatchRenderer, Ho as BatchShaderGenerator, nr as BatchSystem, Ki as BatchTextureArray, xt as BitmapFont, _i as BitmapFontData, Ja as BitmapText, da as BlobResource, ii as Bounds, Tn as BrowserAdapter, rt as Buffer, Be as BufferResource, Lr as BufferSystem, Bt as CLEAR_MODES, bn as COLOR_MASK_BITS, Fe as Cache, ao as CanvasResource, ms as Circle, le as CompressedTextureResource, wt as Container, or as ContextSystem, Ha as CountLimiter, Ks as CubeResource, Ln as DEG_TO_RAD, Pt as DRAW_MODES, et as DisplayObject, re as ENV, _s as Ellipse, Wo as EventBoundary, Xr as EventSystem, P as ExtensionType, tn as Extract, C as FORMATS, xa as FORMATS_TO_COMPONENTS, jo as FederatedDisplayObject, Ge as FederatedEvent, ri as FederatedMouseEvent, Rt as FederatedPointerEvent, Qi as FederatedWheelEvent, vi as FillStyle, Ct as Filter, uo as FilterState, rr as FilterSystem, ki as Framebuffer, ar as FramebufferSystem, wi as GC_MODES, po as GLFramebuffer, Fo as GLProgram, $i as GLTexture, Ue as GRAPHICS_CURVES, Rr as GenerateTextureSystem, se as Geometry, lr as GeometrySystem, os as Graphics, yi as GraphicsData, on as GraphicsGeometry, gd as IGLUniformData, Li as INSTALLED, yt as INTERNAL_FORMATS, li as INTERNAL_FORMAT_TO_BYTES_PER_PIXEL, Se as ImageBitmapResource, Zs as ImageResource, ae as LINE_CAP, Jt as LINE_JOIN, ys as LineStyle, Lt as LoaderParserPriority, ht as MASK_TYPES, Mt as MIPMAP_MODES, nt as MSAA_QUALITY, mo as MaskData, gr as MaskSystem, Z as Matrix, we as Mesh, Ba as MeshBatchUvs, di as MeshGeometry, ke as MeshMaterial, Ur as MultisampleSystem, np as NineSlicePlane, Qe as ObjectRenderer, Or as ObjectRendererSystem, te as ObservablePoint, Xe as PI_2, bt as PRECISION, op as ParticleContainer, ln as ParticleRenderer, Fa as PlaneGeometry, Pr as PluginSystem, j as Point, Ae as Polygon, fn as Prepare, $t as Program, yr as ProjectionSystem, co as Quad, ir as QuadUv, Fn as RAD_TO_DEG, yn as RENDERER_TYPE, V as Rectangle, ee as RenderTexture, er as RenderTexturePool, br as RenderTextureSystem, be as Renderer, jr as ResizePlugin, Me as Resource, La as RopeGeometry, gs as RoundedRectangle, Tt as Runner, Ei as SAMPLER_TYPES, Vt as SCALE_MODES, dt as SHAPES, De as SVGResource, xr as ScissorSystem, kt as Shader, Tr as ShaderSystem, rp as SimpleMesh, Ua as SimplePlane, sp as SimpleRope, he as Sprite, Ro as SpriteMaskFilter, cs as Spritesheet, Mr as StartupSystem, Yt as State, wr as StateSystem, vr as StencilSystem, Uo as SystemManager, ce as TARGETS, fi as TEXT_GRADIENT, O as TYPES, Qr as TYPES_TO_BYTES_PER_COMPONENT, va as TYPES_TO_BYTES_PER_PIXEL, Xo as TemporaryDisplayObject, ls as Text, gi as TextFormat, F as TextMetrics, ie as TextStyle, B as Texture, Ar as TextureGCSystem, Wi as TextureMatrix, Sr as TextureSystem, tr as TextureUvs, Q as Ticker, Is as TickerPlugin, _n as TilingSprite, pn as TilingSpriteRenderer, bp as TimeLimiter, Ve as Transform, Nd as TransformFeedback, Br as TransformFeedbackSystem, ne as UPDATE_PRIORITY, It as UniformGroup, Ld as VERSION, Oi as VideoResource, Ir as ViewSystem, Zi as ViewableBuffer, zt as WRAP_MODES, ds as XMLFormat, fs as XMLStringFormat, zo as accessibleTarget, Ya as autoDetectFormat, ko as autoDetectRenderer, $s as autoDetectResource, Jo as cacheTextureArray, Yr as checkDataUrl, ni as checkExtension, Ao as checkMaxIfStatementsInShader, jt as convertToList, Ko as createStringVariations, hi as createTexture, Bo as createUBOElements, Dr as defaultFilterVertex, Go as defaultVertex, ha as detectAvif, pa as detectCompressedTextures, ua as detectDefaults, la as detectWebp, U as extensions, Dp as filters, Lo as generateProgram, No as generateUniformBufferSync, ia as getFontFamilyName, yo as getTestContext, Do as getUBOData, tp as graphicsUtils, tt as groupD8, Nt as isMobile, oi as isSingleItem, th as loadBitmapFont, ba as loadDDS, oa as loadImageBitmap, ta as loadJson, Ta as loadKTX, Cf as loadSVG, ts as loadTextures, ea as loadTxt, sa as loadWebFont, _a as parseDDS, ya as parseKTX, Ea as resolveCompressedTextureUrl, aa as resolveTextureUrl, w as settings, Wa as spritesheetAsset, ve as uniformParsers, Vu as utils };
