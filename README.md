Query

Map(
Paginate(
Filter(
Documents(Collection("comments")),
Lambda(
"comment",
Equals(Select(["data", "recipeID"], Get(Var("comment"))), "366033334794453073")
)
)
),
Lambda("comment", Get(Var("comment")))
)
