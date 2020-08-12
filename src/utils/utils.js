const getCurrentImage = (data, image) => {
  console.log(data, image)
  var src = image.split("/")
  return data.find(
    x => x.childImageSharp.fluid.originalName === src[src.length - 1]
  ).childImageSharp.fluid
}

export default { getCurrentImage }
