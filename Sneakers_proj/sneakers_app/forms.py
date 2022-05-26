from django import forms


class NewSignUpForm(forms.Form):
    username = forms.CharField(label='username')
    first_name = forms.CharField(label='first_name')
    last_name = forms.CharField(label='last_name')
    email = forms.EmailField(label='Email')
    password = forms.CharField(
        widget=forms.PasswordInput, label='Password', max_length=10)


class NewLoginForm(forms.Form):
    username = forms.CharField(label='username', max_length=20)
    password = forms.CharField(
        widget=forms.PasswordInput, label='password', max_length=10)
