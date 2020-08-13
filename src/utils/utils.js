const getCurrentImage = (data, image) => {
  var srcPath = image.split("/")
  var src = srcPath[srcPath.length - 1]

  return data.find(x => x.childImageSharp.fluid.originalName === src)
    .childImageSharp.fluid
}

export default { getCurrentImage }
