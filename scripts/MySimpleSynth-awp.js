class MySimpleSynth_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlug;
    super(options);
  }
}

registerProcessor("MySimpleSynth", MySimpleSynth_AWP);
