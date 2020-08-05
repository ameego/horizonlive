const getCurrentImage = (data, image) => {
  return data.edges.find(x => x.node.fluid.originalName === image.split("/")[2])
    .node.fluid
}

export default { getCurrentImage }
