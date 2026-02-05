type Categories = {
  categories?: string[]
}

export function Tag({ categories }: Categories) {
  if (categories == undefined) {
    return
  }
  return (
    <>
        {categories.length > 0 && (
        <div>
            {categories.map(category => (
            <span key={category} className="tag">{category}</span>
            ))}
        </div>
        )}
    </>
  )
}