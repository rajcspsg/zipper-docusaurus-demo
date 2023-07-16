const scala = {
    tree :
    `
    // Define a tree data structure
    case class Tree(x: Int, c: List[Tree] = List.empty)

    // Create a tree
    val tree = Tree(
      1, List(
        Tree(
          11, List(
            Tree(111),
            Tree(112)
          )
        ),
        Tree(
          12, List(
            Tree(121),
            Tree(
              122, List(
                Tree(1221),
                Tree(1222)
              )
            ),
            Tree(123)
          )
        ),
        Tree(13)
      )
    )
    `,
    modifiedTree: 
    `
    import zipper._

    // Use a Zipper to move around and change data
    val modified = {
      Zipper(tree)
        .moveDownAt(1)          // 12
        .moveDownRight          // 123
        .deleteAndMoveLeft      // 122
        .moveDownLeft           // 1221
        .update(_.copy(x = -1))
        .moveRight              // 1222
        .set(Tree(-2))
        .moveUp                 // 122
        .moveUp                 // 12
        .rewindLeft             // 11
        .moveDownRight          // 112
        .moveLeftBy(1)          // 111
        .deleteAndMoveUp        // 11
        .commit                 // commit the changes and return the result
    }
    `,
    usage:
    `
    // for JVM
    libraryDependencies += "io.github.stanch" %% "zipper" % "0.5.2"

    // for Scala.js
    libraryDependencies += "io.github.stanch" %%% "zipper" % "0.5.2"
    `,
    unzip:
    `
    trait Unzip[A] {
      def unzip(node: A): List[A]
      def zip(node: A, children: List[A]): A
    }
    `,
    unzip2:
    `
    scala> case class Tree(x: Int, c: Vector[Tree] = Vector.empty)
    defined class Tree

    scala> implicit val unzip = Unzip.For[Tree, Vector].derive
    unzip: zipper.Unzip[Tree] = zipper.GenericUnzipInstances$For$$anon$2@6389ff1a
    `,
    moves:
    `
    scala> val tree = Tree(1, Vector(Tree(3), Tree(4)))
tree: Tree = Tree(1,Vector(Tree(3,Vector()), Tree(4,Vector())))

scala> val modified = {
     |   Zipper(tree)
     |     .moveDownLeft
     |     .tryMoveLeft.getOrElse(_.insertLeft(Tree(2)).moveLeft)
     |     .commit
     | }
modified: Tree = Tree(1,Vector(Tree(2,Vector()), Tree(3,Vector()), Tree(4,Vector())))
    `,

    loops: 
    `
    scala> val tree = Tree(1, Vector(Tree(2), Tree(3), Tree(5)))
    tree: Tree = Tree(1,Vector(Tree(2,Vector()), Tree(3,Vector()), Tree(5,Vector())))
    
    scala> val modified = {
         |   Zipper(tree)
         |     .moveDownLeft
         |     .repeatWhile(_.x < 5, _.tryMoveRight)
         |     .insertRight(Tree(4))
         |     .commit
         | }
    modified: Tree = Tree(1,Vector(Tree(2,Vector()), Tree(3,Vector()), Tree(5,Vector()), Tree(4,Vector())))
    `
    
}
export default scala;