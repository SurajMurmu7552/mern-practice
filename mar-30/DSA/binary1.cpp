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
void Insert(Node **root , int value){
    if(*root == NULL){
        *root = new Node(value);
    }
    else if(value < (*root)->data){
        Insert(&((*root)->left) , value);
    }else{
        Insert(&((*root)->right) ,value);
    }
}

void preorder(Node *root){
    if(root == NULL)    return;
    else{
        cout<<root->data<<" ";
        preorder(root->left);
        preorder(root->right);
    }
}

void topdown(Node *root){
    if(root == NULL)   cout<<"empty tree";

    Node *item = root;

    queue<Node*> q;

    q.push(item);

    while(!q.empty()){
        item = q.front();
        q.pop();
        cout<<item->data<<" ";

        if(item->left)  q.push(item->left);
        if(item->right)  q.push(item->right);
    }

}

void bottomup(Node *root){
    if(root == NULL)    cout<<"empty tree";

    stack<int> s;
    queue<Node*> q;

    Node *item = root;


    q.push(item);

    while(!q.empty()){
        item = q.front();
        q.pop();
        s.push(item->data);

        if(item->right)  q.push(item->right);
        if(item->left)  q.push(item->left);
    }
    
    while(!s.empty()){
        cout<<s.top()<<" ";
        s.pop();
    }

}

int main(){

    Node *root = NULL;

    int arr[7] = {6,4,8,2,5,7,9};
    // int s = sizeof(arr)/sizeof(int);
    // for(int i =0 ; i<s; i++){
    //     Insert(&root ,arr[i] );
    // }

    root = new Node(6);
    root->left = new Node(4);
    root->left->left = new Node(2);
    root->left->right = new Node(5);
    root->right = new Node(7);
    root->right->left = new Node(3);
    root->right->right = new Node(8);

    // preorder(root);
    topdown(root);

    cout<<"\n";

    bottomup(root);
    return 0;
}