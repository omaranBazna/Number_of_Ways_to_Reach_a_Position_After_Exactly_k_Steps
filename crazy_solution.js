console.log("run");
var numberOfWays = function (startPos, endPos, k) {
  ////build class for binary tree
  ///build the tree where root is 0 and each node has (-1) left (+1) right
  ///search all paths sum sum up to (end-start)
  //const root= new TreeNode(0,null,null)
  //buildTree(root,k)

  //we have the root node
  ///count how many paths sum to target=endPos-startPos
  console.log("run2");
  const target2 = endPos - startPos;
  if ((k - target2) % 2 === 1) return 0;
  let map = [];

  if (endPos < startPos) {
    [startPos, endPos] = [endPos, startPos];
  }
  const temp = [0];
  const radius = Math.max(endPos - startPos + 1, k + 1) + 1;

  for (let r = 0; r < 100; r++) {
    for (let i = 0; i < r; i++) {
      if (!map[i]) {
        map[i] = {};
      }

      for (let j = 0; j < r; j++) {
        if ((i - j) % 2 == 0 && j > i) {
          temp[0] = 0;
          countPaths(0, 0, i, temp, j, map);
          map[i][j] = temp[0];
        }
      }
    }
  }
  console.log(map);

  const target = endPos - startPos;

  const counter = [0];

  //countPaths(0,0,target,counter,k,map)

  return map[target][k];
};
/*
const buildTree=(node,level)=>{
        if(level==0){
            return
        }
        node.left=new TreeNode(-1,null,null)
        node.right=new TreeNode(1,null,null)
        buildTree(node.left,level-1)
        buildTree(node.right,level-1)
    }
*/

const countPaths = (node, acc, target, counter, k, map = undefined) => {
  //console.log(node.val)
  /*
    console.log("node",node)
    console.log("k",k)
    console.log("diff",(target-acc-node))
    */

  if (target - acc - node > k) {
    return;
  }

  if ((target - acc - node) % 2 == 0 && k % 2 == 1) {
    return;
  }
  if ((target - acc - node) % 2 == 1 && k % 2 == 0) {
    return;
  }

  if (target - acc - node < 0) {
  }
  if (
    map[Math.abs(target - acc - node)] &&
    map[Math.abs(target - acc - node)][k]
  ) {
    counter[0] += map[Math.abs(target - acc - node)][k];
    if (counter[0] > 1000000006) {
      counter[0] = counter[0] - 1000000007;
    }
    return;
  }

  if (target - acc - node == k && k > 0) {
    if (counter[0] > 1000000006) {
      counter[0] = 0;
    }
    counter[0] = counter[0] + 1;
    return;
  }

  if (k == 0) {
    //console.log(acc+node.val)
    if (acc + node * 1 == target) {
      if (counter[0] > 1000000006) {
        counter[0] = 0;
      }
      counter[0] = counter[0] + 1;
      ///console.log("yesssssssssssssssssssssssssssss")
    }
    return;
  }

  countPaths(1, acc + node, target, counter, k - 1, map);
  countPaths(-1, acc + node, target, counter, k - 1, map);
};

numberOfWays(1, 1, 2);
