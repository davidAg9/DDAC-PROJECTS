#include <iostream>
#include <string>
#include <vector>
#include <fstream>

using namespace std;



class ClassNames {
private: 
		string GroupName=" ";
		int studentId=0;
		string studentName=" ";


public:
	void createClassGroup(int lupnum, string GrpNme) {
		GroupName = GrpNme;
		
		cout << GroupName << endl;

		vector<string> classStudentNames;
		vector<int> classStudentIDs;
		
		
			ifstream get("class_list.txt");
		
			while ( get >> studentId >> studentName) {
				//while loop get everything from file
					classStudentIDs.push_back(studentId);
					classStudentNames.push_back(studentName);
			}
			int totalgroup = classStudentIDs.size();
			for (int i = 0; i <totalgroup; i++) {

				for (int j = 0; j < lupnum && i < totalgroup; j++) {
					cout << classStudentIDs[i] << " : " << classStudentNames[i] << endl;
					i++;
				}

				system("color 0a");
				cout << "<success> " << GroupName << " <created!>" << endl;
				cout << "Enter new group name : ";
				GroupName = " ";
				cin.ignore(1000, '\n');
				getline(cin, GroupName);
				GroupName += GroupName;
				//system("cls");
				cout << GroupName << endl;
				system("color 07");
				
			}
			
			
	}



};

int main() {
	ClassNames init;
	
	 int GroupNum;  string Gname;
	 cout << "State your group name:"<<endl;
	 getline(cin,Gname);
	 cout << "Enter the number of group Members in a group:" << endl;
	 cin >> GroupNum;


	init.createClassGroup(GroupNum,Gname);
	return 0;
}