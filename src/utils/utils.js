const getCurrentImage = (data, image) => {
  if (!data || !image) return null
  var srcPath = image.split("/")
  var src = srcPath[srcPath.length - 1]

  var match = data.find(x => x.childImageSharp && x.childImageSharp.fluid && x.childImageSharp.fluid.originalName === src)
  return match ? match.childImageSharp.fluid : null
}

export default { getCurrentImage }
