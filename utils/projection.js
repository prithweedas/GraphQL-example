module.exports = fieldASTs => {
    return fieldASTs.fieldNodes[0].selectionSet.selections.reduce(
        (projections, selection) => {
            projections[selection.name.value] = true
            return projections
        }, {}
    )
}