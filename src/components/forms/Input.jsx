export function Input({ placeholder, value, onChange, empty}) {

	if (empty) {
		return <input type="text" className="form-control" value="{value}" placeholder={placeholder} onChange={(e) => onChange("")} />;
	}
	else{
		return <input type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />;
	}

	
}
