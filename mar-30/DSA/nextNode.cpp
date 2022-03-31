#include <bits/stdc++.h>

using namespace std;

struct Node{
    int data;
    Node *left;
    Node *right;

    Node(int value){
        data=value;
        left=right=NULL;
    }
};

void topdown(Node *root){
    if(root == NULL)    cout<<"empty tree";
    
    queue<Node*> q;
    stack<int> s;
    
    Node *curr = root;
    
    q.push(curr);
    
    while(!q.empty()){
        curr = q.front();
        cout<<curr->data;
        s.push(curr->data);
        q.pop();
        //top down approach
        // if(curr->left)  q.push(curr->left);
        // if(curr->right)  q.push(curr->right);
        
        //bottom up approach
        if(curr->right)  q.push(curr->right);
        if(curr->left)  q.push(curr->left);
    }
    
    cout<<"\n";
    
    while(!s.empty()){
        cout<<s.top();
        s.pop();
    }
}

int maxdepth(Node *root){
    if(root == NULL)    
        return -1;
    else{
        int ldepth = maxdepth(root->left);
        int rdepth = maxdepth(root->right);
        
        if(ldepth > rdepth) return ldepth+1;
        else    return rdepth+1;
    }
}

void nextNode(Node *node){
    
    Node *root = nullptr;

    queue<Node *> q;

    q.push(node);

    while(!q.empty()){
    
        root = q.front();
        
        cout<<root->data<<" ";

        q.pop();

        if(root->left)  q.push(root->left);
        if(root->right) q.push(root->right);
        
    }
}

Node* findRightNode(Node* root, Node* node)
{
    if (root == nullptr) {
        return nullptr;
    }
 
    list<Node*> queue;
    queue.push_back(root);
 
    Node* front = nullptr;
 
    while (!queue.empty())
    {
        int size = queue.size();
 
        while (size--)
        {
            front = queue.front();
            queue.pop_front();
 
            // if the desired node is found, return its next right node
            if (front == node)
            {
                // if the next right node doesn't exist, return null
                if (size == 0) {
                    return nullptr;
                }
 
                return queue.front();
            }
 
            if (front->left) {
                queue.push_back(front->left);
            }
 
            if (front->right) {
                queue.push_back(front->right);
            }
        }
    }
 
    return nullptr;
}
  


int main() {
    
    Node* root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->left->left = new Node(7);
    root->right->left->right = new Node(8);
    // root->right->right = new Node(8);
    
    // topdown(root);
    
    // cout<<maxdepth(root);
    // nextNode(root);
    
    Node* right = findRightNode(root, root->left->right);
 
    if (right) {
        cout << "Right node is " << right->data;
    }
    else {
        cout << "Right node doesn't exist";
    }
    
	return 0;
}