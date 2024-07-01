#include <iostream>
using namespace std;
class Node{
    public:
    int data;
    Node * next;
};
void insertAtbeg(Node ** head_ref, int new_data){
    Node * new_node = new Node();
    new_node->data = new_data;
    new_node->next = (*head_ref);
    (*head_ref) = new_node;
}
void insertAtEnd(Node ** head_ref, int new_data){
        Node * new_node = new Node();
        new_node->data = new_data;
        Node* ptr = (*head_ref);
        new_node->next = NULL;
        if(*head_ref == NULL){
            *head_ref = new_node;
            return;
        }
        
    while(ptr->next!=NULL){
        ptr = ptr -> next;
    }
    ptr->next = new_node;
        
}

void printList(Node* node){
    while(node!=NULL){
        cout<<node->data<<" ";
        node = node->next;
    }
    cout<<"\n";

}

int main() {
    Node * head = NULL;
    insertAtbeg(&head,1);
    insertAtbeg(&head,2);
    insertAtEnd(&head,3);
    printList(head);
    return 0;
}