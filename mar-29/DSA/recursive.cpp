#include <bits/stdc++.h>
using namespace std;

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
    
    Node(int val){
        data = val;
        left = right = NULL;
    }
};


void Inorder(Node* root){
    if(root != NULL){
        Inorder(root->left);
        cout<<root->data<<endl;
        Inorder(root->right);
    }else   return;
}

void Preorder(Node* root){
    if(root != NULL){
        cout<<root->data<<endl;
        Inorder(root->left);
        Inorder(root->right);
    }else   return;
}

void Postorder(Node* root){
    if(root != NULL){
        Inorder(root->left);
        Inorder(root->right);
        cout<<root->data<<endl;
    }else   return;
}



int main(){
    
    struct Node* root = new Node(10);
    
    root->left = new Node(20);
    root->right = new Node(30);
    
    cout<<"Inorder"<<endl;
    Inorder(root);
    
    cout<<"Preorder"<<endl;
    
    Preorder(root);
    
    cout<<"Postorder"<<endl;
    Postorder(root);
    
    return 0;
}