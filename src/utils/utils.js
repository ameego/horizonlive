const getCurrentImage = (data, image) => {
  return data.edges.find(x => x.node.fixed.originalName === image.split("/")[2])
    .node.fixed
}

export default { getCurrentImage }
