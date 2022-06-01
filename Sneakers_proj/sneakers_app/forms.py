from django import forms


class NewSignUpForm(forms.Form):
    username = forms.CharField(
        label='Username', widget=forms.TextInput(attrs={'class': 'form-control'}))
    first_name = forms.CharField(
        label='First Name', widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name = forms.CharField(
        label='Last Name', widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(
        attrs={'class': 'form-control'}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control'}), label='Password', max_length=10)


class NewLoginForm(forms.Form):
    username = forms.CharField(label='username', max_length=20, widget=forms.TextInput(
        attrs={'class': 'form-control'}))
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control'}), label='password', max_length=10)
