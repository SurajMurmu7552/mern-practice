#include <iostream>
#include <stack>
#include <string>
using namespace std;
 
// Data structure to store a binary tree node
struct Node
{
    int data;
    Node *left, *right;
 
    Node(int data)
    {
        this->data = data;
        this->left = this->right = nullptr;
    }
};
 
void printRootToleafPathIterative(Node* root)
{
    // base case
    if (root == nullptr) {
        return;
    }
 
    // create an empty stack to store a pair of tree nodes and
    // its path from the root node
    stack<pair<Node*, string>> stack;
 
    // push the root node
    stack.push(make_pair(root, ""));
 
    // loop till stack is empty
    while (!stack.empty())
    {
        // pop a node from the stack and push the data into the output stack
        pair<Node*, string> p = stack.top();
        stack.pop();
 
        // fetch current node
        Node* curr = p.first;
        string path = p.second;
 
        // add the current node to the existing path
        string delim = (path == "") ? "\n" : " —> ";
        path += (delim + to_string(curr->data));
 
        // print the path if the node is a leaf
        if (curr->left == nullptr && curr->right == nullptr) {
            cout << path;
        }
 
        // push the left and right child of the popped node into the stack
        if (curr->right) {
            stack.push(make_pair(curr->right, path));
        }
 
        if (curr->left) {
            stack.push(make_pair(curr->left, path));
        }
    }
}
 
int main()
{
    /* Construct the following tree
          1
        /   \
       /     \
      2       3
     / \     / \
    4   5   6   7
           /     \
          8       9
    */
 
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);
    root->right->left->left = new Node(8);
    root->right->right->right = new Node(9);
 
    printRootToleafPathIterative(root);
 
    return 0;
}