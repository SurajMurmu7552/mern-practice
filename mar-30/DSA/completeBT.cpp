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

bool isCompleteBT(Node* root)
{
    // Base Case: An empty tree
    // is complete Binary Tree
    if (root == NULL)
        return true;
  
    // Create an empty queue
    queue<Node *> q;
    q.push(root);

    bool flag = false;

    while(!q.empty())
    {
        Node *temp =q.front();
        q.pop();
        if(temp == NULL){
            flag = true ;
        }else{
            if(flag == true){
                return false ;
            }
            q.push(temp->left) ;           
            q.push(temp->right) ;
        }   
    }
    return true;
}
  


int main() {
    
    Node *root = NULL;
    
    root = new Node(6);
    root->left = new Node(4);
    root->left->left = new Node(2);
    root->left->right = new Node(5);
    root->right = new Node(7);
    root->right->left = new Node(3);
    // root->right->right = new Node(8);
    
    // topdown(root);
    
    cout<<maxdepth(root);
    if(isCompleteBT(root) == true)  cout<<"is a complete binary tree";
    else    cout<<"not a complete binary tree";
    
	return 0;
}