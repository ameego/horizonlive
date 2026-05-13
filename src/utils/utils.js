const getCurrentImage = (data, image) => {
  if (!data || !image) return null
  var srcPath = image.split("/")
  var src = srcPath[srcPath.length - 1]

  // Match on File.base (filename with extension), then return gatsbyImageData
  var match = data.find(x => x.base === src)
  return match && match.childImageSharp ? match.childImageSharp.gatsbyImageData : null
}

export default { getCurrentImage }
