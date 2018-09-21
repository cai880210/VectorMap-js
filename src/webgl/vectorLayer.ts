const v_shader_source = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  attribute vec2 a_texCoord;
  void main(){
    gl_Position=vec4(a_position,0.0,1.0);
    v_texCoord = a_texCoord;
  }
`;

const f_shader_source = `
  precision mediump float;
  uniform sampler2D u_image;
  varying vec2 v_texCoord;
  void main(){
    gl_FragColor=texture2D(u_image,v_texCoord);
  }
`;
export {v_shader_source,f_shader_source};